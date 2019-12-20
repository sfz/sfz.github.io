---
layout: "sfz/opcode"
lang: "en"
title: "lokey / hikey"
---
When a region only covers one note, it is generally more convenient to use
[key](key) instead of `hikey` and `lokey`. When `hikey` and `lokey` are used,
they will usually need to be used together with [pitch_keycenter](pitch_keycenter).

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

## Disabling the note-on trigger

If you want to have the region trigger on MIDI continuous controllers (CC), you
have to disable the note range matching entirely by using -1 as the `hikey`
value.