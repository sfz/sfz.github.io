---
title: volume
---
The volume for the region, in decibels.

##### Examples

```
volume=-24
volume=0
volume=3.5
```

Range is -144.6 to 6 in the specification,
but some SFZ players can utilize values above 6.

| Type  | Default | Range        |
| ---   | ---     | ---          |
| float | 0.0     | -144 to 6 dB |

| Modulation Sources |     |              |
| ---                | --- | ---          |
| Envelope           |  ✓  |              |
| LFO                |  ✓  |              |
| MIDI CC            |  ✓  | volume_onccN |
