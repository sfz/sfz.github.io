---
template: "sfz/opcode.j2"
opcode_name: "sw_vel"
---
Values can be:

- **current**: Region uses the velocity of current note.
- **previous**: Region uses the velocity of the previous note.

## Example

```sfz
sw_vel=previous
```

With sw_vel set to previous, a newly played region will be the triggered using the
previous region's velocity. For example, if the previous velocity is 100
and the velocity of the new note-on message is 60, the new region will play as if
its velocity was 100.

Setting this to previous is useful for making certain legato instruments sound
smoother and more consistent.

## Practical Considerations

At least in ARIA, this affects only volume, and using velocity to modulate
pitch or filter cutoff will use the current note's velocity regardless of how
sw_vel is set. Also in ARIA, sw_vel can work even if sw_previous is not defined.

To have sw_vel working in sfz.dll and DropZone and other Cakewalk players,
sw_previous need to be defined. Fil_veltrack, pitch_veltrack and other
velocity modulation e.g. ampeg_vel2attack, etc, also affected by sw_vel.
