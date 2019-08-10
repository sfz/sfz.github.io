---
layout: sfz/opcode
lang: en
title: lfoN_wave2
---
It's possible for one LFO to use sub waveforms in addition to the main waveform.
This can be used to create more complex LFOs. Up to 8 waveforms can be used in
one LFO. This opcode is used to select the waveform type used for the second
waveform for LFO number N, with the same allowed values as [lfoN_wave](lfoN_wave)
normally can use. [lfoN_ratio2](lfoN_ratio) is important for giving the
two waves different frequencies, and [lfoN_scale2](lfoN_scale) scale
[lfoN_offset2](lfoN_offset) can optionally be used as well.

##### Example

```
lfo01_wave2=1
lfo03_wave2=12
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
