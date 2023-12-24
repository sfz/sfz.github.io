---
layout: "sfz/opcode"
opcode_name: "pitcheg_release"
---
## Examples

```
ampeg_release=1.34
fileg_release=0.2
```

In many instruments, `{{ page.opcode_name }}` will need to be set to avoid the sound
cutting off unrealistically quickly when a note ends (unless the instrument uses
[loop_mode] set to **one_shot**, in which case the entire sample will
always play) even if amplifier envelopes are not used otherwise to shape the
sound. Also, `{{ page.opcode_name }}` is used when [off_mode] is set to normal.


[loop_mode]: loop_mode
[off_mode]:  off_mode
