---
layout: "sfz/opcode"
title: "sw_down / sw_up"
---
Can be entered in either MIDI note numbers (0 to 127) or in MIDI note
names (C-1 to G9)

## Example

```
sw_down=C3
sw_down=24
sw_up=25
```

The difference between `sw_down` and [sw_last] is that  `sw_last`
is a "sticky" keyswitch - after releasing the keyswitch note, it continues to
affect notes until another keyswitch is pressed. `sw_down`, on the other hand, is
"non-sticky" and only affects notes played while the switch is held down. It could
also possibly be used for true legato instead of [sw_previous].

If there is a default articulation which should sound when no `sw_down` keys are
pressed, `sw_up` should be defined for those regions. For example,
if there is a flute with a default sustain articulation which should not sound
when an ornamentation is selected using `sw_down`, the default sustain articulation
can use `sw_up` so it only sounds when no ornamentation keyswitch is held down.

In ARIA, either `sw_down` or `sw_up` can be a note in the playable range, regardless
of whether [sw_lokey / hikey] is defined or not. In rgc sfz, they
can be in the playable range if `sw_lokey/hikey` are not defined, but if they
are defined, then `sw_down` and `sw_up` notes must fall in the `sw_lokey/hikey` range.


[sw_last]:          sw_last
[sw_lokey / hikey]: sw_lokey
[sw_previous]:      sw_previous
