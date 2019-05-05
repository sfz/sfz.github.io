---
title: sw_lokey / sw_hikey
---
Defines the range of the keyboard to be used as trigger selectors for the
[sw_last](/opcodes/sw_last) opcode. Basically, this tells the SFZ player
where the keyswitches are. As such, it's normally going to be the same for the
entire instrument, so `sw_lokey` and `sw_hikey` will be set under the [global](/headers/global)
header.

`sw_lokey` and `sw_hikey` can be entered in either MIDI note numbers (0 to 127)
or in MIDI note names (C-1 to G9)

##### Example

```
sw_lokey=48 sw_hikey=53
```

| Type    | Default      | Range     | 
| ---     | ---          | ---       |
| integer | sw_lokey=0   | 0 to 127  |
|         | sw_hikey=127 | C-1 to G9 |
