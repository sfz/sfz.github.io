---
layout: sfz/opcode
lang: en
title: on_loccN / on_hiccN
---
Sample trigger on MIDI continuous control N. If a MIDI control message with a
value between `on_loccN` and `on_hiccN` is received, the region will play.
This does not involve playing any MIDI notes.

##### Example

```
on_locc64=127 on_hicc64=127
```

Region will play when a MIDI CC64 (sustain pedal) message with 127 value is
received. So, basically, when the sustain pedal is pressed down, this region will play.
This is useful with piano pedals - in the above example, `on_loccN` and `on_hiccN`
could be used to trigger a mechanical noise sample. It would not typically be
used with hi-hat pedals, as most electronic drum kits will send a MIDI note when
the pedal hits bottom.


| Type    | Default         | Range    |
| ---     | ---             | ---      |
| integer | -1 (unassigned) | 0 to 127 |
