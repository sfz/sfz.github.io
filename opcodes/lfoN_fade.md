---
title: lfoN_fade
---
Fade-in time for LFO number N, in seconds. Can be modulated by MIDI CC.
Default is 0.

##### Examples

```
lfo01_fade=0.1
lfo02_fade=1.2
lfo02_fade_oncc21=2.5
```

Can be quite useful for making vibrato sound more realistic on instruments such
as bowed strings, usually combined with [lfoN_delay](lfoN_delay).

| Modulation Sources
|           ---
| Envelope | X |
| LFO      | X |
| MIDI CC  | ✓ | lfoN_fade_onccX
