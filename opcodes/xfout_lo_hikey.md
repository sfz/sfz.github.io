---
---
# xfout_lokey / xfout_hikey

Fade out control based on MIDI note number (keyboard position).

xfout_lokey and xfout_hikey define the fade-out keyboard zone for the region.

The volume of the region will be maximum (as defined by the volume opcode) for
keys lower than or equal to xfout_lokey,
and zero for keys greater than or equal to xfout_hikey.

##### Example

```
xfout_lokey=c5 xfout_hikey=c6
```

| Type    | Default         | Range     |
| ---     | ---             | ---       |
| integer | xfout_lokey=127 | 0 to 127  |
|         | xfout_hikey=127 | C-1 to G9 |
