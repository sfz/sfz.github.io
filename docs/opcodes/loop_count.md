---
template: "sfz/opcode.j2"
opcode_name: "loop_count"
---
This is in addition to the time the sample is played unlooped, as normal,
so loop_count=3 will result in the looped part of the sample being played
four times, not three times.

If the sample contains data after the end of the loop, this portion of the
sample will be played after all repetitions of the loop have been completed
(assuming no note-off message had been received by then).

## Examples

```sfz
loop_count=3
loop_count=15
```
