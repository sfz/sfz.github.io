---
layout: "sfz/opcode"
lang: "en"
title: "sw_lolast / sw_hilast"
---
`sw_lolast` specifies the bottom of the range, and `sw_hilast` the high.

## Example

```
sw_lolast=24
sw_hilast=25
```

This is useful when there are multiple regions being triggered, and some of them
are common across several keyswitches - for example, fretting noises triggered
on note release on a guitar might be the same across both normal, hammer-on and
slide articulations, but should not be triggered for harmonics.
