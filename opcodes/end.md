---
layout: sfz/opcode
lang: en
title: end
---
The endpoint of the sample, in sample units.

The player will reproduce the whole sample if `end` is not specified - in other
words, in most cases, this does not need to be set.

If end value is -1, the sample will not play. Marking a region end with -1 can
be used to use a silent region to turn off other regions by using the [group](group)
and [off_by](off_by) opcodes (though with ARIA extensions,
[sample](sample)=*silence is an easy way to accomplish this also).

##### Examples

```
end=133000
end=4432425
```

| Type    | Default | Range           |
| ---     | ---     | ---             |
| integer | 0       | 0 to 4294967296 |
