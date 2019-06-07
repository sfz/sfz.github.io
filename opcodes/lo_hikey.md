---
lang: en
title: lokey / hikey
---
`lokey` and `hikey` determine the low and high boundaries of a certain
[region](/headers/region). They are used to set the range of notes which are
used to play the region. When a region only covers one note, it is generally
more convenient to use [key](key) instead of `hikey` and `lokey`. When `hikey`
and `lokey` are used, they will usually need to be used together with
[pitch_keycenter](pitch_keycenter).

##### Examples

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

| Type    | Default   | Range     |
| ---     | ---       | ---       |
| integer | lokey=0   | 0 to 127  |
|         | hikey=127 | C-1 to G9 |
