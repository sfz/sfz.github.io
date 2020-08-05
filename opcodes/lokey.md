---
layout: "sfz/opcode"
title: "lokey / hikey"
---
When a region only covers one note, it is generally more convenient to use
[key](/opcodes/key) instead of `hikey` and `lokey`. When `hikey` and `lokey` are used,
they will usually need to be used together with [pitch_keycenter](/opcodes/pitch_keycenter).

In the SFZ 1 specification, the allowed range is 0 to 127. However, SFZ 2 additionally
includes the possibility to set lokey and hikey to -1, to prevent a region from
being triggered by any keys. This is a way (though, admittedly, not a very
elegant one) to use the [on_loccN/onhiccN](/opcodes/on_loccN) opcodes to trigger,
for example, pedal noises which are triggered whether any keys are pressed or not.

## Examples

```
<region> sample=*sine lokey=c5 hikey=c6
```

As with the [key](key) opcode, the values can also be MIDI note numbers:

```
<region> sample=*sine lokey=72 hikey=84
```

When an instrument is sampled every minor third, this kind of usage will be common:

```
<region> sample=a4.wav  lokey=68 hikey=70 pitch_keycenter=69
<region> sample=c5.wav  lokey=71 hikey=73 pitch_keycenter=72
<region> sample=eb5.wav lokey=74 hikey=76 pitch_keycenter=75
```
