---
template: "sfz/opcode.j2"
opcode_name: "lfoN_offset"
---
It's possible for one LFO to use sub waveforms in addition to the main waveform.
This can be used to create more complex LFOs.
Up to 8 waveforms can be used in one LFO.
The second waveform is set by `lfoN_offset2`, the third by `lfoN_offset3` etc.
Using `lfoN_offset` with no number after the offset sets the offset
for the main waveform, which is perhaps not needed very often.
Offset will likely mostly be used on the sub waveforms,
but it can also be set for the main waveform if needed.

## Examples

```sfz
lfo01_offset=0.1
lfo02_offset2=-0.3
lfo03_offset2=0.25
lfo03_offset3=0.419
```

```sfz
lfo01_wave=12 //S&H style LFO used here for randomization
lfo01_pitch=10
lfo01_freq=2
lfo01_freq_oncc1=3

lfo01_wave2=1 //Sine waveform for the secondary waveform
lfo01_ratio2=4 //4 times faster
lfo01_offset2=0 //No offset
lfo01_scale2=0.3 //Shallower than the main wave
```
