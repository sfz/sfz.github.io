---
layout: "sfz/opcode"
opcode_name: "egN_ampeg"
---
## Examples

Generate a standard ADSR shape FlexEG envelope
```
<region>
sample=*sine

eg1_time1=1 eg1_level1=1
eg1_time2=1 eg1_level2=.5 eg1_sustain=2
eg1_time3=1 eg1_level3=0

eg1_ampeg=1 //ARIA boolean value, 1=true, 0=false
```
## Practical Considerations

`egN_ampeg` allows the regions envelope to be controlled by the FlexEG: egN completely.
This is only needed for the amplitude envelope, and is a special case.
There is no `egN_pitcheg` or `egN_fileg`, using `egN_pitch` & `egN_cutoffX` is enough.

The FlexEG can also work with the standard ampeg envelope, to achieve this add:

`egN_amplitude=`

The total envelope will be calculated as: `egN` * `ampeg`

It is also possible to use CC modulation:

`egN_amplitude_onccX=`

In order to allow MIDI Note-On velocity to modulate the envelope level, use cc 131:

`eg1_amplitude_oncc131=100`
