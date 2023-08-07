---
layout: "sfz/opcode"
opcode_name: "ampeg_dynamic"
---
When 1, causes envelope segment durations and sustain level to be recalculated when a MIDI CC message modulating those envelopes is received. When 0, envelope segment durations and sustain level are calculated only at the start of the particular envelope segment.

## Examples

```
ampeg_dynamic=1
ampeg_dynamic=0
```
