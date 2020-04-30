---
layout: "sfz/opcode"
opcode_name: "off_curve"
---

-2 is a static, non-changing envelope segment.
-1 is linear slope.
0 is x^n with n being the coefficient set in off_shape.
1 is n^x.
2 logarithmic, possibly not implemented in any SFZ player.
10 is vendor-specific math.

## Examples

```
off_curve=-1
off_curve=10
```
