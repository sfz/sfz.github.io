---
layout: "sfz/opcode"
lang: "en"
opcode_name: "ampeg_attack_shape"
---
0 is linear. Positive values are slower curves (that means the envelope will
initially not fade in much, and most of the fade in will happen towards the end
of the attack period) and negative values faster (quick initial fade in with the
latter part of the attack stage fading in less). Past 10 or -10, there's little
difference - at that point, the envelope is practically a horizontal line and a
vertical line (if positive) or a vertical line followed by a horizontal line
(if negative). Default is 0.

## Examples

```
ampeg_attack_shape=2.1
ampeg_attack_shape=-3.8
```

## Graphical representations
As aid to estimate what the values will do, here some examples.
All curves were made at 120bpm with `ampeg_attack=1`, note held for 2 seconds. Each vertical line represents 0.5 seconds.

![ampeg_attack_shape=-8](/assets/img/ampeg_attack_shape/sin_neg8.jpg)
![ampeg_attack_shape=-3.8](/assets/img/ampeg_attack_shape/sin_neg3p8.jpg)
![ampeg_attack_shape=0](/assets/img/ampeg_attack_shape/sin_0.jpg)
![ampeg_attack_shape=2.1](/assets/img/ampeg_attack_shape/sin_pos2.1.jpg)
![ampeg_attack_shape=8](/assets/img/ampeg_attack_shape/sin_pos8.jpg)