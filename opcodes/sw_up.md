---
---
# sw_up

Enables the region to play if the key equal to `sw_up` value is not depressed.

Key has to be in the range specified by `sw_lokey` and `sw_hikey`.

`sw_up` can be entered in either MIDI note numbers (0 to 127) or
in MIDI note names (C-1 to G9)

##### Example

```
sw_up=49
```

This is the opposite of [sw_down](/opcodes/sw_down).

| Type    | Default | Range     | 
| ---     | ---     | ---       |
| integer | 0       | 0 to 127  |
|         |         | C-1 to G9 |
