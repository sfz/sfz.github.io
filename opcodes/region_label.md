---
layout: "sfz/opcode"
opcode_name: "region_label"
---
Useful for debugging. In order to work properly, generally needs to be set under
a ‹[region](/headers/region)› header (unlike, for example, [region_volume](/opcodes/region_volume).
If not set, the info tab will display the file path of the most recently played sample.

## Examples

```
group_label=C3 staccato piano RR4
group_label=Snare rimshot 28
```

[region]: /headers/region
