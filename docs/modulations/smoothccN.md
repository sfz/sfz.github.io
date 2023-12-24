---
title: smoothccN
---
Sets the smoothness for the target modulation in milliseconds.
Adds inertia to the modulation, so fast movements of the controller will have
a delayed, smoothed effect, similar to [bend_smooth].

While SFZv2 does not limit the targets for smoothing in the spec, currently ARIA only implements smoothing for pitch-related and volume-related (including amplitude, pan and position) modulation targets.

## Examples

```
<region>
sample=*sine
pitch_oncc27=1200
pitch_smoothcc27=100
```

## Notes

Increasing the smoothing past 100 ms allows the SFZ instrument creator to create a noticeable lag in the control response, which is useful when modeling guitar feedback, for example.

Default value is 0ms (no smoothing). However be aware some DAWs smooth the drawn CC automation before it reaches the SFZ player, which means some smoothing will occur regardless of what smoothcc is set to, and any smoothcc smoothing will be applied to those already smoothed control values.

For a detailed overview of how DAWs handle instananeous jumps in automation, see
<https://www.admiralbumblebee.com/music/2019/06/22/Daw-V-Daw-Automation-Part-4.html>.


[bend_smooth]: ../opcodes/bend_smooth.md
