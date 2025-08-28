---
template: "sfz/opcode.j2"
opcode_name: "cutoff"
title: "cutoff / cutoff2"
---
There are two filters in series - the cutoff frequency of one is controlled by `cutoff`, that of the second by `cutoff2`.

Cutoff can be controlled by [modulators] ([MIDI Controllers], [envelope generators], [low frequency oscillators], [velocity]).
Note that while the filter cutoff frequency is specified in Hertz, modulation amounts are given in cents.

See also: [filter types] and [resonance].

## Examples

In the following example, MIDI CC 1 is used for the first filter cutoff and
channel and polyphonic aftertouch for the second filter (presuming only one of the two will be sent):

```sfz
cutoff=343
cutoff2=1200
cutoff_cc1=1200
cutoff2_chanaft=1200
cutoff2_polyaft=1200
```

Both filters can be used be used to have both a high-pass and a low-pass filter, like this:

```
cutoff=1200
resonance=6
fil2_type=hpf_2p
cutoff2=250
resonance2=3
```

If you just want to test how cutoff modulations work, here is a simple example
using ARIA extended SFZ2 syntax for the `<control>` header,
with all notes at all velocities playing the same tone
and cutoff controlled by MIDI CC1:

```sfz
<control>
set_hdcc1=1 label_cc1=Cutoff

<global>
cutoff=24000
cutoff_cc1=-9600

<region>
sample=*saw
pitch_keycenter=60
pitch=440
pitch_keytrack=0
amp_veltrack=0
volume=-9
```
## Practical Considerations

Setting cutoff to 0 behaves differently in diffrent players:

* ARIA/sforzando : filter disabled, oncc disabled
* rgc sfz : filter off, oncc working
* Dimension Pro and Rapture : lowest cutoff value, oncc working
* sfizz : no sound
* BassMidi : filter off, no oncc support yet

[modulators]:                ../modulations/index.md
[MIDI Controllers]:          ../modulations/index.md
[envelope generators]:       ../modulations/envelope_generators.md
[low frequency oscillators]: ../modulations/lfo.md
[velocity]:                  ../modulations/vel2.md
[filter types]:              fil_type.md
[resonance]:                 resonance.md
