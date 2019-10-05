---
layout: "sfz/opcode"
lang: "en"
opcode_name: "pitch_keytrack"
---
Default value is 100, which means pitch will change one hundred cents
(one semitone) per played note.

Setting this value to zero means that all notes in the region will play the same
pitch, particularly useful when mapping drum sounds.

## Examples

```
pitch_keytrack=20

pitch_keytrack=0
```

Most of the time, this will either be 100 (default) or 0, but intermediate
values, values above 100 or negative values are occasionally useful.
