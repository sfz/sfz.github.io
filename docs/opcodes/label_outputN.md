---
template: "sfz/opcode.j2"
opcode_name: "label_outputN"
---
Used under the ‹[control]› header.

## Example

```sfz
<control>
// Keep output labels short
label_output0=Snare
label_output1=Kick Drum

<master>
output=0
// ...

<master>
output=1
// ...
```


[control]: ../headers/control.md
