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

## Basic amplifier envelope

Though subtractive synths get their name from having frequencies
subtracted from the sound by filter, the volume envelope is probably
the most fundamental modulation. Here is an [AHDSR envelope](/opcodes/ampeg_attack) including
[control](/headers/control) parameter labels and defaults.

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

An ADSR envelope would simple leave out the [hold](/opcodes/ampeg_hold) stage control,
leaving the default hold time of zero.

## Further envelope possibilities

The above envelope will affect all sounds, as it's set at the global
level. In many classic synths, it's possible to have separate
envelopes modulating the volume of different oscillators, for
example using a shorter envelope to turn a noise oscillator into
a short transient.

If more envelope stages are required, an [SFZ2 envelope](/types/envelope_generators) with an
arbitrary amount of points can be used to modulate amplitude
instead of the SFZ1 envelope above.

In the ARIA SFZ player, amplifier envelope durations are calculated
once on trigger, which means changing envelope parameters other than
sustain and release while a note is playing will not change the sound.
The [ampeg_dynamic](/opcodes/ampeg_dynamic) opcode could be set to 1 in order to recalculate
envelope parameters every time one of the control parameters receives
a MIDI message, which could be closer to the behavior of most
analog synthesizer hardware.

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

## Basic filter

The filter in the example instrument is a single [lowpass](/opcodes/fil_type) filter
with [cutoff](/opcodes/cutoff) and [resonance](/opcodes/resonance) controls,
adjustable [velocity](/extensions/midi_ccs) tracking using [var](/opcodes/varNN_mod)
a two-stage [filter cutoff envelope](/opcodes/fileg_attack).

```
<control>
label_cc120=Filter cutoff
label_cc121=Resonance
label_cc124=Veltrack
label_cc125=Pluck
label_cc126=Filter attack
label_cc127=Filter decay

set_cc120=127
set_cc127=40

<global>
//Lowpass filter
cutoff=250
cutoff_cc120=9600
fil_keytrack=100
resonance=0
resonance_cc121=18
var01_cutoff=6000 //Velocity track
var01_mod=mult
var01_oncc131=1
var01_oncc124=1
cutoff_cc124=-3000
//Pluck envelope
fileg_depth=0
fileg_depthcc125=8400
fileg_sustain=0
fileg_attack=0
fileg_attackcc126=0.5
fileg_decay=0.001
fileg_decaycc127=2
```

## Filter keytracking

Making the filter cutoff keytrack is a simple matter of
setting the [fil_keytrack](/opcodes/fil_keytrack) to 100; however, things get
more complicated if filter keytracking is not desired.
Although fil_keytrack can be set to 0 and the base
filter cutoff will then not keytrack, the filter cutoff
modulation in SFZ is specified in cents, not Hertz. This
means the amount of the cutoff which is modulated will
keytrack, regardless of what fil_keytrack is set to. This
isn't a big issue with most synthesizers, but when trying
to make an adjustable highpass filter for all pieces of
a drum kit except the kick, for example, it can make
things complicated.

Adjusting keytracking for the modulated amount requires
using var and the extended CC 133 (MIDI key number).
Var and extended CCs are already used above for the
velocity tracking on the filter cutoff. The example instrument
has a somewhat convoluted and unusual configuration for
the filter keytracking, where when CC 120 has a very
high value, the cutoff will be slightly above 22.05 kHz
for all keys in the instrument's range, while the cutoff
when CC 120 is at zero has 70% keytracking. This is not
at all standard, and means the base cutoff has moderate
positive keytracking while the cutoff modulation has
negative keytracking.

```
//By default, cutoff modulation is measured in cents
//To make the modulation not keytrack, we make a kludge
//Using var
cutoff=250
var02_cutoff=9000
var02_mod=mult
var02_oncc120=1
var02_curvecc120=0
var02_oncc133=1
var02_curvecc133=11
fil_keytrack=70
```

At the end of the SFZ file, the [curve](/headers/curve) is then specified:

```
<curve>
curve_index=11
v000=1
v024=1
v084=0.63
v127=0.25
```

## More filter possibilities

It would be easy to have more filter envelope stages; only
attack and decay are used above to keep things simple, as
those parameters are enough to create basic plucks (zero
attack, moderate decay) and 303 style basses (slightly
longer attack, moderate decay).

Using fil2_type and cutoff2 allows two filters in series,
for example a lowpass and highpass filter. Fil_type can
also be used to choose different filter types, perhaps with
[locc/hicc](/opcodes/loccN).

Modulating the filter cutoff with LFOs is added below, in the
vibrato section.

## Vibrato

Vibrato can affect pitch, volume (for tremolo) and filter cutoff
(for wobble). Here is a typical setup using one [LFO](/types/lfo) to modulate
all three.

```
<control>
label_cc111=Vibrato to pitch
label_cc112=Vibrato speed
label_cc113=Vibrato to cutoff
label_cc114=Vibrato to volume
label_cc115=Vibrato delay
label_cc116=Vibrato fade

set_cc112=40

<global>
lfo01_pitch_oncc111=22 //Vibrato LFO
lfo01_freq=0.1
lfo01_freq_oncc112=9.9
lfo01_delay_oncc115=0.500
lfo01_fade_oncc116=0.500
lfo01_volume_oncc114=6
//Wobble
lfo01_cutoff=0
lfo01_cutoff_oncc113=3600
```

## Humanized vibrato

The example instrument adds CC 117 for controlling the
amount of randomization
of the vibrato LFOs. This is similar to the humanization
described in the [vibrato tutorial](/tutorials/vibrato), but using CC 135 to
generate a true random number for each voice, which
means any unison voices' vibrato will drift out of sync
with those belonging to other voices. Although this is
nothing like any classic hardware synthesizer, similar
principles could be used to emulate analog oscillators'
much more subtle pitch drift.

```
<control>
label_cc111=Vibrato to pitch
label_cc112=Vibrato speed
label_cc113=Vibrato to cutoff
label_cc114=Vibrato to volume
label_cc115=Vibrato delay
label_cc116=Vibrato fade
label_cc117=Vibrato humanize

set_cc112=40

<global>
//Vibrato and humanization setup
lfo01_pitch_oncc111=22 //Vibrato LFO
lfo01_freq=0.1
lfo01_freq_oncc112=9.9
lfo01_delay_oncc115=0.500
lfo01_fade_oncc116=0.500
lfo01_volume_oncc114=6
//Wobble
lfo01_cutoff=0
lfo01_cutoff_oncc113=3600

lfo02_wave=1 //Second LFO to make things wobblier
lfo02_phase=0
lfo02_phase_oncc135=1 //Phase randomized
lfo02_freq=0.01 //Basically no movement at very slow speeds, just randomization
lfo02_freq_oncc117=1 //Max rate is not very high, so it doesn't sound too obvious
lfo02_pitch_oncc117=6 //Slight pitch wobbliness
lfo02_freq_lfo01_oncc117=0.5 //Affect the rate of the other LFO for unsteady vibrato
lfo02_freq_lfo01_oncc112=2.5 //Faster when the first LFO is going faster

lfo03_wave=1 //And a third LFO for secondhand complex wobbliness
lfo03_phase=0.4
lfo03_phase_oncc135=0.179 //Different phase response to random than the second LFO
lfo03_freq=0.5
lfo03_freq_oncc117=-0.4
lfo03_freq_lfo2_oncc117=1
lfo03_pitch_oncc117=-4

lfo04_wave=1 //Fourth LFO for slowly changing the oscillator mix
lfo04_phase_oncc135=1
lfo04_freq=0.01
lfo04_freq_oncc135=0.25 //Randomly from almost not moving at all to still pretty slow
lfo04_volume_oncc117=1.5 //Slight volume changes
```

## Unison and detune

Unison is a simple matter of triggering multiple regions
with one MIDI note. If using a simple sound source such
as a saw oscillators, all regions will sound identical so
the only result will be additional volume. Making the
unison more interesting requires some of: using different
samples for each voice, detuning the voices, and shifting
the phase of the voices.

The example instrument uses many sets of samples from an
analog keyboard, with every key producing a slightly
different timbre, and transposed versions of those sounds
used for unison. The [detune](/opcodes/pitch_onccN) and width amounts vary for
each of the three oscillators, but here is a simplified
version assuming there is only one oscillator.

Note that although there is a [width](/opcodes/width) opcodes for
use with stereo samples, in this case the left channel and right are
separate mono samples, so [pan](/opcodes/pan) is used to spread them
in stereo - not width.
```
<control>
label_cc25=Unison
label_cc26=Width
label_cc27=Detune

set_cc26=63
set_cc27=63

<global>
//Randomizing the start points of the samples to randomize phase
offset_random=1000

//Center voice
<master>
#include "sample_map_basic.sfz"

//Left voice
<region>
amplitude_cc25=100
amplitude_cc25=100
locc25=1
pan_cc26=-100
tune_cc27=-33
#include "sample_map_transposed_1.sfz"

//Right voice
<region>
amplitude_cc25=100
locc25=1
pan_cc26=100
tune_cc27=33
amplitude_cc25=100
#include "sample_map_transposed_2.sfz"
```

Another highly unsual feature of Caveman Cosmonaut, though, is
that the detune doesn't have to be fixed. There are additional
detune controls which detune the additional voices more at the
start of the note, and then drift towards a common pitch over
time, using [pitch envelopes](/opcodes/pitcheg_attack). This is definitely not part of
any typical hardware analog synthesizer's feature set, but it
does have something in common with the way real world choirs
or instrumental ensembles find a commmon pitch.

```
<control>
label_cc25=Unison
label_cc26=Width
label_cc27=Detune
label_cc28=Extra detune amt
label_cc29=Extra detune time

set_cc26=63
set_cc27=63
set_cc29=16

<global>
//Randomizing the start points of the samples to randomize phase
offset_random=1000

//Pitch envelope defaults for the fancy detune
pitcheg_sustain=0
pitcheg_decay_shape=-2

//Center voice
<master>
#include "sample_map_basic.sfz"

//Left voice
<region>
amplitude_cc25=100
locc25=1
pan_cc26=-100
tune_cc27=-33
pitcheg_depth_oncc28=-150
pitcheg_decay_oncc29=5
#include "sample_map_transposed_1.sfz"

//Right voice
<region>
amplitude_cc25=100
locc25=1
pan_cc26=100
tune_cc27=33
pitcheg_depth_oncc28=150
pitcheg_decay_oncc29=5
#include "sample_map_transposed_2.sfz"
```

## Waveform selection and oscillator mixing

This is just locc/hicc for selection, and [amplitude](/opcodes/amplitude) for volume
controls.

## Mono mode and portamento

This is implemented similarly to any non-synth - see our [legato
tutorial](/tutorials/legato).

## Putting it all together

This is the main file for the example instrument. The unison and detune
settings, along with oscillator selection and mixing, are inside SFZ files
added via the [include](/opcodes/include) directives.

```
<control>
label_cc15=Bass Osc Vol
label_cc16=Bass Osc Sel
label_cc17=Osc 1 Vol
label_cc18=Osc 1 Sel
label_cc19=Osc 2 Vol
label_cc20=Osc 2 Sel
label_cc21=Osc 3 Vol
label_cc22=Osc 3 Sel
label_cc25=Unison
label_cc26=Width
label_cc27=Detune
label_cc28=Extra detune amt
label_cc29=Extra detune time
label_cc100=Attack time
label_cc101=Hold time
label_cc102=Decay time
label_cc103=Sustain level
label_cc104=Release time
label_cc106=Env soften
label_cc108=Legato switch
label_cc109=Porta time
label_cc111=Vibrato to pitch
label_cc112=Vibrato speed
label_cc113=Vibrato to cutoff
label_cc114=Vibrato to volume
label_cc115=Vibrato delay
label_cc116=Vibrato fade
label_cc117=Unsteadiness
label_cc120=Filter cutoff
label_cc121=Resonance
label_cc124=Veltrack
label_cc125=Pluck
label_cc126=Filter attack
label_cc127=Filter decay

set_cc15=100
set_cc16=15
set_cc17=127
set_cc18=63
set_cc19=100
set_cc20=15
set_cc21=100
set_cc22=44
set_cc26=63
set_cc27=63
set_cc29=16
set_cc102=63
set_cc103=51
set_cc104=31
set_cc109=31
set_cc112=40
set_cc120=127
set_cc127=40

<global>
bend_down=-2400
bend_up=2400
off_mode=normal
loop_mode=continuous
offset=10000
offset_random=1000

//AHDSR
ampeg_attack=0.002
ampeg_sustain=0
ampeg_release=0.002
ampeg_attack_oncc100=0.5 
ampeg_hold_oncc101=1 
ampeg_decay_oncc102=5
ampeg_sustain_oncc103=100
ampeg_release_oncc104=2
//Decay and release are affected by the soften parameter also
//This is set separately for each oscillator

//Filter
//Lowpass filter
//By default, cutoff modulation is measured in cents
//To make the modulation not keytrack, we make a kludge
//Using var
cutoff=250
var02_cutoff=9000
var02_mod=mult
var02_oncc120=1
var02_curvecc120=0
var02_oncc133=1
var02_curvecc133=11
fil_keytrack=70
resonance=0
resonance_cc121=18
var01_cutoff=6000 //Velocity track
var01_mod=mult
var01_oncc131=1
var01_oncc124=1
cutoff_cc124=-3000
//Pluck envelope
fileg_depth=0
fileg_depthcc125=8400
fileg_sustain=0
fileg_attack=0
fileg_attackcc126=0.5
fileg_decay=0.001
fileg_decaycc127=2

//Vibrato and humanization setup
lfo01_pitch_oncc111=22 //Vibrato LFO
lfo01_freq=0.1
lfo01_freq_oncc112=9.9
lfo01_delay_oncc115=0.500
lfo01_fade_oncc116=0.500
lfo01_volume_oncc114=6
//Wobble
lfo01_cutoff=0
lfo01_cutoff_oncc113=3600

lfo02_wave=1 //Second LFO to make things wobblier
lfo02_phase=0
lfo02_phase_oncc135=1 //Phase randomized
lfo02_freq=0.01 //Basically no movement at very slow speeds, just randomization
lfo02_freq_oncc117=1 //Max rate is not very high, so it doesn't sound too obvious
lfo02_pitch_oncc117=6 //Slight pitch wobbliness
lfo02_freq_lfo01_oncc117=0.5 //Affect the rate of the other LFO for unsteady vibrato
lfo02_freq_lfo01_oncc112=2.5 //Faster when the first LFO is going faster

lfo03_wave=1 //And a third LFO for secondhand complex wobbliness
lfo03_phase=0.4
lfo03_phase_oncc135=0.179 //Different phase response to random than the second LFO
lfo03_freq=0.5
lfo03_freq_oncc117=-0.4
lfo03_freq_lfo2_oncc117=1
lfo03_pitch_oncc117=-4

lfo04_wave=1 //Fourth LFO for slowly changing the oscillator mix
lfo04_phase_oncc135=1
lfo04_freq=0.01
lfo04_freq_oncc135=0.25 //Randomly from almost not moving at all to still pretty slow
lfo04_volume_oncc117=1.5 //Slight volume changes

//Some defaults for the fancy detune stuff
pitcheg_sustain=0
pitcheg_decay_shape=-2

//And here come the oscillator mappings
//First polyphonic mode

#include "mappings/poly_map.sfz"

#include "mappings/mono_first_map.sfz"

#include "mappings/mono_legato_map.sfz"

<curve>
curve_index=11
v000=1
v024=1
v084=0.63
v127=0.25
```
