---
template: "sfz/opcode.j2"
opcode_name: "ampeg_release"
---
## Examples

```sfz
ampeg_release=1.34
fileg_release=0.2
```

In many instruments, `ampeg_release` will need to be set to avoid the sound
cutting off unrealistically quickly when a note ends (unless the instrument uses
[loop_mode] set to **one_shot**, in which case the entire sample will
always play) even if amplifier envelopes are not used otherwise to shape the
sound. Also, `ampeg_release` is used when [off_mode] is set to normal.

Although the spec default is 0.001, ARIA uses a default of 0.03 for smoother
default cutoffs. Cakewalk products use 0.001.


[loop_mode]: loop_mode.md
[off_mode]:  off_mode.md
