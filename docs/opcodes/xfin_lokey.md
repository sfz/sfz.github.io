---
layout: "sfz/opcode"
title: "xfin_lokey / xfin_hikey"
---
`xfin_lokey` and `xfin_hikey` define the fade-in keyboard zone for the region.

The volume of the region will be zero for keys lower than or equal to `xfin_lokey`,
and maximum (as defined by the volume opcode)
for keys greater than or equal to `xfin_hikey`.

## Example

```
xfin_lokey=c3 xfin_hikey=c4
```
