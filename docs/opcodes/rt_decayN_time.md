---
template: "sfz/opcode.j2"
opcode_name: "rt_decayN"
---

## Example

```sfz
<region> sample=pianoA4.wav trigger=attack

<region> sample=keyup_noise.wav trigger=release
rt_decay1=3
rt_decay1_time=2
rt_decay2=1.5

//The sample keyup_noise.wav will play 3db quieter for every second the key has been on.
```
