# sw_previous

Previous note value. The region will play if last note-on message was equal to
sw_previous value.

`sw_previous` can be entered in either MIDI note numbers (0 to 127) or
in MIDI note names (C-1 to G9)

##### Example

```
sw_previous=60
```

Note that unlike [sw_last](/opcodes/sfz_1/sw_last), the note specified by
`sw_previous` doesn't need to fall in the `sw_lokey` / `sw_hikey` range.
This is useful for true sampled legato - example needed.

| Type    | Default | Range     | 
| ---     | ---     | ---       |
| integer | none    | 0 to 127  |
|         |         | C-1 to G9 |
