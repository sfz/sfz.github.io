---
layout: sfz/opcode
lang: en
title: pan_keytrack
---
Positive values mean higher notes are panned more to the right, negative means
higher notes are panned more to the left.
In most cases, this will be a small value. The note at which this is centered
(at which the effect of pan_keytrack is 0) is set using [pan_keycenter](pan_keycenter).

##### Examples

```
pan_keytrack=8
pan_keytrack=-1.3
```
