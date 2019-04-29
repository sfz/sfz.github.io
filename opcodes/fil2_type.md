---
---
# fil2_type

Same as [fil_type](fil_type), but used to specify the type for the second filter.
When used, there are two filters applied to the region in series.

##### Example

```
fil2_type=hpf_2p
```

This could be used to have both a high-pass and a low-pass filter, like this:

```
cutoff=1200
resonance=6
fil2_type=hpf_2p
cutoff2=250
resonance2=3
```
