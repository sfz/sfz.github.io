---
title: "Modulations"
---

Modulation allows changes to be applied to another opcode value, either at the
time the region is triggered, or in real time whilst the region is playing.

Modulation sources are, primarily, incoming MIDI Controller messages.
These are "attached" to opcodes by adding [ccN] - the syntax for these varies:

- SFZ1 generally uses `_ccN` or `ccN` (for example [cutoff_ccN] or [ampeg_releaseccN]).
- SFZ2 introduces a range of additional modulations using `_onccN` (for example [delay_samples_onccN]),
although the `ccN` and `_ccN` versions may be aliases, depending on implementation.
The [opcode list] provides details of which aliases are available in which player.

ARIA extends some of the modulations with "high definition" values, using `hdccN` -
see [extended MIDI CCs] for details, which also covers non-MIDI modulators.

[Envelope generators](./envelope_generators.md) can also have paramters modulated by velocity,
directly, without using [extended MIDI CCs].  For example, [fileg_vel2depth].

Polyphonic aftertouch is a further modulation source.  Depending on implementation, this may
or may not be truely polyphonic.  For example, [cutoff_polyaft].

MIDI CC values range from 0 to 127 whilst the units of the targets that can
be modulated vary widely.  In many cases, 128 steps may be exactly what you need.
However, adjustments can be made to the degree each step has using a number of
additional modifiers - again, see the [opcode list] for details of where they can be used:

- [curveccN](curveccN.md)
- [smoothccN](smoothccN.md)
- [stepccN](stepccN.md)

## Examples

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

[cutoff_ccN]:          ../opcodes/cutoff.md
[cutoff_polyaft]:      ../opcodes/cutoff.md
[ampeg_releaseccN]:    ../opcodes/ampeg_release.md
[fileg_vel2depth]:     ../opcodes/fileg_vel2depth.md
[delay_samples_onccN]: ../opcodes/delay_samples.md
[opcode list]:         ../opcodes/index.md
[extended MIDI CCs]:   ../extensions/midi_ccs.md
[width]:               ../opcodes/width.md
[headers]:             ../headers/index.md
[SFZ1]:                ../tutorials/sfz1_modulations.md
[SFZ2]:                ../tutorials/sfz2_modulations.md