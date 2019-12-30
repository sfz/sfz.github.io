---
layout: "sfz/opcode"
lang: "en"
opcode_name: "delay_random"
---
If the region receives a note-off message before delay time,
the region won't play. Similar to [delay](/opcodes/delay) otherwise.
Computed when the note is triggered.

## Examples

```
delay_random=1

delay_random=0.2
```
