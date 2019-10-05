---
layout: "sfz/opcode"
lang: "en"
opcode_name: "position"
---
A value of zero means centered, negative values move the panoramic to the left,
positive to the right.

## Examples

```
// mix both channels and play the result at left
width=0 position=-100

// make the stereo image narrower and play it
// slightly right
width=50 position=30

// position modulated by MIDI CC 40 width=50 position_oncc40=-50
```
