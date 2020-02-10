---
layout: "sfz/opcode"
opcode_name: "varNN_target"
---
## Example

```
var01_cutoff=4800
var02_pitch=400
```

Here is how this could be used, together with [varNN_mod](varNN_mod) and
[varNN_onccX](varNN_onccX) to control velocity tracking on a filter cutoff:

```
//Lowpass filter
cutoff=120
cutoff_cc102=8400
fil_keytrack=100
resonance=0
resonance_cc103=24
var01_cutoff=4800 //Velocity track
var01_mod=mult
var01_oncc131=1
var01_oncc111=1
```

## Available targets

The list of possible modulation targets is basically the same standard list
as for LFOs or envelopes, though variables can't modulate other modulators,
so it's not currently possible to use a variable to modulate an LFO,
or to modulate another variable.

This list has not been verified by testing. It was created by cutting down the
list of available targets for modulation by LFO. Decim and bitred might not
actually be implemented.
