---
template: "sfz/opcode.j2"
opcode_name: "transpose"
---
## Examples

```sfz
transpose=3

transpose=-4

transpose=24
```

Uses include creating layered instruments by transposing samples at different
pitches to all play the same note, and (combined with `locc` and `hicc`) octave
selection controls in synthesizer-style instruments.
