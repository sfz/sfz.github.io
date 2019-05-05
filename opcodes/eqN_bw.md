---
title: eqN_bw
---
Bandwidth of the equalizer band, in octaves.

In SFZ v2 `eqN_bw_onccX` is an alias for the SFZ v1 `eqN_bwccX`.

##### Examples

```
eq1_bw=1
eq2_bw=0.4
eq3_bw=1.4
```

| Type  | Default | Range              |
| ---   | ---     | ---                |
| float | 1       | 0.001 to 4 octaves |

| Modulation Sources
|           ---
| Envelope | ✓ |
| LFO      | ✓ |
| MIDI CC  | ✓ | eqN_bw_onccX

`eqN_bw_onccX` uses the following values:

| Type  | Default | Range           |
| ---   | ---     | ---             |
| float | 0       | -4 to 4 octaves |
