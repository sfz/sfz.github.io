---
title: bend_down
---
Pitch bend range when Bend Wheel or Joystick is moved down, in cents. If 
`bend_up` is set to a positive value, then moving the pitch wheel down will
cause the pitch to move up.

##### Examples

```
bend_down=1200

bend_down=100
```
Range from -9600 to 9600, default 200.
Positive values of bend_down can be useful with instruments such as zithers or
guitars, whose construction makes it practical to bend the pitch of notes up,
but not down - this way, moving the pitch wheel in either direction will result
in a realistic-sounding upwards bend.

| Type    | Default | Range               |
| ---     | ---     | ---                 |
| integer | -200    | -9600 to 9600 cents |
