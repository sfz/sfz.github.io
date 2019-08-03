---
lang: en
title: lfoN_wave
---
LFO waveform selection. Default is 1 (sine). In ARIA, the waves are:

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

The waveforms supported in the other player engines need to be tested.

##### Examples

```
lfo01_wave=6
lfo02_wave=3
```

Wave 13 is a provision for ARIA to support SFZ 2.0's stepped LFO, equivalent to:

```
lfo01_steps=4
lfo01_freq=1
lfo01_pitch=1200

lfo01_step01_oncc73=100 lfo01_step01_smoothcc73=100
lfo01_step02_oncc73=100 lfo01_step02_smoothcc73=100
lfo01_step03_oncc73=100 lfo01_step03_smoothcc73=100
lfo01_step04_oncc73=100 lfo01_step04_smoothcc73=100
```

| Modulation Sources
|           ---
| Envelope | X |
| LFO      | X |
| MIDI CC  | ✓ | lfoN_wave_onccX
