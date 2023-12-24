---
template: "sfz/opcode.j2"
opcode_name: "script"
---
This is an extension to the SFZ file format which is currently only available
with LinuxSampler v2.0.0.svn37 or higher.
Find out more about [Instrument Scripts].

The mandatory path parameter defines the file system path to the real-time
instrument script file that shall be loaded and executed, which may either be an
absolute path or a relative path. A relative path is always interpreted relative
to the SFZ file's location.

May only be used in [‹global›] section.

## Example

Loads the WAV file "some_sound.wav" and assigns it to the entire key range of the
instrument, and loads the real-time instrument script file "my_nksp_script.txt"
from the subdirectory "myscripts". The script will be executed on the respective
events the script file provides event handlers for.

```sfz
<global>
script=myscripts/my_nksp_script.txt

<group>
sample=some_sound.wav
```

Source: [LinuxSampler Documentation](http://doc.linuxsampler.org/sfz/script_opcode/)


[‹global›]:           ../headers/global.md
[Instrument Scripts]: http://doc.linuxsampler.org/Instrument_Scripts
