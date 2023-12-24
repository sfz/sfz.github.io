---
title: Epic Drums
---

## Basic Concept

Epic percussion in media music is commonly created by recording large ensembles of large, low-tuned drums (for example taikos) in large, naturally reverberant spaces. The Virtuosity Drums kit includes an "Epic" knob which makes the small, high-tuned jazz kit recorded in a music store sound surprisingly, well, epic. This tutorial explains how that trick works.

Using drum samples at pitches lower than the original recording makes them sound bigger in several ways. One, obviously, the pitch is lower. Two, slowing down the playback
also slows down attack times and lengthens decay tails. This includes any reverb tails captured by the microphones, which means pitching a sound down makes it sound as if
it was recorded in a larger space. However, pitching sounds down also takes away the high end and reduces definition.

Playing a sound at both its original pitch and tuned down an octave is a way to get both at the same time - a large, deep sound with reverb tails twice the length of the
real recording, and the clarity and definition of the originally pitched sample.
This could be done using the [tune] opcode, though [transpose] is likely
more convenient.Here is a very simple example using a single floor tom sample:

```sfz
<region>
sample=Rack_Tom.wav

<region>
transpose=-12
sample=Rack_Tom.wav
```

If the sample maps are modularized using [#include] statements,
it becomes very simple to set up a volume control, and also use [locc] so that
the transposed samples don't use up polyphony voices when their volume is at zero.

```sfz
<master>
amplitude_oncc101=100
locc101=1
#include "sample_maps/rack_tom.sfz"

<master>
amplitude_oncc102=100
locc102=1
transpose=-12
#include "sample_maps/rack_tom.sfz"
```

## Some Pitfalls

This does not work as well with close mics, which don't have much room reverb in the recording. This is why in Virtuosity Drums, the kick and snare mics aren't used with
the Epic control.  With kicks and other low drums, there's also a point of diminishing returns with having a lot of low frequencies, which is one more reason to not apply
this to kick close mics.

Although sample maps can often be reused, as in the above example, instruments which have self-muting behavior, such as hi-hats, or instruments with polyphony limitations
will need separate polyphony [group] numbers for the transposed regions, just as if the transposed regions were separate microphone positions. With [complex muting scenarios] this will result in very large numbers of groups which can be difficult to keep track of, but with simple self-muting it could look like this:

```sfz
<master>
amplitude_oncc101=100
locc101=1
group=1
off_by=1
#include "sample_maps/hi_hat.sfz"

<master>
amplitude_oncc102=100
locc102=1
group=11
off_by=11
transpose=-12
#include "sample_maps/hi_hat.sfz"
```

If the samples include any preroll before the hit, which more distant microphone samples naturally will, transposing down an octave will double the length of that preroll.
This is usually not a problem, but in extreme cases it may be necessary to use [offset]
to reduce the preroll to avoid a flam sound. In Virtuosity Drums, this is done for the hi-hat pedal articulations.

On the topic of flams, this does not work well with flams, buzz rolls and other sounds which do not consist of a single distinct hit. Long rolls and partially
closed hi-hats seem to work fairly well, however. Tambourines, shakers etc. will usually sound quite unnatural with the transposed and untransposed sound appearing as separate entities, but sometimes this can be musically useful.

## Other Uses

Applying this trick to a snare bottom mic usually results in a sound which is not epic, but can be very industrial.

Beyond drums, this could work reasonably well with other instruments. Sounds with fast, distinct attacks will behave more similarly to drums, though at least on principle this could be used with sounds such as sustained bowed strings also. Of course, pitched instruments can be doubled with another note an octave lower without transposition, as long as the lower note also falls in their range. However, transposition an octave down does make the reverb tails twice as long.


[complex muting scenarios]: cymbal_muting.md
[#include]:  ../opcodes/include.md
[group]:     ../opcodes/group.md
[locc]:      ../opcodes/hiccN.md
[offset]:    ../opcodes/offset.md
[transpose]: ../opcodes/transpose.md
[tune]:      ../opcodes/tune.md
