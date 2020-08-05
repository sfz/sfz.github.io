---
layout: "sfz/opcode"
opcode_name: "lfoN_scale"
---
It's possible for one LFO to use sub waveforms in addition to the main waveform.
This can be used to create more complex LFOs.
Up to 8 waveforms can be used in one LFO.
The second waveform is set by `lfoN_scale2`, the third by `lfoN_scale3` etc.
Using `lfoN_scale` with no number after the scale sets the scale
for the main waveform, which is perhaps not needed very often.
Scale will likely mostly be used on the sub waveforms,
but it can also be set for the main waveform if needed.

## Example

```
lfo01_scale2=0.5
lfo03_scale=0.7
```

```
lfo01_wave=12 //S&H style LFO used here for randomization
lfo01_pitch=10
lfo01_freq=2
lfo01_freq_oncc1=3

lfo01_wave2=1 //Sine waveform for the secondary waveform
lfo01_ratio2=4 //4 times faster
lfo01_offset2=0 //No offset
lfo01_scale2=0.3 //Shallower than the main wave
```
