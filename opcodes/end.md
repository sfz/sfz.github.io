---
layout: "sfz/opcode"
lang: "en"
opcode_name: "end"
---
End is inclusive, so if set to 133000, the sample will play all samples up to and
including 133000. The player will reproduce the whole sample if `end` is not specified.
In other words, in most cases, this does not need to be set.

If end value is -1, the sample will not play. Marking a region end with -1 can
be used to use a silent region to turn off other regions by using the [group](group)
and [off_by](off_by) opcodes (though with ARIA extensions,
[sample](sample)=*silence is an easy way to accomplish this also).

## Examples

```
end=133000
end=4432425
```
