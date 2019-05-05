---
title: reverse_loccN / reverse_hiccN
---
If MIDI CC X is between reverse_loccN and reverse_hiccN, the region plays reversed.
Not implemented in ARIA, but an alternative is to use two regions, one with
direction=reverse then switch region with [loccN / hiccN](lo_hiccN).
May have been implemented in some Cakewalk products.

##### Example

```
reverse_locc1=64
reverse_hicc1=127
```
