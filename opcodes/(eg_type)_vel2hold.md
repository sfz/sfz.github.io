---
title: (eg type)_vel2hold
---
Velocity effect on EG hold time, in seconds.

##### Examples

```
pitcheg_vel2hold=1.2
pitcheg_vel2hold=0.1
```

Hold time will be calculated as

***hold time = (eg type)_hold + (eg type)_vel2hold * velocity / 127***

| Type  | Default | Range         |
| ---   | ---     | ---           |
| float | 0       | -100 to 100 s |

