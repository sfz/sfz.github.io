---
---
# eqN_gain

Gain of the equalizer band, in decibels.

##### Examples

```
eq1_gain=-3
eq2_gain=6
eq3_gain=-6
```

Range is -96 to 24. Default is 0.

When emulating timbral changes when there are not enough dynamic level samples
available, and modulating EQ bands with MIDI CC, this will often be a negative
value for the lowest band, and a positive value for the two higher bands.

| Modulation Sources
|           ---
| Envelope | ✓ |
| LFO      | ✓ |
| MIDI CC  | ✓ | eqN_gain_onccX
