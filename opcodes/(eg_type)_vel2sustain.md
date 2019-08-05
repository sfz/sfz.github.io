---
layout: sfz/opcode
lang: en
title: (eg type)_vel2sustain
---
Velocity effect on EG sustain level, in percentage.

##### Examples

```
ampeg_vel2sustain=30
pitcheg_vel2sustain=10
```

Sustain level will be calculated as

***sustain level = (eg type)_sustain + (eg type)_vel2sustain***

| Type  | Default | Range         |
| ---   | ---     | ---           |
| float | 0       | -100 to 100 % |
