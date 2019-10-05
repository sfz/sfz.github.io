---
layout: "sfz/opcode"
lang: "en"
opcode_name: "sw_vel"
---
Values can be:

- ***current***: Region uses the velocity of current note.
- ***previous***: Region uses the velocity of the previous note.

## Example

```
sw_vel=previous
```

Setting this to previous is useful for making certain legato instruments sound
smoother and more consistent.
