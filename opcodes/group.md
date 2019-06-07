---
lang: en
title: group
---
Exclusive group number for this region.

##### Examples

```
group=3

group=334
```

The `group` opcode is used together with [off_by](off_by) to make
something monophonic.

For example, the flute is by nature a monophonic instrument, so if a flute were
recorded with one microphone and had one set of samples, it would make sense to
set all its samples to have one group. A guitar is polyphonic, but each string
is monophonic, so a six-string guitar would naturally be split into six groups -
one per string. In these cases, the `group` number will be equal to the [off_by](off_by)
number.

This is also commonly used with hi-hats - this is an example of where things can
get more sophisticated with a large number of groups involved, as it's possible
to set more closed hi-hat sounds mute more open ones, but not vice-versa, and it's
also quite possible that there are separate close mic, overhead and room samples.

`group` and [off_by](off_by) can also be used in other contexts where one sound
should cause another to stop but enforcing monophony is not the goal - for example,
a crash cymbal doesn't need to be monophonic, as allowing the sound to build up
is reasonably natural, but if we wanted to implement a cymbal choke, then the
crash sounds would be in one group, the choke samples in another.

| Type    | Default | Range           |
| ---     | ---     | ---             |
| integer | 0       | 0 to 4294967296 |
