---
lang: en
title: curve_index
---
The number of the defined curve under a <[curve](/headers/curve)> header.
Should be a positive integer.

##### Examples

```
curve_index=9
curve_index=12
```

There are default built-in curves in ARIA. If no curve is specified for
a modulation, curve 0 is used. The built-in ARIA curves are:

0. linear, from 0 to 1
1. bipolar, from -1 to 1 (useful for things such as tuning and panning,
   used by CC10 panning by default)
2. linear inverted, from 1 to 0
3. bipolar inverted, from 1 to -1
4. concave (used for CC7 volume tracking and amp_veltrack)
5. Xfin power curve
6. Xfout power curve

These can be overwritten, but as they are used by the engine for their normal
functions, it's safer to use curve_index numbers of 7 and above for custom curves.
A few curves in an instrument might look like this:

```
<curve>curve_index=7
v000=0
v095=1
v127=1

<curve>curve_index=8
v000=0
v095=0.5
v127=1
```
