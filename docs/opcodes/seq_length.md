---
template: "sfz/opcode.j2"
opcode_name: "seq_length"
---
The player will keep an internal counter creating a consecutive note-on sequence
for each region, starting at 1 and resetting at `seq_length`.

## Example

```sfz
seq_length=3
```

A typical usage for a kick drum with four round robins, and a snare with three
round robins, would look like this:

```sfz
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

An alternative to this is using [lorand / hirand] for
random, instead of sequential, round robins. If there are enough samples
available, both methods can also be combined - the combination is described
on the [lorand / hirand] page. However, lorand/hirand might
not be a good idea to use with samples which have multiple microphone
positions, and sticking to [seq_position] and `seq_length` might be necessary.

## Practical Considerations

In the ARIA implementation of SFZ, sequence position is not tracked together
for all regions, which means sequential round robins is not a practical way
to implement alternating left/right hand or up/down bowing samples.

Setting `seq_length` to 0 behaves the same as setting it to 1 in Cakewalk
players, sfizz and BassMIDI, but a setting of 0 in ARIA will cause each
round robin in the sequence to be played once, and playing more notes once
the counter exceeds the highest [seq_position] will result in no sound.


[lorand / hirand]: lorand.md
[seq_position]:    seq_position.md
