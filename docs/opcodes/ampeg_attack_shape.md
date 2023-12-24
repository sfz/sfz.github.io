---
template: "sfz/opcode.j2"
opcode_name: "ampeg_attack_shape"
---
0 is linear. Positive values are slower curves (that means the envelope will
initially not fade in much, and most of the fade in will happen towards the end
of the attack period) and negative values faster (quick initial fade in with the
latter part of the attack stage fading in less). Past 10 or -10, there's little
difference - at that point, the envelope is practically a horizontal line and a
vertical line (if positive) or a vertical line followed by a horizontal line
(if negative).

## Examples

```sfz
ampeg_attack_shape=2.1
ampeg_attack_shape=-3.8
```

## Graphical representations

As aid to estimate what the values will do, here some examples.
All curves were made at 120bpm with `ampeg_attack=1`, note held for 2 seconds.
Each vertical line represents 0.5 seconds.

{%-set images = [
  "sine_neg8.jpg",
  "sine_neg3p8.jpg",
  "sine_0.jpg",
  "sine_pos2p1.jpg",
  "sine_pos8.jpg"
] %}
{%-set titles = [
  "ampeg_attack_shape=-8",
  "ampeg_attack_shape=-3.8",
  "ampeg_attack_shape=0",
  "ampeg_attack_shape=2.1",
  "ampeg_attack_shape=8"
] %}
{%-set name = "ampeg_attack_shape" %}
{%-set path = "../../assets/img/ampeg_attack_shape/" %}
{%-import "lightbox.j2" as lightbox with context %}
{{ lightbox.make_gallery(images, titles, name, path) }}
