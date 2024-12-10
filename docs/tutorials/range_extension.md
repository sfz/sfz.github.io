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

## Simple extension of closest available sample

Let's say we have only one sampled violin section with the following map, and
we want to be able to play the notes for another octave above the highest
currently avaialble note.

```sfz
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

The simplest way is to just stretch the highest note. Using
lokey, hikey and pitch_keycenter as separate opcodes is
better than using key and transpose, as it allows one region
to cover a wide range of pitches.

```sfz
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

## Filling in missing pitches

In the above case, the range is being stretched upwards, but
the same principle applies if there are notes missing within
the range, whether due to recording errors, or the limitations
of instruments which can't produce all notes of the chromatic
scale.

Let's say we have a simple pentatonic xylophone.

```sfz
<region>sample=c4.wav key=48
<region>sample=d4.wav key=50
<region>sample=f4.wav key=53
<region>sample=g4.wav key=55
<region>sample=a4.wav key=57
<region>sample=c5.wav key=60
<region>sample=d5.wav key=62
<region>sample=f5.wav key=65
<region>sample=g5.wav key=67
<region>sample=a5.wav key=69
<region>sample=c6.wav key=72
```

This would work similar as above, covering every
pitch with the nearest available note. Whether
to stretch up or down when there are two equally
distant notes available is a judgment call. It might
be worth trying both to see which sounds best.
The below example goes up and doesn't extend the range
beyond the highest or lowest available sample, only
fills in the gaps.

```sfz
<region>sample=c4.wav lokey=48 hikey=49 pitch_keycenter=48
<region>sample=d4.wav lokey=50 hikey=51 pitch_keycenter=50
<region>sample=f4.wav lokey=52 hikey=54 pitch_keycenter=53
<region>sample=g4.wav lokey=55 hikey=56 pitch_keycenter=55
<region>sample=a4.wav lokey=57 hikey=58 pitch_keycenter=57
<region>sample=c5.wav lokey=59 hikey=61 pitch_keycenter=59
<region>sample=d5.wav lokey=62 hikey=63 pitch_keycenter=62
<region>sample=f5.wav lokey=64 hikey=66 pitch_keycenter=65
<region>sample=g5.wav lokey=67 hikey=68 pitch_keycenter=67
<region>sample=a5.wav lokey=69 hikey=70 pitch_keycenter=69
<region>sample=c6.wav lokey=71 hikey=72 pitch_keycenter=72
```

## Alternating several samples

The above is good enough in a lot of cases, though it might
become obviously audible that the entire top octave uses
the same sample. We could use the top two or three samples
instead, and alternate them like this:

```sfz
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

```sfz
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

## Recording extra notes

In cases where it's very important to avoid using the same
sample too many times, it's possible to start addressing this
at the recording stage, and record additional samples of the notes
which will need to be stretched. Of course this could be more
work than just recording the target pitches in the first place,
but if the pitches are difficult to produce consistently (for
example are notes that a singer can hit only with considerable
strain) or just physically fall outside the range, it may be a
viable option.

## True legato samples.

Extending the range with true legato samples requires extending the range
for both the previous note (the sw_previous values) and the new note
(the lokey/hikey values). It is important that when transposing a legato
transition sample, not only lokey and hikey must be changed, but lokey,
hikey and sw_previous must all be changed by the same value.

Here is a process which has worked in practice for extending the range of
a legato instrument upwards by a major second by transposing the samples
by a minor third.

* Copy regions with the key to be extended. Add the amount of shift (3 if taking the second-highest and third-lowest note and extending the range by a major second) to sw_previous, lokey and hikey to the copy.
* Copy regions with the sw_previous to be extended (which will include some regions copied in the previous step). Likewise add the amount of shift to sw_previous, lokey and hikey to the copy.
* Delete the regions with sw_previous above the new max range (or could try avoiding copying them in the first step, but this way is probably safer).
* Delete the duplicate regions copied in both of the first two steps.
* Add in regions going from the bottom three values of sw_previous to the notes in the extended range. This is where either some sort of defaults will be needed - using a sample of an ascending octave transition for all intervals over an octave seems to often work fine in practice.
* Add regions going from the new extended notes to the bottom three pitches, as above.

Note that there will be no legato samples covering the widest intervals
from the extended notes to the farthest notes on the other side. If the
instrument has legato samples only recorded within a certain range (for
example only for intervals up to an octave), this isn't going to create
any additional problems that didn't already have to be solved when making
the non-extended legato instruments - so whether defaulting to the
largest interval sampled, triggering a regular sustain or just producing
no sound at all, just do the same when there's no interval wide enough
for a leap to or from an extended note. If an instrument does have every
possible note transition in its range sampled, however (quite possible
for instruments with a small range, such as rebab), the same
compromises are available for the missing intervals in the extended range.
