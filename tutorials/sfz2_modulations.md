---
title: SFZ2 modulations
lang: en
---
The modulations available under SFZ2 are much more flexible than the fixed set
[specified by SFZ1](/tutorials/sfz1_modulations). All SFZ1 modulations are still
available under the SFZ2 spec, and will often be easier to use in cases such as
envelopes where the standard AHDSR shape is all that's needed.

The basic difference is that SFZ1 has three envelopes - one assigned to 
volume, one to pitch, and one to filter cutoff. There are also three LFOs,
one for each of those modulation targets. SFZ2 can have an arbitraty number
of envelopes and LFOs, with the ability to specify one or more modulation
targets from a list. It is even possible for LFOs to modulate other LFOs
and envelopes to modulate LFOs (but not for LFOs to modulate envelopes).
In addition, SFZ2 envelopes can have an arbitrary number of points.

## Additional MIDI CC modulation

SFZ2 adds one more paramter which can be modulated with MIDI CC - [stereo width](/opcodes/width_onccX).
Also need to document pan_onccX and find out whether it's SFZ1 or SFZ2 - currently
not sure, needs testing.

## LFOs

For each LFO, an LFO number must be specified - lfo01, lfo02 etc. Each
LFO has the following parameters:

- [lfoN_wave](/opcodes/lfoN_wave)
- [lfoN_freq](/opcodes/lfoN_freq)
- [lfoN_freq_onccX](/opcodes/lfoN_freq)
- [lfoN_freq_smoothccX](/opcodes/lfoN_freq_smoothccX)
- [lfoN_freq_stepccX](/opcodes/lfoN_freq_stepccX)
- [lfoN_delay](/opcodes/lfoN_delay)
- [lfoN_delay_onccX](/opcodes/lfoN_delay)
- [lfoN_fade](/opcodes/lfoN_fade)
- [lfoN_fade_onccX](/opcodes/lfoN_fade)
- [lfoN_phase](/opcodes/lfoN_phase)
- [lfoN_phase_onccX](/opcodes/lfoN_phase)
- [lfoN_count](/opcodes/lfoN_count)

Click on each link for a detailed description. Similarly to SFZ1 LFOs,
there's a frequency, a delay and a fade-in time. In addition, the
waveform shape and initial phase can be specified and the LFO can
be configured to run for a limited number of counts.

The frequency, delay, fade and initial phase can all be modulated by
MIDI CC. There is no modulation for LFO depth - to control the depth
of vibrato etc, use MIDI CC to modulate how much the LFO affects the
desired target.

## Available LFO targets

The available modulation targets for LFOs are These destinations are
added as a suffix to 'lfoN_'. For example

```
lfo01_pitch=100
```

makes LFO 01 affect pitch with a max depth of 100 cents.

```
lfo03_freq_lfo01_oncc117=1.3
```

would make LFO 03 add up to 1.3 Hertz to
the frequency of LFO 01, with the amount modulated by MIDI CC 117.

The avaialble targets related to volume and stereo positioning are:

- volume
- volume_oncc
- volume_smoothcc
- volume_stepcc
- amplitude
- amplitude_oncc
- amplitude_smoothcc
- amplitude_stepcc
- pan
- pan_oncc
- pan_smoothcc
- pan_stepcc
- width
- width_oncc
- width_smoothcc
- width_stepcc 

The targets for pitch modulation are:

- pitch
- pitch_oncc
- pitch_smoothcc
- pitch_stepcc

The targets for filter modulation are cutoff and resonance, for both
the first and second filter:

- cutoff
- cutoff_oncc
- cutoff_smoothcc
- cutoff_stepcc
- resonance
- resonance_oncc
- resonance_smoothcc
- resonance_stepcc
- cutoff2
- cutoff2_oncc
- cutoff2_smoothcc
- cutoff2_stepcc
- resonance2
- resonance2_oncc
- resonance2_smoothcc
- resonance2_stepcc

The modulations of the EQ bands are:

- eqNfreq
- eqNfreq_oncc
- eqNfreq_smoothcc
- eqNfreq_stepcc
- eqNbw
- eqNbw_oncc
- eq1bw_smoothcc
- eqNbw_stepcc
- eqNgain
- eqNgain_oncc
- eqNgain_smoothcc
- eqNgain_stepcc

The following targets affect other LFOs:

- freq_lfoX
- depth_lfoX
- depthadd_lfoX

Some Cakewalk instruments can also modulate the decim and bitred effects:

- decim
- decim_oncc
- decim_smoothcc
- decim_stepcc
- bitred
- bitred_oncc
- bitred_smoothcc
- bitred_stepcc

## LFO examples

Here is an example of how one LFO could be used to control both pitch vibrato
and volume vibrato (tremolo) with the rate, pitch vibrato depth, tremolo
depth, delay and fade each controlled by a separate MIDI CC parameter:

```
lfo01_pitch_oncc111=22 // Vibrato LFO
lfo01_freq=2
lfo01_freq_oncc113=7
lfo01_delay_oncc114=0.500
lfo01_fade_oncc115=0.500
lfo01_volume=0 // This LFO also does tremolo
lfo01_volume_oncc112=2
```

And an LFO which does just pitch vibrato, and has a second LFO modulating its
rate to create some unsteadiness:

```
lfo01_pitch_oncc111=22 // Vibrato LFO
lfo01_freq=2
lfo01_freq_oncc113=7
lfo01_delay_oncc114=0.500
lfo01_fade_oncc115=0.500

lfo2_freq_lfo1_oncc116=3   //Affect the rate of the other LFO for unsteady vibrato
lfo02_wave=1
lfo02_freq=0.1
lfo02_freq_oncc116=0.9
```

For randomized humanization, the extended MIDI CC 135 can be used to randomize the
initial phase and speed of the second LFO.

```
lfo01_pitch_oncc111=22 // Vibrato LFO
lfo01_freq=2
lfo01_freq_oncc113=7
lfo01_delay_oncc114=0.500
lfo01_fade_oncc115=0.500

lfo2_freq_lfo1_oncc116=3   //Affect the rate of the other LFO for unsteady vibrato
lfo02_wave=1
lfo02_freq=0.1
lfo02_freq_oncc116=0.8
lfo02_phase_oncc135=1
lfo02_freq_oncc135=0.2
```

## Envelopes

SFZ2 envelopes are numbered and can have an arbitrary number of points, with
the level at each point and its modulation set separately. The opcodes used
to create these envelopes are:

- [egN_curve](/opcodes/egN_curve)
- [egN_level](/opcodes/egN_level)
- [egN_level_onccX](/opcodes/egN_level)
- [egN_loop](/opcodes/egN_loop)
- [egN_points](/opcodes/egN_points)
- [egN_shapeX](/opcodes/egN_shapeX)
- [egN_sustain](/opcodes/egN_sustain)
- [egN_time](/opcodes/egN_time)
- [egN_time_onccX](/opcodes/egN_time)

## Envelope targets

Similarly to LFOs, envelopes have assignable modulation targets. These
destinations are added as a suffix to ‘egN_’  - so, for example:

```
eg01_pitch=2400
```

would have envelope 01 modulate pitch, with an envelope depth of 2400 cents.

These are the available targets related to amplitude and stereo positioning:

- amplitude
- amplitude_oncc
- volume
- volume_oncc
- pan
- pan_oncc
- width
- width_oncc

Targets for pitch:

- pitch
- pitch_oncc

Targets for filters:

- cutoff
- cutoff_oncc
- resonance
- resonance_oncc
- cutoff2
- cutoff2_oncc
- resonance2
- resonance2_oncc

Targets for EQ bands:

- eqNbw
- eqNbw_oncc
- eqNfreq
- eqNfreq_oncc
- eqNgain
- eqNgain_oncc

Targets for modulating LFOs:

- depth_lfo 
- depthadd_lfo
- freq_lfo

These two need to be tested - are they for envelopes to modulate other envelopes?

- depth
- depth_oncc

Targets for modulating decim and bitred do not appear to have been included in the specification.

## Example envelope

Here is a simple pitch envelope which will start a note with a glide from up to an octave
lower, with the depth and time modulated by MIDI CCs. The envelope will statt at a lower
value at envelope point 0, and return the pitch to normal at envelope point 1.

```
eg01_sustain=1 //Pitch envelope setup for slides
eg01_level0=1
eg01_level1=0
eg01_time0=0
eg01_time1=0
eg01_pitch_oncc100=-1200
eg01_time1_oncc101=1
```

## Using LFOs and evelopes togehter

Here is an example of using both an envelope and an LFO to modulate pitch, with common
depth and delay parameters. The goal here is asymmetrical pitch vibrato - vibrato which
does not go up and down around the original pitch, but instead only goes below it. This
is idiomatic with saxophones, and is also how vibrato with certain types of non-floating
guitar bridges works (string-bending vibrato is similar, of course, but in the other
direction).

Shifting the phase of LFO01 will make the vibrato waveform start at the top. We also need
to lower the pitch by the same amount as the vibrato depth. Using an envelope for this
allows us to delay the onset of the vibrato (again, an important element of idiomatic
saxophone vibrato) without a discontinuous jump in pitch. 

```
lfo01_pitch_oncc111=20 //Saxy vibrato LFO - goes down from the main pitch
lfo01_freq=2
lfo01_freq_oncc112=8
lfo01_phase=0.25 //To make it start at the top
lfo01_delay_oncc116=1
eg01_pitch_oncc111=20
eg01_sustain=1
eg01_level0=0
eg01_level1=0
eg01_level2=-1
eg01_time0=0
eg01_time1=0
eg01_time1_oncc116=1
eg01_time2=0
```

## Using SFZ1 and SFZ2 modulations together

Both SFZ1 and SFZ2 modulations may be mixed freely. Indeed, it may be simpler to accomplish
the above using the SFZ1 pitch envelope, as it is sufficient in this case, with the SFZ2
LFO. Setting the initial phase and modulating the delay with MIDI CC would not be possible
with the SFZ1 pitch LFO.

```
lfo01_pitch_oncc111=20 //Saxy vibrato LFO - goes down from the main pitch
lfo01_freq=2
lfo01_freq_oncc112=8
lfo01_phase=0.25 //To make it start at the top
lfo01_delay_oncc116=1
pitcheg_delay_oncc116=1 //Pitch envelope to drop the central pitch when sax vibrato kicks in
pitcheg_depth_oncc111=-20
```

This is what's possible under the SFZ2 specification. There are some additional modulations
available as [ARIA extensions](/opcodes/aria), with [amplitude_onccN](/opcodes/amplitude_onccN)
being a very useful one. There's also tune_onccN which needs to be documented after checking
whether it's SFZ2 or ARIA.
