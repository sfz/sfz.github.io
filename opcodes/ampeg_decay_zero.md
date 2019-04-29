---
---
# ampeg_decay_zero

Specifies how decay time is calculated. When true/on/1, indicates decay time
is the time it would take to get from 0dBs to -oo, NOT the time to reach current
sustain (as when false/off/0). Default is true.

In other words, under default behavior, the decay slope is fixed, and the lower
the sustain level of the envelope, the less time the decay stage will actually
take. Setting this to false will make the decay always happen during the entire
time period specified by [ampeg_decay]((eg_type)_decay),
regardless of the current `ampeg_sustain` level.

##### Examples

```
ampeg_decay_zero=false
ampeg_decay_zero=no
```
