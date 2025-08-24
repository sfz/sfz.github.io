---
title: "Modulations"
---

Modulation allows changes to be applied to another opcode value, either at the
time the region is triggered, or in real time whilst the region is playing.

There are several types of modulation _source_:

- "MIDI CC" controllers (this page)
- [Envelope Generators]
- [Low Frequency Oscillators]
- [Note Velocity]

With the exception of [cutoff], the type and units for the modulation source opcode are
the same as the target and the range usually allows the full amount of the target opcode
to be reversed.

Depending on player support, sometimes one modulation source can affect
how another modulation source behaves - specifically for [Note Velocity].

## "MIDI CC" controllers

"MIDI CC" controllers are "attached" to _target_ opcodes by appending `ccN`,
although the syntax for these varies:

- SFZ1 generally uses `_ccN` or `ccN` (for example [cutoff_ccN] or [ampeg_releaseccN]).
- SFZ2 introduces a range of additional modulations using `_onccN` (for example [delay_samples_onccN]),
although the `ccN` and `_ccN` versions may be aliases, depending on implementation.
The [opcode list] provides details of which aliases are available in which player.

ARIA extends some of the modulations with "high definition" values, using `hdccN` -
see [extended MIDI CCs] for details, which also covers "MIDI CC" modulators beyond
the standard MIDI CC number range (i.e. 128 and upwards).

Channel and polyphonic aftertouch are both modulation sources and work much the
same way as MIDI CC controllers.
These use `_chanaft` and `_polyaft` suffixes to the target, for example, [cutoff_polyaft].
Depending on implementation, polyphonic aftertouch may or may not be truly polyphonic.

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

[cutoff]:              ../opcodes/cutoff.md
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
[Envelope Generators]:       envelope_generators.md
[Low Frequency Oscillators]: lfo.md
[Note Velocity]:             vel2.md