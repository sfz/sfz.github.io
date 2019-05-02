---
---
# eqN_freq

Frequency of the equalizer band, in Hertz.

In SFZ v2 `eqN_freq_onccX` is an alias for the SFZ v1 `eqN_freqccX`.

##### Examples

```
eq1_freq=80
eq2_freq=1000
eq3_freq=4500

eq1_freq_oncc1=80
```

| Type  | Default       | Range         |
| ---   | ---           | ---           |
| float | eq1_freq=50   | 0 to 30000 Hz |
|       | eq2_freq=500  |               |
|       | eq3_freq=5000 |               |

| Modulation Sources
|           ---
| Envelope | ✓ |
| LFO      | ✓ |
| MIDI CC  | ✓ | eqN_freq_onccX

<br>

`eqN_freq_onccX` uses the following values:

| Type  | Default | Range              |
| ---   | ---     | ---                |
| float | 0       | -30000 to 30000 Hz |
