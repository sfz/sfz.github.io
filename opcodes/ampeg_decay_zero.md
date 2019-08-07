---
layout: sfz/opcode
lang: en
title: ampeg_decay_zero
---
Specifies how decay time is calculated. When 1, indicates decay time
is the time it would take to get from 0dBs to -oo, NOT the time to reach current
sustain (as when 0). Default is 1. 1 and 0 must be used at least in Sforzando
1.952 - true/false or on/off don't appear to be supported.

In other words, under default behavior, the decay slope is fixed, and the higher
the sustain level of the envelope, the less time the decay stage will actually
take. Changing ampeg_sustain will change the actual duration of the decay stage
as well, up to a maximum of the full [ampeg_decay](ampeg_decay) value at
`ampeg_sustain` equal to 0.

Setting this to false will make the decay always happen during the entire
time period specified by `ampeg_decay`, regardless of the current
`ampeg_sustain` level.

##### Examples

```
ampeg_decay_zero=0
ampeg_decay_zero=1
```
