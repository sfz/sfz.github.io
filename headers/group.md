# ‹group›

The group header is different than the [group](/opcodes/sfz_1/group) opcode, and
it's important to avoid confusing the two. ARIA adds the [polyphony_group](/extensions/aria/opcodes/polyphony_group)
opcode as an alias for group, to reduce this confusion.

Groups allow entering common parameters for multiple regions. A group is defined
with the <group\> opcode, and the parameters enumerated on it last till the next
group opcode, or till the end of the file.

```
<group>
ampeg_attack=0.04 ampeg_release=0.45
<region> sample=trumpet_pp_c4.wav key=c4
<region> sample=trumpet_pp_c#4.wav key=c#4
<region> sample=trumpet_pp_d4.wav key=d4
<region> sample=trumpet_pp_d#4.wav key=d#4

<group>
ampeg_attack=0.03 ampeg_release=0.42
<region> sample=trumpet_pp_e4.wav key=e4
<region> sample=trumpet_pp_f4.wav key=f4
```

If the same opcode is defined at both the group and region levels, the region
setting overrides the group setting and is used. If an opcode is defined under
the global level and group level but not region, the group setting overrides
the global setting. For example:

```
<group>
ampeg_attack=0.04 ampeg_release=0.45
<region> sample=trumpet_pp_c4.wav key=c4
<region> ampeg_attack=0.05 sample=trumpet_pp_c#4.wav key=c#4
<region> sample=trumpet_pp_d4.wav key=d4
<region> sample=trumpet_pp_d#4.wav key=d#4
```

With the above code, C#4 would use an attack time of 0.05 seconds,
while C4, D4 and D#4 would use the 0.04 seconds set at the group level.
