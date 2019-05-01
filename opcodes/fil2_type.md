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

##### Players support

| Type      | ARIA | LinuxSampler |
| ---       | ---  | ---          |
| lpf_1p    |  ✓   |      ✓       |
| lpf_2p    |  ✓   |      ✓       |
| lpf_2p    |  ✓   |      ✓       |
| lpf_4p    |  ✓   |      ✓       |
| lpf_6p    |  ✓   |      ✓       |
| hpf_1p    |  ✓   |      ✓       |
| hpf_2p    |  ✓   |      ✓       |
| hpf_4p    |  ✓   |      ✓       |
| hpf_6p    |  ✓   |      ✓       |
| bpf_1p    |  ✓   |      X       |
| bpf_2p    |  ✓   |      X       |
| brf_1p    |  ✓   |      X       |
| brf_2p    |  ✓   |      X       |
| apf_1p    |  X   |      X       |
| pkf_2p    |  X   |      X       |
| comb      |  X   |      X       |
| pink      |  X   |      X       |
| comb      |  X   |      X       |
| lpf_2p_sv |  X   |      X       |
| hpf_2p_sv |  X   |      X       |
| bpf_2p_sv |  X   |      X       |
| brf_2p_sv |  X   |      X       |
