---
layout: "sfz/opcode"
lang: "en"
opcode_name: "#define"
---
Variable names start with the $ character.

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

Defining the same variable to have multiple values at different points in the
same instrument, especially when also using [#include](/opcodes/include), requires
care. It appears that #define statements and #include statements appear to be
processed in separate passes at least in ARIA/Sforzando when loading an instrument.
So, careful testing of an instrument may be needed, and there is no precise
specification how #include and #define should be parsed by the SFZ player when both
are used in the same file.
