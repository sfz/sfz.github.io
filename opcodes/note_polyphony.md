---
layout: "sfz/opcode"
lang: "en"
opcode_name: "note_polyphony"
---
## Example

```
note_polyphony=3
```
The difference between applying [polyphony](/opcodes/polyphony) across one
note and using note_polyphony is that note_polyphony also uses
[note_selfmask](/opcodes/note_selfmask) which opens up some additional
options. With the default setting, lower-velocity notes do not mute higher-velocity
ones. This is useful for long-ringing instruments such as piano with the sustain pedal
pressed down or hammered dulcimer. It can also be useful for cymbals, although
especially with hi-hats, those will often use different notes for different
articulations, and note_polyphony would be limited to working within an
articulation.
