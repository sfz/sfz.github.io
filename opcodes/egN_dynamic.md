---
layout: "sfz/opcode"
opcode_name: "egN_dynamic"
---

## Examples

```
<region>
sample=*saw

eg1_ampeg=1     // Create envelope to control amplitude..
eg1_sustain=1
eg1_level1=1
eg1_level2=0
eg1_time2=4     // ..with a release time of 4 seconds

eg1_time2_oncc1=-8  // assign modwheel to modulate release time

eg1_dynamic=1   // 1 = modulation will affect all notes immediately, or 0 (default) = new notes only
```
