---
layout: "sfz/opcode"
opcode_name: "set_hdccN"
---
Sets a default initial value for MIDI CC number X using a floating point value,
when the instrument is initially loaded.

Used under the ‹[control](/headers/control)› header.

`set_realccN` is a deprecated alias for `set_hdccN`.

## Examples

```
<control> set_hdcc16=0.5
<master> amplitude_oncc16=100
<region> sample=*sine
```
