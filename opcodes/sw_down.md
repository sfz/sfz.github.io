---
layout: "sfz/opcode"
opcode_name: "sw_down"
---
`sw_down` can be entered in either MIDI note numbers (0 to 127) or in MIDI note
names (C-1 to G9)

## Example

```
sw_down=C3
sw_down=24
```

The difference between this and [sw_last](/opcodes/sw_last) is that  `sw_last`
is a "sticky" keyswitch - after releasing the keyswitch note, it continues to
affect notes until another keyswitch is pressed. `sw_down`, on the other hand, is
"non-sticky" and only affects notes played while the switch is held down. It could
also possibly be used for true legato instead of [sw_previous](/opcodes/sw_previous).

If there is a default articulation which should sound when no `sw_down` keys are
pressed, [sw_up](/opcodes/sw_up) should be defined for those regions. For example,
if there is a flute with a default sustain articulation which should not sound
when an ornamentation is selected using `sw_down`, the default sustain articulation
can use `sw_up` so it only sounds when no ornamentation keyswitch is held down.

In ARIA `sw_down` can be a note in the playable range, regardless of whether
[sw_lokey/hikey](/opcodes/sw_lokey) is defined or not. In rgc sfz, `sw_down`
can be in the playable range if `sw_lokey/hikey` are not defined, but if they
are defined, then `sw_down` notes must fall in the `sw_lokey/hikey` range.
