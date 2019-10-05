---
layout: "sfz/opcode"
lang: "en"
title: "sw_default / sw_label"
---
Just copy the following in your preferred text editor (we suggest [Notepad++](https://notepad-plus-plus.org/)),
save as an SFZ and try it in Sforzando / ARIA Player:

```
// **********************************************************************
// A Keyswitching Example
//
// Notes 36,38 and 40 serve as switches to trigger sine, triangle or saw oscillators.
// you can expand on this concept to create your own KeySwitching instruments.
// **********************************************************************
<global>
 sw_lokey=36 sw_hikey=40 sw_default=36


<region> sw_last=36 sw_label=Sine lokey=41 sample=*sine

<region> sw_last=38 sw_label=Triangle lokey=41 sample=*triangle

<region> sw_last=40 sw_label=Saw lokey=41 sample=*saw
```
