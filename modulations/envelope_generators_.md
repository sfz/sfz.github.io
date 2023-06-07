---
title: Envelope Generators
---
## Traditional (SFZ 1.0)

Traditional envelope generators using ADSR phases can be set using the SFZ 1.0
**ampeg** (amplitude), **pitcheg** (pitch) and **fileg** (filter) opcodes.
These opcodes also support additional delay and hold phases.
The phases in order are: **Delay-Attack-Hold-Decay-Sustain-Release**.

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
