---
template: "sfz/opcode.j2"
opcode_name: "egN_depth_lfoX"
---

## Examples

Modulate the scale of lfo1's effect on cutoff and pan, from 0% to 200%, over the course of 4 seconds:

```sfz
<region>
sample=*saw
cutoff=800

lfo1_freq=2
lfo1_cutoff=1200    // will be modulated from 0 to 2400 (200%)
lfo1_pan=50         // will be modulated from 0 to 100  (200%)

eg1_level0=0
eg1_time1=4 eg1_level1=1
eg1_sustain=1
eg1_depth_lfo1=200  //..as eg1's move from 0 to 1 scales lfo1's effect from 0 to 200%
```

_NB. Tested with Aria/Sforzando_
