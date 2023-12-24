---
title: Control of volume
---
The SFZ format allows many different ways of controlling volume. There's the
modulation of volume by opcodes, there's velocity tracking, and there's also
modualtion by envelopes and LFOs.

This is currently a work in progress, collecting information in tutorial form,
though it might be turned into another type of page eventually.

## Opcodes affecting playback volume

The relevant opcodes are: [volume], [amplitude], [xfin / xfout], [amp_veltrack],
[amp_keytrack], [amp_velcurve_N].
There are also envelope and LFO modulation sources: [ampeg], [amplfo], and
volume-related targets for [egN and lfoN]. Some of them will have multiple stages,
points, CCs etc, so the volume of one sample can be affected by many different things
at once.

## Velocity tracking

This is affected by amp_veltrack and amp_velcurve_N. In addition, vel2 modulations
can affect amp envelope durations as well as the sustain level (though not the
peak level at the end of the attack phase) and in ARIA extended CC 131 can also
modulate things which affect volume, for example egN levels.

Remember that amp_veltrack is 100 by default, so if dynamics are to be controlled
by things other than velocity and dynamics should be controlled, for examle, by
mod wheel, then set amp_veltrack to 0, as in the code example in the next section.

When using velocity layers, remember that a quiet velocity layer will have a certain
max velocity, for example if a region has [hivel] set to 31, it
will never be triggered by velocities higher than 31, and therefore should usually
either have amp_velcurve_31 set to 1, or amp_veltrack should be set to 0.

```sfz
<group>
hivel=42
amp_velcurve_42=1
#include "quiet_layer.sfz"

<group>
lovel=43
hivel=84
amp_velcurve_84=1
#include "middle_layer.sfz"

<group>
lovel=85
#include "loud_layer.sfz"
```

## Volume, amplitude and crossfade

Volume, amplitude, and crossfade generally affect the playback volume of the entire
region, beginning to end. "Generally" because amplitude and volume can be modulated
by CCs while the sample is playing.

Volume is additive and measured in decibels, so volume=6 adds 6 dB to the sample's
playback volume. Amplitude is multiplicative, and is a percentage of full amplitude,
so amplitude=6 would mean the sample is played at 6% amplitude.

Xfin and xfout are intended for cross-fading dynamic layers, and set the CC values for
zero amplitude and full amplitude. One limitation here is that it's not possible to
have a layer which has more than zero amplitude at the start of the fade-in. This is
important for instruments such as bowed strings, which have a certain minimum practical
playable loudness. These will often have dynamics linked to CC1 or some other CC, and
need to have some small amount of audible volume even at the lowest CC level. Here,
amplitude with [curveccN] can be used to fade in the lowest layer.
It's still possible to use xfout to fade the layer out at higher CC values as
the next layer fades in, though it may be simpler to just use amplitude for all layers,
for example like this:

```sfz
<global>
amp_veltrack=0

<group>
amplitude_oncc1=100
amplitude_curvecc1=11
#include "quiet_layer.sfz"

<group>
amplitude_oncc1=100
amplitude_curvecc1=12
#include "loud_layer.sfz"

<curve>
curve_index=11
v000=0.4
v063=1
v127=0

<curve>
curve_index=12
v000=0
v063=0
v127=1
```

## Envelopes and LFOs

Both the ampeg envelope and one or more egN flex envelopes can be used in parallel.
The same is true of amplfo and lfoN flex LFOs. These affect the volume of the
region differently across time, obviously.

## Randomization

[amp_random] and its alias gain_random work like volume/gain
and are measured in decibels. In ARIA and Cakewalk, amp_random is unipolar.
In the rgc sfz player, amp_random is bipolar.

In ARIA, CC135 (unipolar random) and 136 (bipolar random) can also be used by
various opcodes which modulate volume.

## Stacking mutliple modulations

It is possible to have multiple CCs modulating the same opcode for the same region.
This can make sense with multiple mic positions, for example. There can be a release
samples volume control affecting release sample amplitude for all mics, and individual
mic controls with the amplitude for all samples recorded through that mic. The effect
with amplitude would be multiplicative - so with either control at 0, there would be
no sound.

```sfz
<master>
amplitude_oncc80=100 //Close mic volume
<group>
#include "close_notes.sfz"
<group>
trigger=release
amplitude_oncc82=100 //Release noise volume
#include "close_releases.sfz"

<master>
amplitude_oncc81=100 //Far mic volume
<group>
#include "far_notes.sfz"
<group>
trigger=release
amplitude_oncc82=100 //Release noise volume
#include "far_releases.sfz"
```


[egN and lfoN]:   sfz2_modulations.md
[curveccN]:       ../modulations/curveccN.md
[amp_keytrack]:   ../opcodes/amp_keytrack.md
[amp_random]:     ../opcodes/amp_random.md
[amp_veltrack]:   ../opcodes/amp_veltrack.md
[amp_velcurve_N]: ../opcodes/amp_velcurve_N.md
[ampeg]:          ../opcodes/ampeg_attack.md
[amplfo]:         ../opcodes/amplfo_depth.md
[amplitude]:      ../opcodes/amplitude.md
[hivel]:          ../opcodes/hivel.md
[volume]:         ../opcodes/volume.md
[xfin / xfout]:   ../opcodes/xfin_loccN.md
