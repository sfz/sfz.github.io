---
title: #define
lang: en
---
Creates a variable and gives it a value.

Variable names start with the $ character.
This opcode is used under the <[control](/headers/control)> header,
and the defined variables can then be used anywhere else in the file.

##### Example

```
#define $KICKKEY 36
#define $LOWEBENDT 507
```

The defined variables can then be used like this:

```
<control>
#define $KICKKEY 36
#define $SNAREKEY 38
#define $HATKEY 42

<region>key=$KICKKEY sample=kick.wav
<region>key=$SNAREKEY sample=snare.wav
<region>key=$HATKEY sample=closedhat.wav
```

This can be used to make an instrument easier to configure - for example, to
change key maps, MIDI CC assignments, pitch bend ranges etc. which can then be
used repeatedly in the SFZ file, but can be easily changed just by editing their
`#define` value in one place.
