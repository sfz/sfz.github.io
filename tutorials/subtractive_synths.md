---
title: Subtractive synthesizers
lang: en
---

## Introduction

This tutorial describes implementing typical subtractive synthesizer
modulations - filters, envelopes and LFOs - in SFZ. It uses the
Caveman Cosmonaut instrument by Karoryfer Samples as an example. This
does not cover all modulations used in classic hardware subtractive
synths, but it's a start.

## Amplifier envelope

Though subtractive synths get their name from having frequencies
subtracted from the sound by filter, the volume envelope is probably
the most fundamental modulation. Here is an AHDSR envelope including
control parameter labels and defaults.

```
<control>
label_cc100=Attack time
label_cc101=Hold time
label_cc102=Decay time
label_cc103=Sustain level
label_cc104=Release time

set_cc102=63
set_cc103=51
set_cc104=31

<global>
//AHDSR
ampeg_attack=0.002
ampeg_sustain=0
ampeg_release=0.002
ampeg_attack_oncc100=0.5 
ampeg_hold_oncc101=1 
ampeg_decay_oncc102=5
ampeg_sustain_oncc103=100
ampeg_release_oncc104=2
```

The above envelope will affect all sounds, as it's set at the global
level. In many classic synths, it's possible to have separate
envelopes modulating the volume of different oscillators, for
example using a shorter envelope to turn a noise oscillator into
a short transient.

Caveman Cosmonaut has a more unusual parameter called Env Soften,
which has no effect on some oscillators which have more
high-frequency content, and adds to the release and decay times
of the warmer-sounding oscillators. This is highly unusual, but
can be musically useful for things such as plucks, as the warmer
sounds linger longer. This is similar to the effect of release
or decay on a lowpass filter cutoff, but perhaps a little more
organic. That's set per oscillator, rather than globally, like
this, with CC 18 selecting the oscillator, and CC 106 being the
envelope soften:

```
<master>
locc18=11
hicc18=20
ampeg_decay_oncc106=1.25
ampeg_release_oncc106=0.7
#include "mappings/unitra_flutes.sfz"

<master>
locc18=21
hicc18=30
ampeg_decay_oncc106=1
ampeg_release_oncc106=0.4
#include "mappings/unitra_clarinet.sfz"

<master>
locc18=31
hicc18=40
ampeg_decay_oncc106=1.5
ampeg_release_oncc106=0.6
#include "mappings/unitra_trombone.sfz"

<master>
locc18=41
hicc18=50
ampeg_decay_oncc106=0.5
ampeg_release_oncc106=0.2
#include "mappings/unitra_trompette.sfz"

<master>
locc18=51
hicc18=60
ampeg_decay_oncc106=1.25
ampeg_release_oncc106=0.5
#include "mappings/unitra_violin.sfz"

<master>
locc18=61
hicc18=70
#include "mappings/unitra_tremolo.sfz"

<master>
locc18=71
#include "mappings/unitra_all.sfz"
```
