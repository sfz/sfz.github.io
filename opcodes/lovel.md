---
layout: "sfz/opcode"
title: "lovel / hivel"
---
This is obviously useful for instruments with dynamic layers controlled by velocity.
Though dynamic layers can also be controlled by CC, especially for sustained
instruments, `lovel` and `hivel` are the standard way of controlling dynamics for
instruments such as drums and pianos. It is also possible to use `lovel` / `hivel`
to control other things instead, such as articulations - for example, a guitar
could have palm-muted samples on low velocities, and pinch harmonics on velocity 127.

These opcodes will often need to be used with [amp_velcurve_N](/opcodes/amp_velcurve_N),
unless [amp_veltrack](/opcodes/amp_veltrack) is set to 0. The reason for this is
that with default velocity tracking behavior and non-normalized samples (and
there are many reasons why normalizing samples should be avoided), the quiet
velocity layers will be too quiet.

Velocity 0 is a note-off message, so 1 is the lowest usable value with hivel/lovel.

## Example

```
lovel=64 hivel=95
```

An instrument with four velocity-controlled dynamic layers might use `lovel` and
`hivel` like this:

```
<region>hivel=31 amp_velcurve_31=1 sample=kick_vl1.wav
<region>lovel=32 hivel=63 amp_velcurve_63=1 sample=kick_vl2.wav
<region>lovel=64 hivel=95 amp_velcurve_95=1 sample=kick_vl3.wav
<region>lovel=96 sample=kick_vl4.wav
```

The way this would work is the kick_vl1.wav region will play at velocities up
to 31, with volume going gradually from 0 at velocity 0 (so, no sound) to full
volume at velocity 31. The kick_vl2.wav region will play at velocties 32 to 63,
with volume being full at velocity 63 and lower volume (but not zero) at 32.
The kick_vl3 wav region will play at velocites 64 to 95, with full volume at
velocity 95. Finally, the kick_vl4 layer plays at velocities 96 to 127, with no
`amp_velcurve_N` set meaning it will have full volume at velocity 127.
