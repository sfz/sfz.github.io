---
title: Drum basics
---
SFZ has a lot of opcodes. No instrument uses all of them, though, and even highly
complicated instruments with thousands of samples will usually only use a dozen
or two different opcodes.

In this guide, we'll talk about the opcodes needed to make a simple drum kit.
If you have some drum samples, a text editor and an SFZ player, this should be
all the knowledge you need to make a working SFZ mapping for those samples.
Most of them will apply to most other instrument types as well. Later, we'll
apply this knowledge to instruments such as piano, guitar, violin and flute.

A very simple instrument to make would be an electronic drum kit with one sample
for each sound. A functional mapping for an entire sampled drum machine using
one-shot samples could be made using only the region header, and two opcodes
[sample] and [key]. With kick, snare
and hi-hat samples on their standard General MIDI notes, this could be the
entire SFZ file:

```
<region>key=36 sample=kick.wav
<region>key=38 sample=snare.wav
<region>key=42 sample=closedhat.wav
```

This would work. Load this into an SFZ player, hit the C on MIDI note 36, and
you get the kick sample playing. However, each sound would play only while a
note is held. With drums it's usually a good idea to play the entire sample, so
a very short note will result in a complete drum hit sounding. We can do that
with the [loop_mode] opcode, which is also used for
looping (as the name implies), but `loop_mode=one_shot` causes the sampler to
play the entire sample from start to end, ignoring note off.

```
<region>key=36 loop_mode=one_shot sample=kick.wav
<region>key=38 loop_mode=one_shot sample=snare.wav
<region>key=42 loop_mode=one_shot sample=closedhat.wav
```

There's no need to set the one_shot for each region, though. We can simplify
our life by using the [‹global›] header like this:

```
<global>loop_mode=one_shot

<region>key=36 sample=kick.wav
<region>key=38 sample=snare.wav
<region>key=42 sample=closedhat.wav
```

This is basically all that's required to take, for example, some of
Wave Alchemy's very nice free samples of TR-808 or Tanzbar drum machines,
and make a working SFZ mapping for them.

*Let's say what we have isn't drum machine samples, but acoustic drum samples.
These sounds will have natural variation between hits - some depending on hit
location, a lot depending on dynamics (how hard the drum is hit), and some just
plain random. Let's ignore controlling hit location for now (drum samples mostly
do ignore it), and focus on the other two. Dynamic variation can be captured by
recording hits of various intensity, and organizing them into dynamic layers,
also called velocity layers.*

If we have an acoustic kick drum sampled at four dynamics - quiet, kind of quiet,
kind of loud and loud - we have four dynamic layers. Let's say the files for
these layers are named like this:

```
kick_vl1.wav
kick_vl2.wav
kick_vl3.wav
kick_vl4.wav
```

To trigger the quiet sample at low MIDI note velocities, we'd use the
[lovel and hivel] opcodes like this:

```
<region>key=36 lovel=0 hivel=31 sample=kick_vl1.wav
```

All four hits with velocity ranges assigned, evenly splitting the full 0 to 127
velocity range into four, would look like this:

```
<region>key=36
lovel=0 hivel=31
sample=kick_vl1.wav
<region>key=36
lovel=32 hivel=63
sample=kick_vl2.wav
<region>key=36
lovel=64 hivel=95
sample=kick_vl3.wav
<region>key=36
lovel=96 hivel=127
sample=kick_vl4.wav
```
This can, again, be simplified. The defalut value for lovel is 0, and for hivel
it's 127, so we don't need to specify setting them to those numbers. Also, we
can use a [‹group›] header to make the key opcode the same
across all four regions:

```
<global>loop_mode=one_shot

<group>key=36
<region>hivel=31 sample=kick_vl1.wav
<region>lovel=32 hivel=63 sample=kick_vl2.wav
<region>lovel=64 hivel=95 sample=kick_vl3.wav
<region>lovel=96 sample=kick_vl4.wav
```

However, the quiet samples will play quieter than they should - because of
standard velocity tracking, each sample would play at full volume if the
velocity was 127, but we actually need each sample to play at full volume at the
velocity which is equal to its hivel value. This can be done in various ways,
and the way we recommend is the [amp_velcurve_N] opcode, like this:

```
<global>loop_mode=one_shot

<group>key=36
<region>hivel=31 amp_velcurve_31=1 sample=kick_vl1.wav
<region>lovel=32 hivel=63 amp_velcurve_63=1 sample=kick_vl2.wav
<region>lovel=64 hivel=95 amp_velcurve_95=1 sample=kick_vl3.wav
<region>lovel=96 sample=kick_vl4.wav
```

Let's say that each dynamic layer also contains four round robins - four samples
with roughly the same dynamic. This allows us to include some variation, and
sound more natural - fast parts won't sound like a "machine gun". There are two
basic ways to put round robins to use. One is to use the [seq_length]
and [seq_position] opcodes, like this:

```
<global>loop_mode=one_shot

<group>key=36 hivel=31 amp_velcurve_31=1 seq_length=4
<region>seq_position=1 sample=kick_vl1_rr1.wav
<region>seq_position=2 sample=kick_vl1_rr2.wav
<region>seq_position=3 sample=kick_vl1_rr3.wav
<region>seq_position=4 sample=kick_vl1_rr4.wav
<group>key=36 lovel=32 hivel=63 amp_velcurve_63=1 seq_length=4
<region>seq_position=1 sample=kick_vl2_rr1.wav
<region>seq_position=2 sample=kick_vl2_rr2.wav
<region>seq_position=3 sample=kick_vl2_rr3.wav
<region>seq_position=4 sample=kick_vl2_rr4.wav
<group>key=36 lovel=64 hivel=95 amp_velcurve_95=1 seq_length=4
<region>seq_position=1 sample=kick_vl3_rr1.wav
<region>seq_position=2 sample=kick_vl3_rr2.wav
<region>seq_position=3 sample=kick_vl3_rr3.wav
<region>seq_position=4 sample=kick_vl3_rr4.wav
<group>key=36 lovel=96 seq_length=4
<region>seq_position=1 sample=kick_vl4_rr1.wav
<region>seq_position=2 sample=kick_vl4_rr2.wav
<region>seq_position=3 sample=kick_vl4_rr3.wav
<region>seq_position=4 sample=kick_vl4_rr4.wav
```

That's a kick drum with four dynamic layers and four sequential round robins.
As you might have noticed, we're repeating the key=36 and seq_length=4 opcodes
in every group. Those two opcodes could be moved to the global level if all we
wanted was a kick drum, but as we're going to have other instruments with other
keys and possibly different numbers of round robins, we kept them at the group
level. The other way to use round robins is randomized, using the
[lorand and hirand] opcodes. This will make the sample
player generate a random number, then play the region whose lorand to hirand
range includes that random number. Whether robins should be used in this random
way or the above sequential way, the answer is "it depends". It seems that more
instruments use sequential, though. This is how random round robins would be
set up for our kick drum samples:

```
<global>loop_mode=one_shot

<group>key=36 hivel=31 amp_velcurve_31=1
<region>hirand=0.25 sample=kick_vl1_rr1.wav
<region>lorand=0.25 hirand=0.5 sample=kick_vl1_rr2.wav
<region>lorand=0.5 hirand=0.75 sample=kick_vl1_rr3.wav
<region>lorand=0.75 sample=kick_vl1_rr4.wav
<group>key=36 lovel=32 hivel=63 amp_velcurve_63=1
<region>hirand=0.25 sample=kick_vl2_rr1.wav
<region>lorand=0.25 hirand=0.5 sample=kick_vl2_rr2.wav
<region>lorand=0.5 hirand=0.75 sample=kick_vl2_rr3.wav
<region>lorand=0.75 sample=kick_vl2_rr4.wav
<group>key=36 lovel=64 hivel=95 amp_velcurve_95=1
<region>hirand=0.25 sample=kick_vl3_rr1.wav
<region>lorand=0.25 hirand=0.5 sample=kick_vl3_rr2.wav
<region>lorand=0.5 hirand=0.75 sample=kick_vl3_rr3.wav
<region>lorand=0.75 sample=kick_vl3_rr4.wav
<group>key=36 lovel=96
<region>hirand=0.25 sample=kick_vl4_rr1.wav
<region>lorand=0.25 hirand=0.5 sample=kick_vl4_rr2.wav
<region>lorand=0.5 hirand=0.75 sample=kick_vl4_rr3.wav
<region>lorand=0.75 sample=kick_vl4_rr4.wav
```

If we go back to sequential round robins and add a snare with only
three round robins, plus a few comments, the resulting SFZ would look like this:

```
// This is an example of a basic drum kit mapping
// All samples set to play in their entirety when a note is received

<global>loop_mode=one_shot

// This is the kick, on MIDI note 36, with four dynamic layers and four round robins

<group>key=36 hivel=31 amp_velcurve_31=1 seq_length=4
<region>seq_position=1 sample=kick_vl1_rr1.wav
<region>seq_position=2 sample=kick_vl1_rr2.wav
<region>seq_position=3 sample=kick_vl1_rr3.wav
<region>seq_position=4 sample=kick_vl1_rr4.wav
<group>key=36 lovel=32 hivel=63 amp_velcurve_63=1 seq_length=4
<region>seq_position=1 sample=kick_vl2_rr1.wav
<region>seq_position=2 sample=kick_vl2_rr2.wav
<region>seq_position=3 sample=kick_vl2_rr3.wav
<region>seq_position=4 sample=kick_vl2_rr4.wav
<group>key=36 lovel=64 hivel=95 amp_velcurve_95=1 seq_length=4
<region>seq_position=1 sample=kick_vl3_rr1.wav
<region>seq_position=2 sample=kick_vl3_rr2.wav
<region>seq_position=3 sample=kick_vl3_rr3.wav
<region>seq_position=4 sample=kick_vl3_rr4.wav
<group>key=36 lovel=96 seq_length=4
<region>seq_position=1 sample=kick_vl4_rr1.wav
<region>seq_position=2 sample=kick_vl4_rr2.wav
<region>seq_position=3 sample=kick_vl4_rr3.wav
<region>seq_position=4 sample=kick_vl4_rr4.wav

// Here is the snare, on MIDI note 38, with four dynamic layers and three round robins

<group>key=38 hivel=31 amp_velcurve_31=1 seq_length=3
<region>seq_position=1 sample=snare_vl1_rr1.wav
<region>seq_position=2 sample=snare_vl1_rr2.wav
<region>seq_position=3 sample=snare_vl1_rr3.wav
<group>key=38 lovel=32 hivel=63 amp_velcurve_63=1 seq_length=3
<region>seq_position=1 sample=snare_vl2_rr1.wav
<region>seq_position=2 sample=snare_vl2_rr2.wav
<region>seq_position=3 sample=snare_vl2_rr3.wav
<group>key=38 lovel=64 hivel=95 amp_velcurve_95=1 seq_length=3
<region>seq_position=1 sample=snare_vl3_rr1.wav
<region>seq_position=2 sample=snare_vl3_rr2.wav
<region>seq_position=3 sample=snare_vl3_rr3.wav
<group>key=38 lovel=96 seq_length=3
<region>seq_position=1 sample=snare_vl4_rr1.wav
<region>seq_position=2 sample=snare_vl4_rr2.wav
<region>seq_position=3 sample=snare_vl4_rr3.wav
```

This is almost all the information needed to map basic drum kits in SFZ. Almost,
because well-sampled hi-hats will have many different articulations, and that
creates some additional considerations, which we will describe on [another page].


[another page]: cymbal_muting
[‹global›]:          {{ '/headers/global' | relative_url }}
[‹group›]:           {{ '/headers/group' | relative_url }}
[amp_velcurve_N]:    {{ '/opcodes/amp_velcurve_N' | relative_url }}
[key]:               {{ '/opcodes/key' | relative_url }}
[loop_mode]:         {{ '/opcodes/loop_mode' | relative_url }}
[lorand and hirand]: {{ '/opcodes/lorand' | relative_url }}
[lovel and hivel]:   {{ '/opcodes/lovel' | relative_url }}
[sample]:            {{ '/opcodes/sample' | relative_url }}
[seq_length]:        {{ '/opcodes/seq_length' | relative_url }}
[seq_position]:      {{ '/opcodes/seq_position' | relative_url }}
