# sample Opcode

This is the most fundamental opcode of the SFZ file format.
It allows you to load and assign a certain audio sample file.
A variety of audio file formats are supported. 

### Opcode Prototype

[sample](sample)=**[path]**

### Parameter

The mandatory **[path]** parameter defines the file system path of the sample
file that shall be loaded and assigned, which may either be an absolute path or
a relative path. A relative path is always interpreted relative to the
sfz file's location.

### Allowed Sections

May be used in sections <[`global`](../section/global)> and <`region`>, ... TODO.

### Examples

Loads the WAV file "organ_c3.wav" from the subdirectory "mysamples" and assigns
it to the entire key range of the instrument. 

<[`global`](../section/global)><br>
[sample](sample)=mysamples/organ_c3.wav<br>

### Availability

Since LinuxSampler 2.0.0

Conforms to SFZ v1 Standard.

<br>
<link rel="stylesheet" href="/linuxsampler/style.css">
<div>
    <div id="r" class="child-div"><p><a href="lovel">← lovel Opcode</a></p></div>
    <div id="c" class="child-div"><p><a href="..">↑ SFZ File Format</a></p></div>
    <div id="l" class="child-div"><p><a href="script">→ script Opcode</a></p></div>
</div>
