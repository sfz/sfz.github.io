---
layout: "sfz/opcode"
lang: "en"
opcode_name: "ampeg_release_zero"
---
When 1, indicates release time is the time it would take to get
from 0dBs to -oo (actually -90 dB as implemented in ARIA), NOT the time
to get from the current sustain to zero 0. Default is 0.

In other words, under default behavior, the release time is fixed, while
setting this to 1 makes the release slope fixed but time will be shorter
when sustain level is lower.

## Examples

```
ampeg_release_zero=1
ampeg_release_zero=0
```
