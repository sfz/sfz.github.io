---
layout: "sfz/opcode"
lang: "en"
opcode_name: "fil_type"
---
Allows you to choose which type of filter you use. if not specified
(ie.: only [cutoff](cutoff) and [resonance](resonance) in the SFZ).

Filter types in the SFZ1 spec are:

- ***lpf_1p***: one-pole low pass filter (6dB/octave).
- ***hpf_1p***: one-pole high pass filter (6dB/octave).
- ***lpf_2p***: two-pole low pass filter (12dB/octave).
- ***hpf_2p***: two-pole high pass filter (12dB/octave).
- ***bpf_2p***: two-pole band pass filter (12dB/octave).
- ***brf_2p***: two-pole band rejection filter (12dB/octave).

## Examples

```
fil_type=lpf_2p
fil_type=hpf_1p
```

Passive tone controls in guitars are one-pole low pass filters.
Typical subtractive synthesizer filters are two-pole filters.
