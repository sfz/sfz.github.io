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

- amplifier [(`amp`)][1]
- filters [(`fil` and `fil2`)][2]
- pan position [(`pan`)][3]
- pitch [(`pitch` or `tune`)][4]
- stereo field position of the sample [(`position`)][5]

See the [opcode list] and search for `_keytrack` to see more.

Note velocity modulation can be attached to all the above targets using `_veltrack`.
In addition, `amp_veltrack` can also be further modulated
by MIDI CC (appending `_ccN` after `_veltrack`),
adjusted using a [&lt;curve&gt;] (appending `_curveN`),
or random amount (appending `_random`).

Again, see the [opcode list] and search for `_veltrack` to see more.

For example:

```sfz
gain_cc80=-6
amp_keytrack=-1.3
amp_veltrack=80
```

[&lt;curve&gt;]: ../headers/curve.md
[opcode list]:   ../opcodes/index.md
[1]:             ../opcodes/volume.md
[2]:             ../opcodes/cutoff.md
[3]:             ../opcodes/pan.md
[4]:             ../opcodes/pitch.md
[5]:             ../opcodes/position.md
