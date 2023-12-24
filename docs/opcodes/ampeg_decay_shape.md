---
template: "sfz/opcode.j2"
opcode_name: "ampeg_decay_shape"
---
0 is linear, positive values are slower curves (that means the envelope will
initially not decay out much, and most of the decay will happen towards the end
of the decay period) and negative values faster (quick initial decay with quiet
tail decaying more slowly).

## Examples

```sfz
ampeg_decay_shape=2.1
ampeg_decay_shape=-3.8
```

## Graphical representations

As aid to estimate what the values will do, here some examples.
All curves were made at 120bpm with `ampeg_decay=1` and `ampeg_sustain=1`,
note held for 2 seconds. Each vertical line represents 0.5 seconds.

{%-set images = [
  "sine_neg8.jpg",
  "sine_neg3p8.jpg",
  "sine_0.jpg",
  "sine_pos2p1.jpg",
  "sine_pos8.jpg"
] %}
{%-set titles = [
  "ampeg_decay_shape=-8",
  "ampeg_decay_shape=-3.8",
  "ampeg_decay_shape=0",
  "ampeg_decay_shape=2.1",
  "ampeg_decay_shape=8"
] %}
{%-set name = "ampeg_decay_shape" %}
{%-set path = "../../assets/img/ampeg_decay_shape/" %}
{%-import "lightbox.j2" as lightbox with context %}
{{ lightbox.make_gallery(images, titles, name, path) }}
