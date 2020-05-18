---
layout: "sfz/opcode"
lang: "en"
opcode_name: "#define"
---
Variable names start with the $ character.
This opcode is used under the ‹[control](/headers/control)› header,
and the defined variables can then be used anywhere else in the file.

## Example

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

It is possible to redefine variable values in an SFZ file, so that the variable
has different values in different portions of the SFZ file.  Note, however, 
that it is not strictly defined how variables are propagated to #include files.
Some implementations such as Sforzando pass the last value set in the outer
SFZ file to included files, while other implementations may use value at the
point of the #include opcode.
