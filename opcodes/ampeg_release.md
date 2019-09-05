---
layout: sfz/opcode
lang: en
---
##### Examples

```
ampeg_release=1.34
fileg_release=0.2
```

In many instruments, `ampeg_release` will need to be set to avoid the sound
cutting off unrealistically quickly when a note ends (unless the instrument uses
[loop_mode](loop_mode) set to one_shot, in which case the entire sample will
always play) even if amplifier envelopes are not used otherwise to shape the
sound. Also, `ampeg_release` is used when [off_mode](off_mode) is set to normal.
