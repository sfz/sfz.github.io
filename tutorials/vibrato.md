---
title: Vibrato
lang: en
---
Emulating vibrato for solo instruments or voices with LFOs is not difficult. The challenges
are understanding the key aspects of vibrato on the real instrument, and keeping the number of
parameters from growing too large to be easy to use.

The most basic, typical vibrato is pitch vibrato - just an LFO modulating pitch. Making the
minimum and maximum rates and depths that would be used by players in real life is important,
of course. The numbers here are examples which would be decent for bowed strings - it has a
rate of 2-10 Hz and a maximum depth of 35 cents. Wider and slower are certainly possible
on real instruments, but isn't commonly used in real performance.
```
lfo01_pitch_oncc111=35
lfo01_freq=2
lfo01_freq_oncc112=8
```
In real life, however, players and singers will often start a note without vibrato,
and add vibrato a fraction of a second later. This is where the LFO delay parameter
becomes useful, and possibly LFO fade as well. Delay seems like enough for most wind
instruments and vocals, but having both delay and fade seems effective with bowed strings.
```
lfo01_pitch_oncc111=35
lfo01_freq=2
lfo01_freq_oncc112=8
lfo01_delay_oncc115=0.500
lfo01_fade_oncc116=0.500
```
Vibrato on many instruments doesn't just affect pitch; on bowed strings, it seems to have
a subtle effect on volume and timbre as well. We can have the same MIDI CC parameter control
how much the vibrato LFO affects pitch, volume, and an EQ band, with the latter two being
quite subtle.

This is a good a time as any to note that not all vibrato is equal - it's not really
practical to add vibrato to the lowest note playable on a cello, for example, or to a
natural harmonic. With pizzicato, vibrato is possible, but probably should not affect the
EQ band, and either only affect pitch or pitch plus a subtle effect on volume. The below
will work reasonably for most bowed notes, however.
```
lfo01_pitch_oncc111=35
lfo01_volume_oncc111=1
lfo01_freq=2
lfo01_freq_oncc112=8
lfo01_delay_oncc115=0.500
lfo01_fade_oncc116=0.500
eq1_freq=2000
eq1_bw=2
lfo01_eq1gain_oncc111=2
lfo01_eq1freq_oncc111=500
```
This is how things ended up looking for Meatbass.
```
lfo01_pitch_oncc111=22 // Vibrato LFO
lfo01_freq=2           // Any slower than this sounds really lousy
lfo01_freq_oncc112=7   // About as fast as vibrato on double bass can go,
                       // faster is just silly
lfo01_delay_oncc115=0.500
lfo01_fade_oncc116=0.500
lfo01_volume=0 // This LFO also does tremolo
lfo01_volume_oncc113=2
eq1_freq=2000 // Also can send this LFO to EQ, together with the tremolo it can
              // simulate varying bow pressure while playing with heavy vibrato
eq1_bw=2
lfo01_eq1gain_oncc114=4 // Don't want this to sound too synthetic,
                        // so max amount is small
lfo01_eq1freq_oncc114=1500

lfo02_wave=1             //Second LFO to humanize stuff
lfo02_phase=0
lfo02_phase_oncc135=1    //This LFO has random phase
lfo02_freq=0.01          //Basically no movement at very slow speeds, just randomization
lfo02_freq_oncc117=1     //Max rate is not very high, so it doesn't sound too obvious
lfo2_pitch_oncc118=6     //Slight pitch wobbliness
lfo2_freq_lfo1_oncc119=3 //Affect the rate of the other LFO for unsteady vibrato
```
The Bear Sax vibrato opcodes are:
```
lfo01_pitch_oncc111=20 //Saxy vibrato LFO - goes down from the main pitch
lfo01_freq=1.5
lfo01_freq_oncc112=6
lfo01_phase=0.25 //To make it start at the top
lfo01_delay_oncc116=1
pitcheg_delay_oncc116=1 //Pitch envelope to drop the central pitch when sax vibrato kicks in
pitcheg_depth_oncc111=-20

lfo02_pitch_oncc114=20 //Violiny vibrato LFO - goes below and above main pitch
lfo02_freq=1.5
lfo02_freq_oncc112=6 //Same rate as the first LFO
lfo02_delay_oncc116=1 //Same delay, too
lfo02_volume=0 //This LFO also does tremolo, tremolo settings for the wind noise are in the wind noise mapping file
lfo02_volume_oncc113=3
lfo02_phase=0.5 //To make it go down first, then up
eq1_freq=2500 //Also can send this LFO to EQ
eq1_bw=2
eq1_gain=0.001 //Needs to be non-zero, apparently?
lfo02_eq1gain_oncc115=6
lfo02_eq1freq_oncc115=1200

lfo03_wave=1 //Third LFO to make things wobblier
lfo03_phase=0.3
lfo03_phase_oncc131=11.7 //Pseudorandom based on velocity - true random would make dynamic layers phase out of sync
lfo03_freq=0.01 //Basically no movement at very slow speeds, just randomization
lfo03_freq_oncc117=1 //Max rate is not very high, so it doesn't sound too obvious
lfo03_pitch_oncc117=6 //Slight pitch wobbliness
lfo03_freq_lfo01_oncc117=1.3 //Affect the rate of the other LFOs for unsteady vibrato
lfo03_freq_lfo02_oncc117=1.3

lfo04_wave=1 //And a fourth LFO for secondhand complex wobbliness
lfo04_phase=0.871
lfo04_phase_oncc131=2.429 //Different phase response to velocity than the second LFO
lfo04_freq=0.5
lfo04_freq_oncc117=-0.4
lfo04_freq_lfo2_oncc117=1
lfo04_pitch_oncc117=-4
```
And the breath noise has some of its own vibrato settings, mainly because when doing diaphragm
vibrato, the breath noise gets louder when the pitched component of the sound gets quieter.
```
lfo02_volume_oncc110=-7 //Backwards from the regular tremolo - noise gets louder when the note gets quieter
lfo02_volume_oncc113=0 //Unaffected by regular tremolo CC
lfo03_volume_oncc122=4 //LFO3 is random - this makes the noise less steady
```
