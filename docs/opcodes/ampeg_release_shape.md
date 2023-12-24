---
layout: "sfz/opcode"
opcode_name: "ampeg_release_shape"
---
0 is linear, positive values are slower curves (that means the envelope will
initially not fade out much, and most of the fade will happen towards the end of
the release period) and negative values faster (quick initial fadeout with quiet
tail fading out more slowly).

## Examples

```
ampeg_release_shape=2.1
ampeg_release_shape=-3.8
```

{%-assign images  = "sine_neg8.jpg,sine_neg3p8.jpg,sine_0.jpg,sine_pos2p1.jpg,sine_pos8.jpg" | split: ','-%}
{%-assign titles  = "ampeg_decay_shape=-8,ampeg_decay_shape=-3.8,ampeg_decay_shape=0,ampeg_decay_shape=2.1,ampeg_decay_shape=8" | split: ','-%}
{%-assign gallery = "ampeg_release_shape"-%}
{%-assign path    = "/assets/img/ampeg_decay_shape/"-%}
{%-include lightbox_gallery.liquid const_images=images const_titles=titles const_gallery=gallery const_path=path-%}
