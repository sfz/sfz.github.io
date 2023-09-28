---
layout: "sfz/opcode"
opcode_name: "width"
---
A `width` value of 0 makes a stereo sample play as if it were mono (adding both
channels and compensating for the resulting volume change). A value of 100 will
make the stereo sample play as original.

Any value in between will mix left and right channels with a part of the other,
resulting in a narrower stereo field image.

Negative width values will reverse left and right channels.

Note: Range in the table is specified as -100 to 100.  Some players, such as
Aria/Sforzando, do not clamp the range.  Values over 100 expand the stereo
width.  For example, for a mono signal panned 6dB to the left, a value of
200 produces the mono signal panned 12B to the left.

## Examples

```
width=100 // stereo
width=0   // play this stereo sample as mono
width=50  // mix 50% of one channel with the other
```
