---
lang: en
title: amplitude_onccN
---
Amplitude for the specified region in percentage of full amplitude, modulated by
MIDI CC X. Range is 0 to 100. A value of 60 means the specified CC will bring
the amplitude from 0 to 60%, a value of 100 0 to 100%.

##### Examples

```
amplitude_oncc108=100
amplitude_oncc50=35
```

This is a very convenient way to set up a volume control which goes from silence
to full volume. Smoothness can be controlled with [amplitude_smoothccN](amplitude_smoothccN)
and curve shape with [amplitude_curveccN](amplitude_curveccN).
