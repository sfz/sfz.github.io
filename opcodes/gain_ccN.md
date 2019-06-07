---
lang: en
title: gain_onccN
---
Gain applied on MIDI control N, in decibels.

##### Examples

```
gain_cc1=12
```

This will play the sample at unchanged volume when CC1 is at 0,
and apply a 12 dB boost when CC1 is at maximum.

Useful for creating volume controls, an alias for the ARIA extension
[volume_onccN](/opcodes/volume_onccN). Also see the ARIA extension
[amplitude_onccX](/opcodes/amplitude) for another way
to do a simple volume control.

| Type  | Default | Range         |
| ---   | ---     | ---           |
| float | 0.0     | -144 to 48 dB |
