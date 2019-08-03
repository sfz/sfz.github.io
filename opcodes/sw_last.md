---
lang: en
title: sw_last
---
Enables the region to play if the last key pressed in the range specified by
[sw_lokey](sw_lokey) and [sw_hikey](sw_lokey)
is equal to the `sw_last` value.

`sw_last` can be entered in either MIDI note numbers (0 to 127) or in MIDI note
names (C-1 to G9)

##### Example

```
sw_last=49
```

This is commonly used to select articulations, for example to switch between
sustain, staccato, spiccato and pizzicato in a violin. With the SFZ 1 or SFZ 2
spec, an instrument which uses `sw_last` to select articulations will not have a
default articulation preselected, meaning when loaded, it will play no sound
until one of the keyswitches is pressed - only after that will the instrument
respond to notes. The ARIA extensions include [sw_default](sw_default_label)
as a solution to this.

The difference between this and [sw_down](sw_down) is that sw_last
is a "sticky" keyswitch - after releasing the keyswitch note, it continues to
affect notes until another keyswitch is pressed. [sw_down](sw_down),
on the other hand, is "non-sticky" and only affects notes played while
the switch is held down. This makes `sw_last` a good choice for keyswitching
articulations which are often used for many notes in a row,
such as sustain or staccato.
An example of using `sw_last` to select oscillator waves, with [sw_default](sw_default_label)
used to set the sine to default as well.

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

| Type    | Default | Range     |
| ---     | ---     | ---       |
| integer |  0      | 0 to 127  |
|         |         | C-1 to G9 |
