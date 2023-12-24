---
title: stepccN
---
Sets the interval between consecutive steps.
If this is not used, there are 127 modulation steps.

## Example

This describes a pitch controller which has 5 positions:
0, 300, 600, 900, 1200 cents.

```
<region>
sample=*sine
pitch_oncc16=1200
pitch_stepcc16=300
```
