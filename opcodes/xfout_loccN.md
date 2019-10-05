---
layout: "sfz/opcode"
lang: "en"
title: "xfout_loccN / xfout_hiccN"
---
`xfout_loccN` and `xfout_hiccN` set the range of values in the MIDI continuous
controller N which will perform a fade-out in the region.

The volume of the region will be maximum (as defined by the volume opcode) for
values of the MIDI continuous controller N lower than or equal to `xfout_loccN`,
and zero for values greater than or equal to `xfout_hiccN`.

## Examples

```
xfout_locc1=64
xfout_hicc1=127
```
