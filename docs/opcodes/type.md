---
template: "sfz/opcode.j2"
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

<img
  class="img-fluid"
  alt="Effect routing image"
  src="../../assets/img/effect/routing.svg"
/>

### apan
Automatic panning with LFO:

- [apan_depth](apan_depth.md)
- [apan_dry](apan_dry.md)
- [apan_freq](apan_freq.md)
- [apan_phase](apan_phase.md)
- [apan_waveform](apan_waveform.md)
- [apan_wet](apan_wet.md)

### comp
Compressor:

- [comp_attack](comp_attack.md)
- [comp_gain](comp_gain.md)
- [comp_ratio](comp_ratio.md)
- [comp_release](comp_release.md)
- [comp_stlink](comp_stlink.md)
- [comp_threshold](comp_threshold.md)

### delay
Multi-purpose delay line:

- [delay_cutoff](delay_cutoff.md)
- [delay_damphi](delay_damphi.md)
- [delay_damplo](delay_damplo.md)
- [delay_dry](delay_dry.md)
- [delay_feedback](delay_feedback.md)
- [delay_filter](delay_filter.md)
- [delay_input](delay_input.md)
- [delay_levelc](delay_levelc.md)
- [delay_levell](delay_levell.md)
- [delay_levelr](delay_levelr.md)
- [delay_lfofreq](delay_lfofreq.md)
- [delay_moddepth](delay_moddepth.md)
- [delay_mode](delay_mode.md)
- [delay_panc](delay_panc.md)
- [delay_panl](delay_panl.md)
- [delay_panr](delay_panr.md)
- [delay_resonance](delay_resonance.md)
- [delay_spread](delay_spread.md)
- [delay_syncc_onccN](delay_syncc_onccN.md)
- [delay_syncl_onccN](delay_syncl_onccN.md)
- [delay_syncr_onccN](delay_syncr_onccN.md)
- [delay_time_tap](delay_time_tap.md)
- [delay_timec](delay_timec.md)
- [delay_timel](delay_timel.md)
- [delay_timer](delay_timer.md)
- [delay_wet](delay_wet.md)

### disto
Asymmetric distorsion with tone control:

- [disto_depth](disto_depth.md)
- [disto_dry](disto_dry.md)
- [disto_stages](disto_stages.md)
- [disto_tone](disto_tone.md)
- [disto_wet](disto_wet.md)

### eq
Equalizer (Same opcode meanings as ordinary EQ):

- [eq_bw](eq_bw.md)
- [eq_freq](eq_freq.md)
- [eq_gain](eq_gain.md)
- [eq_type](eq_type.md)

### filter
(Same opcode meanings as ordinary filter):

- [filter_cutoff](filter_cutoff.md)
- [filter_resonance](filter_resonance.md)
- [filter_type](filter_type.md)

### fverb
Algorithmic reverberation:

- [reverb_damp](reverb_damp.md)
- [reverb_dry](reverb_dry.md)
- [reverb_input](reverb_input.md)
- [reverb_predelay](reverb_predelay.md)
- [reverb_size](reverb_size.md)
- [reverb_tone](reverb_tone.md)
- [reverb_type](reverb_type.md)
- [reverb_wet](reverb_wet.md)

### gate
Signal gate:

- [gate_onccN](gate_onccN.md)
- [gate_attack](gate_attack.md)
- [gate_release](gate_release.md)
- [gate_stlink](gate_stlink.md)
- [gate_threshold](gate_threshold.md)

### limiter
No opcodes for this type.

### lofi
Bit depth reducer and decimator combined:

- [bitred](bitred.md)
- [decim](decim.md)

### mverb
Present in some Cakewalk products only, undocumented.

### phaser
Dual-notch phaser with LFO:

- [phaser_depth](phaser_depth.md)
- [phaser_feedback](phaser_feedback.md)
- [phaser_freq](phaser_freq.md)
- [phaser_phase_onccN](phaser_phase_onccN.md)
- [phaser_stages](phaser_stages.md)
- [phaser_waveform](phaser_waveform.md)
- [phaser_wet](phaser_wet.md)

### static
Static noise generator:

- [static_cyclic_level](static_cyclic_level.md)
- [static_cyclic_time](static_cyclic_time.md)
- [static_filter](static_filter.md)
- [static_level](static_level.md)
- [static_random_level](static_random_level.md)
- [static_random_maxtime](static_random_maxtime.md)
- [static_random_mintime](static_random_mintime.md)
- [static_stereo](static_stereo.md)
- [static_tone](static_tone.md)

### strings
Sympathetic resonance with waveguide synthesis:

- [strings_number](strings_number.md)
- [strings_wet_onccN](strings_wet_onccN.md)

### tdfir
Impulse response convolver:

- [tdfir_dry](tdfir_dry.md)
- [tdfir_gain](tdfir_gain.md)
- [tdfir_impulse](tdfir_impulse.md)
- [tdfir_wet](tdfir_wet.md)

Note that the Cakewalk book has some typos in opcode names, such as `EffectN`
(capital letter) or `‹effects›`.
On this site, non-working effect types mentioned in the book were replaced with tested
ones. For example, `autopan` does not appear to work in any Cakewalk product, while
`apan` works. Same for `lofi` instead `bitred` and `decim`, and `disto` instead of
`distortion`.


[custom curves]: ../headers/curve.md
[‹effect›]:      ../headers/curve.md
[param_offset]:  param_offset.md
