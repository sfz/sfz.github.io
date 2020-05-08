---
layout: "sfz/opcode"
opcode_name: "fil_gain"
title: "fil_gain / fil2_gain"
---
`fil_gain` and `fil2_gain` are used by the additional ARIA extension
filter types `lsh` (low shelf), `hsh` (high shelf) and `peq`
(parametric EQ). This allows the two filters to instead be used
as additional EQ bands, on top of SFZ's regular three bands. It
also allows shelving EQ.

In ARIA, low-shelf or high-shelf EQ "borrows" one of the
filters, while in some Cakewalk plugins it's also possible to have shelf EQ
but it "borrows" from the three EQ bands rather than the two filters,
and uses the [eqN_type](eqN_type) opcode.

## Examples

```
fil_type=lsh
cutoff=150
fil_gain=-6
fil2_type=hsh
cutoff2=80000
fil2_gain=3
```
