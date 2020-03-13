---
layout: "sfz/opcode"
opcode_name: "eqN_type"
---
## Example

In some Cakewalk plugins it's possible to have shelving EQ by "borrows" from the three EQ bands.
Allowed values are lshelf (low shelf), hshelf (high shelf) and peak (the default EQ band
behavior).

In ARIA, low-shelf or high-shelf EQ "borrows" one of the filters instead, as documented under
the [fil_gain](fil_gain) opcode.

```
<region>
eq1_gain=20
eq1_freq=10000
eq1_bw=1
eq1_type=lshelf
```
