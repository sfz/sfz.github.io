---
template: "sfz/opcode.j2"
title: "loprog / hiprog"
---
MIDI program numbers in the General MIDI spec ranged from 0 to 127 but were
often displayed externally as 1 to 128. This uses the 0 to 127 range.
By default, most DAWs seem to have the program number set to 0, so setting
loprog higher than 0 without sending program change messages results in no sound.

## Examples

```sfz
loprog=0 hiprog=0
loprog=1 hiprog=1
loprog=10 hiprog=12
```
