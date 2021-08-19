---
title: Modular SFZ Instruments
---

## Avoiding Duplication

SFZ is not a programming language, and has a structure based on a hierarchy of headers. There are no procedure or function calls which would allow the same block of code to be called from various places in an SFZ file. This can lead to a lot of repetition in large SFZ instruments. As a simple example, here's a polyphony switch in an instrument causing duplication of the sample map.

```
<group>
hicc100=63
<region>key=48 sample=c4.wav
<region>key=49 sample=db4.wav
<region>key=50 sample=d4.wav
<region>key=51 sample=eb4.wav
<region>key=52 sample=e4.wav
<region>key=53 sample=f4.wav
<region>key=54 sample=gb4.wav
<region>key=55 sample=g4.wav
<region>key=56 sample=ab4.wav
<region>key=57 sample=a4.wav
<region>key=58 sample=bb4.wav
<region>key=59 sample=b4.wav
<region>key=60 sample=c5.wav

<group>
locc100=64
group=1
off_by=1
<region>key=48 sample=c4.wav
<region>key=49 sample=db4.wav
<region>key=50 sample=d4.wav
<region>key=51 sample=eb4.wav
<region>key=52 sample=e4.wav
<region>key=53 sample=f4.wav
<region>key=54 sample=gb4.wav
<region>key=55 sample=g4.wav
<region>key=56 sample=ab4.wav
<region>key=57 sample=a4.wav
<region>key=58 sample=bb4.wav
<region>key=59 sample=b4.wav
<region>key=60 sample=c5.wav
```

If we create an SFZ file called sample_map.sfz with the following content:

```
<region>key=48 sample=c4.wav
<region>key=49 sample=db4.wav
<region>key=50 sample=d4.wav
<region>key=51 sample=eb4.wav
<region>key=52 sample=e4.wav
<region>key=53 sample=f4.wav
<region>key=54 sample=gb4.wav
<region>key=55 sample=g4.wav
<region>key=56 sample=ab4.wav
<region>key=57 sample=a4.wav
<region>key=58 sample=bb4.wav
<region>key=59 sample=b4.wav
<region>key=60 sample=c5.wav
```

Then the sample map becomes a reusable module, and the instrument can be decluttered to this:

```
<group>
hicc100=63
#include "sample_map.sfz"

<group>
locc100=64
group=1
off_by=1
#include "sample_map.sfz"
```

## File paths

With large instruments which would be broken down into many files, the included files can be placed in a different
folder or in a subfolder of the folder containing the instruments. Regardless of which file folder the included
files are in, the sample file paths and include file paths will be calculated starting with the folder which contains
the instrument file.

So, if our above example instrument has the main SFZ file, called main.sfz, in a Programs folder under the instrument
root, samples in a Samples folder under that, and the sample_map.sfz is in Programs/mappings, then main.sfz should contain:

```
<group>
hicc100=63
#include "mappings/sample_map.sfz"

<group>
locc100=64
group=1
off_by=1
#include "mappings/sample_map.sfz"
```

The sample_map.sfz file in mappings should have the following contents:

```
<region>key=48 sample=../Samples/c4.wav
<region>key=49 sample=../Samples/db4.wav
<region>key=50 sample=../Samples/d4.wav
<region>key=51 sample=../Samples/eb4.wav
<region>key=52 sample=../Samples/e4.wav
<region>key=53 sample=../Samples/f4.wav
<region>key=54 sample=../Samples/gb4.wav
<region>key=55 sample=../Samples/g4.wav
<region>key=56 sample=../Samples/ab4.wav
<region>key=57 sample=../Samples/a4.wav
<region>key=58 sample=../Samples/bb4.wav
<region>key=59 sample=../Samples/b4.wav
<region>key=60 sample=../Samples/c5.wav
```

This means that opening the main.sfz file will work, but trying to open sample_map.sfz directly would not, as it would
try to locate the samples in a relative path of ../Samples, which exists when starting from Programs, but does not exist
when starting from Programs/modules. This can make testing sample maps somewhat messy, as they need to be moved out of
their "proper" folder if the map needs to be tested by itself, without the rest of the SFZ.

## Nesting

Included files can, themselves, include files. This is not a problem, just avoid circular recursion.

## Other Use Cases

In addition to sample maps, modulations can also be reused. For example, a common set of vibrato controls can be included
for violin samples which need them, but left out for samples which don't, such as harmonics, percussive noises and legato
transitions. Different dynamics controls for long vs. short bowed articulations are also candidates for such treatment.

(Example to be added.)

The same file can also be included in multiple instruments, for example a violin spiccato articulation map can
be used in both a spiccato-only instrument and in a keyswitch instrument which contains other articulations as
well.

Putting each set of round robins inside its own file without defining seq_length inside that file can also be useful for
emulating double-tracking. If the basic non-doubletracked instrument is set up like this:

```
<global>
seq_length=4

<group>
seq_position=1
#include "mappings/palm_mute_rr1_map.sfz"
<group>
seq_position=2
#include "mappings/palm_mute_rr2_map.sfz"
<group>
seq_position=3
#include "mappings/palm_mute_rr3_map.sfz"
<group>
seq_position=4
#include "mappings/palm_mute_rr4_map.sfz"
```

It then becomes very simple to make a doubletracked instrument which uses differnt round robins in the left and right channels:

```
<global>
seq_length=4

<group>
pan=100
seq_position=1
#include "mappings/palm_mute_rr1_map.sfz"
<group>
pan=100
seq_position=2
#include "mappings/palm_mute_rr2_map.sfz"
<group>
pan=100
seq_position=3
#include "mappings/palm_mute_rr3_map.sfz"
<group>
pan=100
seq_position=4
#include "mappings/palm_mute_rr4_map.sfz"

<group>
pan=-100
seq_position=1
#include "mappings/palm_mute_rr2_map.sfz"
<group>
pan=-100
seq_position=2
#include "mappings/palm_mute_rr3_map.sfz"
<group>
pan=-100
seq_position=3
#include "mappings/palm_mute_rr4_map.sfz"
<group>
pan=-100
seq_position=4
#include "mappings/palm_mute_rr1_map.sfz"
```

## Interaction With Define

User-editable parameters, such as MIDI note assignments for drum kits and CC ranges, can also be placed in a separate file such
as the below.

```
#define $KICKKEY 36
#define $SIDESTICKKEY 37
#define $SNAREKEY 38
```

The defined variables can then be used throughout the instrument, and an end user who wants to change the keymap can edit the
file containing the defined numbers without having to search through the entire instrument. In the specific implementation of ARIA,
anything which uses the #defined variables also needs to be placed in the main SFZ file using #include, because of the way ARIA
parses SFZ files, described in more detail under the opcode page.

The same variables can also be defined and redefined multiple times within the same SFZ instrument, as long as everything
containing the defines and everything that uses the defines is added via include, and not part of the main SFZ file itself.

Sometimes copying large chunks of SFZ code and performing search-replace within them is easier than redefining variables comes into
play. There's a balance of when to use include statements and when to just copy some files and use search-replace.
