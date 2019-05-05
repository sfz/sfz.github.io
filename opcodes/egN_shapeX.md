---
title: egN_shapeX
---
Curve shape before the specified envelope point in envelope N. Default is 0.
0 is linear, positive values are slower and negative values faster.
Past 10 or -10, there's little difference - at that point, the envelope is
practically a horizontal line and a vertical line (if positive) or a
vertical line followed by a horizontal line (if negative).

Shapes values can also be applied to "regular" ampeg, pitch and cutoff envelopes.

##### Examples

```
eg01_shape1=5.2
eg02_shape2=-3.5
ampeg_attack_shape=3.8
ampeg_decay_shape=-1.4
```
