---
title: "‹global›"
template: "sfz/header.j2"
---
If the same opcode defined in global is also defined in group or
region, the group or region setting is used. This means global can be used to
set values which are common for most regions in the SFZ file, but if a few
regions need something different, they can override the global setting at a
lower level. Here is a typical example with two opcodes set at the global header
level, some at the group level, and others at the region level. The seq_length
(number of round robins) is set to 4 in global, but as the fourth dynamic layer
only contains three samples, seq_length is set to for that layer at the group
header level.

It is possible to have multiple global headers in one file, at least under
ARIA. As with any other header, anything specified under a global header is
active until another global header is encountered in the SFZ file.

```sfz
<global>loop_mode=one_shot seq_length=4

<group>key=36 hivel=31 amp_velcurve_31=1
<region>seq_position=1 sample=kick_vl1_rr1.wav
<region>seq_position=2 sample=kick_vl1_rr2.wav
<region>seq_position=3 sample=kick_vl1_rr3.wav
<region>seq_position=4 sample=kick_vl1_rr4.wav

<group>key=36 lovel=32 hivel=63 amp_velcurve_63=1
<region>seq_position=1 sample=kick_vl2_rr1.wav
<region>seq_position=2 sample=kick_vl2_rr2.wav
<region>seq_position=3 sample=kick_vl2_rr3.wav
<region>seq_position=4 sample=kick_vl2_rr4.wav

<group>key=36 lovel=64 hivel=95 amp_velcurve_95=1
<region>seq_position=1 sample=kick_vl3_rr1.wav
<region>seq_position=2 sample=kick_vl3_rr2.wav
<region>seq_position=3 sample=kick_vl3_rr3.wav
<region>seq_position=4 sample=kick_vl3_rr4.wav

<group>key=36 lovel=96 seq_length=3
<region>seq_position=1 sample=kick_vl4_rr1.wav
<region>seq_position=2 sample=kick_vl4_rr2.wav
<region>seq_position=3 sample=kick_vl4_rr3.wav
```
