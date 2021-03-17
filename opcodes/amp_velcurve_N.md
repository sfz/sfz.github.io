---
layout: "sfz/opcode"
opcode_name: "amp_velcurve_N"
---
This opcode range allows defining a specific point along the amplifier velocity curve.
The value of the opcode indicates the normalized amplitude (0 to 1)
for the specified velocity. N can be from 0 to 127.

The player will interpolate lineraly between specified opcodes for unspecified ones:

```
amp_velcurve_1=0.2 amp_velcurve_3=0.3
// amp_velcurve_2 is calculated to 0.25
```

If amp_velcurve_127 is not specified, the player will assign it the value of 1.

## Examples

There are several common ways to use this opcode. One is to reduce the dynamic range
so that low-velocity notes will still produce a fairly loud sound.

```
// linear, compressed dynamic range
// amplitude changes from 0.5 to 1
amp_velcurve_1=0.5
```

It can also be used to set up a specific velocity response.

```
amp_velcurve_1=0.1
amp_velcurve_63=0.25
amp_velcurve_95=0.5
```

This opcode is also often used with dynamic layers to make each sample play at its full
amplitude at the top of its velocity layer, as shown below for a kick drum with
four dynamic layers. Note that there's no reason to set amp_velcurve_N values for N
below the lovel or above the hivel for a particular region. So, in practice, this often
ends up meaning just setting amp_velcurve_N=1 with N being equal to the hivel value for
each layer.

```
<region>hivel=31 amp_velcurve_31=1 sample=kick_vl1.wav
<region>lovel=32 hivel=63 amp_velcurve_63=1 sample=kick_vl2.wav
<region>lovel=64 hivel=95 amp_velcurve_95=1 sample=kick_vl3.wav
<region>lovel=96 sample=kick_vl4.wav
```

This could also be combined with the first example so that velocity 1 hits will still
be reasonably audible.

```
<region>hivel=31 amp_velcurve_1=0.3 amp_velcurve_31=1 sample=kick_vl1.wav
<region>lovel=32 hivel=63 amp_velcurve_63=1 sample=kick_vl2.wav
<region>lovel=64 hivel=95 amp_velcurve_95=1 sample=kick_vl3.wav
<region>lovel=96 sample=kick_vl4.wav
```

## External Links

- [Online curve generator](http://audio.artribut.de/var/sfz_amp_velcurve_gen.html)
- [Online curve generator v2 (supports negative values)](http://audio.artribut.de/var/sfz_amp_velcurve_gen2.html)
