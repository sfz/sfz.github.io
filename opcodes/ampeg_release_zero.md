---
---
# ampeg_release_zero

Specifies how release time is calculated. When true/on/1, indicates release time
is the time it would take to get from 0dBs to -oo, NOT the time to get from
the current sustain to zero (as when false/off/0). Default is true.

In other words, under default behavior, the release slope is fixed,
and the higher the sustain level of the envelope, the less time the release
stage will actually take. Setting this to false will make the release always
happen during the entire time period specified by [ampeg_release]((eg_type)_release),
regardless of the current `ampeg_sustain` level.

Examples

```
ampeg_release_zero=false
ampeg_release_zero=no
```
