---
layout: "sfz/opcode"
opcode_name: "sw_down"
---
`sw_down` can be entered in either MIDI note numbers (0 to 127) or in MIDI note
names (C-1 to G9)

## Example

```
sw_down=Cb3
```

The difference between this and [sw_last](sw_last) is that [sw_last](sw_last)
is a real, "sticky" keyswitch - after releasing the keyswitch note, it continues to
affect notes until another keyswitch is pressed. `sw_down`, on the other hand, is
"non-sticky" and only affects notes played while the switch is held down. In
typical usage, `sw_down` is not used as a real keyswitch at all, but is used to
select the correct note transition sample to play in true legato instruments.

This is why `sw_down` can be a note in the playable range, while `sw_last` keyswitches
should normally be outside the playable range.
