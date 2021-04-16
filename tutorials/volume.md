---
title: Control of volume
---
The SFZ format allows many different ways of controlling volume. There's the
modulation of volume by opcodes, there's velocity tracking, and there's also
modualtion by envelopes and LFOs.

This is currently a work in progress, collecting information in tutorial form,
though it might be turned into another type of page eventually.

## Opcodes affecting playback volume

The relevant opcodes are: [volume](/opcodes/volume), [amplitude](/opcodes/amplitude), 
[xfin/xfout](/opcodes/xfin_loccN), [amp_veltrack](/opcodes/amp_veltrack),
[amp_keytrack](/opcodes/amp_keytrack), [amp_velcurve_N](/opcodes/amp_velcurve_N).
There are also envelope and LFO modulation sources: [ampeg](/opcodes/ampeg_attack), 
[amplfo](/opcodes/amplfo_depth), and volume-related targets for
[egN and lfoN](/tutorials/sfz2_modulations). Some of them will have multiple stages,
points, CCs etc, so the volume of one sample can be affected by many different things
at once.

## Volume, amplitude and crossfade

Volume, amplitude, and crossfade generally affect the playback volume of the entire
region, beginning to end. "Generally" because amplitude and volume can be modulated
by CCs while the sample is playing.

The difference between volume and amplitude needs explanation.

## Velocity tracking

This is affected by amp_veltrack and amp_velcurve_N. In addition, vel2 modulations
can affect amp envelope durations as well as the sustain level (though not the
peak level at the end of the attack phase) and in ARIA extended CC 131 can also
modulate things which affect volume, for example egN levels.

Remember that amp_veltrack is 100 by default, so if dynamics are to be controlled
by things other than velocity and dynamics should be controlled, for examle, by
mod wheel, then set amp_veltrack to 0.

When using velocity layers, remember that a quiet velocity layer will have a certain
max velocity, for example if a region has [hivel](/opcodes/hivel) set to 31, it
will never be triggered by velocities higher than 31, and therefore should usually
either have amp_velcurve_31 set to 1, or amp_veltrack should be set to 0.

## Envelopes and LFOs

Both the ampeg envelope and one or more egN flex envelopes can be used in parallel.
The same is true of amplfo and lfoN flex LFOs. These affect the volume of the
region differently across time, obviously.

## Randomization

[amp_random](/opcodes/amp_random) and its alias gain_random work like volume/gain
and are measured in decibels. In ARIA and Cakewalk, amp_random is unipolar. In the
rgc sfz player, amp_random is bipolar.

In ARIA, CC135 (unipolar random) and 136 (bipolar random) can also be used by
various opcodes which modulate volume.
