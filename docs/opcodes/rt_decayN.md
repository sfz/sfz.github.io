---
template: "sfz/opcode.j2"
opcode_name: "rt_decayN"
---

This works similarly to rt_decay, but with a multisegment volume decrease curve. The duration
of each segment and a different decrease rate for each segment can be set.

## Example

```sfz
<region> sample=pianoA4.wav trigger=attack

<region> sample=keyup_noise.wav trigger=release
rt_decay1=3
rt_decay1_time=2
rt_decay2=1.5

//The sample keyup_noise.wav will play 3db quieter for every second the key has been on.
```

## Practical Considerations

In ARIA, extended MIDI CC 151 can be used alongside (or instead of) rt_decay to select
different release samples for different time ranges. However, CCs have one value
across the entire instrument. CC 151 is time since the last note-on message in seconds.
This can give undesired results in arpeggios.

The rt_decayN opcode does have the advantage of not being affected by subsequently played
notes, but unlike CC 151, it cannot be used to select completely different release
samples for different time ranges.
