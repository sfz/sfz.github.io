---
template: "sfz/opcode.j2"
opcode_name: "loop_end_offset"
---
The only valid values for this opcode are 0 (default) and -1.
Setting it to -1 subtracts 1 from all loop points in all regions
under the header. This allows WAV files with incorrectly generated
loop points to be used. WAV files which follow the specification
should start numbering their samples at 0, but many audio editors
incorrectly start at 1, which creates a problem if the last sample
is used as the end point of a loop, as is commonly the case.
It should be used under the ‹[control]› header, and affects only
the loop points in WAV metadata - not loop points specified in
the sfz file using opcodes.

## Example

```sfz
loop_end_offset=-1
```


[control]: ../headers/control.md
