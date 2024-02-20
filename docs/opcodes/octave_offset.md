---
template: "sfz/opcode.j2"
opcode_name: "octave_offset"
---
This opcode tells SFZ to shift all incoming MIDI data by the specified octave -
this allows changing IPN notation into MMA, so C4 will be MIDI note 48 instead
of MIDI note 60. It should be used under the ‹[control]› header.

## Example

```sfz
octave_offset=-1
```


[control]: ../headers/control.md
