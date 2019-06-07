---
title: Vibrato
lang: en
---
This page is very much a work in progress. For now, here is the vibrato-relevant
section of the opcodes from Karoryfer Samples Meatbass, which is a decent
starting point for creating vibrato in bowed strings, vocals, and synthesizers.
Some special considerations for saxophones, guitars and also using vibrato to
create filter wobble will be added later, along with a more detailed explanation
of each opcode's specific purpose.

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
