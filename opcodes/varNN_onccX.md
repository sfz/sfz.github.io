---
layout: sfz/opcode
lang: en
title: varNN_onccX
---
The amount by which MIDI CC X modulates variable NN. The modulation is either
by multiplication or addition, depending on [varNN_mod](varNN_mod) settings.

##### Example

```
var01_oncc11=1
var02_oncc100=0.5
```

Here is how two different CCs could be used, together with [varNN_target](varNN_target) 
(in this case, var01_cutoff as 01 is the variable number and cutoff is the target)
and [varNN_mod](varNN_mod) to control velocity tracking on a filter cutoff:

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
