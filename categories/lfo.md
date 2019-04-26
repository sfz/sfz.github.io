# LFO

LFO (Low Frequency Oscillator) opcodes are part of the [Modulation](modulation)
category of opcodes. They are used to create effects such as pitch vibrato
(when modulating pitch), tremolo (when modulating volume) and filter wobble
(when modulating filter cutoff)

LFOs are triggered by note-on events for the specified region, which means there
are no free-running LFOs in the SFZ spec. If a free-running LFO is needed, for
example to apply one slow pitch vibrato wave to a series of rapidly plucked oud
notes, that will need to use an external modulation source outside the
SFZ player - in other words, perhaps in a DAW that the SFZ player is being used
in as a plugin.

## SFZ 1 LFOs

3 LFO destinations in SFZ 1 standard:

- amplfo (amplitude)
- fillfo (filter)
- pitchlfo (pitch)

[Here's a very simple example of a pitch LFO integration]()

(lfo type)_delay

(lfo type)_fade

(lfo type)_freq

(lfo type)_depth

(lfo type)_depthccX

(lfo type)_depthchanaft

(lfo type)_depthpolyaft

(lfo type)_freqccX

(lfo type)_freqchanaft

(lfo type)_freqpolyaft

## Assignable LFOs (SFZ 2)

Much like the Flex EG, these newer LFO can target almost any tone-defining parameter:

Here's a very simple example of an sfz 2 lfo integration, targeted to pitch

lfoN_wave

lfoN_freq

lfoN_freq_onccX

lfoN_freq_smoothccX

lfoN_freq_stepccX

lfoN_delay

lfoN_delay_onccX

lfoN_fade

lfoN_fade_onccX

lfoN_phase

lfoN_phase_onccX

lfoN_count

ARIA extensions also add the following:

lfoN_wave2

lfoN_offset/lfoN_offset2

lfoN_ratio/lfoN_ratio2

lfoN_scale/lfoN_scale2
Assignable LFO Destinations

These destinations are added as a suffix to 'lfoN_'. For example, lfo01_pitch=100 makes LFO 01 affect pitch with a max depth of 100 cents, and lfo03_freq_lfo01_oncc117=1.3 would make LFO 03 add up to 1.3 Hertz to the frequency of LFO 01, with the amount modulated by MIDI CC 117.

freq_lfo

depth_lfo

depthadd_lfo

pitch

pitch_oncc

pitch_smoothcc

pitch_stepcc

decim

decim_oncc

decim_smoothcc

decim_stepcc

bitred

bitred_oncc

bitred_smoothcc

bitred_stepcc

cutoff

cutoff_oncc

cutoff_smoothcc

cutoff_stepcc

resonance

resonance_oncc

resonance_smoothcc

resonance_stepcc

cutoff2

cutoff2_oncc

cutoff2_smoothcc

cutoff2_stepcc

resonance2

resonance2_oncc

resonance2_smoothcc

resonance2_stepcc

eqNfreq

eqNfreq_oncc

eqNfreq_smoothcc

eqNfreq_stepcc

eqNbw

eqNbw_oncc

eq1bw_smoothcc

eqNbw_stepcc

eqNgain

eqNgain_oncc

eqNgain_smoothcc

eqNgain_stepcc

volume

volume_oncc

volume_smoothcc

volume_stepcc

amplitude

amplitude_oncc

amplitude_smoothcc

amplitude_stepcc

pan

pan_oncc

pan_smoothcc

pan_stepcc

width

width_oncc

width_smoothcc

width_stepcc 
