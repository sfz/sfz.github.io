---
template: "sfz/opcode.j2"
title: "lobpm / hibpm"
---
Host tempo value. The region will play if the host tempo is equal to or higher
than `lobpm`, and lower than `hibpm`.

## Examples

```sfz
lobpm=0 hibpm=100

lobpm=100 hibpm=200.5
```
