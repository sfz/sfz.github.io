---
layout: "sfz/opcode"
opcode_name: "lfoN_wave"
---
In [ARIA] it's possible for one LFO to use sub waveforms in addition to the main waveform.
This can be used to create more complex LFOs.
Up to 8 waveforms can be used in one LFO.
The second waveform is set by `lfoN_wave2`, the third by `lfoN_wave3` etc.

[lfoN_ratio2] is important for giving each wave a different
frequency, and [lfoN_scale2] scale [lfoN_offsetX] can optionally be used as well.

In [SFZ v2], the waves are:

<ol start="0">
<li>triangle</li>
<li>sine</li>
<li>75% pulse</li>
<li>square (50% pulse)</li>
<li>25% pulse</li>
<li>12:5% pulse</li>
<li>saw going up</li>
<li>saw going down</li>
</ol>

In [ARIA], the waves are:

<ol start="-1">
<li>deprecated, should not be used, but is random</li>
<li>triangle</li>
<li>sine</li>
<li>75% pulse</li>
<li>square (50% pulse)</li>
<li>25% pulse</li>
<li>12:5% pulse</li>
<li>saw going up</li>
<li>saw going down</li>
<li>used in Chipsounds</li>
<li>used in Chipsounds</li>
<li>future user LFO</li>
<li>future user LFO</li>
<li>random sample & hold, generating a random value between -1 and 1 twice per period</li>
<li>stepped LFO</li>
</ol>

Triangle is the default waveform in ARIA, though the SFZ1 LFOs in ARIA use the sine as
the default waveform. The default waveforms in Cakewalk products or other SFZ players
have not been tested.

The waveforms supported in the other player engines need to be tested.

## Examples

```
lfo01_wave=6
lfo02_wave=3
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

Wave 13 is a provision for ARIA to support SFZ 2.0's [stepped LFO], equivalent to:

```
lfo01_steps=4
lfo01_freq=1
lfo01_pitch=1200

lfo01_step01_oncc73=100 lfo01_step01_smoothcc73=100
lfo01_step02_oncc73=100 lfo01_step02_smoothcc73=100
lfo01_step03_oncc73=100 lfo01_step03_smoothcc73=100
lfo01_step04_oncc73=100 lfo01_step04_smoothcc73=100
```


[lfoN_ratio2]:  lfoN_ratio
[lfoN_scale2]:  lfoN_scale
[lfoN_offsetX]: lfoN_offsetX
[stepped LFO]:  lfoN_steps
[ARIA]:         ./?v=aria
[SFZ v2]:       ./?v=2
