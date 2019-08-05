---
layout: sfz/opcode
lang: en
title: (eg type)_vel2decay
---
Velocity effect on pitch EG decay time, in seconds.

##### Examples

```
fileg_vel2decay=1.2
ampeg_vel2decay=0.1
```

Decay time will be calculated as

***decay time = (eg type)_decay + (eg type)_vel2decay * velocity / 127***

| Type  | Default | Range         |
| ---   | ---     | ---           |
| float | 0       | -100 to 100 s |
