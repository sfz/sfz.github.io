# delay_random

Region random delay time, in seconds.

If the region receives a note-off message before delay time,
the region won't play. Similar to `delay` otherwise.

##### Examples

```
delay_random=1

delay_random=0.2
```

| Type  | Default | Range      |
| ---   | ---     | ---        |
| float | 0       | 0 to 100 s |
