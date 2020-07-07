---
layout: "sfz/opcode"
opcode_name: "fileg_attack_shape"
---
0 is linear. Positive values are slower curves (that means the envelope will
initially not fade in much, and most of the fade in will happen towards the end
of the attack period) and negative values faster (quick initial fade in with the
latter part of the attack stage fading in less). Past 10 or -10, there's little
difference - at that point, the envelope is practically a horizontal line and a
vertical line (if positive) or a vertical line followed by a horizontal line
(if negative).

## Examples

```
ampeg_attack_shape=2.1
ampeg_attack_shape=-3.8
```
