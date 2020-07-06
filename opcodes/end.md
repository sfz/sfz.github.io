---
layout: "sfz/opcode"
lang: "en"
opcode_name: "end"
---
End is inclusive, so if set to 133000, the sample will play all samples up to and
including 133000. The player will reproduce the whole sample if `end` is not specified.
In other words, in most cases, this does not need to be set.

If end value is -1, the sample will not play. Marking a region end with -1 can
be used to use a silent region to turn off other regions by using the [group](group)
and [off_by](off_by) opcodes. In certain cases, possibly due to ill-formed WAV files,
setting end to -1 can cause errors, but setting [loop_mode](loop_mode) to no_loop or
one_shot seems to be a workaround.

A region which does not play is still triggered, however, which means it can mute
other regions. When using [sample](sample)=*silence it is very useful to set end=-1
(or a zero-duration volume envelope with zero sutain) so the silence region does not
continue to play and does not use up a polyphony voice. Another way to accomplish
the same thing is to use an ampeg envelope wiht zero [ampeg_attack](ampeg_attack),
[ampeg_decay](ampeg_decay) and [ampeg_sustain](ampeg_sustain).

## Examples

```
end=133000
end=4432425
end=-1
```
