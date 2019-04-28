---
---
# sample

Possibly the most important opcode, this is the one that tells the sampler which
sample file to actually play. This should include a relative file path from the
folder where the SFZ file is.

In most cases, there will be a sample opcode in every region of an SFZ file,
though not always.

If the sample file is not found, the player will ignore the whole region
contents as there's nothing to paly. Long names and names with blank spaces and
other special characters (excepting the = character) are allowed in the sample
definition.

Getting the sample to play back at the correct pitch is not automatic, and
generally can't be done with the sample opcode alone, even if the file name
includes pitch information. Assuming that the tune or transpose opcodes are not
used to change the pitch, the sample will play unchanged in pitch when a note
equal to the `pitch_keycenter` opcode value is played. If `pitch_keycenter` is not
defined for the region, sample will play unchanged on note 60 (middle C). If
`pitch_keytrack` is set to 0, the sample will also play unchanged in pitch,
regardless of how `pitch_keycenter` is set. If the key opcode is used to define
the range of the sample (instead of `lokey`, `hikey` and `pitch_keycenter`) the
sample will also be unchanged in pitch.

##### Examples

```
sample=A3.wav
sample=..\Samples\close\c4_pp_rr3.wav
```

Each engine can also support custom oscillators. For example, ARIA supports
using this opcode for some basic synthesized sound waves such as:

```
sample=*sine
sample=*noise
```

For cases where we don't want to actually play a sample but want a region to
exist and be played (for example, to mute other sounds when using
[group](/opcodes/sfz1/group) and [off_by](/opcodes/sfz1/off_by),
there's even sample=*silence
