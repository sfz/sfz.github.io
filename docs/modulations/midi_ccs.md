---
title: "MIDI CCs"
---

MIDI CCs (Continuous Controllers) provide [modulation] sources that can be used to control the effect of other opcodes.

MIDI CCs are "attached" to _target_ opcodes by appending `ccN`, although the syntax for these varies:

- SFZ1 generally uses `_ccN` or `ccN` (for example [cutoff_ccN][cutoff] or [ampeg_releaseccN]).
- SFZ2 introduces a range of additional modulations using `_onccN` (for example [delay_samples_onccN]),
although the `ccN` and `_ccN` versions may be aliases, depending on implementation.

The [opcode list] provides details of which aliases are available in which player.

ARIA extends some of the modulations with "high definition" values, using `hdccN` -
see [extended MIDI CCs] for details, which also covers "MIDI CC" modulators beyond
the standard MIDI CC number range (i.e. 128 and upwards).

Whilst MIDI CC _values_ range from 0 to 127, the units and ranges of the targets that can
be modulated vary widely.  In many cases, 128 steps may be acceptable for what you need.
However, adjustments can be made to the degree each step has using a number of
additional modifiers - again, see the [opcode list] for details of where they can be used:

- [curveccN](curveccN.md)
- [smoothccN](smoothccN.md)
- [stepccN](stepccN.md)

### Examples

The primary effect of the `ccN`/`_ccN`/`_onccN` modulations is to adjust the target
within a set range controlled by the incoming MIDI controller number value.

For example:

```sfz
width=0
width_cc12=100
```

This sets [width] to zero, but enables opening up width back to 100% using CC12.
Depending on implementation, the following may also be possible:

```sfz
<control>
set_hdcc12=0.5 label_cc12=width
curve_cc12=1

<global>
width=50
width_cc12=50
```

In this example, [width] starts at 50%, CC12 starts midway, and curve 1 is used,
which means that midpoint is zero.  Pushing CC12 to maximum will add 50, pushing
[width] to 100%, pulling CC12 to minimum will subtract 50, pulling [width] to zero.
See for `<control>` and `<global>` details, see [headers].

See also the related tutorials for [SFZ1] and [SFZ2].

[modulation]:          index.md
[cutoff]:              ../opcodes/cutoff.md
[ampeg_releaseccN]:    ../opcodes/ampeg_release.md
[delay_samples_onccN]: ../opcodes/delay_samples.md
[opcode list]:         ../opcodes/index.md
[extended MIDI CCs]:   ../extensions/midi_ccs.md
[width]:               ../opcodes/width.md
[headers]:             ../headers/index.md
[SFZ1]:                ../tutorials/sfz-1-midiccs.md
[SFZ2]:                ../tutorials/sfz2_modulations.md
