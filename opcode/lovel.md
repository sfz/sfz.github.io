---
title: lovel Opcode
lang: en
---
Causes the associated region to play when a constraint on MIDI velocity is
respected. Used in conjunction with [hivel](hivel), it makes the region play
when the incoming note's velocity is equal to or higher than [lovel](lovel)
and equal to or lower than [hivel](hivel). Velocity is a MIDI value that
indicates how forcefully the note is played.

### Opcode Prototype

[lovel](lovel)=**[lower limit]**

### Parameter

The mandatory **[lower limit]** parameter defines the range's lower limit.
This parameter only accepts valid MIDI velocity values (from 0 to 127).

### Allowed Sections

May be used in sections <[`global`](../section/global)> and <`region`>.

### Examples

Sets a pool of four clap samples, one of them is randomly choosen at every
note-on event.

<`region`><br>
[sample](sample)=mysamples/snare-soft.wav<br>
[lovel](lovel)=0<br>
[hivel](hivel)=70<br>
<`region`><br>
[sample](sample)=mysamples/snare-hard.wav<br>
[lovel](lovel)=71<br>
[hivel](hivel)=125<br>
<`region`><br>
[sample](sample)=mysamples/snare-rimshot.wav<br>
[lovel](lovel)=126<br>
[hivel](hivel)=127<br>

### Availability

Since LinuxSampler 2.0.0

Conforms to SFZ v1 Standard.

<br>
<link rel="stylesheet" href="/linuxsampler/style.css">
<div>
    <div id="r" class="child-div"><p><a href="lorand">← lorand Opcode</a></p></div>
    <div id="c" class="child-div"><p><a href="..">↑ SFZ File Format</a></p></div>
    <div id="l" class="child-div"><p><a href="sample">→ sample Opcode</a></p></div>
</div>
