---
title: Cymbal muting
---
A lot of the information in this article deals with implementing sampled hi-hats
and cymbals in general, and although the code examples are in SFZ, the principles
should also apply to other samplers, or even synthesized cymbals.
Muting previously played notes is important with monophonic instruments, such as
flutes or trumpets. With hi-hats, it is also crucial to sounding like a hi-hat -
an open hi-hat hit will be muted in real life when the hi-hat pedal is closed.
Let's start with a simple hi-hat with closed hit, foot chik, half-open and open
samples, with the latter two on the same key and degree of openness selected by
MIDI CC 4 - the common hi-hat pedal assignment in electronic drum kits.

```
<region>key=42 sample=hh_closed.wav
<region>key=44 sample=hh_chik.wav
<region>key=46 sample=hh_half_open.wav hicc4=63
<region>key=46 sample=hh_open.wav locc4=64
```

## Simple self-muting

The above hi-hat has no muting implemented, so playing
a closed hit after an open one would result in the open hit unrealistically
continuing to ring. The simplest way to take care of that is to put all the
regions in the same <[group](/headers/group)> and use [off_by](/opcodes/off_by)
to make that group mute itself - that
will mean any hi-hat hit will mute any currently playing hi-hat hit.
Setting [off_mode](/opcodes/off_mode) to normal and using [ampeg_release](/opcodes/(eg_type)_release)
or [off_time](/opcodes/aria/off_time) to set the time it takes for
the previous sample to fade out also helps this sound a bit more natural.

```
<group>
off_mode=normal
ampeg_release=0.07
<region>key=42 sample=hh_closed.wav group=1 off_by=1
<region>key=44 sample=hh_chik.wav group=1 off_by=1
<region>key=46 sample=hh_half_open.wav hicc4=63 group=1 off_by=1
<region>key=46 sample=hh_open.wav locc4=64 group=1 off_by=1
```

## Hierarchical self-muting

This is an improvement, and is the way many virtual drum kits work, but it is not
fully satisfactory if, for example, playing a ride pattern on an open hi-hat.
Things do start getting more complicated here, though, and many developers feel
that it's enough to stop here. Peter L. Jones has developed a hierarchy of muting,
where chiks mute all hits, closed hits mute any partially open hits but not chiks
or closed hits etc. With this amount of degrees of openness, half-open hits would
mute open hits, and open hits would mute nothing. So, we need to put each hi-hat
articulation in a different group. This, however, means we need a group which
mutes several other groups, and regions in a group cannot have multiple or
varying off_by values. So, what we have to do is use silence - either the silence*
setting of [sample](/opcodes/sample) ARIA extension, or an actual file of
a short silence. Note that the silence samples also have to have off_by settings
the same as the hi-hat samples in their mute group. Also, since group 1 doesn't
mute anything, we don't need to add any silence regions to that group.
Note that the [group](/opcodes/group) opcode used here and the <[group](/headers/group)>
header are completely separate concepts - "group" for the remainder of this
article refers to the opcode, not the header, though group headers are also used
in the code examples.

```
<group>
// Here are the hi-hat samples
off_mode=normal
ampeg_release=0.07

<region>key=42 sample=hh_closed.wav group=3 off_by=4
<region>key=44 sample=hh_chik.wav group=4
<region>key=46 sample=hh_half_open.wav hicc4=63 group=2 off_by=3
<region>key=46 sample=hh_open.wav locc4=64 group=1 off_by=2

<group>group=2 off_by=3
// The range which mutes open hi-hats - that is, everything except open
sample=*silence
loop_mode=loop_continuous off_mode=fast
ampeg_attack=0 ampeg_decay=0 ampeg_sustain=0 ampeg_release=0
<region> key=42
<region> key=44
<region> key=46 hicc4=63

<group>group=3 off_by=4
// The range which mutes half-open and open hi-hats - that is, closed and chik
loop_mode=loop_continuous off_mode=fast
ampeg_attack=0 ampeg_decay=0 ampeg_sustain=0 ampeg_release=0
<region> key=42
<region> key=44

<group>group=4
// The range which mutes closed, half-open and open hi-hats - that is, just chik
loop_mode=loop_continuous off_mode=fast
ampeg_attack=0 ampeg_decay=0 ampeg_sustain=0 ampeg_release=0
<region> key=44
```

## Special treatment of foot splashes

The above isn't perfect - for example, fully opening up a hi-hat after playing
a hard half-open hit in the real world would stop the clashes between the top
and bottom, effectively stopping a half-open sound - but it is a reasonable
compromise covering various degrees of openness. Also, the more degrees of
openness there are, the more groups will be needed.
There are, however, more hi-hat articulations possible. One which has special
behavior when it comes to muting is the foot splash - closing the hi-hat with
the pedal, then quickly reopening it. This articulation needs to mute itself,
because playing one foot splash after another involves closing the hi-hat, which
will mute the ringing. It should also mute just about everything else, except
for possibly foot chiks, because it invovles closing the hi-hat fully. So, if a
kit has foot splash samples (for which there is no standard general MIDI note
assignment, so let's use 54 here - an octave above the chik, though in general
MIDI that's supposed to be the cowbell note), we'd need to set up one more group,
and have that mute itself. It will also need to be muted by all other types of
hi-hat hits, except for fully open hits.

```
<group>
//Here are the hi-hat samples
off_mode=normal
ampeg_release=0.07

<region>key=42 sample=hh_closed.wav group=4 off_by=5
<region>key=44 sample=hh_chik.wav group=5
<region>key=46 sample=hh_half_open.wav hicc4=63 group=3 off_by=4
<region>key=46 sample=hh_open.wav locc4=64 group=2 off_by=3
<region>key=54 sample=hh_splash.wav group=1 off_by=1

<group>group=1 off_by=1
//The range which mutes foot splashes - everything except open and foot splash
//Foot splash mutes itself, but this group does not include the foot splash key
//That's because the foot splash samples themselves are in the same group
sample=*silence
loop_mode=loop_continuous off_mode=fast
ampeg_attack=0 ampeg_decay=0 ampeg_sustain=0 ampeg_release=0
<region> key=42
<region> key=44
<region> key=46

<group>group=3 off_by=4
//The range which mutes open hi-hats - that is, everything except open
sample=*silence
loop_mode=loop_continuous off_mode=fast
ampeg_attack=0 ampeg_decay=0 ampeg_sustain=0 ampeg_release=0
<region> key=42
<region> key=44
<region> key=46 hicc4=63
<region> key=54

<group>group=4 off_by=5
//The range which mutes half-open and open hi-hats - that is, closed, chik and foot splash
sample=*silence
loop_mode=loop_continuous off_mode=fast
ampeg_attack=0 ampeg_decay=0 ampeg_sustain=0 ampeg_release=0
ampeg_attack=0 ampeg_decay=0 ampeg_sustain=0 ampeg_release=0
<region> key=42
<region> key=44
<region> key=54

<group>group=5
//The range which mutes closed, half-open and open hi-hats - that is, just chik and foot splash
sample=*silence
loop_mode=loop_continuous off_mode=fast
ampeg_attack=0 ampeg_decay=0 ampeg_sustain=0 ampeg_release=0
ampeg_attack=0 ampeg_decay=0 ampeg_sustain=0 ampeg_release=0
<region> key=44
<region> key=54
```

## Limiting polyphony

This works reasonably well. Another potential refinement is to also avoid
excessive buildup when the more open articulations (which with some hi-hat pairs
can ring for upwards of 20 seconds), while still allowing enough for ride
patterns on an open hi-hat to sound right. We can do this by using the [polyphony](/opcodes/polyphony)
opcode to put a limit on the number of polyphony voices used by a specific group.
Note this must be set for the silence regions, also, so that every region in a
group will have the same off_by and polyphony as all the other regions in that
group. Polyphony of 4 for the open hi-hats and 3 for the half-open are judgment
calls. Drier cymbals and articulations with less sustain will generally sound
realistic with lower numbers here, and brushes might need a lower number than
sticks. Limiting the polyphony for the more closed articulations is not necessary
in practice, unless playing unrealistically dense trap hi-hat patterns, because
they don't ring very long anyway. Limiting the polyphony for the foot splash is
not necessary at all, because it mutes itself.

```
<group>
//Here are the hi-hat samples
off_mode=normal
ampeg_release=0.07

<region>key=42 sample=hh_closed.wav group=4 off_by=5
<region>key=44 sample=hh_chik.wav group=5
<region>key=46 sample=hh_half_open.wav hicc4=63 group=3 off_by=4 polyphony=3
<region>key=46 sample=hh_open.wav locc4=64 group=2 off_by=3 polyphony=4
<region>key=54 sample=hh_splash.wav group=1 off_by=1

<group>group=1 off_by=1
//The range which mutes foot splashes
//All sounds except open mute foot splashes, but this group does not include the foot splash key
//That's because the foot splash samples are in the same group, and will mute anything else
sample=*silence
loop_mode=loop_continuous off_mode=fast
ampeg_attack=0 ampeg_decay=0 ampeg_sustain=0 ampeg_release=0
<region> key=42
<region> key=44
<region> key=46 hicc4=63

<group>group=3 off_by=4 polyphony=3
//The range which mutes open hi-hats - that is, everything except open and foot splash
sample=*silence
loop_mode=loop_continuous off_mode=fast
ampeg_attack=0 ampeg_decay=0 ampeg_sustain=0 ampeg_release=0
<region> key=42
<region> key=44
<region> key=46 hicc4=63
<region> key=54

<group>group=4 off_by=5
//The range which mutes half-open and open hi-hats - that is, closed, chik and foot splash
sample=*silence
loop_mode=loop_continuous off_mode=fast
ampeg_attack=0 ampeg_decay=0 ampeg_sustain=0 ampeg_release=0
ampeg_attack=0 ampeg_decay=0 ampeg_sustain=0 ampeg_release=0
<region> key=42
<region> key=44
<region> key=54

<group>group=5
//The range which mutes closed, half-open and open hi-hats - that is, just chik and foot splash
sample=*silence
loop_mode=loop_continuous off_mode=fast
ampeg_attack=0 ampeg_decay=0 ampeg_sustain=0 ampeg_release=0
ampeg_attack=0 ampeg_decay=0 ampeg_sustain=0 ampeg_release=0
<region> key=44
```

## Multimic samples

So far, each hi-hat articulation has only one sample, which will obviously not
be the case in most virtual drum kits. This does not add much complexity, though,
as the samples for each degree of openness simply need to all be in the same group.
If there are separate articulations for each degree of openness, such as shank,
tip and bell, those can also all be on the same group. Brushes, sticks and
mallets can often also share the same groups, unless the brushes need lower
polyphony numbers. However, if there are separate samples for different
microphones and the groups are self-muting, they will need to be in different
groups. In the current example, only the footsplash is self-muting, but if using
the simpler rules where all hi-hat articulations mute all others, all groups are
self-muting. So, having separate close hi-hat mic and a stereo overhead pair
would mean twice as many of those groups (assuming the stereo overheads are in
the L and R channel of the same sample), and close hi-hat, stereo overheads,
close room and far room would mean four times as many. The polyphony numbers for
groups which have polyphony will also have to be multiplied by the same factor.
Here is an example with close and overhead, with slightly longer fadeout times
for the more distant overhead mics:

```
<group>
//Here are the hi-hat samples
off_mode=normal

<region>key=42 sample=hh_closed_close.wav group=4 off_by=5 ampeg_release=0.12
<region>key=42 sample=hh_closed_oh.wav group=4 off_by=5 ampeg_release=0.2
<region>key=44 sample=hh_chik_close.wav group=5 ampeg_release=0.12
<region>key=44 sample=hh_chik_oh.wav group=5 ampeg_release=0.2
<region>key=46 sample=hh_half_open_close.wav hicc4=63 group=3 off_by=4 polyphony=6 ampeg_release=0.12
<region>key=46 sample=hh_half_open_oh.wav hicc4=63 group=3 off_by=4 polyphony=6 ampeg_release=0.2
<region>key=46 sample=hh_open_close.wav locc4=64 group=2 off_by=3 polyphony=8 ampeg_release=0.12
<region>key=46 sample=hh_open_oh.wav locc4=64 group=2 off_by=3 polyphony=8 ampeg_release=0.2
<region>key=54 sample=hh_splash_close.wav group=1 off_by=1 ampeg_release=0.12
<region>key=54 sample=hh_splash_oh.wav group=11 off_by=11 ampeg_release=0.2

<group>group=1 off_by=1
//The range which mutes foot splashes for the close mic
//All sounds except open mute foot splashes, but this group does not include the foot splash key
//That's because the foot splash samples are in the same group, and will mute anything else
sample=*silence
loop_mode=loop_continuous off_mode=fast
ampeg_attack=0 ampeg_decay=0 ampeg_sustain=0 ampeg_release=0
<region> key=42
<region> key=44
<region> key=46 hicc4=63

<group>group=11 off_by=11
//The range which mutes foot splashes for the overhead mics
//All sounds mute foot splashes, but this group does not include the foot splash key
//That's because the foot splash samples are in the same group, and will mute anything else
sample=*silence
loop_mode=loop_continuous off_mode=fast
ampeg_attack=0 ampeg_decay=0 ampeg_sustain=0 ampeg_release=0
<region> key=42
<region> key=44
<region> key=46 hicc4=63

<group>group=3 off_by=4 polyphony=3
//The range which mutes open hi-hats for both close and overhead mics - that is, everything except open
sample=*silence
loop_mode=loop_continuous off_mode=fast
ampeg_attack=0 ampeg_decay=0 ampeg_sustain=0 ampeg_release=0
<region> key=42
<region> key=44
<region> key=46 hicc4=63
<region> key=54

<group>group=4 off_by=5
//The range which mutes half-open and open hi-hats - that is, closed, chik and foot splash
sample=*silence
loop_mode=loop_continuous off_mode=fast
ampeg_attack=0 ampeg_decay=0 ampeg_sustain=0 ampeg_release=0
ampeg_attack=0 ampeg_decay=0 ampeg_sustain=0 ampeg_release=0
<region> key=42
<region> key=44
<region> key=54

<group>group=5
//The range which mutes closed, half-open and open hi-hats - that is, just chik
sample=*silence
loop_mode=loop_continuous off_mode=fast
ampeg_attack=0 ampeg_decay=0 ampeg_sustain=0 ampeg_release=0
ampeg_attack=0 ampeg_decay=0 ampeg_sustain=0 ampeg_release=0
<region> key=44
```

## Header organization

That is as complex as it gets, though there are a few minor points to be aware of.
Many drum kits with round robins will set [seq_length](/opcodes/seq_length)
at the <[global](/headers/global)> level, and in those cases, the silence regions
would only trigger for the first hit in the round robin sequence, unless they
have seq_length set to 1 to override the global setting. Also, the <[master](/headers/master)>
header level and #[include](/directives/include) statement are useful ARIA
extensions for keeping deeply sampled hi-hat mappings organized.

## Cymbals other than hi-hats

Cymbals other than hi-hats are simpler, but there are
two considerations when muting those. One is limiting polyphony, which is
especially important with cymbals intended for playing rolls, and with jazz ride
cymbals (rock/metal rides which primarily use the bell articulation, not as much).
The other is that it's also possible to record separate choke samples, and have
those mute everything else. A ride with bell, bow and edge articulations, choke
samples and overhead and room mics might be set up like below. Note that while
each articulation has its own groups and different polyphony limits, all
articulations for each mic have the same off_by value, which is the group value
of the choke samples for that mic. It would not be necessary to have this many
groups to implement muting, but this setup would also allow a mapping using only
the overhead mics and no room mic to be created without breaking anything, as
each mic's samples have separate groups. Having different polyphony numbers for
different mics can result in an inconsistent sound, so it is not recommended.

```
<group>
off_mode=normal

//Bow hits
<region>
key=51 group=30 off_by=33 polyphony=5 ampeg_release=0.3
sample=ride_bow_oh.wav
<region>
key=51 group=40 off_by=43 polyphony=5 ampeg_release=0.4
sample=ride_bow_rm.wav

//Bell hits
<region>
key=53 group=31 off_by=33 polyphony=4 ampeg_release=0.3
sample=ride_bell_oh.wav
<region>
key=53 group=41 off_by=43 polyphony=4 ampeg_release=0.4
sample=ride_bell_rm.wav

//Edge hits (crashes)
<region>
key=59 group=32 off_by=33 polyphony=6 ampeg_release=0.3
sample=ride_edge_oh.wav
<region>
key=59 group=42 off_by=43 polyphony=6 ampeg_release=0.4
sample=ride_edge_rm.wav

//Edge chokes
<region>
key=71 ampeg_attack=0.15 group=33
sample=ride_choke_oh.wav
<region>
key=71 ampeg_attack=0.15 group=43
sample=ride_choke_rm.wav
```

## Another approach to limiting polyphony

If there is no need have a choke group, it's possible to limit the polyphony of
a cymbal in a way which is more controllable, by having it self-mute but making
the fadeout time of the previous samples long. This cannot be done when chokes
are required, because chokes need a fast fadeout, but it is another option which
allows how much dense patterns on a cymbal will build up to be controlled with a
MIDI CC parameter - the polyphony opcode cannot be modulated by MIDI CC, but
ampeg_release can. Here is how that might work using CC 100 to modulate the time,
with different maximum times for different articulations, as in general edge hits
will build up the most and bell hits the least. Of course, it's not very possible
to modulate the buildup of a cymbal in the real world, but that doesn't mean it
can't be useful in the sampled world.

```
<group>
off_mode=normal
ampeg_release=0.1

//Bow hits
<region>
key=51 group=30 off_by=30
ampeg_release_oncc100=5
sample=ride_bow_oh.wav
<region>
key=51 group=40 off_by=40
ampeg_release_oncc100=5.7
sample=ride_bow_rm.wav

//Bell hits
<region>
key=53 group=31 off_by=31
ampeg_release_oncc100=3
sample=ride_bell_oh.wav
<region>
key=53 group=41 off_by=41
ampeg_release_oncc100=3.5
sample=ride_bell_rm.wav

//Edge hits (crashes)
<region>
key=59 group=32 off_by=32
ampeg_release_oncc100=7
sample=ride_edge_oh.wav
<region>
key=59 group=42 off_by=42
ampeg_release_oncc100=8
sample=ride_edge_rm.wav
```

## Deep-sampled hi-hat example

Putting most of the above knowledge together into a complex example can result
in long SFZ files, but the principles themselves remain the same. The mapping
for a deeply sampled hi-hat with tightly closed, closed, loosely closed, quarter
open, half open, open, foot chik, foot splash and pedal return samples, with
separate shank and tip hits for tightly closed, closed, loosely closed and
quarter open might look like this:

```
<control>
//Key assignments - hi-hat
#define $htclstkey 42
#define $htchkkey 44
#define $htvartkey 46
#define $htclsskey 54
#define $htsplkey 56
#define $htvarskey 58
#define $htretkey 68

//Hi-hat CC ranges - order for keyboard/sequencing use
//E-kit pedal should be backwards
#define $ht_lo_hi_init 127
#define $ht_cl_lo 0
#define $ht_cl_hi 25
#define $ht_lc_lo 26
#define $ht_lc_hi 51
#define $ht_qo_lo 52
#define $ht_qo_hi 76
#define $ht_ho_lo 77
#define $ht_ho_hi 102
#define $ht_open_lo 103
#define $ht_open_hi 127

#define $mg_open_lo 0
#define $mg_open_hi 102
#define $mg_ho_lo 0
#define $mg_ho_hi 76
#define $mg_qo_lo 0
#define $mg_qo_hi 51
#define $mg_lc_lo 0
#define $mg_lc_hi 25

label_cc4=Hi-hat position
label_cc100=Hi-hat close
label_cc101=Hi-hat OH

set_cc4=$ht_lo_hi_init
set_cc100=40
set_cc101=100

<global> loop_mode=one_shot
seq_length=4
ampeg_release=0.12

//Foot chiks

<master> key=$htchkkey amplitude_cc100=100
#include "mappings/hihat_14/ht_chik_cl.sfz"

<master> key=$htchkkey amplitude_cc101=100
#include "mappings/hihat_14/ht_chik_oh.sfz"

//Stick tip hits

<master> key=$htclstkey amplitude_cc100=100 group=11 off_by=10
#include "mappings/hihat_14/ht_tc_cl.sfz"

<master> key=$htclstkey amplitude_cc101=100 group=21 off_by=20 ampeg_release=0.2
#include "mappings/hihat_14/ht_tc_oh.sfz"

<master> key=$htvartkey amplitude_cc100=100 group=12 off_by=11
locc4=$ht_cl_lo hicc4=$ht_cl_hi
#include "mappings/hihat_14/ht_cl_cl.sfz"

<master> key=$htvartkey amplitude_cc101=100 group=22 off_by=21 ampeg_release=0.2
locc4=$ht_cl_lo hicc4=$ht_cl_hi
#include "mappings/hihat_14/ht_cl_oh.sfz"

<master> key=$htvartkey amplitude_cc100=100 group=13 off_by=12
locc4=$ht_lc_lo hicc4=$ht_lc_hi
#include "mappings/hihat_14/ht_lc_cl.sfz"

<master> key=$htvartkey amplitude_cc101=100 group=23 off_by=22 ampeg_release=0.2
locc4=$ht_lc_lo hicc4=$ht_lc_hi
#include "mappings/hihat_14/ht_lc_oh.sfz"

<master> key=$htvartkey amplitude_cc100=100 group=14 off_by=13
locc4=$ht_qo_lo hicc4=$ht_qo_hi
#include "mappings/hihat_14/ht_qo_cl.sfz"

<master> key=$htvartkey amplitude_cc101=100 group=24 off_by=23 ampeg_release=0.2
locc4=$ht_qo_lo hicc4=$ht_qo_hi
#include "mappings/hihat_14/ht_qo_oh.sfz"

<master> key=$htvartkey amplitude_cc100=100 group=15 off_by=14
locc4=$ht_ho_lo hicc4=$ht_ho_hi
#include "mappings/hihat_14/ht_ho_cl.sfz"

<master> key=$htvartkey amplitude_cc101=100 group=25 off_by=24 ampeg_release=0.2
locc4=$ht_ho_lo hicc4=$ht_ho_hi
#include "mappings/hihat_14/ht_ho_oh.sfz"

<master> key=$htvartkey amplitude_cc100=100 group=16 off_by=15
locc4=$ht_open_lo hicc4=$ht_open_hi
#include "mappings/hihat_14/ht_open_cl.sfz"

<master> key=$htvartkey amplitude_cc101=100 group=26 off_by=25 ampeg_release=0.2
locc4=$ht_open_lo hicc4=$ht_open_hi
#include "mappings/hihat_14/ht_open_oh.sfz"

//Stick shank hits

<master> key=$htclsskey amplitude_cc100=100 group=11 off_by=10
#include "mappings/hihat_14/ht_tc_s_cl.sfz"

<master> key=$htclsskey amplitude_cc101=100 group=21 off_by=20 ampeg_release=0.2
#include "mappings/hihat_14/ht_tc_s_oh.sfz"

<master> key=$htvarskey amplitude_cc100=100 group=12 off_by=11
locc4=$ht_cl_lo hicc4=$ht_cl_hi
#include "mappings/hihat_14/ht_cl_s_cl.sfz"

<master> key=$htvarskey amplitude_cc101=100 group=22 off_by=21 ampeg_release=0.2
locc4=$ht_cl_lo hicc4=$ht_cl_hi
#include "mappings/hihat_14/ht_cl_s_oh.sfz"

<master> key=$htvarskey amplitude_cc100=100 group=13 off_by=12
locc4=$ht_lc_lo hicc4=$ht_lc_hi
#include "mappings/hihat_14/ht_lc_s_cl.sfz"

<master> key=$htvarskey amplitude_cc101=10 group=23 off_by=22 ampeg_release=0.2
locc4=$ht_lc_lo hicc4=$ht_lc_hi
#include "mappings/hihat_14/ht_lc_s_oh.sfz"

<master> key=$htvarskey amplitude_cc100=100 group=14 off_by=13
locc4=$ht_qo_lo hicc4=$ht_qo_hi
#include "mappings/hihat_14/ht_qo_s_cl.sfz"

<master> key=$htvarskey amplitude_cc101=100 group=24 off_by=23 ampeg_release=0.2
locc4=$ht_qo_lo hicc4=$ht_qo_hi
#include "mappings/hihat_14/ht_qo_s_oh.sfz"

<master> key=$htvarskey amplitude_cc100=100 group=15 off_by=14
locc4=$ht_ho_lo hicc4=$ht_ho_hi
#include "mappings/hihat_14/ht_ho_cl.sfz"

<master> key=$htvarskey amplitude_cc101=100 group=25 off_by=24 ampeg_release=0.2
locc4=$ht_ho_lo hicc4=$ht_ho_hi
#include "mappings/hihat_14/ht_ho_oh.sfz"

<master> key=$htvarskey amplitude_cc100=100 group=16 off_by=15
locc4=$ht_open_lo hicc4=$ht_open_hi
#include "mappings/hihat_14/ht_open_cl.sfz"

<master> key=$htvarskey amplitude_cc101=100 group=26 off_by=25 ampeg_release=0.2
locc4=$ht_open_lo hicc4=$ht_open_hi
#include "mappings/hihat_14/ht_open_oh.sfz"

//Footsplashes are the only self-muting group

<master> key=$htsplkey amplitude_cc100=100 group=17 off_by=17
#include "mappings/hihat_14/ht_footspl_cl.sfz"

<master> key=$htsplkey amplitude_cc101=100 group=27 off_by=27 ampeg_release=0.2
#include "mappings/hihat_14/ht_footspl_oh.sfz"

//Stick hits on the shaft, not involved in muting

<master> key=$htperckey amplitude_cc100=100
#include "mappings/hihat_14/ht_perc_cl.sfz"

<master> key=$htperckey amplitude_cc101=100
#include "mappings/hihat_14/ht_perc_oh.sfz"

//Hi hat pedal return noises, muted by anything else

<master> key=$htretkey amplitude_cc100=100 group=18 off_by=17
#include "mappings/hihat_14/ht_return_cl.sfz"

<master> key=$htretkey amplitude_cc101=100 group=28 off_by=27 ampeg_release=0.2
#include "mappings/hihat_14/ht_return_oh.sfz"

//Hat mute silence groups
<master> seq_length=1

<group> group=18
//The range which mutes hi-hat pedal return noises
//Everything except themselves
sample=*silence
loop_mode=loop_continuous off_mode=fast
ampeg_attack=0 ampeg_decay=0 ampeg_sustain=0 ampeg_release=0
off_by=17
<region> key=$htclstkey
<region> key=$htchkkey
<region> key=$htvartkey
<region> key=$htclsskey
<region> key=$htvarskey
<region> key=$htsplkey

<group> group=17
//The range which mutes footsplashes
//Everything except pedal return noises and open
//Footsplashes are the only articulation which mutes itself
//Splash also mutes splash, but key=$htsplkey is not part of this silence group
//Instead splash regions themselves are marked with group=17 also
//Kind of a kludge, but keeps the silence from instantly muting the splash
//while allowing a subsequent splash to mute the current splash
sample=*silence
loop_mode=loop_continuous off_mode=fast
ampeg_attack=0 ampeg_decay=0 ampeg_sustain=0 ampeg_release=0
off_by=17
<region> key=$htclstkey
<region> key=$htchkkey
<region> key=$htvartkey locc4=$mg_open_lo hicc4=$mg_open_hi
<region> key=$htclsskey
<region> key=$htvarskey locc4=$mg_open_lo hicc4=$mg_open_hi

<group> group=15
//The range which mutes open hi-hats
//Everything except pedal return noises and open
//Just like the footsplash mute group, except the footsplash key is in this too
sample=*silence
loop_mode=loop_continuous off_mode=fast
ampeg_attack=0 ampeg_decay=0 ampeg_sustain=0 ampeg_release=0
off_by=14
<region> key=$htclstkey
<region> key=$htchkkey
<region> key=$htvartkey locc4=$mg_open_lo hicc4=$mg_open_hi
<region> key=$htclsskey
<region> key=$htvarskey locc4=$mg_open_lo hicc4=$mg_open_hi
<region> key=$htsplkey
<region> key=$htsplkey

<group> group=14
//The range which mutes half open hi-hats
//Everything except open and half-open
sample=*silence
loop_mode=loop_continuous off_mode=fast
ampeg_attack=0 ampeg_decay=0 ampeg_sustain=0 ampeg_release=0
off_by=13
<region> key=$htclstkey
<region> key=$htchkkey
<region> key=$htvartkey locc4=$mg_ho_lo hicc4=$mg_ho_hi
<region> key=$htclsskey
<region> key=$htvarskey locc4=$mg_ho_lo hicc4=$mg_ho_hi
<region> key=$htsplkey

<group> group=13
//The range which mutes quarter open hi-hats
//Everything except open, half-open and quarter open
sample=*silence
loop_mode=loop_continuous off_mode=fast
ampeg_attack=0 ampeg_decay=0 ampeg_sustain=0 ampeg_release=0
off_by=12
<region> key=$htclstkey
<region> key=$htchkkey
<region> key=$htvartkey locc4=$mg_qo_lo hicc4=$mg_qo_hi
<region> key=$htclsskey
<region> key=$htvarskey locc4=$mg_qo_lo hicc4=$mg_qo_hi
<region> key=$htsplkey

<group> group=12
//The range which mutes loosely closed hi-hats
//Everything except open, half-open, quarter open and loosely closed
sample=*silence
loop_mode=loop_continuous off_mode=fast
ampeg_attack=0 ampeg_decay=0 ampeg_sustain=0 ampeg_release=0
off_by=11
<region> key=$htclstkey
<region> key=$htchkkey
<region> key=$htvartkey locc4=$mg_lc_lo hicc4=$mg_lc_hi
<region> key=$htclsskey
<region> key=$htvarskey locc4=$mg_lc_lo hicc4=$mg_lc_hi
<region> key=$htsplkey

<group> group=11
//The range which mutes regular closed hi-hats
//Just foot chik, tightly closed and footsplash
sample=*silence
loop_mode=loop_continuous off_mode=fast
ampeg_attack=0 ampeg_decay=0 ampeg_sustain=0 ampeg_release=0
off_by=10
<region> key=$htclstkey
<region> key=$htchkkey
<region> key=$htclsskey
<region> key=$htsplkey

<group> group=10
//The range which mutes tightly closed hi-hats - just foot chik and footsplash
sample=*silence
loop_mode=loop_continuous off_mode=fast
ampeg_attack=0 ampeg_decay=0 ampeg_sustain=0 ampeg_release=0
<region> key=$htchkkey
<region> key=$htsplkey

<group> group=28
//The range which mutes hi-hat pedal return noises
//Everything except themselves
sample=*silence
loop_mode=loop_continuous off_mode=fast
ampeg_attack=0 ampeg_decay=0 ampeg_sustain=0 ampeg_release=0
off_by=27
<region> key=$htclstkey
<region> key=$htchkkey
<region> key=$htvartkey
<region> key=$htclsskey
<region> key=$htvarskey
<region> key=$htsplkey

<group> group=27
//The range which mutes footsplashes
//Everything except pedal return noises and open
//Footsplashes are the only articulation which mutes itself
//Splash also mutes splash, but key=$htsplkey is not part of this silence group
//Instead splash regions themselves are marked with group=27 also
//Kind of a kludge, but keeps the silence from instantly muting the splash
//while allowing a subsequent splash to mute the current splash
sample=*silence
loop_mode=loop_continuous off_mode=fast
ampeg_attack=0 ampeg_decay=0 ampeg_sustain=0 ampeg_release=0
off_by=27
<region> key=$htclstkey
<region> key=$htchkkey
<region> key=$htvartkey locc4=$mg_open_lo hicc4=$mg_open_hi
<region> key=$htclsskey
<region> key=$htvarskey locc4=$mg_open_lo hicc4=$mg_open_hi

<group> group=25
//The range which mutes open hi-hats
//Everything except pedal return noises and open
//Just like the footsplash mute group, except the footsplash key is in this too
sample=*silence
loop_mode=loop_continuous off_mode=fast
ampeg_attack=0 ampeg_decay=0 ampeg_sustain=0 ampeg_release=0
off_by=24
<region> key=$htclstkey
<region> key=$htchkkey
<region> key=$htvartkey locc4=$mg_open_lo hicc4=$mg_open_hi
<region> key=$htclsskey
<region> key=$htvarskey locc4=$mg_open_lo hicc4=$mg_open_hi
<region> key=$htsplkey
<region> key=$htsplkey

<group> group=24
//The range which mutes half open hi-hats
//Everything except open and half-open
sample=*silence
loop_mode=loop_continuous off_mode=fast
ampeg_attack=0 ampeg_decay=0 ampeg_sustain=0 ampeg_release=0
off_by=23
<region> key=$htclstkey
<region> key=$htchkkey
<region> key=$htvartkey locc4=$mg_ho_lo hicc4=$mg_ho_hi
<region> key=$htclsskey
<region> key=$htvarskey locc4=$mg_ho_lo hicc4=$mg_ho_hi
<region> key=$htsplkey

<group> group=23
//The range which mutes quarter open hi-hats
//Everything except open, half-open and quarter open
sample=*silence
loop_mode=loop_continuous off_mode=fast
ampeg_attack=0 ampeg_decay=0 ampeg_sustain=0 ampeg_release=0
off_by=22
<region> key=$htclstkey
<region> key=$htchkkey
<region> key=$htvartkey locc4=$mg_qo_lo hicc4=$mg_qo_hi
<region> key=$htclsskey
<region> key=$htvarskey locc4=$mg_qo_lo hicc4=$mg_qo_hi
<region> key=$htsplkey

<group> group=22
//The range which mutes loosely closed hi-hats
//Everything except open, half-open, quarter open and loosely closed
sample=*silence
loop_mode=loop_continuous off_mode=fast
ampeg_attack=0 ampeg_decay=0 ampeg_sustain=0 ampeg_release=0
off_by=21
<region> key=$htclstkey
<region> key=$htchkkey
<region> key=$htvartkey locc4=$mg_lc_lo hicc4=$mg_lc_hi
<region> key=$htclsskey
<region> key=$htvarskey locc4=$mg_lc_lo hicc4=$mg_lc_hi
<region> key=$htsplkey

<group> group=21
//The range which mutes regular closed hi-hats
//Just foot chik, tightly closed and footsplash
sample=*silence
loop_mode=loop_continuous off_mode=fast
ampeg_attack=0 ampeg_decay=0 ampeg_sustain=0 ampeg_release=0
off_by=20
<region> key=$htclstkey
<region> key=$htchkkey
<region> key=$htclsskey
<region> key=$htsplkey

<group> group=20
//The range which mutes tightly closed hi-hats - just foot chik and footsplash
sample=*silence
loop_mode=loop_continuous off_mode=fast
ampeg_attack=0 ampeg_decay=0 ampeg_sustain=0 ampeg_release=0
<region> key=$htchkkey
<region> key=$htsplkey
```
