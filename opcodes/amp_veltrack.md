---
layout: "sfz/opcode"
opcode_name: "amp_veltrack"
math: true
---
With `amp_veltrack` at the default value of 100, volume is modified by the amount
calculated by the following expression, based on incoming velocity.

$$ Gain(v) = 20 * log_{10}[(\frac{v}{127})^2] $$ dB

The [amp_velcurve_N] opcodes allow overriding the default
velocity curve, and are useful for making more complex curves than
`amp_veltrack` allows.

## Examples

```
amp_veltrack=0

amp_veltrack=100
```

Allowed values are from -100 (which would make velocity 127 notes silent, and
low-velocity notes loud) to 100, but for most practical purposes this paramter
is generally set to either 0 or 100.


[amp_velcurve_N]: amp_velcurve_N
