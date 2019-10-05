---
layout: "sfz/opcode"
lang: "en"
opcode_name: "off_shape"
---
See also [off_time](off_time) and [off_curve](off_curve).

0 is linear, positive values are slower curves
(in the case of fading out a region, that means it will initially not fade out
much, and most of the fadeout will happen towards the end of the [off_time](off_time)
period) and negative values faster (quick initial fadeout with quiet tail fading
more slowly). Past 10 or -10, there's little difference - at that point,
the envelope is practically a horizontal line and a vertical line (if positive)
or a vertical line followed by a horizontal line (if negative). Default is 0.

## Examples

```
off_shape=2.1
off_shape=-3.8
```
