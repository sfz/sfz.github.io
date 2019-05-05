---
title: xfin_lokey / xfin_hikey
---
Fade in control based on MIDI note (keyboard position).

xfin_lokey and xfin_hikey define the fade-in keyboard zone for the region.

The volume of the region will be zero for keys lower than or equal to xfin_lokey,
and maximum (as defined by the volume opcode)
for keys greater than or equal to xfin_hikey.

##### Example

```
xfin_lokey=c3 xfin_hikey=c4
```

| Type    | Default      | Range     |
| ---     | ---          | ---       |
| integer | xfin_lokey=0 | 0 to 127  |
|         | xfin_hikey=0 | C-1 to G9 |
