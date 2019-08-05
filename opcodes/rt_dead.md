---
layout: sfz/opcode
lang: en
title: rt_dead
---
Controls whether a release sample should play if its sustain sample has ended,
or not. Allowed values are on and off, default is off - so by default, release
samples do not play if their sustain samples have expired.

##### Example

```
rt_dead=on
```

Although the default behavior makes sense for instrument such as pianos, with
guitars there is still some noise when a finger releases a fretted note, so it
can make sense to use rt_dead=on there. Also, if using release samples to
emulate tremolo playing (so that the note plays when the key is pressed, and
again when the key is released - this can be useful for vibraphone, marimba etc.),
rt_dead=on can also be useful.
