---
lang: en
title: volume
---
The volume for the region, in decibels.

Range is -144.6 to 6 in the specification,
but some SFZ players can utilize values above 6.

##### Examples

```
volume=-24
volume=0
volume=3.5

volume_oncc11=-24
volume_oncc100=3
volume_oncc50=-12
```

| Version | Type  | Default | Range        |
|   ---   | ---   | ---     | ---          |
|  SFZ v1 | float | 0.0     | -144 to 6 dB |

## Modulation Sources

- Envelope: ✓
- LFO: ✓
- MIDI CC:
  - gain_ccN (SFZ v1), alias gain_onccN (SFZ v2), alias volume_onccN (ARIA)
  - volume_curveccN
  - volume_smoothccN
  - volume_stepccN

