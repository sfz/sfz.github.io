---
template: "sfz/opcode.j2"
opcode_name: "volume"
---
`volume` specifies the adjustment the sample player makes to the intensity of the sample,
and, along with any adjustments to amplitude (such as velocity tracking) affects the overall loudness on playback.

Whilst the range is -144.6 to 6 in the specification, many SFZ players can utilize values above 6.
Sfz.dll, Rapture and Dimension have a +24 dB maximum,
and ARIA has an upper limit of at least +144, perhaps even more.

ARIA also has [global_volume], [master_volume] and [group_volume], valid under the appropriate [headers].

## Examples

```sfz
volume=-24
volume=0
volume=3.5
```

The above simply set whatever boost you want for a region.

```sfz
volume=0
volume_cc1=12
```

This will play the sample with unchanged volume when CC1 is at zero,
and apply a 12 dB boost when CC1 is at maximum.

`volume_ccN` is useful for creating volume controls, particularly when combined with
`volume_curveccN`.

```sfz
// use CC1 for volume adjustment - ARIA style
<control>
set_hdcc1=0.5  label_cc1=+/- 3dB

<global>
volume=-3
volume_cc1=6
volume_curvecc1=1
```
In this example, the value of cc1 is initialised to 50% and labelled "+/- 3dB" under the [‹control›] header.
Under the [‹global›] header, CC 1 is then used with a bipolar curve (see [‹curve›] for why `..._curveccN=1`)
to vary the volume boost.
The total boost ranges from -3dB when CC1 is zero to +3dB when CC1 is 127
(-3dB from `volume=-3`, plus 6dB from `volume_cc1=6`).

Extended opcodes, such as `volume_curveccN` shown above, only apply to `volume`,
although the specification originally stated `gain_ccN` for adjusting volume using CCs.
`volume_ccN` is a valid alias for `gain_ccN` and is used for consistency in the example.

For the final output level, you can expect the sample level to be adjusted by a combination of the following:

* volume (as adjusted by, e.g. [rt_decay], [amp_keytrack] and other direct modifiers) in decibels
* linear amplitude adjustment by [ampeg...] opcodes, along with adjustments to that by [amplitude] opcodes
* pan

See also the [modulations] section, [SFZ1 modulations] and [SFZ2 modulations] tutorials.

[headers]: ../headers/index.md
[‹control›]: ../headers/control.md
[‹global›]: ../headers/global.md
[‹curve›]: ../headers/curve.md
[global_volume]: ./global_volume.md
[master_volume]: ./master_volume.md
[group_volume]: ./group_volume.md
[rt_decay]: ./rt_decay.md
[amp_keytrack]: ./amp_keytrack.md
[ampeg...]: ../modulations/envelope_generators.md#envelope-curves
[amplitude]: ./amplitude.md
[modulations]: ../modulations/index.md
[SFZ1 modulations]: ../tutorials/sfz1_modulations.md
[SFZ2 modulations]: ../tutorials/sfz2_modulations.md
