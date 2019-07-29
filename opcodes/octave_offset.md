---
lang: en
title: octave_offset
---
This opcode tells SFZ to shift all incoming MIDI data by the specified octave -
this allows changing IPN notation into MMA, so C4 will be MIDI note 48 instead
of MIDI note 60. It should be used under the <[control](/headers/control)> header.

##### Example

```
octave_offset=-1
```
