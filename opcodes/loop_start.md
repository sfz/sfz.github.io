---
layout: sfz/opcode
lang: en
title: loop_start
---
If `loop_start` is not specified and the sample has a loop defined, the SFZ player
will use the start point of the first loop defined in the file. That means for
files with one loop, `loop_start` does not usually need to be set, as it's generally
more practical to define loop points in an audio editor where they can be checked
for smoothness, crossfaded if necessary etc.

If `loop_start` is specified, it will be used instead the loop start point defined
in the sample. For files which have multiple loops defined, this is the only way
to get anything other than the first defined loop to play.

This opcode will not have any effect if [loop_mode](loop_mode) is set
to ***no_loop***.

##### Examples

```
loop_start=4503

loop_start=12445
```
