---
layout: sfz/opcode
lang: en
title: offset
---
The player will reproduce samples starting with the very first sample in the file,
unless `offset` is specified. It will start playing the file at the `offset`
sample in this case. Note that this if this causes the region to play from a point
where the value in the file is not zero, this may result in a click in the audio.
When modulating offset with a MIDI CC, it's generally not possible to ensure the
offset will always land on a near-zero point, so a small [ampeg_attack](ampeg_attack)
value can be used to create a quick fade-in and avoid clicks.

Also, when using a player with disk streaming, such as Sforzando/ARIA, which does not
load entire samples to memory but instead preloads on only the start (usually about
half a second, following the original Gigasampler method), it is generally not a good
idea to use MIDI CC modulate offset by high values so high that they would cause the
offset to exceeed this buffer. In practice, that means keeping offset_random no higher
than 20000 or so on most systems.

##### Examples

```
offset=3000

offset=32425
```

Uses include: having the player skip pre-attack pick noise in guitar samples;
phase-aligning samples from various microphones; skipping the start of a
saxophone sample in legato instruments.
