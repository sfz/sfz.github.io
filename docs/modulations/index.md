---
title: "Modulations"
---
Modulations which are part of the SFZ1 specification generally uses both the
`_ccN` and `ccN` suffixes, for example [cutoff_ccN] or [ampeg_releaseccN].
Modulations added in the SFZ2 specification generally use `_onccN` instead,
for example [delay_samples_onccN]. This is a source of possible confusion.
As a solution, ARIA and possibly other SFZ2 players allow either `_ccN`, `_onccN`
or `ccN` (with no underscore) to be used for many modulations,
and interpret all of those the same. However, these aliases are not part of
either the SFZ1 and SFZ2 standard, and for maximum compatibility,
it is best to use the standard syntax.

In this section they will be described in a generic way,
to be applied to the various opcode targets.

See also the related tutorials for [SFZ1] and [SFZ2].

- [curveccN](curveccN)
- [smoothccN](smoothccN)
- [stepccN](stepccN)


[cutoff_ccN]:          {{ '/opcodes/cutoff' | relative_url }}
[ampeg_releaseccN]:    {{ '/opcodes/ampeg_release' | relative_url }}
[delay_samples_onccN]: {{ '/opcodes/delay_samples' | relative_url }}
[SFZ1]:                {{ '/tutorials/sfz1_modulations' | relative_url }}
[SFZ2]:                {{ '/tutorials/sfz2_modulations' | relative_url }}
