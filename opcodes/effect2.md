---
layout: "sfz/opcode"
lang: "en"
opcode_name: "effect2"
---

Effects handling varies across SFZ versions. In [SFZ v1](/misc/sfz1) only [effect1](effect1)
and effect2 opcodes were available and only at [‹region›](/headers/region) level.
In [SFZ v2](/misc/sfz2) the [‹effect›](/headers/effect) header was added, and [effect3](effect3) and
[effect4](effect4). ARIA uses the effect header as well, with the MDA effects built in and
the possibility to support vendor-specific effects as well.

## Example

```
effect2=40
```
