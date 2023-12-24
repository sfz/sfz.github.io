---
template: "sfz/opcode.j2"
title: "lotimer / hitimer"
---

Not implemented in ARIA, may have been implemented in some Cakewalk products.
The timer is how long has passed since the last sample had played in the same
group. It is, however, not known whether this is a group header or polyphony group.

## Examples

```sfz
<region>
hitimer=0.25
sample=quick.wav
<region>
lotimer=0.25
sample=slow.wav
```
