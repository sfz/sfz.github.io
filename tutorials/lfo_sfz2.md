---
---
# SFZ 2 Pitch LFO Example

Just copy the following in your preferred text editor (we suggest [Notepad++](https://notepad-plus-plus.org/)).
Add to your own SFZ to spice up your instruments:

```
// **********************************************************************
// A SFZ 2 Pitch LFO Example
//
//
// **********************************************************************
<global>

 lfo06_freq=4
 lfo06_pitch=0 //default setting
 lfo06_pitch_oncc1=200  //pitch variation in cents using the mod wheel

<region> sample=*sine
```
