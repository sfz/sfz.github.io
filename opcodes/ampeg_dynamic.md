---
layout: "sfz/opcode"
opcode_name: "ampeg_dynamic"
---
When 1, causes envelope durations to be recalculated when a MIDI CC message
modulating those envelopes is received. When 0, envelope durations are
calculated only at the start of the note.

## Examples

```
ampeg_dynamic=1
ampeg_dynamic=0
```
