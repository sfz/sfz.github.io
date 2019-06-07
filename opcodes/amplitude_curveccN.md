---
lang: en
title: amplitude_curveccN
---
Specifies the curve number to be used when modulating the amplitude of the region
with MIDI CC X with [amplitude_onccN](amplitude_onccN).

##### Examples

```
amplitude_curvecc110=15
amplitude_curvecc111=7
```

Here's a scenario using one MIDI CC to control the amplitude of two samples
along two different curves.

```
<region>
amplitude_oncc110=100
amplitude_curvecc110=9
sample=bigger.wav

<region>
amplitude_oncc110=100
amplitude_curvecc110=10
sample=smaller.wav

//The curves for the room ambiences - bigger room first

<curve>curve_index=9
v000=0
v063=0
v127=1

<curve>curve_index=10
v000=0
v063=1
v127=0.1
```
