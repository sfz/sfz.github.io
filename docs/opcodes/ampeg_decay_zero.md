---
template: "sfz/opcode.j2"
opcode_name: "ampeg_decay_zero"
---
When 1, indicates decay time is the time it would take to get from 0dBs to -oo,
NOT the time to reach current sustain (as when 0).
1 and 0 must be used, true/false or on/off don't appear to be supported.

In other words, under default behavior, the decay slope is fixed, and the higher
the sustain level of the envelope, the less time the decay stage will actually
take. Changing ampeg_sustain will change the actual duration of the decay stage
as well, up to a maximum of the full [ampeg_decay] value at
[ampeg_sustain] equal to 0.

Setting this to 0 will make the decay always happen during the entire
time period specified by `ampeg_decay`, regardless of the current
`ampeg_sustain` level.

## Examples

```sfz
ampeg_decay_zero=0
ampeg_decay_zero=1
```


[ampeg_decay]:   ampeg_decay.md
[ampeg_sustain]: ampeg_sustain.md
