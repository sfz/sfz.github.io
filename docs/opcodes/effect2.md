---
template: "sfz/opcode.j2"
opcode_name: "effect2"
---

Effects handling varies across SFZ versions. In [SFZ v1] only [effect1] and
[effect2] opcodes were available and only at [‹region›] level.
In [SFZ v2] the [‹effect›] header was added, and [effect3] and [effect4].
ARIA uses the effect header as well, with the MDA effects built in and
the possibility to support vendor-specific effects as well.

## Example

```sfz
effect2=40
```


[‹effect›]: ../headers/effect.md
[‹region›]: ../headers/region.md
[effect1]:  effect1.md
[effect2]:  effect2.md
[effect3]:  effect3.md
[effect4]:  effect4.md
[SFZ v1]:   index.md/?v=1
[SFZ v2]:   index.md/?v=2
