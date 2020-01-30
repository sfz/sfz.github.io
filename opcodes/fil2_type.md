---
layout: "sfz/opcode"
lang: "en"
opcode_name: "fil2_type"
---
When used, there are two filters applied to the region in series.

## Examples

```
fil2_type=hpf_2p
```

This could be used to have both a high-pass and a low-pass filter, like this. The first
filter does not have fil_type set explicitly, so it defaults to lpf_2p, making it a
lowpass filter. The second filter is set to be a highpass filter.

```
cutoff=1200
resonance=6
fil2_type=hpf_2p
cutoff2=250
resonance2=3
```

## Players support

Both ARIA and LinuxSampler supports all SFZ v1 filter types.
The following table describes which SFZ v2 and ARIA extension filter types they support.
Lsh, hsh and peq are ARIA extensions, allowing filters to be used as low-shelf, high-shelf
or up to two additional parametric EQ bands, in addition to the default three eqN bands.
Filters of these three types use fil_gain or fil2_gain to set the gain of the shelf or
band.

{% include sfz/fil2_type_players_compatibility_table.html %}
