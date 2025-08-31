---
title: SFZ1 modulations
---
The set of [modulations] available under the SFZ1 specification is fixed, and
there's a dedicated opcode for every possible modulation, including fairly
esoteric ones such as using note velocity to modulate the hold stage of the
pitch envelope.

If something is not described below, then modulating it is not possible under the
SFZ1 specification, and will require [using SFZ2] or possibly some extension opcodes.

## Basic MIDI CC modulation

For background, see [MIDI CC modulations] and for examples, see [SFZ 1 MIDI CC Examples][sfz-1-midiccs].

## Note Number and Velocity Tracking

Volume (`amp`), filter cutoff (`fil`) and pitch allow MIDI [Note Number][10] and [Velocity][11]
to be used to modulate the base opcode values using `_keytrack` and `_veltrack` respectively,
with the units matching the base opcode.

An example is given in "[MIDI Note Number and Velocity tracking](../modulations/keytrack_veltrack.md)".

## "vel2" velocity tracking

The three SFZ1 envelope generators (ampeg, fileg and pitcheg) along with the three SFZ1 equalizer bands (EQ1 to 3)
allow parameters to be modulated by the initial note on velocity using `(target)_vel2(param)` syntax.

This is explained in more detail, with examples, in "[(target)\_vel2(param) Velocity Tracking](../modulations/vel2.md)".

## Controlled adjustment

Volume, filter and cutoff also each get an [LFO] and an [envelope], for which
separate pages exist with examples.

## Random adjustment

[Filter cutoff][1], [delay][2], [volume][4], [offset][5] and [pitch][6]
all support random adjustment by appending `_random` to the opcode.

For example, the following gives 1dB of headroom which is randomly boosted into:

```sfz
volume=-1
amp_random=1
```

## Cross fading

Cross fading can also be considered a form of modulation.
This is where two overlapping voices are faded into one another.
The overlapping voices can be controlled by:

- MIDI CC number value range [(`ccN`)][7]
- note number range [(`key`)][8]
- note velocity range [(`vel`)][9]

In each case, there is a `xfin_lo/xfin_hi` and `xfout_lo/xfout_hi` pair for
[`ccN`][7], [`key`][8], [`vel`][9].

An example of one note with two dynamic layers being cross faded:

```sfz
<region>
sample=e4_ft_p.wav
xfin_locc1=0 xfin_hicc1=63
xfout_locc1=64 xfout_hicc1=127

<region>
sample=e4_ft_f.wav
xfin_locc1=64 xfin_hicc1=127
```

The [xf_cccurve], [xf_keycurve] and [xf_velcurve] opcodes
give the choice of two curves for each cross fade type:

- **gain**: Linear gain crossfade. This setting is best when crossfading phase-aligned material. Linear gain crossfades keep constant amplitude during the crossfade, preventing clipping.
- **power**: Equal-power RMS crossfade. This setting works better when mixing very different material, as a constant power level is kept during the crossfade.

[modulations]:   ../modulations/index.md
[using SFZ2]:    sfz2_modulations.md
[MIDI CC modulations]: ../modulations/midi_ccs.md
[sfz-1-midiccs]: sfz-1-midiccs.md
[LFO]:           sfz-1-lfos.md
[envelope]:      sfz-1-egs.md
[1]:             ../opcodes/fil_random.md
[2]:             ../opcodes/delay_random.md
[4]:             ../opcodes/amp_random.md
[5]:             ../opcodes/offset_random.md
[6]:             ../opcodes/pitch_random.md
[7]:             ../opcodes/xfin_loccN.md
[8]:             ../opcodes/xfin_lokey.md
[9]:             ../opcodes/xfin_lovel.md
[10]:            ../opcodes/amp_keytrack.md
[11]:            ../opcodes/amp_veltrack.md
[xf_cccurve]:    ../opcodes/xf_cccurve.md
[xf_keycurve]:   ../opcodes/xf_keycurve.md
[xf_velcurve]:   ../opcodes/xf_velcurve.md
