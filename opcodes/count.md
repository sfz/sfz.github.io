---
layout: sfz/opcode
lang: en
title: count
---
If this opcode is specified, the sample will restart as many times as defined.
Envelope generators will not be retriggered on sample restart.
When this opcode is defined, [loop_mode](loop_mode) is automatically set
to ***one_shot***.

##### Examples

```
count=3

count=2
```
