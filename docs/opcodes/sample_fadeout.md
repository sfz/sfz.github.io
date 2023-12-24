---
layout: "sfz/opcode"
opcode_name: "sample_fadeout"
---
The fadeout end coincides with playback end.

(Source: [Peter L. Jones SFZ page](http://www.drealm.info/sfz/plj-sfz.xhtml))

## Example

```
<region>
sample=4_seconds_c3.wav
loop_mode=no_loop
sample_fadeout=2.5
```

The curve used for fading out is linear.

## Practical Considerations

This opcode is supported in RGC sfz and Cakewalk products, where at least in
DropZone uses sample units instead seconds.
