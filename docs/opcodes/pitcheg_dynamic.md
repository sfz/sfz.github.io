---
template: "sfz/opcode.j2"
opcode_name: "pitcheg_dynamic"
---
When 1, causes envelope segment durations and sustain level to be recalculated when a MIDI CC message modulating those envelopes is received.
When 0, envelope segment durations and sustain level are calculated only at the start of the particular envelope segment.

## Examples

```sfz
pitcheg_dynamic=1
pitcheg_dynamic=0
```
