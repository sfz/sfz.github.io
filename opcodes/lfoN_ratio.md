---
---
# lfoN_ratio

It's possible for one LFO to use sub waveforms in addition to the main waveform.
This can be used to create more complex LFOs.
Up to 8 waveforms can be used in one LFO. This opcode is used to set the ratio
between the specified sub waveform and the main waveform. lfoN_ratio2 will set
the ratio for the second waveform etc. Using lfoN_ratio with no number after
the ratio sets the ratio for the main waveform, which is perhaps not needed
very often. Ratio will likely mostly be used on the sub waveforms, but it can
also be set for the main waveform if needed.

##### Example

```
lfo01_ratio2=4
lfo03_ratio=0.321
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
