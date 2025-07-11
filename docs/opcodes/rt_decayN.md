---
template: "sfz/opcode.j2"
opcode_name: "rt_decayN"
---

This works similarly to rt_decay, but with a multisegment volume decrease curve. The duration
of each segment and a different decrease rate for each segment can be set. Negative values are
also accepted (see last example) though of course these need to be used with care.

## Examples

```sfz
<region> sample=pianoA4.wav trigger=attack

<region> sample=keyup_noise.wav trigger=release
//The sample keyup_noise.wav will play 3dB quieter for every second the key has been on
//for up to two seconds.
rt_decay1=3
rt_decay1_time=2
//After that it will play quieter by 1.5 dB per second.
rt_decay2=1.5
```

```sfz
//No decay for the first second, decay of 3 dB per second afterwards
rt_decay1=0
rt_decay1_time=1
rt_decay2=3
```

```sfz
//Sympathetic string resonance volume for a crescendo sample
//For the first two seconds, volume starts 18 dB down but increases at 9 dB per second
volume=-18
rt_decay1=-9
rt_decay1_time=2
//During the third second, volume drops at a rate of 4 dB per second
rt_decay2=4
rt_decay2_time=1
//After that, volume drops at a rate of 9 dB per second
rt_decay3=9
```

## Practical Considerations

In ARIA, extended MIDI CC 151 can be used alongside (or instead of) rt_decay to select
different release samples for different time ranges. However, CCs have one value
across the entire instrument. CC 151 is time since the last note-on message in seconds.
This can give undesired results in arpeggios.

The rt_decayN opcode does have the advantage of not being affected by subsequently played
notes, but unlike CC 151, it cannot be used to select completely different release
samples for different time ranges.
