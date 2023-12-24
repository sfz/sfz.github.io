---
template: "sfz/opcode.j2"
title: "reverse_loccN / reverse_hiccN"
---
## Example

```sfz
reverse_locc1=64
reverse_hicc1=127
```

## Practical Considerations

On Cakewalk, the CC does not take effect once region playback started.

Not implemented in ARIA, but an alternative is to use two regions, one with
direction=reverse then switch region with [loccN / hiccN](loccN.md).
