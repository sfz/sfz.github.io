---
title: egN_sustain
---
This needs to be tested to verify if this is what it actually does.
Defines which envelope point is used for the sustain level.
The part of the specified envelope before that point will be triggered
on note attack, and the part after that point will be triggered on note release.
While the note sustains, the envelope will be at the level set by
the same numbered [egN_level](egN_level) opcode.

##### Example

```
eg01_sustain=5
```
