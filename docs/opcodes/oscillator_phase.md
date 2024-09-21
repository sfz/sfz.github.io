---
template: "sfz/opcode.j2"
opcode_name: "oscillator_phase"
---
This opcode behaves in two different ways in ARIA: non-negative values from 0 to 360 set the phase in degrees, while any negative value randomizes the phase. As implemented in sfizz as of version 1.2.3 the range is 0 to 1 which behaves the same as ARIA's 0 to 360.
