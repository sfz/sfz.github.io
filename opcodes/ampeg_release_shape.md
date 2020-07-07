---
layout: "sfz/opcode"
opcode_name: "ampeg_release_shape"
---
0 is linear, positive values are slower curves (that means the envelope will
initially not fade out much, and most of the fade will happen towards the end of
the release period) and negative values faster (quick initial fadeout with quiet
tail fading out more slowly).

## Examples

```
ampeg_release_shape=2.1
ampeg_release_shape=-3.8
```
