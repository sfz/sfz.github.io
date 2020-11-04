---
layout: "sfz/opcode"
opcode_name: "cutoff"
---
Note that while this is specified in Hertz, filter LFO depths in the SFZ 1 spec are in cents.
There are two filters in series - the cutoff frequency of one is controlled by cutoff, that
of the second by cutoff2.

## Examples

```
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
