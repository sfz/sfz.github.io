---
layout: "sfz/opcode"
opcode_name: "note_offset"
---
This opcode tells SFZ to shift all incoming MIDI data by the specified number of
notes - basically like octave_offset but measured in half-steps instead of octaves.
It should be used under the ‹[control](/headers/control)› header.

## Example

```
note_offset=-3
```

