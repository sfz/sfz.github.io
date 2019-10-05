---
layout: "sfz/opcode"
lang: "en"
opcode_name: "off_by"
---
When a new region with a group number equal to `off_by` plays,
this region will be turned off.

## Examples

```
off_by=3

off_by=334
```

This is used in conjunction with [group](/opcodes/group) to make things
monophonic, but can also be used in other contexts where one sound should cause
another to stop - for example, cymbal chokes.
