---
template: "sfz/opcode.j2"
opcode_name: "phase"
---
## Example

```sfz
phase=invert
```

## Practical Considerations

Based on testing in Sforzando, this works with both samples and generated sound
such as sample=sine*, except for sample=noise*. Noise might still be inverted,
but as it's randomly generated separately for each region, playing a noise region
and a phase-inverted noise region at once will still result in noise, not silence.
