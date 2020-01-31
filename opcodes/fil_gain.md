---
layout: "sfz/opcode"
title: "fil_gain / fil2_gain"
---
`fil_gain` and `fil2_gain` are used by the additional ARIA extension
filter types `lsh` (low shelf), `hsh` (high shelf) and `peq`
(parametric EQ). This allows the two filters to instead be used
as additional EQ bands, on top of SFZ's regular three bands. It
also allows shelving EQ.

## Examples

```
fil_type=lsh
cutoff=150
fil_gain=-6
fil2_type=hsh
cutoff2=80000
fil2_gain=3
```
