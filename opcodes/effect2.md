---
layout: "sfz/opcode"
opcode_name: "effect2"
---

Effects handling varies across SFZ versions. In [SFZ v1] only [effect1] and
[effect2] opcodes were available and only at [‹region›] level.
In [SFZ v2] the [‹effect›] header was added, and [effect3] and [effect4].
ARIA uses the effect header as well, with the MDA effects built in and
the possibility to support vendor-specific effects as well.

## Example

```
effect2=40
```

[effect1]:  effect1
[effect2]:  effect2
[effect3]:  effect3
[effect4]:  effect4
[‹effect›]: /headers/effect
[‹region›]: /headers/region
[SFZ v1]:   /opcodes/?v=1
[SFZ v2]:   /opcodes/?v=2
