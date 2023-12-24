---
template: "sfz/opcode.j2"
opcode_name: "offset_mode"
---
An ARIA extension that can be used to set [offset] to a percentage of the
total sample length, instead of being measured in sample units. It
applies to both fixed offset and offset modulated by MIDI CC.

## Examples

```sfz
offset_mode=percent
offset_oncc25=50
```


[offset]: offset.md
