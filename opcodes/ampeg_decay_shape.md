---
layout: "sfz/opcode"
lang: "en"
opcode_name: "ampeg_decay_shape"
---
0 is linear, positive values are slower curves (that means the envelope will
initially not decay out much, and most of the decay will happen towards the end
of the decay period) and negative values faster (quick initial decay with quiet
tail decaying more slowly). Past 10 or -10, there's little difference - at that
point, the envelope is practically a horizontal line and a vertical line
(if positive) or a vertical line followed by a horizontal line (if negative).
Default is 0.

## Examples

```
ampeg_decay_shape=2.1
ampeg_decay_shape=-3.8
```

## Graphical representations

As aid to estimate what the values will do, here some examples.
All curves were made at 120bpm with `ampeg_decay=1` and `ampeg_sustain=1`,
note held for 2 seconds. Each vertical line represents 0.5 seconds.

<a href="{{ '/assets/img/ampeg_decay_shape/sine_neg8.jpg' | relative_url }}"
	data-toggle="lightbox" data-gallery="ampeg_decay_shape" data-title="ampeg_decay_shape=-8">
	<img src="{{ '/assets/img/ampeg_decay_shape/sine_neg8.jpg' | relative_url }}"
		class="img-fluid" alt="ampeg_decay_shape=-8" style="width:150px">
</a>
<a href="{{ '/assets/img/ampeg_decay_shape/sine_neg3p8.jpg' | relative_url }}"
	data-toggle="lightbox" data-gallery="ampeg_decay_shape" data-title="ampeg_decay_shape=-3.8">
	<img src="{{ '/assets/img/ampeg_decay_shape/sine_neg3p8.jpg' | relative_url }}"
		class="img-fluid" alt="ampeg_decay_shape=-3.8" style="width:150px">
</a>
<a href="{{ '/assets/img/ampeg_decay_shape/sine_0.jpg' | relative_url }}"
	data-toggle="lightbox" data-gallery="ampeg_decay_shape" data-title="ampeg_decay_shape=0">
	<img src="{{ '/assets/img/ampeg_decay_shape/sine_0.jpg' | relative_url }}"
		class="img-fluid" alt="ampeg_decay_shape=0" style="width:150px">
</a>
<a href="{{ '/assets/img/ampeg_decay_shape/sine_pos2p1.jpg' | relative_url }}"
	data-toggle="lightbox" data-gallery="ampeg_decay_shape" data-title="ampeg_decay_shape=2.1">
	<img src="{{ '/assets/img/ampeg_decay_shape/sine_pos2p1.jpg' | relative_url }}"
		class="img-fluid" alt="ampeg_decay_shape=2.1" style="width:150px">
</a>
<a href="{{ '/assets/img/ampeg_decay_shape/sine_pos8.jpg' | relative_url }}"
	data-toggle="lightbox" data-gallery="ampeg_decay_shape" data-title="ampeg_decay_shape=8">
	<img src="{{ '/assets/img/ampeg_decay_shape/sine_pos8.jpg' | relative_url }}"
		class="img-fluid" alt="ampeg_decay_shape=8" style="width:150px">
</a>
