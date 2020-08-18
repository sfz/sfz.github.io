---
title: smoothccN
---
Sets the smoothness in percent of the target modulation.
Adds inertia of modulation, so fast movements of the controller will have
a delayed, smoothed effect, similar to bend_smooth. 

Default values:
* ARIA: 100% (smoothing)
* SFZ v2: 0% (no smoothing)

## Examples

```
<region>
sample=*sine
pitch_oncc27=1200
pitch_smoothcc27=100
lfo01_freq_oncc70=5
lfo01_freq_smoothcc70=100
```

## Notes

SFZ v2 is able to accept greater values than 100%, which increase the smoothed inertia.

Increasing the smoothing past 100% allows the SFZ writer to define cc controllers that have a noticeable smoothed lag when changed.
