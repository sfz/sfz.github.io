---
title: Legato
lang: en
---

## Basic monophony

In the basic sustained instruments
tutorial, we have the below example of a monophonic flute, which uses the
[group]() and [off_by]() opcodes to allow only one be played at a time, and the [off_mode]()
together with ampeg_release make the fadeout of the previous note a little
smoother. This is a starting point for implementing legato.

```
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
[trigger]() opcode is used to separate regions into initial and legato. For
sustained sounds, it can make sense to use the [offset]() opcode to skip the start
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
would then be group 3 and also be muted by group 2.

```
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

```
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

In the below setup, MIDI CC109 controls the glide time.
CC140 is the ARIA extension CC for pitch
delta, and being the difference in pitch between the previous note and the
current note, it sets the depth of the glide envelope.

```
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

```
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

```
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

True sampled legato will be added at a later date. It appears the [sw_down]() opcode
is the key to having the correct transition sample play depending on the previous
note.
