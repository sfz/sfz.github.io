---
title: on_loccN / on_hiccN
---
Sample trigger on MIDI continuous control N. If a MIDI control message with a
value between `on_loccN` and `on_hiccN` is received, the region will play.
This does not involve playing any MIDI notes, making it an unusual way to
trigger a sample.

##### Example

```
on_locc1=0 on_hicc1=0
```

Region will play when a MIDI CC1 (modulation wheel) message with zero value is
received. So, basically, when the modwheel hits bottom, this region will play.
This might be useful with hi-hats, to simulate playing the hi-hat with the pedal -
in the above example, if the modwheel represents the hi-hat pedal position,
`on_loccN` and `on_hiccN` could be used to trigger a hi-hat foot chik sound.
Most electronic drum kits actually send a MIDI note when their pedal hits the
bottom (along with velocity information), but this could be useful when playing
drums for a keyboard.

| Type    | Default         | Range    |
| ---     | ---             | ---      |
| integer | -1 (unassigned) | 0 to 127 |
