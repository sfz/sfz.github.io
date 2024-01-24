---
template: "sfz/opcode.j2"
opcode_name: "stop_beats"
---
Used in Cakewalk Dimension Pro and DropZone, alongside [delay_beats], to play slices of loops at specific points in the bar.
## Examples
```sfz
delay_beats=1 stop_beats=1.5
delay_beats=25.9922 stop_beats=26.0964  
```
## Practical Considerations

Intended to be a counterpart to [delay_beats] and used in Cakewalk Dimension Pro and DropZone.
This opcode appears to be not implemented in ARIA - it passes the parser in ARIA but seems to
have no effect on its region.

[delay_beats]: delay_beats.md
