# seq_length

Sequence length, used together with [seq_position](/opcodes/seq_position)
to use samples as round robins. The player will keep an internal counter
creating a consecutive note-on sequence for each region, starting at 1 and
resetting at `seq_length`. Maximum allowed value is 100.

##### Example

```
seq_length=3
```

A typical usage for a kick drum with four round robins, and a snare with three
round robins, would look like this:

```
<group>key=36 seq_length=4
<region>seq_position=1 sample=kick_rr1.wav
<region>seq_position=2 sample=kick_rr2.wav
<region>seq_position=3 sample=kick_rr3.wav
<region>seq_position=4 sample=kick_rr4.wav

<group>key=38 seq_length=3
<region>seq_position=1 sample=snare_rr1.wav
<region>seq_position=2 sample=snare_rr2.wav
<region>seq_position=3 sample=snare_rr3.wav
```

An alternative to this is using [lorand / hirand](/opcodes/lo_hirand) for
random, instead of sequential, round robins. If there are enough samples
available, both methods can also be combined - the combination is described
on the [lorand / hirand](/opcodes/lo_hirand) page.

| Type    | Default | Range    |
| ---     | ---     | ---      |
| integer | 1       | 1 to 100 |
