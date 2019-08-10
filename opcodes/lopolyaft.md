---
layout: sfz/opcode
lang: en
title: lopolyaft / hipolyaft
---
The incoming note information in the Polyphonic Aftertouch message is
not relevant.

##### Example

The region will play only if last Polyphonic Aftertouch message received was
in the 30-100 range.

```
lopolyaft=30 hipolyaft=100
```
