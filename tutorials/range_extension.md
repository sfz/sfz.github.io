---
title: Range extension
---

This tutorial describes how to extend the range of an instrument which does not
have samples for all notes in the desired range. This is not complicated, but
there are some downsides to doing it the simple way. Things work the same way
when extending up or down. When there are intermediate pitches missing, for
example when an instrument is sampled every minor third or every octave, there
won't be much choice, though if round robins are available the last approach
can prove useful.

## Simple extension of closest avaialble sample

Let's say we have only one sampled violin section with the following map, and
we want to be able to play the notes for another octave above the highest
currently avaialble note.

```
<region>sample=c4.wav key=48
<region>sample=db4.wav key=49
<region>sample=d4.wav key=50
<region>sample=eb4.wav key=51
<region>sample=e4.wav key=52
<region>sample=f4.wav key=53
<region>sample=gb4.wav key=54
<region>sample=g4.wav key=55
<region>sample=ab4.wav key=56
<region>sample=a4.wav key=57
<region>sample=bb4.wav key=58
<region>sample=b4.wav key=59
<region>sample=c5.wav key=60
```

The simplest way is to just stretch the highest note.

```
<region>sample=c5.wav lokey=60 hikey=72 pitch_keycenter=60
```

Note that ARIA will produce no sound if asked to transpose
a sample more than four octaves up - if that is needed,
create some extra copies of the samples and transpose them
in an audio editor. This accounts for transposition, pitch
bend and any other tuning adjustments, so if an octave of
pitch bend is needed, the maximum effectively avaialable
transpotition becomes an octave less. There is no similar
limitation with downward transposition, though.

## Alternating several samples

The above is good enough in a lot of cases, though it might
become obviously audible that the entire top octave uses
the same sample. We could use the top two or three samples
instead, and alternate them like this:

```
<region>sample=c5.wav key=60
<region>sample=bb4.wav lokey=61 hikey=61 pitch_keycenter=58
<region>sample=b4.wav lokey=62 hikey=62 pitch_keycenter=59
<region>sample=c5.wav lokey=63 hikey=63 pitch_keycenter=60
<region>sample=bb4.wav lokey=64 hikey=64 pitch_keycenter=58
<region>sample=b4.wav lokey=65 hikey=65 pitch_keycenter=59
<region>sample=c5.wav lokey=66 hikey=66 pitch_keycenter=60
```

...and so on, continuing to the highest desired note.

## Using different round robins

However, in the above case, notes a minor third apart will
still use the same sample, and there's a minor third interval
in both minor and major triads. There might not be a good way
to get around this with the sample set we have above, but if we
have two round robins, we could do something like this:

```
<group>
seq_length=2
<region>sample=c4_rr1.wav key=48
<region>sample=db4_rr1.wav key=49
<region>sample=d4_rr1.wav key=50
<region>sample=eb4_rr1.wav key=51
<region>sample=e4_rr1.wav key=52
<region>sample=f4_rr1.wav key=53
<region>sample=gb4_rr1.wav key=54
<region>sample=g4_rr1.wav key=55
<region>sample=ab4_rr1.wav key=56
<region>sample=a4_rr1.wav key=57
<region>sample=bb4_rr1.wav key=58
<region>sample=b4_rr1.wav key=59
<region>sample=c5_rr1.wav key=60
<region>sample=bb4_rr2.wav lokey=61 hikey=61 pitch_keycenter=58
<region>sample=b4_rr2.wav lokey=62 hikey=62 pitch_keycenter=59
<region>sample=c5_rr2.wav lokey=63 hikey=63 pitch_keycenter=60
<region>sample=bb4_rr1.wav lokey=64 hikey=64 pitch_keycenter=58
<region>sample=b4_rr1.wav lokey=65 hikey=65 pitch_keycenter=59
<region>sample=c5_rr1.wav lokey=66 hikey=66 pitch_keycenter=60
<region>sample=bb4_rr2.wav lokey=67 hikey=67 pitch_keycenter=58
<region>sample=b4_rr2.wav lokey=68 hikey=68 pitch_keycenter=59
<region>sample=c5_rr2.wav lokey=69 hikey=69 pitch_keycenter=60
<region>sample=bb4_rr1.wav lokey=70 hikey=70 pitch_keycenter=58
<region>sample=b4_rr1.wav lokey=71 hikey=71 pitch_keycenter=59
<region>sample=c5_rr1.wav lokey=72 hikey=72 pitch_keycenter=60

<group>
seq_length=2
seq_position=2
<region>sample=c4_rr2.wav key=48
<region>sample=db4_rr2.wav key=49
<region>sample=d4_rr2.wav key=50
<region>sample=eb4_rr2.wav key=51
<region>sample=e4_rr2.wav key=52
<region>sample=f4_rr2.wav key=53
<region>sample=gb4_rr2.wav key=54
<region>sample=g4_rr2.wav key=55
<region>sample=ab4_rr2.wav key=56
<region>sample=a4_rr2.wav key=57
<region>sample=bb4_rr2.wav key=58
<region>sample=b4_rr2.wav key=59
<region>sample=c5_rr2.wav key=60
<region>sample=bb4_rr1.wav lokey=61 hikey=61 pitch_keycenter=58
<region>sample=b4_rr1.wav lokey=62 hikey=62 pitch_keycenter=59
<region>sample=c5_rr1.wav lokey=63 hikey=63 pitch_keycenter=60
<region>sample=bb4_rr2.wav lokey=64 hikey=64 pitch_keycenter=58
<region>sample=b4_rr2.wav lokey=65 hikey=65 pitch_keycenter=59
<region>sample=c5_rr2.wav lokey=66 hikey=66 pitch_keycenter=60
<region>sample=bb4_rr1.wav lokey=67 hikey=67 pitch_keycenter=58
<region>sample=b4_rr1.wav lokey=68 hikey=68 pitch_keycenter=59
<region>sample=c5_rr1.wav lokey=69 hikey=69 pitch_keycenter=60
<region>sample=bb4_rr2.wav lokey=70 hikey=70 pitch_keycenter=58
<region>sample=b4_rr2.wav lokey=71 hikey=71 pitch_keycenter=59
<region>sample=c5_rr2.wav lokey=72 hikey=72 pitch_keycenter=60
```

This is obviously much more complicated than the simple version
we started with, and the extra complexity might not be worth it
in many cases, but if needed things can be done this way.
