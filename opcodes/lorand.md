---
layout: "sfz/opcode"
title: "lorand / hirand"
---
Random values. The player will generate a new random number on every note-on event,
in the range 0 to 1.

## Examples

```
lorand=0.2 hirand=0.4

lorand=0.4 hirand=1
```

The most common application for this is randomized round robins. Note that
`hirand` for a region should equal `lorand` for the next region - if we had, for
example, `hirand`=0.249 for the first region and `lorand`=0.25 for the next,
that would result in no sound playing if the random number generated was, for
example, 0.2496343491. So, an 0.001 chance of no sound at all - a difficult
problem to spot when testing.

```
<region> hirand=0.25 sample=kick_vl1_rr1.wav
<region> lorand=0.25 hirand=0.5 sample=kick_vl1_rr2.wav
<region> lorand=0.5 hirand=0.75 sample=kick_vl1_rr3.wav
<region> lorand=0.75 sample=kick_vl1_rr4.wav
```

It is also possible to combine this with the [seq_length](/opcodes/seq_length)
and [seq_position](/opcodes/seq_position) opcodes to split round robins
into two subsets, and randomize within each subset. This results in randomization,
but prevents the possibility of the same sample being triggered twice in a row
when the random number generated falls into the same range as the previously
generated number. This can be good when there are a lot (6 or more) round robin
samples available. The code for 8 samples split into two sequential subsets might
look like this:

```
<region> seq_length=2 seq_position=1 hirand=0.25 sample=kick_vl1_rr1.wav
<region> seq_length=2 seq_position=1 lorand=0.25 hirand=0.5 sample=kick_vl1_rr2.wav
<region> seq_length=2 seq_position=1 lorand=0.5 hirand=0.75 sample=kick_vl1_rr3.wav
<region> seq_length=2 seq_position=1 lorand=0.75 sample=kick_vl1_rr4.wav
<region> seq_length=2 seq_position=2 hirand=0.25 sample=kick_vl1_rr5.wav
<region> seq_length=2 seq_position=2 lorand=0.25 hirand=0.5 sample=kick_vl1_rr6.wav
<region> seq_length=2 seq_position=2 lorand=0.5 hirand=0.75 sample=kick_vl1_rr7.wav
<region> seq_length=2 seq_position=2 lorand=0.75 sample=kick_vl1_rr8.wav
```

In the ARIA implementation of SFZ, sequence position is not tracked together for
all regions, which means the above is not a practical way to implement alternating
left/right hand or up/down bowing samples.

Also in ARIA, a separate random number is generated for each region which is playing,
which means lorand/hirand probably should not be used with samples which have
multiple mic positions. Using it can result in triggering spot, overhead and room
mics which do not match, and that can result in phasing issues etc.

There are other potential uses which have nothing to do with round robins, for
example having key fingering noises on a clarinet trigger sometimes
(but not always) when a note is played.
