---
template: "sfz/opcode.j2"
opcode_name: "pan_keytrack"
---
Positive values mean higher notes are panned more to the right, negative means
higher notes are panned more to the left.
In most cases, this will be a small value. The note at which this is centered
(at which the effect of pan_keytrack is 0) is set using [pan_keycenter].

## Examples

```sfz
pan_keytrack=8
pan_keytrack=-1.3
```


[pan_keycenter]: pan_keycenter.md
