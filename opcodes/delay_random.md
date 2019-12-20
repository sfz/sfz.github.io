---
layout: "sfz/opcode"
lang: "en"
opcode_name: "delay_random"
---
If the region receives a note-off message before delay time, the region won't
play. Similar to [delay](delay) otherwise. Like all SFZ `ZZZ_random` opcodes, it is
computed when the region is triggered and does not change until it stops
playing.

## Examples

```
delay_random=1

delay_random=0.2
```
