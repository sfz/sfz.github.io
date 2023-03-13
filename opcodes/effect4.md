---
layout: "sfz/opcode"
opcode_name: "effect4"
---

Effects handling varies across SFZ versions. In [SFZ v1] only [effect1] and
[effect2] opcodes were available and only at [‹region›] level.
In [SFZ v2] the [‹effect›] header was added, and [effect3] and [effect4].
ARIA uses the effect header as well, with the MDA effects built in and
the possibility to support vendor-specific effects as well.

The below example should work in Cakewalk Rapture.

## Example

```
<group>
sample=../samples/soundfx.wav
...

<region>
...
effect4=50

<effect>
type=filter
bus=fx4
...
```


[‹effect›]: {{ '/headers/effect' | relative_url }}
[‹region›]: {{ '/headers/region' | relative_url }}
[effect1]:  effect1
[effect2]:  effect2
[effect3]:  effect3
[effect4]:  effect4
[SFZ v1]:   ./?v=1
[SFZ v2]:   ./?v=2
