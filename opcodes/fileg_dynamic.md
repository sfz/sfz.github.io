---
layout: "sfz/opcode"
opcode_name: "fileg_dynamic"
---
When 1, causes envelope segment durations and sustain level to be recalculated when a MIDI CC message modulating those envelopes is received. When 0, envelope segment durations and sustain level are calculated only at the start of the particular envelope segment.

## Examples

```
fileg_dynamic=1
fileg_dynamic=0
```
