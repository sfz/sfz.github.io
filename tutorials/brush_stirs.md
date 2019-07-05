---
title: Brush stirs
lang: en
---
Not all drum sounds are hits which can be used in the usual way described in our [drum basics](/tutorials/drum_basics)
article. One major exception is brush techniques which involve scraping the
brush across a drum head, often in a circle. As these change in intensity
while the sound's being produced, and the duration of the scrapes needs to
fit the tempo and rhythm of the song, sampling them requires a different
approach to the usual drum hits. The two common approaches are to completely
ignore this technique and not sample it at all, and to record loops to fit
various tempos.

This article describes another approach. The key principle here
is that stirs are a noisy, nonlinear sound with a lot of randomness, which
makes them very easy to crossfade or loop with no phase issues. Therefore, 
instead of trying to record stirs performed in a realistic way, we propose
recording long, unrealistically steady stirs with no perceptible rhythm or
expression, and then using those samples as source material for building up
a musical stir.

## Recording the source material

For the purposes of this example, let's assume the source stirs are recorded
at four speeds, with 1 being the slowest and 4 being the fastest. Speed 1 is
slow enough that a full circle around the head of the drum is completed in
approximately 4 seconds (enough to fill a measure at 60 bpm). Speed 4 is
several circles per second, to match the speed at which the brush would be
moving during the peak of an aggressive stir. Making the sound steady at
this speed is a challenge.

As for how long the recordings need to be, speed 1 needs to be long enough
for the longest stir we want to be able to make. However, if tuning controls
are to be applied, it's important to remember that pitching a sample up
shortens it, so if the tuning range is to extend to one octave up, then a
10-second sample is the minimum to make a 5-second stir. Speeds 3 and 4
are not used thorughout the duration of a stir but only for peaks, and for
the purposes of this example they can be half the length of speed 1.

## Simple stir model

We can make a very simple stir using speed 1 by playing the sample with
[loop_mode](/opcodes/loop_mode) set to one_shot, like we normally would set it for a
drum hit, and using a volume envelope to fade this sample in over a time, and
then fade it out.

```
<region>key=26 loop_mode=one_shot
sample=snare_stir_speed_1.wav
ampeg_attack=1.0 ampeg_decay=1.0 ampeg_sustain=0
```

This is a good start, and we can add expression and realism by layering a
faster speed on top of it near the stir's peak, with half the duration
of the base layer. We use ampeg_delay to delay the start of the second
layer by the same amount, so the peaks of both layers align in time.

```
<region>key=26 loop_mode=one_shot
sample=snare_stir_speed_1.wav
ampeg_attack=1.0 ampeg_decay=1.0 ampeg_sustain=0
<region>key=26 loop_mode=one_shot
sample=snare_stir_speed_3.wav
ampeg_delay=0.5 ampeg_attack=0.5 ampeg_decay=0.5 ampeg_sustain=0
```

## Modulating stir duration

This has a fixed duration and is not flexible, but the stir length can
easily be modulated by a single CC parameter changing all the
envelope durations. Extremely short stirs, lasting only a small fraction
of a second, are obviously not going to sound realistic, so we can use
a minimum value to prevent that. Let's use CC1 (standard mod wheel).

```
<region>key=26 loop_mode=one_shot
sample=snare_stir_speed_1.wav
ampeg_attack=0.1 ampeg_decay=0.1 ampeg_sustain=0
ampeg_attackcc1=0.4 ampeg_decaycc1=0.4
<region>key=26 loop_mode=one_shot
sample=snare_stir_speed_3.wav
ampeg_delay=0.05 ampeg_attack=0.05 ampeg_decay=0.05 ampeg_sustain=0
ampeg_delaycc1=0.25 ampeg_attackcc1=0.25 ampeg_decay1=0.25
```

## Making the shape more realistic

Drummers testing the above model have asked for some adjustments to
make it sound more realistic. One is to make the first half of the base
layer steadier. This can be done very easily by shortening the attack
and adding a hold time to the envelope, ensuring that they still add up
to the same amount of time that the faster layer's delay and attack,
so the peak will remain aligned at all values of the modulation
parameter. The attack stage should generally be shorter than the hold.

```
<region>key=26 loop_mode=one_shot
sample=snare_stir_speed_1.wav
ampeg_attack=0.05 ampeg_hold=0.05 ampeg_decay=0.1 ampeg_sustain=0
ampeg_attackcc1=0.05 ampeg_holdcc1=0.35 ampeg_decaycc1=0.4
<region>key=26 loop_mode=one_shot
sample=snare_stir_speed_3.wav
ampeg_delay=0.05 ampeg_attack=0.05 ampeg_decay=0.05 ampeg_sustain=0
ampeg_delaycc1=0.25 ampeg_attackcc1=0.25 ampeg_decay1=0.25
```

Also, the peak should be sharper and more accented than it is
with linear envelopes. Changing the envelope curves accomplishes this,
though the initial attack envelope of the base layer can remain
linear. The below values seem like a decent start.

```
<region>key=26 loop_mode=one_shot
sample=snare_stir_speed_1.wav
ampeg_attack=0.05 ampeg_hold=0.05 ampeg_decay=0.1 ampeg_sustain=0
ampeg_attackcc1=0.05 ampeg_holdcc1=0.35 ampeg_decaycc1=0.4
ampeg_attack_shape=0.0 ampeg_decay_shape=-1.4
<region>key=26 loop_mode=one_shot
sample=snare_stir_speed_3.wav
ampeg_delay=0.05 ampeg_attack=0.05 ampeg_decay=0.05 ampeg_sustain=0
ampeg_delaycc1=0.25 ampeg_attackcc1=0.25 ampeg_decay1=0.25
ampeg_attack_shape=3.5 ampeg_decay_shape=-1.4
```
