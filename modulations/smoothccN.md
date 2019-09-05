---
lang: en
title: smoothccN
---
Sets the smoothness with which the modulation target is modulated by MIDI CC N.
Adds "inertia" to modulation, so fast movements of the controller will have
a delayed, smoothed effect, similar to bend_smooth. Default is 0 (no smoothing).

##### Examples

```
lfo01_freq_oncc70=5
lfo01_freq_smoothcc70=100
lfo01_freq_oncc71=10
lfo01_freq_smoothcc71=80
```
