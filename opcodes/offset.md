---
title: offset
---
The offset used to play the sample, in sample units.

The player will reproduce samples starting with the very first sample in the file,
unless offset is specified. It will start playing the file at the offset sample
in this case. Note that this if this causes the region to play from a point
where the value in the file is not zero, this may result in a click in the audio.
When modulating offset with a MIDI CC, it's generally not possible to ensure the
offset will always land on a near-zero point, so a small [ampeg_attack]((eg_type)_attack)
value can be used to create a quick fade-in and avoid clicks.

##### Examples

```
offset=3000

offset=32425
```

Uses include: having the player skip pre-attack pick noise in guitar samples;
phase-aligning samples from various microphones; skipping the start of a
saxophone sample in legato instruments.

| Type    | Default | Range           |
| ---     | ---     | ---             |
| integer | 0       | 0 to 4294967296 |
