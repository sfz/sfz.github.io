---
layout: sfz/opcode
lang: en
title: note_polyphony
---
##### Example

```
polyphony_limit=3
```

Under default voice stealing behavior, this is not a "hard" limit because
lower-velocity notes do not mute higher-velocity ones. It can be changed
to a hard limit using [note_selfmask](note_selfmask).
Limiting note_polyphony is useful for controlling both the sound buildup and
resource usage on long-ringing instruments such as piano with the sustain pedal
pressed down or hammered dulcimer. An alternative for those use cases is using
[ampeg_release](ampeg_release) with [off_mode](off_mode) set to normal.
