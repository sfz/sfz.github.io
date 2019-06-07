---
lang: en
title: lfoN_offset
---
Offset for LFO number N, can also be used with sub waveforms with lfoN_offset2,
lfoN_offset3 etc.

##### Example

```
lfo01_offset=0.1
lfo02_offset2=-0.3
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
