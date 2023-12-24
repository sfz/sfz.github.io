---
title: (eg type)_vel2(target)
---
The __velocity_to__ modulations time, in seconds, can be calculated as:

```
(target) time = (eg type)_(target) + (eg type)_vel2(target) * velocity / 127
```

and the sustain level, in percentage, as:

```
sustain level = (eg type)_sustain + (eg type)_vel2sustain
```

Range is -100 seconds to 100 seconds, but in most typical cases, the effect of
velocity on envelope delay and attack times will be negative, and the effect
of velocity on other envelope parameters positive. This would make a sound have
a faster attack and a slower decay when a note has higher velocity, with attack
of 0.5 seconds at 0 velocity and 0.1 seconds at 127 velocity:

```
ampeg_attack=0.5
ampeg_vel2attack=-0.4
ampeg_decay=0.5
ampeg_vel2decay=1
ampeg_sustain=50
ampeg_release=0.25
```

## EQ

TODO
