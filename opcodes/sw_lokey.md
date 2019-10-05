---
layout: "sfz/opcode"
lang: "en"
title: "sw_lokey / sw_hikey"
---
Basically, this tells the SFZ player where the keyswitches are.
As such, it's normally going to be the same for the entire instrument,
so `sw_lokey` and `sw_hikey` will be set under the [global](/headers/global)
header.

`sw_lokey` and `sw_hikey` can be entered in either MIDI note numbers (0 to 127)
or in MIDI note names (C-1 to G9)

## Example

```
sw_lokey=48 sw_hikey=53
```
