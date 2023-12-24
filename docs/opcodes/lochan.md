---
template: "sfz/opcode.j2"
title: "lochan / hichan"
---
 `lochan` and `hichan` will almost always be used together.
One application of this is SFZ files which are to be controlled from MIDI guitar
controllers, which send MIDI data for each string on a separate MIDI channel.
The regions for that string would then have `lochan` and `hichan` set to the
proper number.

## Examples

```sfz
lochan=1 hichan=7

lochan=2 hichan=2
```
