---
title: Envelope Generators
---
Envelope Generator opcodes are part of the [Modulation] category of opcodes:

## Traditional (SFZ 1.0)

Traditional envelope generators using ADSR phases can be set using the SFZ 1.0
**ampeg** (amplitude), **pitcheg** (pitch) and **fileg** (filter) opcodes.
These opcodes also support additional delay and hold phases.
The phases in order are: **Delay-Attack-Hold-Decay-Sustain-Release**. See below
for the full list of relevant opcodes.

## Flex (SFZ 2.0)

With SFZ 2.0, you can create one or more "flex" envelope generators.
Each flex EG is mapped to a destination (amplitude, pitch, etc.)
and contains two or more points with a duration and level determined at each point.
The duration indicates the amount of time it takes from the previous envelope point to the current.
In this way, you can use flex EGs to essentially draw any envelope shape you desire.

Here is an example flex EG:

```sfz
eg01_pitch=1200
eg01_time1=0 eg01_level1=0
eg01_time2=1 eg01_level2=1
eg01_time3=2 eg01_level3=0.5 eg01_sustain=3
eg01_time4=1 eg01_level4=0
```

How to interpret the opcodes in the example above:

* All of these opcodes begin with "eg01\_", indicating the first flex EG
  for the current region. A second flex EG would begin with "eg02\_", and so on.
* The first opcode determines that the envelope will affect note pitch
  to a maximum of 1200 cents (one octave).
* Each envelope point is numbered, and these numbers appear at the end
  of the opcode name (this opcode has four envelope points). There should be
  both a "time" and and a "level" opcode specified for each envelope point.
* The "time" opcodes indicate time duration in seconds from the previous envelope point.
* The "level" opcodes indicate the level percentage at each envelope point
  (0-1, with "1" meaning "100%").
* The optional "sustain" opcode determines which envelope point will function
  as "sustain" in the traditional ADSR model.

So here is what happens in the four envelope points in the example:

1. Note starts at original pitch.
2. Pitch takes one second to rise 1200 cents (one octave).
3. Pitch takes two seconds to lower to 50% of 1200 cents.
   The pitch will remain at this level as long as the note is held.
4. After releasing the note, the note will take one second to lower to the original pitch.

## Envelope Curves

SFZ—at least the ARIA Engine and sfizz implementations—uses the following curves for SFZ 1.0 envelopes
(**ampeg**, **pitcheg**, **fileg**, probably others but not tested):

* **Attack:** linear (convex in dB)
* **Decay:** convex (linear in dB)
* **Release:** convex (linear in dB)

ARIA supports changing the shape of each phase curve via opcodes
such as `ampeg_attack_shape`, `fileg_decay_shape`, etc.
Setting the value for any of these to 0 will result in a linear curve shape,
with positive and negative values resulting in concave and convex curves, respectively.

Flex EGs (SFZ 2.0) phases all use a linear curve shape by default,
but this can be bent into a logarithmic curve using positive/negative values
as described in the above paragraph. For example, the following opcode
will set the shape of the first eg01 phase to match the convex curve
used in the SFZ 1.0 ampeg decay/release: `eg01_shape2=-10.36`

Note that the shape opcode should be placed on the second point affected by the curve.
In other words, `eg01_shape2=-10.36` will affect the curve between envelope points 1 and 2.

It is also important to know that ampeg/pitcheg/fileg decay (both SFZ & SF2)
behaves differently than flex EG in relation to the sustain level:

- **ampeg decay:** The level in the decay phase descends at the rate
  determined by `ampeg_decay` but stops once it hits the sustain level.
  If your decay phase length is 1 second and sustain is 50%,
  the sustain level is reached after only half a second in the decay phase
  (assuming linear phase curve).
- **flex EG phase:** The level always scales from starting to ending value
  over the full duration of the phase. When emulating an ADSR envelope
  using a flex EG, if your decay phase length is 1 second and sustain is 50%,
  the volume level won't reach 50% until the end of that one second.

If trying to match a SoundFont instrument's logarithmic curves,
set the phase's shape to 6 (concave) or -6 (convex).
This is only an approximation, as the curve is not identical.

If you wish to use a flex EG to replace the SFZ 1.0 ampeg,
set the destination as `eg01_ampeg=100` rather than `eg01_amplitude=100`.
This will disable the SFZ 1.0 ampeg and allow the flex EG to provide a release phase.

## SFZ 1 EG Opcodes

The 3 EG destinations in the SFZ 1 standard are: ampeg (amplitude),
fileg (filter) and pitcheg (pitch).

The EG destinations are represented by (eg type) in the below list - so
`ampeg_attack` would be the amplitude envelope attack, `pitcheg_sustain` would be
the pitch envelope sustain level etc.

These are 6-points Delay-Attack-Hold-Decay-Sustain-Release.

- [(eg type)_attack]
- [(eg type)_attack_oncc]
- [(eg type)_decay]
- [(eg type)_decay_oncc]
- [(eg type)_delay]
- [(eg type)_delay_oncc]
- [(eg type)_depth]
- [(eg type)_dynamic]
- [(eg type)_hold]
- [(eg type)_hold_oncc]
- [(eg type)_release]
- [(eg type)_release_oncc]
- [(eg type)_start]
- [(eg type)_start_oncc]
- [(eg type)_sustain]
- [(eg type)_sustain_oncc]
- [(eg type)_vel2attack]
- [(eg type)_vel2decay]
- [(eg type)_vel2delay]
- [(eg type)_vel2hold]
- [(eg type)_vel2release]
- [(eg type)_vel2sustain]

## Flex EGs (SFZ 2) Opcodes

Flexible EG can have as many points as needed. level and time for each point is
set accordingly.

- [egN_curveX]
- [egN_dynamic]
- [egN_levelX]
- [egN_levelX_onccY]
- [egN_loop]
- [egN_points]
- [egN_shapeX]
- [egN_sustain]
- [egN_timeX]
- [egN_timeX_onccY]

## Flex EGs Destinations

These destinations are added as a suffix to 'egN_' - for example,
eg01_pitch=2400 would have envelope 01 modulate pitch,
with an envelope depth of 2400 cents.

- amplitude
- amplitude_oncc
- depth
- depth_lfoX
- depth_oncc
- depthadd_lfoX
- freq_lfoX
- pitch
- pitch_oncc
- cutoff
- cutoff_oncc
- cutoff2
- cutoff2_oncc
- eqNbw
- eqNbw_oncc
- eqNfreq
- eqNfreq_oncc
- eqNgain
- eqNgain_oncc
- pan
- pan_oncc
- resonance
- resonance_oncc
- resonance2
- resonance2_oncc
- volume
- volume_oncc
- width
- width_oncc


[Modulation]:             ../misc/categories.md#modulation.md
[(eg type)_attack]:       ../opcodes/ampeg_attack.md
[(eg type)_attack_oncc]:  ../opcodes/ampeg_attack.md
[(eg type)_decay]:        ../opcodes/ampeg_decay.md
[(eg type)_decay_oncc]:   ../opcodes/ampeg_decay.md
[(eg type)_delay]:        ../opcodes/ampeg_delay.md
[(eg type)_delay_oncc]:   ../opcodes/ampeg_delay.md
[(eg type)_depth]:        ../opcodes/fileg_depth.md
[(eg type)_dynamic]:      ../opcodes/ampeg_dynamic.md
[(eg type)_hold]:         ../opcodes/ampeg_hold.md
[(eg type)_hold_oncc]:    ../opcodes/ampeg_hold.md
[(eg type)_release]:      ../opcodes/ampeg_release.md
[(eg type)_release_oncc]: ../opcodes/ampeg_release.md
[(eg type)_start]:        ../opcodes/ampeg_start.md
[(eg type)_start_oncc]:   ../opcodes/ampeg_start.md
[(eg type)_sustain]:      ../opcodes/ampeg_sustain.md
[(eg type)_sustain_oncc]: ../opcodes/ampeg_sustain.md
[(eg type)_vel2attack]:   ../opcodes/ampeg_vel2attack.md
[(eg type)_vel2decay]:    ../opcodes/ampeg_vel2decay.md
[(eg type)_vel2delay]:    ../opcodes/ampeg_vel2delay.md
[(eg type)_vel2hold]:     ../opcodes/ampeg_vel2hold.md
[(eg type)_vel2release]:  ../opcodes/ampeg_vel2release.md
[(eg type)_vel2sustain]:  ../opcodes/ampeg_vel2sustain.md
[egN_curveX]:             ../opcodes/egN_curveX.md
[egN_dynamic]:            ../opcodes/egN_dynamic.md
[egN_levelX]:             ../opcodes/egN_levelX.md
[egN_levelX_onccY]:       ../opcodes/egN_levelX.md
[egN_loop]:               ../opcodes/egN_loop.md
[egN_points]:             ../opcodes/egN_points.md
[egN_shapeX]:             ../opcodes/egN_shapeX.md
[egN_sustain]:            ../opcodes/egN_sustain.md
[egN_timeX]:              ../opcodes/egN_timeX.md
[egN_timeX_onccY]:        ../opcodes/egN_timeX.md
