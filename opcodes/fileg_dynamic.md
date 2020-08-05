---
layout: "sfz/opcode"
opcode_name: "fileg_dynamic"
---
When 1, causes envelope durations to be recalculated when a MIDI CC message
modulating those envelopes is received. When 0, envelope durations are
calculated only at the start of the note.

## Examples

```
fileg_dynamic=1
fileg_dynamic=0
```
