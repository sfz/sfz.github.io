---
layout: "sfz/opcode"
opcode_name: "off_by"
---
When a new region with a group number equal to `off_by` plays,
this region will be turned off.

## Examples

```
<region>
sample=*sine
key=60
group= 1
off_by= 2

<region>
sample=*silence
key=62
group= 2
```

This is used in conjunction with [group](/opcodes/group) to make things
monophonic, but can also be used in other contexts where one sound should cause
another to stop - for example, cymbal chokes.
