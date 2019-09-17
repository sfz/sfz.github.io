---
title: "Pitch LFO Examples"
lang: "en"
---
Just copy the following in your preferred text editor.
We recommend [Sublime Text] and [VSCode], available for various operating
systems and [Notepad++], available only for Windows.
Add to your own SFZ to spice up your instruments:

```
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

```
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

[Notepad++]: https://notepad-plus-plus.org/
[Sublime Text]: https://www.sublimetext.com/
[VSCode]: https://code.visualstudio.com/
