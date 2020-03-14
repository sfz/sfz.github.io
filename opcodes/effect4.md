---
layout: "sfz/opcode"
opcode_name: "effect4"
---
Effects handling varies across SFZ versions. In [SFZ v1](/misc/sfz1) only [effect1](effect1)
and [effect2](effect2) opcodes were available and only at [‹region›](/headers/region) level.
In [SFZ v2](/misc/sfz2) the [‹effect›](/headers/effect) header was added, and at least some Cakewalk
products also supported [effect3](effect3) and effect4. ARIA uses the effect
header as well, with the MDA effects built in and the possibility to
support vendor-specific effects as well.

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
