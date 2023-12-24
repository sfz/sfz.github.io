---
template: "sfz/opcode.j2"
opcode_name: "note_offset"
---
This opcode tells SFZ to shift all incoming MIDI data by the specified number of
notes - basically like octave_offset but measured in half-steps instead of octaves.
It should be used under the ‹[control]› header.

## Example

```sfz
note_offset=-3
```


[control]: ../headers/control.md
