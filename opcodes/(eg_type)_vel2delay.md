---
---
# (eg type)_vel2delay

Velocity effect on EG delay time, in seconds.

##### Examples

```
pitcheg_vel2delay=-0.2
ampeg_vel2delay=0.1
```

Delay time will be calculated as

***delay time = (eg type)_delay + (eg type)_vel2delay * velocity / 127***

Range is -100 seconds to 100 seconds, but in most typical cases, the effect of
velocity on envelope delay and attack times will be negative, and the effect of
velocity on other envelope parameters positive.

| Type  | Default | Range         |
| ---   | ---     | ---           |
| float | 0       | -100 to 100 s |
