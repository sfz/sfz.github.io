---
template: "sfz/opcode.j2"
opcode_name: "#include"
---
The file to which #include points is, in effect,
pasted into the SFZ file at the point of the #include. This means that
the file structure needs to be respected - after all #includes are processed,
[‹control›] header needs to be before the regions in the file,
[‹curve›] opcodes need to be at the bottom etc. This can be
nested - #included files can contain more #includes of their own,
though of course recursion must be avoided!

The included path must be surrounded by double quotes, similar to how include
works in C/C++ files. Note that this is different from how the paths in the
[sample] opcode works, which do not need quotes.

Either a filename or a path can be used. If the #included files are in another
folder, the SFZ is interpreted as if it was in the main SFZ file's path, not the
path where the #included files are. The #included files can either have the
extension sfz or sfzh, which is functionally no different from sfz, just used
for clarity when #including a header.

This is useful for creating large complex files, and also for simplifying the
management of files which repeat similar regions with different opcodes. This is
especially convenient in conjunction with the [‹master›] header.

## Examples

```sfz
#include "header.sfz"
#include "note_map.sfz"
#include "legato/dynfade_legato_first_map.sfz"
```

Here's an example of how #include and master can be used together:

```sfz
<global>
loop_mode=one_shot
off_mode=normal
tune=-1200 //Everything is tuned down an octave, then tuned back up with its own tune param
pan=-100 //Similar for pan - hard left, brought to proper position with param
pan_oncc10=0 //Disable master pan
amplitude_oncc7=100
ampeg_attack=0.001
ampeg_decay=0.7
ampeg_sustain=100

<master>
amplitude_cc30=100
pan_cc31=200
tune_cc32=2400
tune_cc55=-500
offset_cc33=3000
ampeg_sustain_oncc33=-100
#include "mappings/bobobo_bass.sfz"

<master>
amplitude_cc35=100
pan_cc36=200
tune_cc37=2400
offset_cc38=1500
ampeg_sustain_oncc38=-100
tune_cc55=-250
#include "mappings/bobobo_tenor_l_1.sfz"
#include "mappings/bobobo_tenor_l_2.sfz"
```

Using `#include` with [#define] in the same instrument requires care,
especially if the same value has to be #defined to have different settings at
different points in an instrument.

The following does not work well in ARIA/Sforzando, assuming that B.sfz uses `MYVAR`:

```sfz
#define MYVAR cc12
#include B.sfz
#define MYVAR cc13
#include B.sfz
```

However, a workaround there is to use `#include` to put each `#define` statement
in a separate file.
In simple tests, that has been successful.


[#define]: define.md
[sample]:  sample.md
[‹control›]: ../headers/control.md
[‹curve›]:   ../headers/curve.md
[‹master›]:  ../headers/master.md
