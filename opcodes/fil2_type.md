---
---
# fil2_type

Same as fil_type, but used to specify the type for the second filter. When used,
there are two filters applied to the region in series.

Filter types in the SFZ1 spec are:

- ***lpf_1p***: one-pole low pass filter (6dB/octave).
- ***hpf_1p***: one-pole high pass filter (6dB/octave).
- ***lpf_2p***: two-pole low pass filter (12dB/octave).
- ***hpf_2p***: two-pole high pass filter (12dB/octave).
- ***bpf_2p***: two-pole band pass filter (12dB/octave).
- ***brf_2p***: two-pole band rejection filter (12dB/octave).

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
