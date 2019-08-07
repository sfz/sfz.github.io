---
layout: sfz/opcode
lang: en
title: egN_shape
---
Envelope shape. 0 is linear. Positive values are convex or "slow".
Negative values are concave or "fast". Upon approaching -10 or 10,
increased values make little difference, as at that point its practically
a vertical line. Default is 0.

##### Example

```
eg07_shape=3
eg09_shape=-1.3
```
