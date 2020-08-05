---
layout: "sfz/opcode"
title: "lopolyaft / hipolyaft"
---
In the rgcaudio sfz player, the incoming note information in the Polyphonic Aftertouch message is
not relevant (which basically means polyphonic aftertouch isn't polyphonic, and works like channel
aftertouch). In ARIA, the incoming note information is used, and polyphonic aftertouch works
polyphonically. Other SFZ players need testing.

## Example

The region will play only if last Polyphonic Aftertouch message received was
in the 30-100 range.

```
lopolyaft=30 hipolyaft=100
```
