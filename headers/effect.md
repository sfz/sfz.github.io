---
title: ‹effect›
lang: en
---
SFZ header for effects controls.

This will vary across SFZ players, but in the PC version of ARIA,
the MDA effects are bundled. That means that under the `effect` header,
any of these effect types can be set.

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

[curve_index]:  /headers/curve
[param_offset]: /opcodes/param_offset
[the plugin version of the MDA effects]: http://mda.smartelectronix.com/
