---
lang: en
title: width
---
Only operational for stereo samples, width defines the amount of channel mixing
applied to play the sample.

A `width` value of 0 makes a stereo sample play as if it were mono (adding both
channels and compensating for the resulting volume change). A value of 100 will
make the stereo sample play as original.

Any value in between will mix left and right channels with a part of the other,
resulting in a narrower stereo field image.

Negative width values will reverse left and right channels.

##### Examples

```
width=100 // stereo
width=0   // play this stereo sample as mono
width=50  // mix 50% of one channel with the other
```

| Type  | Default | Range         |
| ---   | ---     | ---           |
| float | 0.0     | -100 to 100 % |

| Modulation Sources |       |             |
| :---               | :---: |    :---     |
| Envelope           |   ✓   |             |
| LFO                |   ✓   |             |
| MIDI CC            |   ✓   | width_onccN |
