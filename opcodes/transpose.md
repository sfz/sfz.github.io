# transpose

The transposition value for this region which will be applied to the sample.

##### Examples

```
transpose=3

transpose=-4

transpose=24
```

Uses include creating layered instruments by transposing samples at different
pitches to all play the same note, and (combined with `locc` and `hicc`) octave
selection controls in synthesizer-style instruments.

| Type    | Default | Range       |
| ---     | ---     | ---         |
| integer | 0       | -127 to 127 |
