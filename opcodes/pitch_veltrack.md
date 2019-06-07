---
lang: en
title: pitch_veltrack
---
Pitch velocity tracking, represents how much the pitch changes with incoming
note velocity, in cents.

##### Examples

```
pitch_veltrack=0

pitch_veltrack=1200
```

This can be useful when trying to emulate dynamic response on drum samples
recorded at only one velocity.

| Type    | Default | Range               |
| ---     | ---     | ---                 |
| integer | 0       | -9600 to 9600 cents |
