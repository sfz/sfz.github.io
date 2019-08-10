---
layout: sfz/opcode
lang: en
title: (eg type)_vel2attack
---
##### Examples

```
pitcheg_vel2delay=-1.2
ampeg_vel2delay=0.1
```

Attack time will be calculated as

***attack time = (eg type)_delay + (eg type)_vel2delay * velocity / 127***

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
