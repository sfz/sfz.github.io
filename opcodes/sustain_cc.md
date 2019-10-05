---
layout: "sfz/opcode"
lang: "en"
opcode_name: "sustain_cc"
---
ARIA extension used under the ‹[control](/headers/control)› header to reassign
the sustain pedal CC to a non-standard value.

The default is 64, the standard sustain pedal assignment in the MIDI specification.

## Examples

```
sustain_cc=4
sustain_cc=120
```
