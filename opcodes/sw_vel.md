---
layout: "sfz/opcode"
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

At least in ARIA, this affects only volume, and using velocity to modulate
pitch or filter cutoff will use the current note's velocity regardless of how
sw_vel is set.
