---
layout: "sfz/opcode"
lang: "en"
title: "xfin_loccN / xfin_hiccN"
---
`xfin_loccN` and `xfin_hiccN` set the range of values in the MIDI continuous
controller N which will perform a fade-in in the region.

The volume of the region will be zero for values of the MIDI continuous
controller N lower than or equal to `xfin_loccN`, and maximum (as defined by the
volume opcode) for values greater than or equal to `xfin_hiccN`.

## Examples

```
xfin_locc1=64
xfin_hicc1=127
```

This is used alongside [xfout_loccN / xfout_hiccN](xfout_loccN) to create
crossfaded dynamic layers for sustained instruments, for example to use the mod
wheel to crossfade quiet tuba sustain samples to loud tuba sustain samples.
It could also be used to crossfade wavetable samples, use one control to blend
multiple microphone perspectives etc.
When there are multiple regions under the same note wtih `xfin_loccN`, `xfin_hiccN`,
[xfout_loccN and xfout_hiccN](xfout_loccN) used to determine which regions
are currently heard (and at what volume),
all regions will be triggered - but some of them may play at zero volume,
and therefore be inaudible. In some cases where these controls
are not used for dynamic expressive performance but rather for setting a static
mix (for example of microphone perspectives), it can make sense to use them
alongside [loccN / hiccN](loccN) to keep the regions which would be at zero
volume from being triggered and consuming resources.
