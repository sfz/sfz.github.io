---
layout: "sfz/opcode"
opcode_name: "count"
---
If this opcode is specified, the sample will play as many times as defined.
Envelope generators will not be retriggered on sample restart.
When this opcode is defined, [loop_mode](loop_mode) is automatically set
to ***one_shot***.

count=1 will play the sample once, so it's effectively the same as setting
loop_mode=one_shot.

## Examples

```
count=3

count=2
```

## Practical Considerations

count=0 behaves differently in different SFZ players. ARIA and sfz.dll treat
this the same as if count was not set, and respect loop_mode settings.
However, in Rapture and DropZone and possibly other Cakewalk products,
count=0 will have the same effect as count=1 - essentially set loop_mode
to one_shot and cause the sample to be played once.
