---
title: Legato
lang: en
---
This page is very much a work in progress. For now, here is the legato-relevant
section of the opcodes from Karoryfer Samples Meatbass, which is a decent
starting point for creating fake legato. It's obviously fake for slow glides
across long intervals, but as long as the interval is no more than a third or
fourth, it can be convincing. Of course, the narrower the interval and the
shorter the time, the easier it is to sound convincing. True sampled legato will
be added later. In the below setup, MIDI CC109 controls the glide time.
Crossfade time between the samples is controlled by MIDI CC100 (note attack,
longer for the legato regions) and CC104 (release time, which also sets the
fadeout time of any note being muted). CC140 is the ARIA extension CC for pitch
delta, and being the difference in pitch between the previous note and the
current note, it sets the depth of the glide envelope.

```
ampeg_release_oncc104=2

eg06_sustain=1 //Pitch envelope setup for legato slides
eg06_level0=-1
eg06_time0=0
eg06_pitch_oncc140=100
eg06_time1=0
eg06_level1=0 //When this is 0, the envelope really does nothing
// eg06_time1_oncc109 needs to be set for the legato regions - but we don't want
it on for all regions so the default is 0
```

All the sample regions are then basically duplicated in non-legato and legato
versions. Here's an example non-legato region with [trigger]()
set to first. The [group]() and [off_by]() make this part instrument monophonic,
and the ampeg_attack_oncc100 is part of a typical AHDSR amp envelope, which can
make the note attack more gradual and softer.

```
<group>
trigger=first
off_mode=normal
group=6
off_by=6
ampeg_attack_oncc100=0.3

<region>
sample=..\Samples\arco_looped\c4_sustain.wav
key=48
```

And the corresponding legato region with trigger set to legato, the eg06 glide
envelope time control, and also a longer attack time, to let the note fade in
more gradually.

```
<group>
trigger=legato
off_mode=normal
group=6
off_by=6
eg06_time1_oncc109=0.3
ampeg_attack_oncc100=0.5


<region>
sample=..\Samples\arco_looped\c4_sustain.wav
key=48
```
