---
layout: "sfz/opcode"
lang: "en"
opcode_name: "effect1"
---

Effects handling varies across SFZ versions. In [SFZ v1] only effect1
and [effect2] opcodes were available and only at [‹region›] level.
In [SFZ v2] the [<effects>] header was added, and at least some Cakewalk
products also supported [effect3] and [effect4]. ARIA uses the <effects>
header as well, with the MDA effects built in and the possibility to
support vendor-specific effects as well.

## Example

```
effect1=100
```
