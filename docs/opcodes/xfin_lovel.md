---
template: "sfz/opcode.j2"
title: "xfin_lovel / xfin_hivel"
---
`xfin_lovel` and `xfin_hivel` define the fade-in velocity range for the region.

The volume of the region will be zero for velocities lower than or equal to
`xfin_lovel`, and maximum (as defined by the volume opcode) for velocities
greater than or equal to `xfin_hivel`.

## Example

```sfz
xfin_lovel=0 xfin_hivel=31
```

This is useful for having velocity-based dynamic layers which are gradually
crossfaded based on velocity, instead of having hard
[lovel / hivel] cutoffs between the layers.


[lovel / hivel]: lovel.md
