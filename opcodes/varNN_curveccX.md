---
layout: "sfz/opcode"
opcode_name: "varNN_mod"
---
- ***mult***: multiplication, with 1 being full scale - 0 at a CC value of 0,
              and 1 at CC value of 127.
              This is how the [amplitude](amplitude) opcode works.
- ***add***: addition, how [volume](volume), [cutoff](cutoff) and all other
             modulation destinations work by default when modulated.

## Example

```
var01_mod=mult
var02_mod=add
```

Here is how multiplication could be used, together with [varNN_*](varNN_)
(in this case, var01_cutoff as 01 is the variable number and cutoff is the target)
and [varNN_onccX](varNN_onccX) to control velocity tracking on a filter cutoff:

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
