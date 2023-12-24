---
layout: "sfz/opcode"
opcode_name: "sample_quality"
---
Defines the interpolation algorithm used for samples.
The higher the setting, the better the algorithm is in terms of sound quality,
at the expense of processing speed.

- 1: linear interpolation
- 2: higher quality interpolation, for example a polynomial interpolator
- 3-10: windowed sinc interpolation, using increasingly larger window sizes
