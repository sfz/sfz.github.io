---
layout: "sfz/opcode"
opcode_name: "type"
---
In Cakewalk, of the above effect types has its own set of opcodes
controlling its parameters. Here is a list of what is currently known.
A separate page for each opcode will probably be created later.

## `disto` opcodes
- disto_stages
- disto_tone[_oncc] 0-100
- disto_depth[_oncc] 0-100
- disto_wet[_oncc] 0-100
- disto_dry[_oncc] 0-100

## `fverb` opcodes
- reverb_type: chamber, large_hall, mid_hall, small_hall, large_room, mid_room, small_room
- reverb_damp[_oncc] 0-100
- reverb_tone[_oncc] 0-100
- reverb_predelay[_oncc] seconds
- reverb_size[_oncc] 0-100
- reverb_input[_oncc] 0-100
- reverb_wet[_oncc] 0-100
- reverb_dry[_oncc] 0-100

## `apan` opcodes
- apan_waveform: LFO wave number
- apan_depth[_oncc] 0-100
- apan_wet[_oncc] 0-100
- apan_dry[_oncc] 0-100
- apan_phase[_oncc] degrees
- apan_freq[_oncc] Hz

## `tdfir` opcodes
- tdfir_gain 0-100
- tdfir_impulse
- tdfir_wet[_oncc] 0-100
- tdfir_dry[_oncc] 0-100

## `static` opcodes
- static_tone 0-100
- static_filter: name of filter type
- static_random_maxtime: seconds
- static_random_mintime: seconds
- static_cyclic_time: seconds
- static_random_level 0-100
- static_cyclic_level 0-100
- static_level[_oncc] 0-100
- static_stereo ?

## `comp` opcodes
- comp_gain: (probably dB)
- comp_release: seconds
- comp_attack: seconds
- comp_ratio 0-100
- comp_threshold: dB
- comp_stlink: on/off

## `gate` opcodes
- gate_oncc (gate manual control according to book)
- gate_release (probably seconds)
- gate_attack (probably seconds)
- gate_threshold (probably dB)
- gate_stlink: on/off

## `lofi` opcodes
- bitred[_oncc] 0-100
- decim[_oncc] 0-100

## `delay` opcodes
- delay_mode: detune, multimod, flanger, chorus, mod, panning, tlcr, rlc, lrc, ping, cross, stereo
- delay_time_tap ?
- delay_moddepth[_oncc] 0-100
- delay_lfofreq[_oncc] Hz
- delay_resonance[_oncc] (probably dB)
- delay_cutoff[_oncc] Hz
- delay_damphi[_oncc] 0-100
- delay_damplo[_oncc] 0-100
- delay_filter: name of filter type
- delay_feedback[_oncc] 0-100
- delay_timec[_oncc] (probably seconds)
- delay_timer[_oncc] (probably seconds)
- delay_timel[_oncc] (probably seconds)
- delay_syncc_oncc
- delay_syncr_oncc
- delay_syncl_oncc
- delay_panc[_oncc] 0-100
- delay_panr[_oncc] 0-100
- delay_panl[_oncc] 0-100
- delay_levelc 0-100
- delay_levelr 0-100
- delay_levell 0-100
- delay_spread[_oncc] 0-100
- delay_input[_oncc] 0-100
- delay_wet[_oncc] 0-100
- delay_dry[_oncc] 0-100

## `phaser` opcodes:
- phaser_stages
- phaser_phase_oncc 0-100
- phaser_feedback[_oncc] 0-100
- phaser_depth[_oncc] 0-100
- phaser_wet[_oncc] 0-100
- phaser_freq[_oncc] Hz
- phaser_waveform: LFO wave number

## `eq` opcodes (Same opcode meanings as ordinary EQ):
- eq_type
- eq_gain[_oncc]
- eq_bw[_oncc]
- eq_freq[_oncc]

## `filter` opcodes (same opcode meanings as ordinary filter):
- filter_type
- filter_resonance[_oncc]
- filter_cutoff[_oncc]

## `strings` opcodes (sympathetic resonance with waveguide synthesis):
- strings_wet_oncc 0-100
- strings_number: number of synthesized resonant strings

Note that the book has some typos or mispelled opcode names, such as `EffectN`
(capital letter) or `‹effects›`. In the following table some types values
descripted there were replaced with tested ones, like `autopan`
and releated opcodes, which seems not used in any Cakewalk product, where `apan`
is the correct one, same for `lofi` instead `bitred` and `decim`,
`disto` instead `distorsion`.
