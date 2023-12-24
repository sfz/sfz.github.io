---
title: "Pitch LFO Examples"
---
Just copy the following in your preferred text editor.
We also have a section in the [tools page] listing some text editor's
SFZ syntax highlighting add-ons.
Add to your own SFZ to spice up your instruments:

```sfz
// **********************************************************************
// SFZ1 Pitch LFO Example
//
//
// **********************************************************************
<global>

 pitchlfo_freq=4
 pitchlfo_depth=0 //default setting
 pitchlfo_depth_oncc1=200  //pitch variation in cents using the mod wheel

<region> sample=*sine
```

```sfz
// **********************************************************************
// SFZ2 Pitch LFO Example
//
//
// **********************************************************************
<global>

 lfo06_freq=4
 lfo06_pitch=0 //default setting
 lfo06_pitch_oncc1=200  //pitch variation in cents using the mod wheel

<region> sample=*sine
```

[tools page]: ../software/tools.md
