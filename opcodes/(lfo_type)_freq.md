---
title: (lfo type)_freq
---
LFO frequency, in hertz.

##### Examples

```
amplfo_freq=0.4
amplfo_freq=10
```

Range is 0 to 20 Hertz, according to the SFZ spec, which means audio-rate LFOs,
similar to what is found in some classic hardware synthesizers, are not possible.
Some players may in fact be able to utilize higher rates, but 20 Hz is the upper
limit required by the SFZ specification.

| Type  | Default | Range      |
| ---   | ---     | ---        |
| float | 0       | 0 to 20 Hz |

| Modulation Sources
|           ---
| Envelope | X |
| LFO      | X |
| MIDI CC  | ✓ | (lfo type)_freq_onccX

`(lfo type)_freq_onccX` uses the following values:

| Type  | Default | Range             |
| ---   | ---     | ---               |
| float | 0       | -200 to 200 hertz |
