---
layout: "sfz/opcode"
title: "sw_default / sw_label"
---
`sw_default` sets a default value for [sw_last]. In a guitar instrument
which uses keyswitches to select articulations, this can be used to for example
make the picked articulation active by default when the instrument is first loaded.
Without `sw_default`, this instrument would be silent until a keyswitch is manually
used to select an articulation.

## Example

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

{%include img-fluid.liquid
  img="/assets/img/opcodes/sw_label.jpg"
  alt="sw_label example image"%}

## Practical Considerations

`sw_label` causes ARIA/Sforzando to display the most recent selected keyswitch label
appear on its interface. This apparently needs to be set for all regions for which
that [sw_last] value is set, which can mean setting the label in multiple places in
an sfz file.


[sw_last]: sw_last
