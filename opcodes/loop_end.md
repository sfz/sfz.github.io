---
layout: "sfz/opcode"
opcode_name: "loop_end"
---
This is inclusive - the sample specified is played as part of the loop.

If `loop_end` is not specified and the sample has a loop defined, the SFZ player
will use the end point of the first loop defined in the file. That means for
files with one loop, `loop_end` does not usually need to be set, as it's generally
more practical to define loop points in an audio editor where they can be checked
for smoothness, crossfaded if necessary etc.

If `loop_end` is specified, it will be used instead the loop end point defined in
the sample. For files which have multiple loops defined, this is the only way to
get anything other than the first defined loop to play.

This opcode will not have any effect if [loop_mode](loop_mode) is set
to ***no_loop***.

Loop endpoints can be modulated using `loop_lengthccN` in rgc sfz, and
`loop_length_onccN` in Cakewalk products - though the term "length" is used, it's
specifically the location of the end point which is modulated.

## Examples

```
loop_end=4503

loop_end=12445
```
