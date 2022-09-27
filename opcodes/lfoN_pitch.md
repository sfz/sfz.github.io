---
layout: "sfz/opcode"
opcode_name: "lfoN_pitch"
---

Destination for lfoN which effects the pitch of the region. The value assigned to the opcode is in cents, and oscillates up/down from the base frequency of the played region. For example playing middle C (MIDI note number 60) with lfo1_pitch set to 100 cents, the oscillation will be between C# a semitone above, and B a semitone below. 

## Example:

```
<region> sample=*sine

lfo1_freq=2 // frequency of the LFO in hertz, (2 oscillations per second)
lfo1_pitch=100 // value in cents
```

