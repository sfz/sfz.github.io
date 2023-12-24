---
title: Legato
---

## Basic monophony

In the basic sustained instruments
tutorial, we have the below example of a monophonic flute, which uses the
[group] and [off_by] opcodes to allow only one be played at a time,
and the [off_mode] together with [ampeg_release] make the fadeout of the previous
note a little smoother. This is a starting point for implementing legato.

If only group and off_by are specified, the resulting sound will probably be quite bad, as
this will use default values for off_mode, ampeg_attack and ampeg_release. This means the note being
muted will drop off extremely quickly, which will probably leave an audible drop in levels during the
transition, unless the next note has an extremely fast attack. Therefore, at least ampeg_release
will need to be specified in most cases - though most instruments will need to specify that even
if not using legato.

```sfz
<global>ampeg_release=0.3 amp_veltrack=0 sw_lokey=48 sw_hikey=49

group=1 off_by=1 off_mode=normal
<group>lokey=50 hikey=51 pitch_keycenter=50 sw_last=48
<region>sample=d4_p.wav xfin_locc1=0 xfin_hicc1=42 xfout_locc1=43 xfout_hicc1=85
<region>sample=d4_mf.wav xfin_locc1=43 xfin_hicc1=85 xfout_locc1=86 xfout_hicc1=127
<region>sample=d4_f.wav xfin_locc1=86 xfin_hicc1=127
<group>lokey=52 hikey=53 pitch_keycenter=52 sw_last=48
<region>sample=e4_p.wav xfin_locc1=0 xfin_hicc1=42 xfout_locc1=43 xfout_hicc1=85
<region>sample=e4_mf.wav xfin_locc1=43 xfin_hicc1=85 xfout_locc1=86 xfout_hicc1=127
<region>sample=e4_f.wav xfin_locc1=86 xfin_hicc1=127
<group>lokey=50 hikey=51 pitch_keycenter=50 sw_last=49
<region>sample=d4_ft_p.wav xfin_locc1=0 xfin_hicc1=63 xfout_locc1=64 xfout_hicc1=127
<region>sample=d4_ft_f.wav xfin_locc1=64 xfin_hicc1=127
<group>lokey=52 hikey=53 pitch_keycenter=52 sw_last=49
<region>sample=e4_ft_p.wav xfin_locc1=0 xfin_hicc1=63 xfout_locc1=64 xfout_hicc1=127
<region>sample=e4_ft_f.wav xfin_locc1=64 xfin_hicc1=127
```

## Legato regions

The above will allow only one note to sound at a time, with a quick crossfade between
the old and new note. In many cases, though, it makes sense to treat the legato notes
differently than the notes which start a phrase when no other note is playing. The
[trigger] opcode is used to separate regions into initial and legato. For
sustained sounds, it can make sense to use the [offset] opcode to skip the start
of the sample for legato regions. It's also probably a good idea to use offset_attack
in these cases, which both makes the transition sound smoother and avoids clicks and
pops in cases where the offset does not fall on a zero crossing. Here are the relevant
opcodes from the Hadziha choir.

An offset of 6000 samples is enough to skip the fraction of a second when the singers
are starting the note, but not enough to skip the part of the sample when they're still
settling on a common pitch, so it works well for this particular choir. The crossfade
times with an off time of 1 second and legato note attack time of 0.4 seconds are
probably much longer than would be needed for most solo instruments or voices, or
ensembles intended for fast legato, but could be a good range for other types of
ensembles playing slowly.

Note that the samples are not all in the same group - the initial note regions are in
polyphony group 1, which is muted by group 2. The legato regions are in polyphony
group 2, which mutes itself. Having everything in group 1 should also work, though.
This was done this was to allow the use of additional syllable start samples, which
would then be group 3 and also be muted by group 2. As with hi-hat muting, if there
are multiple mic positions in separate files, each mic position will need its own
polyphony groups.

```sfz
<global>off_mode=time
off_time=1
amp_veltrack=0

<master>trigger=first
group=1
off_by=2
//Sample map goes here
#include "mappings/6_a_map.sfz"

<master>trigger=legato
offset=6000
ampeg_attack=0.4
group=2
off_by=2
//Sample map goes here
#include "mappings/6_a_map.sfz"
```

As this does not use velocity to control note volume, that frees up velocity for
something else, so in this specific case velocity is repurposed to shorten the
attack time on the legato notes, which makes the patch more intuitively playable.

```sfz
<global>off_mode=time
off_time=1
amp_veltrack=0

<master>trigger=first
group=1
off_by=3
//Sample map goes here
#include "mappings/6_a_map.sfz"

<master>trigger=legato
offset=6000
ampeg_attack=1
ampeg_vel2attack=-0.8
group=3
off_by=3
//Sample map goes here
#include "mappings/6_a_map.sfz"
```

## Portamento

Another possibility is portamento, or having a pitch glide implemented on the
legato regions. Here are the relevant opcodes from Karoryfer Samples
Meatbass, which has both legato and portamento. The portamento is
very obviously fake for slow glides across long intervals, but as long as the
interval is no more than a third or fourth, it can be convincing. Of course, the
narrower the interval and the shorter the time, the easier it is to sound
convincing. With the portamento time at zero, this is effectively the same as
non-portamento legato in the above example.

In the below setup, MIDI CC109 controls the glide time and an SFZ2 [envelope]
is used to make the pitch change happen. CC140 is the ARIA extension CC for pitch
delta, and being the difference in pitch between the previous note and the
current note, it sets the depth of the glide envelope.

```sfz
<global>eg06_sustain=1 //Pitch envelope setup for legato slides
eg06_level0=-1 //Envelope starts away from the note pitch
eg06_time0=0
eg06_pitch_oncc140=100 //This is the pitch depth
eg06_time1=0
eg06_level1=0 //At the end of the envelope, return to base pitch
//eg06_time1_oncc109 needs to be set for the legato regions - but we don't want
//it on for all regions so the default is 0
//At zero envelope duration the pitch goes to base pitch immediately so there
//is no glide

//Typical stuff for monophonic instruments
off_mode=normal
ampeg_release_oncc104=2
```

All the sample regions are then basically duplicated in non-legato and legato
versions. Here's an example non-legato region with trigger
set to first and no eg06_time_oncc109 set. The group and off_by work just like
in the above examples.

```sfz
<group>
trigger=first
off_mode=normal
group=1
off_by=1

<region>
sample=..\Samples\arco_looped\c4_sustain.wav
pitch_keycenter=48
```

And the corresponding legato region with trigger set to legato, the eg06 glide
envelope time control, and also an attack time, to let the note fade in
more gradually, with this controlled by CC100 rather than velocity, as the
example above. This is another option.

```sfz
<group>
trigger=legato
off_mode=normal
group=1
off_by=1
eg06_time1_oncc109=0.3
ampeg_attack_oncc100=0.5

<region>
sample=..\Samples\arco_looped\c4_sustain.wav
pitch_keycenter=48
```

## True sampled legato

Here are examples from a simple flute test by MatFluor. The trigger=first regions
work similarly as all the above examples, and the [sw_previous] opcode can be used
to choose which sample plays for the legato regions. If the samples would include
both the legato transition and the complete sustain of the following note, things
would be very simple:

```sfz
<group>
// Legato transitions and the complete sustain of the next note both in the same sample
trigger=legato
group=2
off_by=1
ampeg_attack=0.05 ampeg_release=0.2
off_mode=normal

// Leg transitions up
<region> sample=legatovib_g4_a4.wav key=A4 sw_previous=G4
<region> sample=legatovib_g4_c5.wav key=C5 sw_previous=G4
<region> sample=legatovib_a4_c5.wav key=C5 sw_previous=A4
// Leg transitions down
<region> sample=legatovib_c5_a4.wav key=A4 sw_previous=C5
<region> sample=legatovib_c5_g4.wav key=G4 sw_previous=C5
```

Recording the full sustain after every transition adds greatly to the recording
time, diskspace and RAM use, however. It may be necessary in some cases, such as
solo vocals, but in other cases it's possible to use transition samples which
are short, then fade in the regular sustain sample.

```sfz
<group>
// Legato transitions in one sample, crossfaded into standard sustain in another sample
trigger=legato
group=2
off_by=1
ampeg_attack=0.05 ampeg_release=0.2
off_mode=normal

// Leg transitions up
<region> sample=legatovib_g4_a4.wav key=A4 sw_previous=G4 ampeg_hold=0.25 ampeg_decay=0.2 ampeg_sustain=0 offset=45000 ampeg_decay_shape=-1.4
<region> sample=legatovib_g4_c5.wav key=C5 sw_previous=G4 ampeg_hold=0.25 ampeg_decay=0.2 ampeg_sustain=0 offset=45000 ampeg_decay_shape=-1.4
<region> sample=legatovib_a4_c5.wav key=C5 sw_previous=A4 ampeg_hold=0.25 ampeg_decay=0.2 ampeg_sustain=0 offset=45000 ampeg_decay_shape=-1.4
// Leg transitions down
<region> sample=legatovib_c5_a4.wav key=A4 sw_previous=C5 ampeg_hold=0.25 ampeg_decay=0.2 ampeg_sustain=0 offset=45000 ampeg_decay_shape=-1.4
<region> sample=legatovib_c5_g4.wav key=G4 sw_previous=C5 ampeg_hold=0.25 ampeg_decay=0.2 ampeg_sustain=0 offset=45000 ampeg_decay_shape=-1.4
<region> sample=legatovib_a4_g4.wav key=G4 sw_previous=A4 ampeg_hold=0.25 ampeg_decay=0.2 ampeg_sustain=0 offset=43000 ampeg_decay_shape=-1.4
// Leg sustains
<region> sample=sustainvib_c5.wav key=C5 ampeg_attack=0.3 offset=5000 ampeg_attack_shape=3.8
<region> sample=sustainvib_a4.wav key=A4 ampeg_attack=0.3 offset=5000 ampeg_attack_shape=3.8
<region> sample=sustainvib_g4.wav key=G4 ampeg_attack=0.3 offset=5000 ampeg_attack_shape=3.8
```

Another consideration is that for instruments with a wide range, it may not be worthwhile
to record every possible transition, and only record transitions of up to one octave, for
example. The [extended CCs] do not always behave quite like other CCs,
necessitating using hdcc in ARIA, but the below works for a legato vocal with a range of
less than two octaves.

```sfz
<global>
off_mode=time
off_time=0.4
ampeg_release=0.3

<group>
trigger=first
group=1
off_by=1
#include "modules/vowel_sustain_a.sfz"

<group>
trigger=legato
group=1
off_by=1
ampeg_attack=0.1
ampeg_hold=0.3
ampeg_decay=0.6
ampeg_sustain=0
hihdcc141=12.1
#include "modules/vowel_transition_a.sfz"

<group>
trigger=legato
group=2
off_by=1
delay=0.3
ampeg_attack=0.2
offset=40000
hihdcc141=12.1
#include "modules/vowel_sustain_a.sfz"

<group>
trigger=legato
group=1
off_by=1
ampeg_attack=0.1
lohdcc141=12.9
hihdcc141=24
offset=12000
#include "modules/vowel_sustain_a.sfz"
```

It would also be possible to use CC 140 in a similar way in an instrument which,
for example, had legato transitions recorded ascending but not descending.


[extended CCs]:  ../extensions/midi_ccs.md
[envelope]:      ../modulations/envelope_generators.md
[ampeg_release]: ../opcodes/ampeg_release.md
[group]:         ../opcodes/group.md
[off_by]:        ../opcodes/off_by.md
[off_mode]:      ../opcodes/off_mode.md
[offset]:        ../opcodes/offset.md
[sw_previous]:   ../opcodes/sw_previous.md
[trigger]:       ../opcodes/trigger.md
