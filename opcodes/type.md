---
layout: "sfz/opcode"
opcode_name: "type"
---

## ARIA Extensions

In the PC version of ARIA, the MDA effects are bundled. That means
that under the [‹effect›] header, any of these effect types can be set.

```
com.mda.Limiter
com.mda.Overdrive
com.mda.Leslie
com.mda.RingMod
com.mda.Delay
com.mda.Bandisto
com.mda.Ambience
com.mda.DubDelay
com.mda.Detune
com.mda.Dither
com.mda.Combo
com.mda.Degrade
com.mda.SubSynth
com.mda.RezFilter
```

Also see [param_offset] for how to configure the parameters for these effects in ARIA.
The order of the parameters is the same as at [the plugin version of the MDA effects](http://mda.smartelectronix.com/).
These effects are not part of the SFZ engine, so it is not possible to, for
example, have one MIDI CC parameter control two parameters in the same effect,
or use [custom curves]. Example usage below:

```
<control>
set_cc300=64
set_cc301=127

<effect>
param_offset=300
type=com.mda.Overdrive
```

## Cakewalk implementation

In Cakewalk, each of the effect types has its own set of opcodes
controlling its parameters. Here is a list of what is currently known.

The effect routing logic in Rapture is as follows:

<img src="{{ '/assets/img/effect/routing.svg' | relative_path }}"
	class="img-fluid" alt="Effect routing image">

### apan
Automatic panning with LFO:
- [apan_depth](apan_depth)
- [apan_dry](apan_dry)
- [apan_freq](apan_freq)
- [apan_phase](apan_phase)
- [apan_waveform](apan_waveform)
- [apan_wet](apan_wet)

### comp
Compressor:
- [comp_attack](comp_attack)
- [comp_gain](comp_gain)
- [comp_ratio](comp_ratio)
- [comp_release](comp_release)
- [comp_stlink](comp_stlink)
- [comp_threshold](comp_threshold)

### delay
Multi-purpose delay line:
- [delay_cutoff](delay_cutoff)
- [delay_damphi](delay_damphi)
- [delay_damplo](delay_damplo)
- [delay_dry](delay_dry)
- [delay_feedback](delay_feedback)
- [delay_filter](delay_filter)
- [delay_input](delay_input)
- [delay_levelc](delay_levelc)
- [delay_levell](delay_levell)
- [delay_levelr](delay_levelr)
- [delay_lfofreq](delay_lfofreq)
- [delay_moddepth](delay_moddepth)
- [delay_mode](delay_mode)
- [delay_panc](delay_panc)
- [delay_panl](delay_panl)
- [delay_panr](delay_panr)
- [delay_resonance](delay_resonance)
- [delay_spread](delay_spread)
- [delay_syncc_onccN](delay_syncc_onccN)
- [delay_syncl_onccN](delay_syncl_onccN)
- [delay_syncr_onccN](delay_syncr_onccN)
- [delay_time_tap](delay_time_tap)
- [delay_timec](delay_timec)
- [delay_timel](delay_timel)
- [delay_timer](delay_timer)
- [delay_wet](delay_wet)

### disto
Asymmetric distorsion with tone control:
- [disto_depth](disto_depth)
- [disto_dry](disto_dry)
- [disto_stages](disto_stages)
- [disto_tone](disto_tone)
- [disto_wet](disto_wet)

### eq
Equalizer (Same opcode meanings as ordinary EQ):
- [eq_bw](eq_bw)
- [eq_freq](eq_freq)
- [eq_gain](eq_gain)
- [eq_type](eq_type)

### filter
(Same opcode meanings as ordinary filter):
- [filter_cutoff](filter_cutoff)
- [filter_resonance](filter_resonance)
- [filter_type](filter_type)

### fverb
Algorithmic reverberation:
- [reverb_damp](reverb_damp)
- [reverb_dry](reverb_dry)
- [reverb_input](reverb_input)
- [reverb_predelay](reverb_predelay)
- [reverb_size](reverb_size)
- [reverb_tone](reverb_tone)
- [reverb_type](reverb_type)
- [reverb_wet](reverb_wet)

### gate
Signal gate:
- [gate_onccN](gate_onccN)
- [gate_attack](gate_attack)
- [gate_release](gate_release)
- [gate_stlink](gate_stlink)
- [gate_threshold](gate_threshold)

### limiter
No opcodes for this type.

### lofi
Bit depth reducer and decimator combined:
- [bitred](bitred)
- [decim](decim)

### mverb
Present in some Cakewalk products only, undocumented.

### phaser
Dual-notch phaser with LFO:
- [phaser_depth](phaser_depth)
- [phaser_feedback](phaser_feedback)
- [phaser_freq](phaser_freq)
- [phaser_phase_onccN](phaser_phase_onccN)
- [phaser_stages](phaser_stages)
- [phaser_waveform](phaser_waveform)
- [phaser_wet](phaser_wet)

### static
Static noise generator:
- [static_cyclic_level](static_cyclic_level)
- [static_cyclic_time](static_cyclic_time)
- [static_filter](static_filter)
- [static_level](static_level)
- [static_random_level](static_random_level)
- [static_random_maxtime](static_random_maxtime)
- [static_random_mintime](static_random_mintime)
- [static_stereo](static_stereo)
- [static_tone](static_tone)

### strings
Sympathetic resonance with waveguide synthesis:
- [strings_number](strings_number)
- [strings_wet_onccN](strings_wet_onccN)

### tdfir
Impulse response convolver:
- [tdfir_dry](tdfir_dry)
- [tdfir_gain](tdfir_gain)
- [tdfir_impulse](tdfir_impulse)
- [tdfir_wet](tdfir_wet)

Note that the Cakewalk book has some typos in opcode names, such as `EffectN`
(capital letter) or `‹effects›`.
On this site, non-working effect types mentioned in the book were replaced with tested
ones. For example, `autopan` does not appear to work in any Cakewalk product, while
`apan` works. Same for `lofi` instead `bitred` and `decim`, and `disto` instead of
`distortion`.


[custom curves]: {{ '/headers/curve' | relative_url }}
[‹effect›]:      {{ '/headers/curve' | relative_url }}
[param_offset]: param_offset
