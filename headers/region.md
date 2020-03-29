---
title:  "‹region›"
layout: "sfz/header"
---
Inside the definition file, a region starts with the <region\> header. A region
is defined between two <region\> headers, or between a <region\> header and a
<group\> header, or between a <region\> header and the end of the file.

Following the <region\> header one or more opcodes can be defined. The opcodes are
special keywords which instruct the player on what, when and how to play a sample.

Opcodes within a region can appear in any order, and they have to be separated
by one or more spaces or tabulation controls. Opcodes can appear in separated
lines within a region.

Opcodes and assigned opcode values are separated by the equal to sign (=),
without spaces between the opcode and the sign. For instance:

```
sample=trombone_a4_ff.wav
sample=cello_a5_pp_first_take.wav
```

are valid examples, while:

```
sample = cello_a4_pp.wav
```

Is not (note the spaces at the sides of the = sign). Input Controls and
Performance Parameters opcodes are optional, so they might not be present in the
definition file. An 'expectable' default value for each parameter is pre-defined,
and will be used if there's no definition.

Example region definitions:

```
<region> sample=440.wav
```

This region definition instructs the player to play the sample file '440.wav'
for the whole keyboard range.

```
<region> lokey=64 hikey=67 sample=440.wav
```

This region features a very basic set of input parameters (lokey and hikey, which
represent the low and high MIDI notes in the keyboard), and the sample definition.
This instructs the player to play the sample '440.wav',
if a key in the 64-67 range is played.

It is very important to note that all Input Controls defined in a region act
using the AND boolean operator. Consequently, all conditions must be matched for
the region to play. For instance:

```
<region> lokey=64 hikey=67 lovel=0 hivel=34 locc1=0 hicc1=40 sample=440.wav
```

This region definition instructs the player to play the sample '440.wav' if
there is an incoming note event in the 64-67 range AND the note has a velocity
in the 0~34 range AND last modulation wheel (cc1) message was in the 0-40 range.
