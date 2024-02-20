---
title: LFO
---
LFO (Low Frequency Oscillator) opcodes are part of the [Modulation]
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

[Here's a very simple example of a pitch LFO integration][1]

- [(lfo type)_delay]
- [(lfo type)_fade]
- [(lfo type)_freq]
- [(lfo type)_freqccX]
- [(lfo type)_depth]
- [(lfo type)_depthccX]
- [(lfo type)_depthchanaft]
- [(lfo type)_depthpolyaft]
- [(lfo type)_freqchanaft]
- [(lfo type)_freqpolyaft]

#### Assignable LFOs (SFZ 2)

Much like the Flex EG, these newer LFO can target almost any tone-defining parameter:

[Here's a very simple example of an sfz 2 lfo integration, targeted to pitch][1]

- [lfoN_wave]
- [lfoN_freq]
- [lfoN_freq_onccX]
- [lfoN_freq_smoothccX]
- [lfoN_freq_stepccX]
- [lfoN_delay]
- [lfoN_delay_onccX]
- [lfoN_fade]
- [lfoN_fade_onccX]
- [lfoN_phase]
- [lfoN_phase_onccX]
- [lfoN_count]

#### Assignable LFO Destinations

These destinations are added as a suffix to 'lfoN_'. For example,
lfo01_pitch=100 makes LFO 01 affect pitch with a max depth of 100 cents, and
lfo03_freq_lfo01=1.3 would make LFO 03 add up to 1.3 Hertz to the
frequency of LFO 01. Note that it's possible to create modulation feedback
loops this way, for example LFO 01 modulating LFO 02 while LFO 02 modulates
LFO 01.

In addition to the below, in ARIA it's possible to control the amount
of freq_lfo with MIDI CC, so lfo03_freq_lfo01_oncc117=1.3 would make LFO 03 add
up to 1.3 Hertz to the frequency of LFO 01, with the amount modulated by MIDI
CC 117. So, freq_lfo_oncc would be added to the below list for ARIA, though
depth_lfo_oncc and depthadd_lfo_oncc do not appear to be available.

- freq_lfoX
- depth_lfoX
- depthadd_lfoX
- pitch
- pitch_oncc
- pitch_smoothcc
- pitch_stepcc
- decim
- decim_oncc
- decim_smoothcc
- decim_stepcc
- bitred
- bitred_oncc
- bitred_smoothcc
- bitred_stepcc
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
- eqNfreq
- eqNfreq_oncc
- eqNfreq_smoothcc
- eqNfreq_stepcc
- eqNbw
- eqNbw_oncc
- eqNbw_smoothcc
- eqNbw_stepcc
- eqNgain
- eqNgain_oncc
- eqNgain_smoothcc
- eqNgain_stepcc
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

## Practical Considerations

SFZ allows LFOs to modulate the frequency of other LFOs, including feedback
(LFO number M modulating LFO number N, and vice versa). Mathematically, this
can cause very chaotic results. However, in the Cakewalk products (and possibly
also in ARIA, though this is not checked) this is simplified. If the number of the
modulating LFO is lower than the LFO being modulated (for example, LFO1 modulates
LFO2), the modulation is applied when it is calculated. However, if the number
of the modulating LFO is higher than the LFO being modulated (for example, LFO4
modulating LFO2), the modulation is not applied until the next LFO frequency
update cycle.

This both keeps LFO feedback controlled, and reduces the CPU needed to calculate
LFO modulations.


[Modulation]:              ../misc/categories.md#modulation
[1]:                       ../tutorials/lfo.md
[(lfo type)_delay]:        ../opcodes/amplfo_delay.md
[(lfo type)_fade]:         ../opcodes/amplfo_fade.md
[(lfo type)_freq]:         ../opcodes/amplfo_freq.md
[(lfo type)_freqccX]:      ../opcodes/amplfo_freq.md
[(lfo type)_depth]:        ../opcodes/amplfo_depth.md
[(lfo type)_depthccX]:     ../opcodes/amplfo_depth.md
[(lfo type)_depthchanaft]: ../opcodes/amplfo_depthchanaft.md
[(lfo type)_depthpolyaft]: ../opcodes/amplfo_depthpolyaft.md
[(lfo type)_freqchanaft]:  ../opcodes/amplfo_freqchanaft.md
[(lfo type)_freqpolyaft]:  ../opcodes/amplfo_freqpolyaft.md
[lfoN_wave]:               ../opcodes/lfoN_wave.md
[lfoN_freq]:               ../opcodes/lfoN_freq.md
[lfoN_freq_onccX]:         ../opcodes/lfoN_freq.md
[lfoN_freq_smoothccX]:     ../opcodes/lfoN_freq_smoothccX.md
[lfoN_freq_stepccX]:       ../opcodes/lfoN_freq_stepccX.md
[lfoN_delay]:              ../opcodes/lfoN_delay.md
[lfoN_delay_onccX]:        ../opcodes/lfoN_delay.md
[lfoN_fade]:               ../opcodes/lfoN_fade.md
[lfoN_fade_onccX]:         ../opcodes/lfoN_fade.md
[lfoN_phase]:              ../opcodes/lfoN_phase.md
[lfoN_phase_onccX]:        ../opcodes/lfoN_phase.md
[lfoN_count]:              ../opcodes/lfoN_count.md
