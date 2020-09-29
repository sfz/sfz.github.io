---
layout: "sfz/opcode"
opcode_name: "delay_random"
---
If the region receives a note-off message before delay time,
the region won't play, unless [loop_mode](/opcodes/loop_mode)
is set to one_shot, which will play the region in ARIA.
Similar to [delay](/opcodes/delay) in general. Computed when
the note is triggered.

In ARIA, Cakewalk and rcg sfz, this is unipolar.

## Examples

```
delay_random=1

delay_random=0.2
```
