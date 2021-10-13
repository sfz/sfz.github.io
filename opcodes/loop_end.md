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

## Practical Considerations

Loop endpoints can be modulated using `loop_lengthccN` in rgc sfz, and
`loop_length_onccN` in Cakewalk products - though the term "length" is used, it's
specifically the location of the end point which is modulated.

In ARIA, if `loop_end` is not specified, the sample does not have a loop defined
and `loop_mode` is set to loop_continuous or loop_sustain, the player will loop
through the entire file.

Not directly related to SFZ players, but causing a common error, some audio editors
number samples starting with 1, while according to the WAV file specification the
first sample should be number 0. If one of these editors is used to create sample
files which have loop point information, and the loop endpoint is set to the last
sample of the file, the SFZ player will think the loop endpoint is after the end
of the file, and will return an error. The solution to this is either to reduce the loop
start and endpoints in the WAV file by 1 each, or to set `loop_start` and `loop_end`
in the SFZ.

## Examples

```
loop_end=4503

loop_end=12445
```
