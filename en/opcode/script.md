---
title: script Opcode
lang: en
---
This is an extension to the SFZ file format which is currently only available
with LinuxSampler. It allows to load real-time instrument scripts for SFZ
instruments. Find out more about [Instrument Scripts](../scripts).

### Opcode Prototype

[script](script)=**[path]**

### Parameter

The mandatory **[path]** parameter defines the file system path to the real-time
instrument script file that shall be loaded and executed, which may either be an
absolute path or a relative path.
A relative path is always interpreted relative to the sfz file's location.

### Allowed Sections

May be used in <[`global`](../section/global)> section.

### Examples

Loads the WAV file "some_sound.wav" and assigns it to the entire key range of the
instrument, and loads the real-time instrument script file "my_nksp_script.txt"
from the subdirectory "myscripts". The script will be executed on the respective
events the script file provides event handlers for. 

<[`global`](../section/global)><br>
[script](script)=myscripts/my_nksp_script.txt<br>

<`group`><br>
[sample](sample)=mysamples/some_sound.wav<br>

### Availability

Since LinuxSampler 2.0.0.svn37

Extension, not available with any SFZ standard.

<br>
<link rel="stylesheet" href="/linuxsampler/style.css">
<div>
    <div id="r" class="child-div"><p><a href="sample">← sample Opcode</a></p></div>
    <div id="c" class="child-div"><p><a href="..">↑ SFZ File Format</a></p></div>
    <div id="l" class="child-div"><p><a href="seq_length">→ seq_length Opcode</a></p></div>
</div>
