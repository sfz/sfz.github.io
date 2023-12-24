---
template: "sfz/opcode.j2"
title: "sw_lokey / sw_hikey"
---
Basically, this tells the SFZ player where the keyswitches are.
As such, it's normally going to be the same for the entire instrument,
so `sw_lokey` and `sw_hikey` will be set under the [‹global›] header.
This affects [sw_last] keyswitches. On the other hand, [sw_previous] keyswitches
can be outside of this range - and indeed often must be, as `sw_previous`
is often used for legato instruments.

With [sw_down / sw_up] this behavior is implementation-dependent.
In ARIA, either `sw_down` or `sw_up` can be a note in the playable range, regardless
of whether [sw_lokey / hikey] is defined or not. In rgc sfz, they
can be in the playable range if `sw_lokey/hikey` are not defined, but if they
are defined, then `sw_down` and `sw_up` notes must fall in the `sw_lokey/hikey` range.

`sw_lokey` and `sw_hikey` can be entered in either MIDI note numbers (0 to 127)
or in MIDI note names (C-1 to G9)

## Example

```sfz
sw_lokey=48 sw_hikey=53
```


[‹global›]:         ../headers/global.md
[sw_down / sw_up]:  sw_down.md
[sw_lokey / hikey]: sw_lokey.md
[sw_last]:          sw_last.md
[sw_previous]:      sw_previous.md
