---
title: SFZ1 modulations
lang: en
---
The set of modulations available under the SFZ1 specification is fixed, and
there's a dedicated opcode for every possible modulation, including fairly
esoteric ones such as using note velocity to modulate the hold stage of the
pitch envelope.

## Basic MIDI CC modulation

A few opcodes can be modulated simply by MIDI CC, with the modulation adding
to what the opcode would normally do. These are: [offset](/opcodes/offset) and 
[delay](/opcodes/delay).

For example, this would have a sample offset of 500 when the modulating CC is
at 0, and a sample offset of 1000 when the modulating CC is at max:

```
offset=500
offset_cc100=500
```

It's also possible to just specify the modulation, in which case the
default value is what will be modulated. The defaults for offset, delay and
EQ band gain are 0, so this would result in the offset being modulated between
0 and 1000:

```
offset_cc100=1000
```

## Modulating default values

The three EQ bands' [frequency](/opcodes/eqN_freq), [bandwidth](/opcodes/eqN_bw) and
[gain](/opcodes/eqN_gain) work similarly, but also add velocity tracking. The EQ
bandwidth and center frequency also have non-zero defaults,
for example eq2_freq is 500 if not specified. So, this would modulate the center
frequency of the second EQ band between 500 and 1500 if eq2_freq is left at default:

```
eq2_freqcc110=1000
```

## Velocity tracking, keytracking and randomization

EQ [frequency](/opcodes/eqN_vel2freq) and [gain](/opcodes/eqN_vel2gain) (but not
bandwidth) can additionally be modulated by velocity. For example, if we want to
make a sound brighter when the velocity is higher, we might use something like this:

```
eq1_vel2gain=-6
eq2_vel2gain=12
eq2_vel2freq=500
```

The [xfin](/opcodes/xfin_loccN)/[xfout](/opcodes/xfout_loccN) CCs are also a
way to fade sounds in and out using MIDI CC. An example of one note with two
dynamic layers being crossfaded:

```
<region>sample=e4_ft_p.wav xfin_locc1=0 xfin_hicc1=63 xfout_locc1=64 xfout_hicc1=127
<region>sample=e4_ft_f.wav xfin_locc1=64 xfin_hicc1=127
```

In addition to MIDI CC, crossfades can also use MIDI note number and velocity as
modulation sources, and the [xf_cccurve](/opcodes/xf_cccurve), [xf_keycurve](/opcodes/xf_keycurve)
and [xf_velcurve](/opcodes/xf_velcurve) give the choice of two curves for each of these modulations.

More sophisticated modulations are possible with volume,
pitch and [filter cutoff](/opcodes/cutoff). Volume and cutoff can be modulated by MIDI CC directly
(pitch can't in SFZ1 - the tune_ccN modulation is an ARIA extension). All three
can also have randomization applied and be modulated by MIDI note number and
velocity. The nomenclature for volume is a little confusing, with [gain_ccN](/opcodes/volume) using
"gain" in the name, while the others are called [amp_random](/opcodes/amp_random),
[amp_keytrack](/opcodes/amp_keytrack) and [amp_veltrack](/opcodes/amp_veltrack).

```
gain_cc80=-6
amp_random=3
amp_keytrack=-1.3
amp_veltrack=80
```

## LFOs and envelopes

Volume, filter and cutoff also each get an [LFO](/types/lfo#sfz-1-lfos) and an
[envelope](/types/envelope_generators#sfz-1-egs). The LFO rate and
depth can be modulated by MIDI CC. Each LFO also has a simple envelope with
delay and fade, but modulating the duration of these is not allowed under the
SFZ1 spec (though it is with SFZ2 LFOs). Here's a typical pitch vibrato LFO:

```
pitchlfo_freq=2
pitchlfo_freqcc50=10
pitchlfo_depthcc51=33
```

Each envelope parameter can also be modulated by CC, or by velocity. Here's a
exmple setup for a synth-style ADSR volume envelope (hold is not specified so the
default hold value of 0 is used) controlled by CCs and some initial
minimum values set for attack and release, along with a default sustain of 0:

```
ampeg_attack=0.001
ampeg_attack_oncc40=1
ampeg_decay_oncc41=4
ampeg_sustain=1
ampeg_sustain_oncc42=100
ampeg_release=0.1
ampeg_release_oncc43=0.9
```

Modulating envelope parameters with velocity allows, for example, setting up a filter
on an acid bass which will sweep farther with higher velocity, and also sweep faster.

```
cutoff=120
resonance=12
fileg_attack=0.5
fileg_decay=1
fileg_depth=500
fileg_vel2attack=-0.4
fileg_vel2decay=-0.8
fileg_vel2depth=4000
```

If something is not described above, then modulating it is not possible under the
SFZ1 specification, and will require [using SFZ2](/tutorials/sfz2_modulations)
or possibly some extension opcodes.
