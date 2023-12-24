---
template: "sfz/opcode.j2"
opcode_name: "fil_type"
title: "fil_type / fil2_type"
---
Allows you to choose which type of filter you use if not specified
(ie.: only [cutoff] and [resonance] in the SFZ).

`fil_type` was created in SFZ v1, so under that specification level only the
v1 filters listed below are supported.

`fil2_type` was added later in SFZ v2 as a second filter to be used in series,
so under the v2 specification level both opcodes include both v1 and v2 filters.

ARIA adds three more possible values for both opcodes.

## Examples

```sfz
fil_type=lpf_2p
fil_type=hpf_1p
```

Passive tone controls in guitars are one-pole low pass filters.
Typical subtractive synthesizer filters are two-pole filters.

```sfz
fil2_type=hpf_2p
```

The combination of fil and fil2 can be used to have, for
example, both a high-pass and a low-pass filter, like this.
In the below example, the first filter does not have a type
set explicitly, so fil_type defaults to lpf_2p, making it
a lowpass filter. The second filter is set to be a highpass filter.

```sfz
cutoff=1200
resonance=6
fil2_type=hpf_2p
cutoff2=250
resonance2=3
```

## Practical Considerations

`lsh`, `hsh` and `peq` are ARIA extensions, allowing filters to be used as low-shelf,
high-shelf or up to two additional parametric EQ bands,
in addition to the default three eqN bands.
Filters of these three types use [fil_gain] or [fil2_gain]
to set the gain of the shelf or band.


[cutoff]:    cutoff.md
[fil_gain]:  fil_gain.md
[fil2_gain]: fil2_gain.md
[resonance]: resonance.md
