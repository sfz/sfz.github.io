---
layout: "sfz/opcode"
opcode_name: "delay_random"
---
If the region receives a note-off message before delay time,
the region won't play, unless [loop_mode] is set to **one_shot**,
which will play the region in ARIA.
Similar to [delay] in general. Computed when the note is triggered.

## Examples

```
delay_random=1

delay_random=0.2
```

## Practical Considerations

In ARIA, Cakewalk and rcg sfz, this is unipolar.


[delay]:     delay
[loop_mode]: loop_mode
