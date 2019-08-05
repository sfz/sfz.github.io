---
layout: sfz/opcode
lang: en
title: cutoff2
---
Same as [cutoff](cutoff), but used to specify the cutoff for the second filter.
When used, there are two filters applied to the region in series.

##### Example

```
cutoff2=1200
cutoff2=5000
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
| MIDI CC  | ✓ | cutoff2_onccN
