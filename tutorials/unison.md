---
title: Unison
lang: en
---

This tutorial describes various methods of using one set of samples to emulate
the sound of larger numbers of instruments - making a small ensemble sound
larger, using one set of samples for both first and second violins, automatically
multitracking guitars, synthesizer oscillator unison etc.

## Transposition

Let's say we have only one sampled violin section, and need to use both first and
second violins. Using just one octave of range for simplicity, this is our first
violins example:

```
<global>
<region>sample=c4.wav lokey=48 hikey=48 pitch_keycenter=48
<region>sample=db4.wav lokey=49 hikey=49 pitch_keycenter=49
<region>sample=d4.wav lokey=50 hikey=50 pitch_keycenter=50
<region>sample=eb4.wav lokey=51 hikey=51 pitch_keycenter=51
<region>sample=e4.wav lokey=52 hikey=52 pitch_keycenter=52
<region>sample=f4.wav lokey=53 hikey=53 pitch_keycenter=53
<region>sample=gb4.wav lokey=54 hikey=54 pitch_keycenter=54
<region>sample=g4.wav lokey=55 hikey=55 pitch_keycenter=55
<region>sample=ab4.wav lokey=56 hikey=56 pitch_keycenter=56
<region>sample=a4.wav lokey=57 hikey=57 pitch_keycenter=57
<region>sample=bb4.wav lokey=58 hikey=58 pitch_keycenter=58
<region>sample=b4.wav lokey=59 hikey=59 pitch_keycenter=59
<region>sample=c5.wav lokey=60 hikey=60 pitch_keycenter=60
```

Using this for both first and second violins will result in two identical-sounding
sections with the same timbre, but it's easily possible to use the same samples
transposed, and get a different timbre. Instead of using the C4 sample to play C4,
use the Db4 sample transposed down a half step to play C4. Basically,
pitch_keycenter stays the same and.wav lokey and hikey are lowered by 1 for all samples.
Of course, it's not possible to use just key here, and all three of the.wav lokey,
hikey and pitch_keycenter opcodes are needed.

```
<region>sample=c4.wav lokey=47 hikey=47 pitch_keycenter=48
<region>sample=db4.wav lokey=48 hikey=48 pitch_keycenter=49
<region>sample=d4.wav lokey=49 hikey=49 pitch_keycenter=50
<region>sample=eb4.wav lokey=50 hikey=50 pitch_keycenter=51
<region>sample=e4.wav lokey=51 hikey=51 pitch_keycenter=52
<region>sample=f4.wav lokey=52 hikey=52 pitch_keycenter=53
<region>sample=gb4.wav lokey=53 hikey=53 pitch_keycenter=54
<region>sample=g4.wav lokey=54 hikey=54 pitch_keycenter=55
<region>sample=ab4.wav lokey=55 hikey=55 pitch_keycenter=56
<region>sample=a4.wav lokey=56 hikey=56 pitch_keycenter=57
<region>sample=bb4.wav lokey=57 hikey=57 pitch_keycenter=58
<region>sample=b4.wav lokey=58 hikey=58 pitch_keycenter=59
<region>sample=c5.wav lokey=59 hikey=59 pitch_keycenter=60
```

Doing this editing manually on large sample sets would be time-consuming, but
the old tool sfzed allows easily adding, subtracting or multiplying current
parameter values to regions, so it can be a good tool.

This shifts the entire range of the instrument down by a half-step, though. In
order to preserve the correct range, we can remove the transposed notes which
got moved below the lowest pitch the instrument is capable of. That's easy. The
top range is more tricky - if we extend the highest note to cover its original
pitch as well, but then the same sample would be used for the same pitch by
both sections. So, we can instead use the next-to-highest note, transposed a
whole step up. This might not sound very consistent with the rest, but under
these limitations, it can be a reasonable compromise.

```
<region>sample=db4.wav lokey=48 hikey=48 pitch_keycenter=49
<region>sample=d4.wav lokey=49 hikey=49 pitch_keycenter=50
<region>sample=eb4.wav lokey=50 hikey=50 pitch_keycenter=51
<region>sample=e4.wav lokey=51 hikey=51 pitch_keycenter=52
<region>sample=f4.wav lokey=52 hikey=52 pitch_keycenter=53
<region>sample=gb4.wav lokey=53 hikey=53 pitch_keycenter=54
<region>sample=g4.wav lokey=54 hikey=54 pitch_keycenter=55
<region>sample=ab4.wav lokey=55 hikey=55 pitch_keycenter=56
<region>sample=a4.wav lokey=56 hikey=56 pitch_keycenter=57
<region>sample=bb4.wav lokey=57 hikey=57 pitch_keycenter=58
<region>sample=b4.wav lokey=58 hikey=58 pitch_keycenter=59
<region>sample=c5.wav lokey=59 hikey=59 pitch_keycenter=60
<region>sample=b4.wav lokey=60 hikey=60 pitch_keycenter=59
```

In general, transposing downwards will result in a warmer sound, and transposing
upwards will make the sound brighter and thinner. Transposing by more than a half
step can be a good idea. In general, transposing by a minor third is a common way
to create a big change in timbre. Transposing by much more than a minor third
doesn't seem common outside of sound design not intended to be a realistic instrument
emulation.

## Unison

If we put both the original and transposed samples in the same SFZ file, each MIDI
note will trigger two regions, and we now will have the sound of an ensemble which
is twice as large as what was actually sampled.

```
<region>sample=c4.wav lokey=47 hikey=47 pitch_keycenter=48
<region>sample=db4.wav lokey=48 hikey=48 pitch_keycenter=49
<region>sample=d4.wav lokey=49 hikey=49 pitch_keycenter=50
<region>sample=eb4.wav lokey=50 hikey=50 pitch_keycenter=51
<region>sample=e4.wav lokey=51 hikey=51 pitch_keycenter=52
<region>sample=f4.wav lokey=52 hikey=52 pitch_keycenter=53
<region>sample=gb4.wav lokey=53 hikey=53 pitch_keycenter=54
<region>sample=g4.wav lokey=54 hikey=54 pitch_keycenter=55
<region>sample=ab4.wav lokey=55 hikey=55 pitch_keycenter=56
<region>sample=a4.wav lokey=56 hikey=56 pitch_keycenter=57
<region>sample=bb4.wav lokey=57 hikey=57 pitch_keycenter=58
<region>sample=b4.wav lokey=58 hikey=58 pitch_keycenter=59
<region>sample=c5.wav lokey=59 hikey=59 pitch_keycenter=60

<region>sample=db4.wav lokey=48 hikey=48 pitch_keycenter=49
<region>sample=d4.wav lokey=49 hikey=49 pitch_keycenter=50
<region>sample=eb4.wav lokey=50 hikey=50 pitch_keycenter=51
<region>sample=e4.wav lokey=51 hikey=51 pitch_keycenter=52
<region>sample=f4.wav lokey=52 hikey=52 pitch_keycenter=53
<region>sample=gb4.wav lokey=53 hikey=53 pitch_keycenter=54
<region>sample=g4.wav lokey=54 hikey=54 pitch_keycenter=55
<region>sample=ab4.wav lokey=55 hikey=55 pitch_keycenter=56
<region>sample=a4.wav lokey=56 hikey=56 pitch_keycenter=57
<region>sample=bb4.wav lokey=57 hikey=57 pitch_keycenter=58
<region>sample=b4.wav lokey=58 hikey=58 pitch_keycenter=59
<region>sample=c5.wav lokey=59 hikey=59 pitch_keycenter=60
<region>sample=b4.wav lokey=60 hikey=60 pitch_keycenter=59
```

## Unison By Round Robin

For cases where the goal is to emulate overdubbed copies of the same instrument
with the same timbre, rather than different instruments with different timbres,
it's still necessary to avoid triggering the same samples. This can be done
by using different round robins for each simultaneously playing sample. This
is how guitar multitracking is often emulated. Using one note with four round
robins as an example:

```
<group>seq_length=4 key=48
<region>sample=c4_rr1.wav seq_position=1 
<region>sample=c4_rr2.wav seq_position=2
<region>sample=c4_rr3.wav seq_position=3 
<region>sample=c4_rr4.wav seq_position=4 
```

We can create two by offsetting the round robins like this:

```
<group>seq_length=4 key=48
<region>sample=c4_rr1.wav seq_position=1 
<region>sample=c4_rr2.wav seq_position=2
<region>sample=c4_rr3.wav seq_position=3 
<region>sample=c4_rr4.wav seq_position=4 
<group>seq_length=4 key=48
<region>sample=c4_rr1.wav seq_position=4 
<region>sample=c4_rr2.wav seq_position=1
<region>sample=c4_rr3.wav seq_position=2
<region>sample=c4_rr4.wav seq_position=3
```

The group headers aren't necessary and everything could be under one group,
but for organizational purposes, they can make things easier.

Or three, or a maximum of four:

```
<group>seq_length=4 key=48
<region>sample=c4_rr1.wav seq_position=1 
<region>sample=c4_rr2.wav seq_position=2
<region>sample=c4_rr3.wav seq_position=3 
<region>sample=c4_rr4.wav seq_position=4 
<group>seq_length=4 key=48
<region>sample=c4_rr1.wav seq_position=4 
<region>sample=c4_rr2.wav seq_position=1
<region>sample=c4_rr3.wav seq_position=2
<region>sample=c4_rr4.wav seq_position=3
<group>seq_length=4 key=48
<region>sample=c4_rr1.wav seq_position=3 
<region>sample=c4_rr2.wav seq_position=4
<region>sample=c4_rr3.wav seq_position=1
<region>sample=c4_rr4.wav seq_position=2
<group>seq_length=4 key=48
<region>sample=c4_rr1.wav seq_position=2 
<region>sample=c4_rr2.wav seq_position=3
<region>sample=c4_rr3.wav seq_position=4
<region>sample=c4_rr4.wav seq_position=1
```

Note that this will not work well with random round robins, as it's
possible that the same sample will be randomly selected for multiple
regions.

## Width And Detune

Multitracked guitars will often be spread in stereo, as will unison voices
in synthesizers etc. Spreading the above quad-tracked guitar in stereo
is simple:

```
<group>seq_length=4 key=48
pan=-100
<region>sample=c4_rr1.wav seq_position=1 
<region>sample=c4_rr2.wav seq_position=2
<region>sample=c4_rr3.wav seq_position=3 
<region>sample=c4_rr4.wav seq_position=4 
<group>seq_length=4 key=48
pan=100
<region>sample=c4_rr1.wav seq_position=4 
<region>sample=c4_rr2.wav seq_position=1
<region>sample=c4_rr3.wav seq_position=2
<region>sample=c4_rr4.wav seq_position=3
<group>seq_length=4 key=48
pan=-50
<region>sample=c4_rr1.wav seq_position=3 
<region>sample=c4_rr2.wav seq_position=4
<region>sample=c4_rr3.wav seq_position=1
<region>sample=c4_rr4.wav seq_position=2
<group>seq_length=4 key=48
pan=50
<region>sample=c4_rr1.wav seq_position=2 
<region>sample=c4_rr2.wav seq_position=3
<region>sample=c4_rr3.wav seq_position=4
<region>sample=c4_rr4.wav seq_position=1
```

It's also possible to apply slight detuning to each voice. That's probably
not common with guitars, and unnecessary with section recordings where natural
tuning differences will already be captured in the recordings, but it is very
common in synthesizers, and can also be helpful when trying to turn solo
instrument samples into a small section. Detune can even be used by itself
to create multiple voices, and this is an especially viable approach for
synthesizers. The amount of detune, as well as width, can be modulated. Here
is an example of a saw oscillator with seven voices.

```
<region>sample=*saw
<region>pitch_oncc100=20 pan_oncc101=100 sample=*saw
<region>pitch_oncc100=-20 pan_oncc101=-100 sample=*saw
<region>pitch_oncc100=30 pan_oncc101=67 sample=*saw
<region>pitch_oncc100=-30 pan_oncc101=-67 sample=*saw
<region>pitch_oncc100=40 pan_oncc101=33 sample=*saw
<region>pitch_oncc100=-40 pan_oncc101=-33 sample=*saw
```

## Legato

This is just a reminder that with legato, each set of unison samples will
need to have its own polyphony groups.

## Humanization

To be added: randomization of timing, phase and pitch, creating differences in vibrato
and legato between voices.
