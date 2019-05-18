---
title: amp_veltrack
---
Amplifier velocity tracking, represents how much the amplitude changes with
incoming note velocity.

Volume changes with incoming velocity in a concave shape according to the
following expression:

Amplitude(dB) = 20 log (127^2 / Velocity^2)

The [amp_velcurve_N](amp_velcurve_N) opcodes allow overriding the default
velocity curve, and are useful for making more complex curves than
amp_veltrack allows.

##### Examples

```
amp_veltrack=0

amp_veltrack=100
```

Allowed values are from -100 (which would make velocity 127 notes silent, and
low-velocity notes loud) to 100, but for most practical purposes this paramter
is generally set to either 0 or 100.

| Type  | Default | Range         |
| ---   | ---     | ---           |
| float | 100     | -100 to 100 % |
