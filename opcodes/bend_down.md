---
layout: sfz/opcode
lang: en
title: bend_down
---
If [bend_up](bend_up) is set to a positive value,
then moving the pitch wheel down will cause the pitch to move up.

##### Examples

```
bend_down=1200

bend_down=100
```
Positive values of `bend_down` can be useful with instruments such as zithers or
guitars, whose construction makes it practical to bend the pitch of notes up,
but not down - this way, moving the pitch wheel in either direction will result
in a realistic-sounding upwards bend.
