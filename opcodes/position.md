---
lang: en
title: position
---
Only operational for stereo samples, `position` defines the position in the stereo
field of a stereo signal, after channel mixing as defined in the [width](width)
opcode.

A value of zero means centered, negative values move the panoramic to the left,
positive to the right.

##### Examples

```
// mix both channels and play the result at left
width=0 position=-100

// make the stereo image narrower and play it
// slightly right
width=50 position=30

// position modulated by MIDI CC 40 width=50 position_oncc40=-50
```

| Type  | Default | Range         |
| ---   | ---     | ---           |
| float | 0.0     | -100 to 100 % |
