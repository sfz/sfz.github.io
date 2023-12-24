---
template: "sfz/opcode.j2"
opcode_name: "resonance"
title: "resonance / resonance2"
---
## Example

```sfz
resonance=4
resonance_oncc100=3
resonance2=3.2
```

There are two filters in series - the resonance of one is controlled by resonance,
that of the second by resonance2.

Raising this can easily result in a very large boost to frequencies around
the cutoff, which can result in extremely loud output!
