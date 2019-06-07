---
lang: en
title: lfoN_wave
---
LFO waveform selection. Default is 1 (sine). In ARIA, the waves are:

-1. deprecated, should not be used, but is random
0. triangle
1. sine
2. 75% pulse
3. square (50% pulse)
4. 25% pulse
5. 12.5% pulse
6. saw going up
7. saw going down
8. used in Chipsounds
9. used in Chipsounds
10. future user LFO
11. future user LFO
12. random sample & hold, generating a random value between -1 and 1 twice per period
13. stepped LFO

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
