---
layout: "sfz/opcode"
opcode_name: "egN_sustain"
---
Defines which envelope point is used for the sustain level.
The part of the specified envelope before that point will be triggered
on note attack, and the part after that point will be triggered on note release.
While the note sustains, the envelope will be at the level set by
the same numbered [egN_level](egN_levelX) opcode.

## Example

```
eg01_sustain=5
```
