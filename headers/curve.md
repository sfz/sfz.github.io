---
---
# ‹curve›

A header for defining curves for MIDI CC controls. One curve header is used to
define each curve. The values for various points along the curve can then be set,
from v000 to v127. The default is v000=0 and v127=1. Any points along the curve
not defined explicitly will be interpolated linearly between points which are defined.

There are default built-in curves in ARIA. If no curve is specified for a
modulation, curve 0 is used. The built-in ARIA curves are:

0. linear, from 0 to 1
1. bipolar, from -1 to 1 (useful for things such as tuning and panning, used by CC10 panning by default)
2. linear inverted, from 1 to 0
3. bipolar inverted, from 1 to -1
4. concave (used for CC7 volume tracking and amp_veltrack)
5. Xfin power curve
6. Xfout power curve

These can be overwritten, but as they are used by the engine for their normal
functions, it's safer to use [curve_index](/opcodes/sfz_2/curve_index) numbers
of 7 and above for custom curves.

Examples:

```
<curve>curve_index=17
v000=0
v095=1
v127=1

<curve>curve_index=18
v000=0
v095=0.5
v127=1
```
