---
---
# LFO

LFO (Low Frequency Oscillator) opcodes are part of the [Modulation](/categories/modulation)
category of opcodes. They are used to create effects such as pitch vibrato
(when modulating pitch), tremolo (when modulating volume) and filter wobble
(when modulating filter cutoff)

LFOs are triggered by note-on events for the specified region, which means there
are no free-running LFOs in the SFZ spec. If a free-running LFO is needed, for
example to apply one slow pitch vibrato wave to a series of rapidly plucked oud
notes, that will need to use an external modulation source outside the
SFZ player - in other words, perhaps in a DAW that the SFZ player is being used
in as a plugin.

#### SFZ 1 LFOs

3 LFO destinations in SFZ 1 standard:

- amplfo (amplitude)
- fillfo (filter)
- pitchlfo (pitch)

[Here's a very simple example of a pitch LFO integration](/tutorials/lfo_sfz1)

[(lfo type)_delay](/opcodes/sfz_1/(lfo_type)_delay)

[(lfo type)_fade](/opcodes/sfz_1/(lfo_type)_fade)

[(lfo type)_freq](/opcodes/sfz_1/(lfo_type)_freq)

[(lfo type)_depth](/opcodes/sfz_1/(lfo_type)_depth)

[(lfo type)_depthccN](/opcodes/sfz_1/(lfo_type)_depth)

[(lfo type)_depthchanaft](/opcodes/sfz_1/(lfo_type)_depthchanaft)

[(lfo type)_depthpolyaft](/opcodes/sfz_1/(lfo_type)_depthpolyaft)

[(lfo type)_freqccN](/opcodes/sfz_1/(lfo_type)_freqccN)

[(lfo type)_freqchanaft](/opcodes/sfz_1/(lfo_type)_freqchanaft)

[(lfo type)_freqpolyaft](/opcodes/sfz_1/(lfo_type)_freqpolyaft)

#### Assignable LFOs (SFZ 2)

Much like the Flex EG, these newer LFO can target almost any tone-defining parameter:

[Here's a very simple example of an sfz 2 lfo integration, targeted to pitch](/tutorials/lfo_sfz1)

[lfoX_wave](/opcodes/sfz_2/lfoX_wave)

[lfoX_freq](/opcodes/sfz_2/lfoX_freq)

[lfoX_freq_onccN](/opcodes/sfz_2/lfoX_freq)

[lfoX_freq_smoothccN](/opcodes/sfz_2/lfoX_freq_smoothccN)

[lfoX_freq_stepccN](/opcodes/sfz_2/lfoX_freq_stepccN)

[lfoX_delay](/opcodes/sfz_2/lfoX_delay)

[lfoX_delay_onccN](/opcodes/sfz_2/lfoX_delay)

[lfoX_fade](/opcodes/sfz_2/lfoX_fade)

[lfoX_fade_onccN](/opcodes/sfz_2/lfoX_fade)

[lfoX_phase](/opcodes/sfz_2/lfoX_phase)

[lfoX_phase_onccN](/opcodes/sfz_2/lfoX_phase)

[lfoX_count](/opcodes/sfz_2/lfoX_count)

#### ARIA extensions

[lfoX_wave2](/opcodes/aria/lfoX_wave2)

[lfoX_offset / lfoX_offset2](/opcodes/aria/lfoX_offset)

[lfoX_ratio / lfoX_ratio2](/opcodes/aria/lfoX_ratio)

[lfoX_scale / lfoX_scale2](/opcodes/aria/lfoX_scale)

#### Assignable LFO Destinations

These destinations are added as a suffix to 'lfoX_'. For example,
lfo01_pitch=100 makes LFO 01 affect pitch with a max depth of 100 cents, and
lfo03_freq_lfo01_oncc117=1.3 would make LFO 03 add up to 1.3 Hertz to the
frequency of LFO 01, with the amount modulated by MIDI CC 117.

TODO

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
