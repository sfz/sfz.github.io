---
title: SFZ 1 Pitch LFO Example
lang: en
---
Just copy the following in your preferred text editor (we suggest [Notepad++](https://notepad-plus-plus.org/)).
Add to your own SFZ to spice up your instruments

```
// **********************************************************************
// A SFZ 1 Pitch LFO Example
//
//
// **********************************************************************
<global>

 pitchlfo_freq=4
 pitchlfo_depth=0 //default setting
 pitchlfo_depth_oncc1=200  //pitch variation in cents using the mod wheel

<region> sample=*sine
```
