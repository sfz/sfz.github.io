---
layout: "sfz/opcode"
opcode_name: "delay"
---
If a `delay` value is specified, the region playback will be postponed for the
specified time. If the region receives a note-off message before `delay` time,
the region won't play.

Sample playback and all envelope generators' delay stage will start counting
after region delay time - this is the core difference between this and
[ampeg_delay].

## Examples

```
delay=1

delay=0.2
```

Example uses: delaying some regions in a strum or a flam;
delaying regions to emulate more distant microphone positions.

## Practical Considerations

In ARIA, if [loop_mode] is set to **one_shot**, the region will play regardless
of whether a note-off message is received or not.


[ampeg_delay]: ampeg_delay
[loop_mode]:   loop_mode

