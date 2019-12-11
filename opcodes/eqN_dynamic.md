---
layout: "sfz/opcode"
lang: "en"
opcode_name: "eqN_dynamic"
---
When 1, causes parameters for eq band N to be recalculated when a MIDI
CC message modulating that EQ band is received. When 0, EQ parameters
are calculated only at the start of the note.

## Examples

```
eq1_dynamic=1
eq2_dynamic=0
```
