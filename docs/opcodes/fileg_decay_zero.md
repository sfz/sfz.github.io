---
template: "sfz/opcode.j2"
opcode_name: "fileg_decay_zero"
---
When set to 1, the decay slope is fixed, and the higher
the sustain level of the envelope, the less time the decay stage will actually
take. Changing fileg_sustain will change the actual duration of the decay stage
as well, up to a maximum of the full [fileg_decay] value at
[fileg_sustain] equal to 0.

Setting this to 0 will make the decay always happen during the entire
time period specified by `fileg_decay`, regardless of the current
`fileg_sustain` level.

## Examples

```sfz
fileg_decay_zero=0
fileg_decay_zero=1
```


[fileg_decay]:   fileg_decay.md
[fileg_sustain]: fileg_sustain.md
