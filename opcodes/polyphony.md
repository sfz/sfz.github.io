---
layout: "sfz/opcode"
opcode_name: "polyphony"
---

This can be applied to all regions under a header such as
<[global](/headers/global)> or <[group](/headers/group)> or to regions
which have the same [group](/opcodes/group) opcdde value set. The
below examples all use the group opcode, not the group header, but
that is not the only way to use the polyphony opcode.

## Examples

```
polyphony=12
polyphony=5
```

An example limiting a crash cymbal to four polyphony voices.

```
group=1
off_by=1
polyphony=4
<region> key=49 sample=crash.wav
```

Here is a ride limited to a total of seven voices, with both bow and bell
articulations sharing the same polyphony group and the same seven-voice
limit.

```
group=2
off_by=2
polyphony=7
<region> key=51 sample=ride_bow.wav
<region> key=53 sample=ride_bell.wav
```

This opcode is useful for controlling sound buildup, limiting resource use,
and for emulating the behavior of vintage keyboards with limited polyphony.
It's also possible to use [note_polyphony](note_polyphony) instead when all the
sounds we want to mute each other are mapped to the same pitch, or use both in
combination. An alternative for controlling sound buildup is using
[ampeg_release](ampeg_release) with [off_mode](off_mode) set to normal.
