---
layout: "sfz/opcode"
title: "sw_lokey / sw_hikey"
---
Basically, this tells the SFZ player where the keyswitches are.
As such, it's normally going to be the same for the entire instrument,
so `sw_lokey` and `sw_hikey` will be set under the [global](/headers/global)
header.  This affects [sw_last](/opcodes/sw_last) keyswitches. On the other hand,
[sw_previous](/opcodes/sw_previous) keyswitches can be outside of this range - and
indeed often must be, as `sw_previous` is often used for legato instruments.

With [sw_down/sw_up](/opcodes/sw_down) this behavior is implementation-dependent.
In ARIA, either `sw_down` or `sw_up` can be a note in the playable range, regardless
of whether [sw_lokey/hikey](/opcodes/sw_lokey) is defined or not. In rgc sfz, they
can be in the playable range if `sw_lokey/hikey` are not defined, but if they
are defined, then `sw_down` and `sw_up` notes must fall in the `sw_lokey/hikey` range.

`sw_lokey` and `sw_hikey` can be entered in either MIDI note numbers (0 to 127)
or in MIDI note names (C-1 to G9)

## Example

```
sw_lokey=48 sw_hikey=53
```
