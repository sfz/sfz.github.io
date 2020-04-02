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

Using this for both first and second violins will result in two identical-sounding
sections with the same timbre, but it's easily possible to use the same samples
transposed, and get a different timbre. Instead of using the C4 sample to play C4,
use the Db4 sample transposed down a half step to play C4. This can be done by
using lokey, hikey and pitch_keycenter opcodes instead of just key.

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

Howerver, in most cases it's easier to use the key and transpose opcodes instead,
and set the transpose amount for all the transposed regions at once.

```
<global>
transpose=-1
<region>sample=c4.wav key=47
<region>sample=db4.wav key=48
<region>sample=d4.wav key=49
<region>sample=eb4.wav key=50
<region>sample=e4.wav key=51
<region>sample=f4.wav key=52
<region>sample=gb4.wav key=53
<region>sample=g4.wav key=54
<region>sample=ab4.wav key=55
<region>sample=a4.wav key=56
<region>sample=bb4.wav key=57
<region>sample=b4.wav key=58
<region>sample=c5.wav key=59
```

This still requires changing the key opcode for every region, however. Doing
this editing manually on large sample sets would be time-consuming, but
the old tool sfzed allows easily adding, subtracting or multiplying current
parameter values to regions, which becomes very useful when doing this with
thousands of samples.

This shifts the entire range of the instrument down by a half-step, though. In
order to preserve the correct range, we can remove the transposed notes which
got moved below the lowest pitch the instrument is capable of. That's easy. The
top range is more tricky - if we extend the highest note to cover its original
pitch as well, but then the same sample would be used for the same pitch by
both sections. So, we can instead use the next-to-highest note, transposed up.
This might not sound very consistent with the rest, but under these limitations,
it can be a reasonable compromise.

```
<global>
transpose=-1
<region>sample=db4.wav key=48
<region>sample=d4.wav key=49
<region>sample=eb4.wav key=50
<region>sample=e4.wav key=51
<region>sample=f4.wav key=52
<region>sample=gb4.wav key=53
<region>sample=g4.wav key=54
<region>sample=ab4.wav key=55
<region>sample=a4.wav key=56
<region>sample=bb4.wav key=57
<region>sample=b4.wav key=58
<region>sample=c5.wav key=59
<region>sample=b4.wav key=60 transpose=1
```

## Transposition Values

In general, transposing downwards will result in a warmer sound, and transposing
upwards will make the sound brighter and thinner. Transposing by more than a half
step can be a good idea. In general, transposing by a minor third is a common way
to create a big change in timbre. Transposing by much more than a minor third
doesn't seem common outside of sound design not intended to be a realistic instrument
emulation.

Transposing down by a minor third while preserving the range in our example, and
filling in the lost top of the range by transposing upwards might look like this:

```
<global>
transpose=-3
<region>sample=eb4.wav key=48
<region>sample=e4.wav key=49
<region>sample=f4.wav key=50
<region>sample=gb4.wav key=51
<region>sample=g4.wav key=52
<region>sample=ab4.wav key=53
<region>sample=a4.wav key=54
<region>sample=bb4.wav key=55
<region>sample=b4.wav key=56
<region>sample=c5.wav key=57
<region>sample=a4.wav key=58 transpose=1
<region>sample=bb4.wav key=59 transpose=1
<region>sample=b4.wav key=60 transpose=1
```

## Unison By Transposition

If we put both the original and transposed samples in the same SFZ file, each MIDI
note will trigger two regions, and we now will have the sound of an ensemble which
is twice as large as what was actually sampled.

```
<group>
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

<group>
transpose=-1
<region>sample=db4.wav key=48
<region>sample=d4.wav key=49
<region>sample=eb4.wav key=50
<region>sample=e4.wav key=51
<region>sample=f4.wav key=52
<region>sample=gb4.wav key=53
<region>sample=g4.wav key=54
<region>sample=ab4.wav key=55
<region>sample=a4.wav key=56
<region>sample=bb4.wav key=57
<region>sample=b4.wav key=58
<region>sample=c5.wav key=59
<region>sample=b4.wav key=60 transpose=1
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
need to have its own polyphony groups, same as would be needed with multiple
microphone positions.

## Humanization

When trying to emulate the sound of a larger section of instruments, especially when
trying to turn a solo instrument into an emulated section, it can be useful to
create small differences between each voice, especially when vibrato and legato
are also emulated. Without independent per-voice humanization, emulated vibrato and
legato can sound more like a solo instrument run through a chorus or other doubling
effect, rather than a section of separate instruments played by separate people.

Aspects of the sound which can be humanized or randomized include timing, smoothing,
phase, pitch, vibrato speed and vibrato depth.

Here is a rather lengthy example, adapted from a real instrument, where each voice has
separate pan settings for stereo spread and separate polyphony groups - these are basic
features of unison, and not related to humanization, of course. The humanizing
differences between the voices are differences in bend smoothing, in maximum vibrato
depth, in the initial phase of the vibrato humanization LFOs, and in the fade times of
the legato regions. The shallower vibrato and slower legato of the transposed regions
emulate less confident, more hesitant players.

```
<global>
//Basic global stuff shared by all voices
ampeg_release=0.25
ampeg_attack_oncc106=1
ampeg_release_oncc107=1.25
off_mode=normal
bend_down=-1200
bend_up=1200
//Pitch bend smoothing is set separately for each voice
amplitude_oncc100=100
amplitude_smoothcc1=100
locc100=1
amp_veltrack=0
loop_mode=loop_continuous

//Vibrato
//Pitch LFO depth is set separately for each voice
lfo01_freq=2 //Any slower than this sounds really lousy
lfo01_freq_oncc112=6 //8 Hz is about as fast as vibrato on cello can go
lfo01_delay_oncc115=0.500
lfo01_fade_oncc116=0.500
//This LFO also does tremolo
lfo01_volume_oncc21=1 //Not much - just a subtle effect on volume
eq1_freq=2200 //EQ band for vibrato
eq1_bw=2
lfo01_eq1gain_oncc21=3 //Again, pretty subtle

lfo02_wave=1 //Second LFO to make things wobblier
//Initial phase is set separately for each voice
lfo02_phase_oncc131=0.7 //Phase affected by velocity, to pseudo-randomize while keeping both mics' LFOs in sync
lfo02_freq=0.01 //Basically no movement at very slow speeds, just randomization
lfo02_freq_oncc117=1 //Max rate is not very high, so it doesn't sound too obvious
lfo02_pitch_oncc117=6 //Slight pitch wobbliness
lfo02_freq_lfo01_oncc117=0.2 lfo02_freq_lfo01_oncc112=0.8 //Affect the rate of the other LFO for unsteady vibrato

lfo03_wave=1 //And a third LFO for secondhand complex wobbliness
//Initial phase is set separately for each voice
lfo03_phase_oncc131=0.479 //Different phase response to velocity than the second LFO
lfo03_freq=0.5
lfo03_freq_oncc117=-0.4
lfo03_freq_lfo2_oncc117=1
lfo03_pitch_oncc117=-4

<master>
//Central voice
bend_smooth=80
lfo01_pitch_oncc21=29
lfo02_phase=0
lfo03_phase=0.4
group=1
off_by=1

//Sustains legato

<group>
trigger=first
#include "mappings/ord_sus_map.sfz"

<group>
trigger=legato
offset=5000 offset_random=500
ampeg_attack=0.5
ampeg_vel2attack=-0.35
#include "mappings/ord_sus_map.sfz"


<master>
//Left voice using sample maps transposed by a half-step
//Pan control not used in the central voice
pan_oncc101=-100
//Values different than the central voice, for humanization purposes
bend_smooth=91
lfo01_pitch_oncc21=17
lfo02_phase=0.05
lfo03_phase=0.3
group=2
off_by=2

//Sustains legato

<group>
trigger=first
#include "mappings/t1/ord_sus_map.sfz"

<group>
trigger=legato
offset=5000 offset_random=500
//Values different than the central voice, for humanization purposes
ampeg_attack=0.55
ampeg_vel2attack=-0.4
#include "mappings/t1/ord_sus_map.sfz"


<master>
//Right voice using sample maps transposed by a whole step
//Pan control not used in the central voice
pan_oncc101=100
//Values different than the central voice, for humanization purposes
bend_smooth=87
lfo01_pitch_oncc21=19
lfo02_phase=0.02
lfo03_phase=0.28
group=3
off_by=3

//Sustains legato

<master>
trigger=first
#include "mappings/t2/ord_sus_map.sfz"

<master>
trigger=legato
offset=5000 offset_random=500
//Values different than the central voice, for humanization purposes
ampeg_attack=0.58
ampeg_vel2attack=-0.43
#include "mappings/t2/ord_sus_map.sfz"
```
