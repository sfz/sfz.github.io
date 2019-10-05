---
layout: "sfz/opcode"
lang: "en"
title: "xfout_lokey / xfout_hikey"
---
`xfout_lokey` and `xfout_hikey` define the fade-out keyboard zone for the region.

The volume of the region will be maximum (as defined by the volume opcode) for
keys lower than or equal to `xfout_lokey`,
and zero for keys greater than or equal to `xfout_hikey`.

## Example

```
xfout_lokey=c5 xfout_hikey=c6
```
