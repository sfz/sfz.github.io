---
template: "sfz/opcode.j2"
opcode_name: "hint_*"
---
ARIA supports specific opcodes in ‹[control]›
which start with "hint", these should be ignored by any other SFZ parser.
Other engines could implement other hints as they wished.

A useful case is `hint_ram_based`=1, which will cause the samples to be
loaded into RAM in their entirety, instead of preloading only starts into
RAM and streaming the rest from disk. This can be useful for preventing
sound dropout with larger instruments on lower-performance systems,
or instruments located on a HDD.


[control]: ../headers/control.md
