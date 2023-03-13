---
layout: "sfz/opcode"
opcode_name: "note_selfmask"
---
This affects only muting of notes where the polyphony is limited by
[note_polyphony] and not cases where [polyphony] is used.

Default self-masking behavior is that higher-or-equal-velocity notes turn off
lower-velocity notes, but lower-velocity notes do not turn off
higher-velocity notes. A new note will always play.

To be more precise, assuming a [note_polyphony]=1, the self-masking behavior by default is:
- If a low-velocity note is playing, a higher-or-equal velocity note kills
  the low-velocity note.
- If a high-velocity note is playing, a strictly-lower-velocity note will play
  without killing the high-velocity note.

The [note_polyphony] opcode is thus not a strict polyphony limit but more of a hint
for the instrument behavior. This behavior is indeed generally desirable
when playing repeated piano notes, ride cymbals, hammered dulcimers etc.
With `note_selfmask` set to off, notes turn off notes with the same pitch
regardless of velocity, which generally sounds less "musical" but does ensure that
note polyphony is always preserved within the set limit, and can sound right
for certain instruments.

## Example

```
note_selfmask=off
```


[note_polyphony]: note_polyphony
[polyphony]:      polyphony
