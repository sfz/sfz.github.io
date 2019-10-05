---
layout: "sfz/opcode"
lang: "en"
opcode_name: "ampeg_start"
---
## Examples

```
ampeg_start=20
fileg_start=100
```

Setting this to 100 should have the same effect as setting the attack time to 0,
and adding the attack time to the hold time.
Note that in some cases (when the sample starts playing from a point which is
not near zero), setting this to a non-zero value for `ampeg_start` may result in
sample playback starting with an audible click.
