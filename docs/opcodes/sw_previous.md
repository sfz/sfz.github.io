---
template: "sfz/opcode.j2"
opcode_name: "sw_previous"
---
`sw_previous` can be entered in either MIDI note numbers (0 to 127) or
in MIDI note names (C-1 to G9)

## Example

```sfz
sw_previous=60
```

Note that unlike [sw_last], the note specified by `sw_previous` doesn't need
to fall in the [sw_lokey / sw_hikey] range.
This is useful for true sampled legato.


[sw_last]:             sw_last.md
[sw_lokey / sw_hikey]: sw_lokey.md
