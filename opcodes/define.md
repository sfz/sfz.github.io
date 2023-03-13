---
layout: "sfz/opcode"
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

Using #define as a constant with a single value thorughout an instrument works
easily. Defining the same variable to have multiple values at different points in the
same instrument, however, requires care. Using #define to set the same variable to
different values at one point in the same SFZ file does not work well at least in
ARIA/Sforzando when loading an instrument. However, a workaround there is to
use [#include] to put each set of #define statements with different
values in a separate file.  In simple tests, that has been successful.


[#include]: {{ '/opcodes/include' | relative_url }}
