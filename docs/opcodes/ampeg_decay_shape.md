---
layout: "sfz/opcode"
opcode_name: "ampeg_decay_shape"
---
0 is linear, positive values are slower curves (that means the envelope will
initially not decay out much, and most of the decay will happen towards the end
of the decay period) and negative values faster (quick initial decay with quiet
tail decaying more slowly).

## Examples

```
ampeg_decay_shape=2.1
ampeg_decay_shape=-3.8
```

## Graphical representations

As aid to estimate what the values will do, here some examples.
All curves were made at 120bpm with `ampeg_decay=1` and `ampeg_sustain=1`,
note held for 2 seconds. Each vertical line represents 0.5 seconds.

{%-assign images  = "sine_neg8.jpg,sine_neg3p8.jpg,sine_0.jpg,sine_pos2p1.jpg,sine_pos8.jpg" | split: ','-%}
{%-assign titles  = "ampeg_decay_shape=-8,ampeg_decay_shape=-3.8,ampeg_decay_shape=0,ampeg_decay_shape=2.1,ampeg_decay_shape=8" | split: ','-%}
{%-assign gallery = "ampeg_decay_shape"-%}
{%-assign path    = "/assets/img/ampeg_decay_shape/"-%}
{%-include lightbox_gallery.liquid const_images=images const_titles=titles const_gallery=gallery const_path=path-%}
