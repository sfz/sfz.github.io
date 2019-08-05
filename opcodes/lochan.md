---
layout: sfz/opcode
lang: en
title: lochan / hichan
---
If incoming notes have a MIDI channel between `lochan` and `hichan`, the region
will play. `lochan` and `hichan` will almost always be used together.

One application of this is SFZ files which are to be controlled from MIDI guitar
controllers, which send MIDI data for each string on a separate MIDI channel.
The regions for that string would then have `lochan` and `hichan` set to the
proper number.

##### Examples

```
lochan=1 hichan=7

lochan=2 hichan=2
```

| Type    | Default   | Range     |
| ---     | ---       | ---       |
| integer | lochan=1  | 1 to 16   |
|         | hichan=16 |           |
