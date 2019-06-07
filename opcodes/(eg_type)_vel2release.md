---
lang: en
title: (eg type)_vel2release
---
Velocity effect on EG release time, in seconds.

##### Examples

```
ampeg_vel2release=1.2
fileg_vel2release=0.1
```

Release time will be calculated as

***release time = (eg type)_release + (eg type)_vel2release * velocity / 127***

| Type  | Default | Range         |
| ---   | ---     | ---           |
| float | 0       | -100 to 100 s |
