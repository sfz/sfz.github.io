---
title: resonance2
---
Same as [resonance](resonance), but used to specify the resonance for the second
filter. When used, there are two filters applied to the region in series.

##### Example

```
resonance2=1.5
resonance2=9
resonance2_oncc100=3
```

This could be used to have both a high-pass and a low-pass filter, like this:

```
cutoff=1200
resonance=6
fil2_type=hpf_2p
cutoff2=250
resonance2=3
```

| Modulation Sources
|           ---
| Envelope | ✓ |
| LFO      | ✓ |
| MIDI CC  | ✓ | resonance2_onccN
