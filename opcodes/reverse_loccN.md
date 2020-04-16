---
layout: "sfz/opcode"
title: "reverse_loccN / reverse_hiccN"
---
On Cakewalk, the CC does not take effect once region playback started.

Not implemented in ARIA, but an alternative is to use two regions, one with
direction=reverse then switch region with [loccN / hiccN](loccN).

## Example
```
reverse_locc1=64
reverse_hicc1=127
```
