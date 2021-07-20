---
layout: "sfz/opcode"
opcode_name: "note_polyphony"
---
## Example

```
note_polyphony=3
```

The difference between applying [polyphony](/opcodes/polyphony) across one
note and using note_polyphony is that note_polyphony also uses
[note_selfmask](/opcodes/note_selfmask) which opens up some additional
options.
Default self-masking behavior is that higher-or-equal-velocity notes turn off
lower-velocity notes, but lower-velocity notes do not turn off
higher-velocity notes. A new note will always play.
To be more precise, assuming a `note_polyphony=1`, the self-masking behavior by default is:
- If a low-velocity note is playing, a higher-or-equal velocity note kills the low-
velocity note.
- If a high-velocity note is playing, a strictly-lower-velocity note will play without
killing the high-velocity note.
The `note_polyphony` opcode is thus not a strict polyphony limit but more of a hint for
the instrument behavior. This behavior is indeed generally desirable when playing repeated
piano notes, hammered dulcimers, etc. It can also be useful for cymbals, although
especially with hi-hats, those will often use different notes for different
articulations, and note_polyphony would be limited to working within an
articulation.

The note polyphony is checked within a polyphony group, set by the `group` or `polyphony_group`
opcodes. If no group is specified on the region (or its group, master or globally) the
note polyphony applies to the default group as if `group=0` was specified.

This means that instruments where one note needs to trigger multiple layers, for example
drums with separate microphone samples, will usually need to set a separate `group` number
for each microphone position, so the note polyphony limit is tracked separately for each
mic.
