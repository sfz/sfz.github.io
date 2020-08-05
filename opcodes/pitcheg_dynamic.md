---
layout: "sfz/opcode"
opcode_name: "pitcheg_dynamic"
---
When 1, causes envelope durations to be recalculated when a MIDI CC message
modulating those envelopes is received. When 0, envelope durations are
calculated only at the start of the note.

## Examples

```
pitcheg_dynamic=1
pitcheg_dynamic=0
```
