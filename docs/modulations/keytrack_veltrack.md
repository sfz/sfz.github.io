---
title: MIDI Note Number and Velocity tracking
---

[Modulation] of the player behaviour can be controlled directly from the notes
played (that is, not simply though selecting which `<region>` is triggered but
affecting how a sound is reproduced).

Note On MIDI messages provide

- Note Number
- Note Velocity

For note number modulation, the suffix `_keytrack` is appended to the target.
The target can be:

- amplifier (`amp`)
- filters (`fil` and `fil2`)
- pan position (`pan`)
- pitch (`pitch` or `tune`)
- start position in the sample (`position`)

See the [opcode list] and search for `_keytrack` to see more.

Note velocity modulation can be attached to all the above targets using `_veltrack`.
In addition, `amp_veltrack` can also be further modulated
by MIDI CC (appending `_ccN` after `_veltrack`),
adjusted using a [&lt;curve&gt;] (appending `_curveN`),
or random amount (appending `_random`).

Again, see the [opcode list] and search for `_veltrack` to see more.

See the last of the [Velocity tracking, keytracking and randomization][1] examples.

[&lt;curve&gt;]: ../headers/curve.md
[opcode list]:   ../opcodes/index.md
[1]:             ../tutorials/sfz1_modulations.md#velocity-tracking-keytracking-and-randomization
