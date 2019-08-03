---
lang: en
title: xfout_lovel / xfout_hivel
---
Fade out control, based on velocity.

`xfout_lokey` and `xfout_hikey` define the fade-out velocity range for the region.

The volume of the region will be maximum (as defined by the volume opcode) for
velocities lower than or equal to `xfout_lovel`, and zero for velocities
greater than or equal to `xfout_hivel`.

##### Example

```
xfout_lovel=32 xfout_hivel=63
```

| Type    | Default         | Range    |
| ---     | ---             | ---      |
| integer | xfout_lovel=127 | 0 to 127 |
|         | xfout_hivel=127 |          |
