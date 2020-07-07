---
layout: "sfz/opcode"
opcode_name: "pitcheg_decay_shape"
---
0 is linear, positive values are slower curves (that means the envelope will
initially not decay out much, and most of the decay will happen towards the end
of the decay period) and negative values faster (quick initial decay with quiet
tail decaying more slowly). Past 10 or -10, there's little difference - at that
point, the envelope is practically a horizontal line and a vertical line
(if positive) or a vertical line followed by a horizontal line (if negative).

## Examples

```
ampeg_decay_shape=2.1
ampeg_decay_shape=-3.8
```
