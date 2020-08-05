---
layout: "sfz/opcode"
opcode_name: "seq_position"
---
This is used together with [seq_length](/opcodes/seq_length) to use samples
as round robins. The player will keep an internal counter creating a consecutive
note-on sequence for each region, starting at 1 and resetting at seq_length.
Maximum allowed value is 100.

## Example

```
seq_length=4 seq_position=2
```

In above example, the region will play on the second note every four notes.

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

An alternative to this is using [lorand / hirand](/opcodes/lorand) for
random, instead of sequential, round robins. If there are enough samples
available, both methods can also be combined - the combination is described on
the [lorand / hirand](/opcodes/lorand) page. However, lorand/hirand might not
be a good idea to use with samples which have multiple microphone positions,
and sticking to seq_position and seq_length might be necessary.

In at least some SFZ players, sequence position is not tracked together for
all regions, which means seq_position is not a practical way to implement
alternating left/right hand or up/down bowing samples.

Some players also match velocity ranges for each step in the sequence, which
can cause problems when the sequence steps do not have the same velocity
layer split points. For example, this can produce occasional silence, depending
on the velocity of incoming MIDI notes, the velocity of the previous MIDI note,
and the current point in the sequence:

```
<global>
seq_length=2
key=48

<group> seq_position=1
<region> lovel=1 hivel=31 sample=*noise
<region> lovel=32 hivel=127 sample=*saw

<group> seq_position=2
<region> lovel=1 hivel=95 sample=*noise
<region> lovel=96 hivel=127 sample=*saw
```

This will also happen in cases where, for example, one step in the
sequence has three velocity layers and the other step has four, as it's
not possible to make the layer split points match then. 

In those players, this is a workaround:

```
<global>
seq_length=2
key=48

<group> seq_position=1
<region> lovel=1 hivel=31 sample=*noise
<region> lovel=32 hivel=95 sample=*saw
<region> lovel=96 hivel=127 sample=*saw

<group> seq_position=2
<region> lovel=1 hivel=31 sample=*noise
<region> lovel=32 hivel=95 sample=*noise
<region> lovel=96 hivel=127 sample=*saw
```
