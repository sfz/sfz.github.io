---
layout: "sfz/opcode"
opcode_name: "lfoN_freq"
---
Can be modulated by MIDI CC, and the modulation can be smoothed
so that rapid controller changes are applied with some "inertia".

## Examples

```
lfo01_freq=2
lfo01_freq_oncc117=8.2
lfo01_freq_smoothcc117=50
lfo02_freq=7
```
