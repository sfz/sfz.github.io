---
layout: "sfz/opcode"
opcode_name: "lfoN_scale"
---
On its own, `lfoN_scale` may be used to reduce the amplitude of `lfoN`
from its full-scale default of 1.0 (=100%) to something smaller, eg. 0.5 (=50%).
This can be useful occasionally, but usually the desired effect
is better achieved by reducing the value applied to the LFO's target:

```
lfo01_cutoff=1200
//..is usually the better equivalent to..
lfo01_cutoff=2400
lfo01_scale=0.5
```


The more interesting application of scale is where
it's possible for one LFO to use sub waveforms in addition to the main waveform.
This can be used to create more complex LFOs.
Up to 8 waveforms can be used in one LFO.
The second waveform is set by `lfoN_scale2`, the third by `lfoN_scale3` etc.
In this context, scale may be used to vary the amplitude of the sibling waveforms.

## Example

```
lfo01_freq=0.5    // Set LFO speed to 0.5 Hz
lfo01_pitch=1200  // Set LFO to affect pitch

lfo01_scale=0.5   // Set main waveform to 50% amplitude
lfo01_scale2=0.7  // Set sub-waveform to 70% amplitude (ie. greater than, not relative to, the main waveform)
lfo01_ratio2=4    // Set sub-waveform to x4 speed of main (ie. ratio IS relative to the main waveform)
```
