# Master

<master\>

An intermediate level in the header hierarchy, between global and group.
Example:

```
<global>
loop_mode=one_shot
ampeg_attack=0.001
ampeg_decay=0.7
ampeg_sustain=100

<master>
amplitude_cc30=100
offset_cc33=3000
ampeg_sustain_oncc33=-100
<group> key=36
<region>
sample=../Samples/bobobo/bobobo_bass_vl1_rr1.wav hirand=0.250
<region>
sample=../Samples/bobobo/bobobo_bass_vl1_rr2.wav lorand=0.250 hirand=0.500
<region>
sample=../Samples/bobobo/bobobo_bass_vl1_rr3.wav lorand=0.500 hirand=0.750
<region>
sample=../Samples/bobobo/bobobo_bass_vl1_rr4.wav lorand=0.750

<master>
amplitude_cc35=100
offset_cc38=1500
ampeg_sustain_oncc38=-100
<group>key=38
<region>
sample=../Samples/bobobo/bobobo_tenor_l_vl1_rr1.wav hirand=0.250
<region>
sample=../Samples/bobobo/bobobo_tenor_l_vl1_rr2.wav lorand=0.250 hirand=0.500
<region>
sample=../Samples/bobobo/bobobo_tenor_l_vl1_rr3.wav lorand=0.500 hirand=0.750
<region>
sample=../Samples/bobobo/bobobo_tenor_l_vl1_rr4.wav lorand=0.750
```

| SFZ Level: ARIA Extension        |
| -------------------------------- |
| Engines supporting this element: |
| ARIA                           ✓ |
| Expression                     X |
| LinuxSampler                   ✓ |
| Alchemy                        X |
| SFZ Element Type: Header         |
