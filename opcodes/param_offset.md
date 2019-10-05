---
layout: "sfz/opcode"
lang: "en"
opcode_name: "param_offset"
---
Multiples of 100 seem most convenient, because with param_offset=300 that would
put the first parameter on 300, second on 301, third on 302 and so on, but other
integer values can also be used. These then can be used like MIDI CC, but with
numbers above 127. In practice with the Sforzando SFZ player, it appears that
values that result in all the effect parameters falling between 257 and 500 work
best. Higher numbers work, but may not be accessible to DAWs for automation etc.

## Examples

```
param_offset=300
param_offset=400
param_offset=412
```

This is how this can actually be used with Sforzando's built in
MDA Limiter ‹[effect](/headers/effect)›:

```
<control>
label_cc400=Limiter Thresh
label_cc401=Limiter Level

set_cc400=63
set_cc401=63


<effect>
param_offset=400
type=com.mda.Limiter
```
