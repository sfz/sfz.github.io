---
---
# eqN_gain

Gain of the equalizer band, in decibels.

In SFZ v2 `eqN_gain_onccX` is an alias for the SFZ v1 `eqN_gainccX`.

##### Examples

```
eq1_gain=-3
eq2_gain=6
eq3_gain=-6

eq1_gain_oncc23=-12
```
##### Notes

When emulating timbral changes when there are not enough dynamic level samples
available, and modulating EQ bands with MIDI CC, this will often be a negative
value for the lowest band, and a positive value for the two higher bands.

| Type  | Default | Range        |
| ---   | ---     | ---          |
| float | 0       | -96 to 24 dB |

| Modulation Sources
|           ---
| Envelope | ✓ |
| LFO      | ✓ |
| MIDI CC  | ✓ | eqN_gain_onccX

`eqN_gain_onccX` uses same type, range and default values.
