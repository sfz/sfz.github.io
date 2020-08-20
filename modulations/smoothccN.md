---
title: smoothccN
---
Sets the smoothness in percent of the target modulation.
Adds inertia to the modulation, so fast movements of the controller will have
a delayed, smoothed effect, similar to bend_smooth. 

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

Increasing the smoothing past 100% allows the SFZ script writer to define CC targets that have a noticeable smoothed lag when changed, and represents a simple way to add character to the instrument.

Default value is 0% (no smoothing). However be aware some DAW's are able to interpolate drawn CC automation. Which means if such a DAW is used then the CC value will be smoothed before it reaches the SFZ player.

Currently Logic Pro X is the only known host that smooths drawn CC automation internally.
