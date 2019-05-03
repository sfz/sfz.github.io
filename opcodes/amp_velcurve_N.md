---
---
# amp_velcurve_N

User-defined amplifier velocity curve. This opcode range allows defining a
specific curve for the amplifier velocity. The value of the opcode indicates the
normalized amplitude (0 to 1) for the specified velocity. N can be from 0 to 127.

The player will interpolate lineraly between specified opcodes for unspecified ones:

```
amp_velcurve_1=0.2 amp_velcurve_3=0.3
// amp_velcurve_2 is calculated to 0.25
```

If amp_velcurve_127 is not specified, the player will assign it the value of 1.

##### Examples

```
// linear, compressed dynamic range
// amplitude changes from 0.5 to 1
amp_velcurve_1=0.5
```

This is also often used with dynamic layers to make each sample play at its full
amplitude at the top of its velocity layer, as shown below for a kick drum with
four dynamic layers:

```
<region>hivel=31 amp_velcurve_31=1 sample=kick_vl1.wav
<region>lovel=32 hivel=63 amp_velcurve_63=1 sample=kick_vl2.wav
<region>lovel=64 hivel=95 amp_velcurve_95=1 sample=kick_vl3.wav
<region>lovel=96 sample=kick_vl4.wav
```

| Type  | Default                                           | Range  |
| ---   | ---                                               | ---    |
| float | Standard curve (see [amp_veltrack](amp_veltrack)) | 0 to 1 |
