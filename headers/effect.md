---
title: ‹effect›
---
SFZ v2 header for effects controls.

In [SFZ v1] only [effect1] and [effect2] opcodes was available
and only at [‹region›] level.

From [SFZ v2] this header was added together with the addition of
[effect3] and [effect4] opcodes also to modulate the related bus.
	
## Cakewalk

Cakewalk supports the [type](/opcodes/type) opcode to set the effect
type, though the value "autopan" is replaced with "apan".

Other opcodes supported under the `effect` header are:

bus: can be set to fxN where N can be 1-4, auxN with an unknown range
of N. If not set, or any other value is set, this goes to the main
output. Possibly `main` is the default value.

directtomain: global, can be set under any <effect> header for identical
result. This is the gain of the Main bus into the output. (See routing graph)
Translates from % into a linear gain 0-1.
Unit:% Default:100%

fxNtomain: Global, can be set under any <effect> header for identical result.
Gain of the Nth effect bus into the output. (N: 1-4, see routing graph)
Translates from % into a linear gain 0-1.
Unit:% Default:0%

The following is not found in the rcg suite of SFZ v2 tests, and therefore
probably isn't part of the SFZ v2 specification, but works in Cakewalk
products:

fxNtomix: Global, can be set under any <effect> header for identical result.
Gain of the Nth effect bus into the Mix node. (N: 1-4, see routing graph)
Translates from % into a linear gain 0-1.
Unit:% Default:0%
	
bypass_onccN: Sets up a bypass controller for the effect. When the MIDI CC
value (0-127) is >= a threshold, the effect plays, otherwise it's disabled.
The threshold is determined according to this expression: 64.0 / BypassValue
where BypassValue is the opcode's value, strictly positive, interpreted as
real number. At BypassValue=1, without doubt the most useful, the effect is
off at CC<64 and on at CC>=64.

The following works in Rapture, but not in other Cakewalk products, and
doesn't appear to be officially documented anywhere:

dsp_order and internal (which can be set to on or off) opcodes.

The effect routing logic in Rapture is as follows:

<img src="{{ '/assets/img/effect/routing.svg' | relative_path }}"
	class="img-fluid" alt="Effect routing image">

## ARIA Extensions

In the PC version of ARIA, the MDA effects are bundled. That means
that under the `effect` header, any of these effect types can be set.

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

[SFZ v1]:       /misc/sfz1
[SFZ v2]:       /misc/sfz2
[effect1]:      /opcodes/effect1
[effect2]:      /opcodes/effect2
[effect3]:      /opcodes/effect3
[effect4]:      /opcodes/effect4
[‹region›]:     /headers/region
[curve_index]:  /headers/curve
[param_offset]: /opcodes/param_offset
[the plugin version of the MDA effects]: http://mda.smartelectronix.com/
