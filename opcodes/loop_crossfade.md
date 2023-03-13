---
layout: "sfz/opcode"
opcode_name: "loop_crossfade"
---
This can be used to add a crossfade to a loop where the looped sample does not have the crossfade "baked into" its audio data.

## Practical Considerations

This opcode is uinimplemented in most SFZ players, but it is avaialble in OpenMPT and sfizz.
sfizz currently uses a sinusoidal formula as default.
```
amp = (1-cos(pi*x))/2
```
OpenMPT's crossfade implementation currently applies a fade halfway between a constant volume fade and constant power fade.
```
amp = pow(x, 0.75)
```
