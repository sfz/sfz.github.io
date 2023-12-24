---
layout: "sfz/opcode"
opcode_name: "sw_previous"
---
`sw_previous` can be entered in either MIDI note numbers (0 to 127) or
in MIDI note names (C-1 to G9)

## Example

```
sw_previous=60
```

Note that unlike [sw_last], the note specified by `sw_previous` doesn't need
to fall in the [sw_lokey / sw_hikey] range.
This is useful for true sampled legato.


[sw_last]:             sw_last
[sw_lokey / sw_hikey]: sw_lokey
