---
layout: "sfz/opcode"
opcode_name: "set_hdccN"
---
Sets a default initial value for MIDI CC number N using a floating point value,
when the instrument is initially loaded.

Used under the ‹[control]› header.

## Examples

```
<control> set_hdcc16=0.5
<master> amplitude_oncc16=100
<region> sample=*sine
```

## Practical Considerations

`set_realccN` is a deprecated alias for `set_hdccN`.


[control]: {{ '/headers/control' | relative_url }}
