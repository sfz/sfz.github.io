---
title: ‹effect›
---
SFZ v2 header for effects controls.

In [SFZ v1] only [effect1] and [effect2] opcodes was available
and only at [‹region›] level.

From [SFZ v2] this header was added together with the addition of
[effect3] and [effect4] opcodes also to modulate the related bus.
Other opcodes listed in the book are [bus], [type] and [dsp_order].

## Cakewalk

Cakewalk supports the [type] opcode to set the effect
type, though the value "autopan" is replaced with "apan".
Other opcodes supported under the `‹effect›` header are:

- [directtomain]
- [fxNtomain]

The following is not found in the rgc suite of SFZ v2 tests, and therefore
probably isn't part of the SFZ v2 specification, but works in Cakewalk
products:

- [fxNtomix]
- [bypass_onccN]

`internal`, which can be set to `on` or `off`, works in Rapture,
but not in other Cakewalk products, and doesn't appear to be officially
documented anywhere.

The effect routing logic in Rapture is as follows:

<img src="{{ '/assets/img/effect/routing.svg' | relative_url }}"
	class="img-fluid" alt="Effect routing image">

## ARIA Extensions

In the PC version of ARIA, the MDA effects are bundled. That means
that under the `‹effect›` header, any of these effect types can be set.

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

Also see [param_offset] for how to
configure the parameters for these effects in ARIA.
The order of the parameters is the same as at [the plugin version of the MDA effects].
These effects are not part of the SFZ engine, so it is not possible to, for
example, have one MIDI CC parameter control two parameters in the same effect,
or use [curve_index]. Example usage below:

```
<control>
set_cc300=64
set_cc301=127

<effect>
param_offset=300
type=com.mda.Overdrive
```

[SFZ v1]:       misc/sfz1
[SFZ v2]:       misc/sfz2
[‹region›]:     headers/region
[effect1]:      opcodes/effect1
[effect2]:      opcodes/effect2
[effect3]:      opcodes/effect3
[effect4]:      opcodes/effect4
[bus]:          opcodes/bus
[type]:         opcodes/type
[dsp_order]:    opcodes/dsp_order
[directtomain]: opcodes/directtomain
[fxNtomain]:    opcodes/fxNtomain
[fxNtomix]:     opcodes/fxNtomix
[bypass_onccN]: opcodes/bypass_onccN
[curve_index]:  headers/curve
[param_offset]: opcodes/param_offset
[the plugin version of the MDA effects]: http://mda.smartelectronix.com/
