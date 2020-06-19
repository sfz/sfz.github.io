---
layout: "sfz/opcode"
lang: "en"
opcode_name: "pitcheg_decay_zero"
---
When set to 1, the decay slope is fixed, and the higher
the sustain level of the envelope, the less time the decay stage will actually
take. Changing pitcheg_sustain will change the actual duration of the decay stage
as well, up to a maximum of the full [pitcheg_decay](pitcheg_decay) value at
[pitcheg_sustain](pitcheg_sustain) equal to 0.

Setting this to 0 will make the decay always happen during the entire
time period specified by `pitcheg_decay`, regardless of the current
`pitcheg_sustain` level.
## Examples

```
pitcheg_decay_zero=0
pitcheg_decay_zero=1
```
