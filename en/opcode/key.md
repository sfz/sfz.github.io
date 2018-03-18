---
title: key Opcode
lang: en
---
With this opcode you can cause a region to be played only when the incoming MIDI
note is equal to **[note-value]**. If you want your region to be triggered by a
range of notes, please see [lokey](lokey) and [hikey](hikey) opcodes.

### Opcode Prototype

[key](key)=**[note-value]**

### Parameter

The mandatory **[note-value]** parameter defines the note assigned to the region.
This parameter only accepts a valid MIDI note number (from 0 to 127) or name
(from C-1 to G9):

| Note Numbers | Note Names | Octave
| ------------ | ---------- | ------
| 0 to 11      | C-1 to B-1 | -1
| 12 to 23     | C0 to B0   | 0
| 24 to 35     | C1 to B1   | 1
| 36 to 47     | C2 to B2   | 2
| 48 to 59     | C3 to B3   | 3
| 60 to 71     | C4 to B4   | 4
| 72 to 83     | C5 to B5   | 5
| 84 to 95     | C6 to B6   | 6
| 96 to 107    | C7 to B7   | 7
| 108 to 119   | C8 to B8   | 8
| 120 to 127   | C9 to G9   | 9

### Allowed Sections

May be used in sections <[`global`](../section/global)> and <`region`>.

### Examples

Defines one different note for every region.

<`region`><br>
[sample](sample)=mysamples/piano-c1.wav<br>
[key](key)=24<br>
<`region`><br>
[sample](sample)=mysamples/piano-c#1.wav<br>
[key](key)=25<br>
<`region`><br>
[sample](sample)=mysamples/piano-d1.wav<br>
[key](key)=26<br>
<`region`><br>
[sample](sample)=mysamples/piano-d#1.wav<br>
[key](key)=d#1<br>

### Availability

Since LinuxSampler 2.0.0

Conforms to SFZ v1 Standard.

<br>
<link rel="stylesheet" href="/linuxsampler/style.css">
<div>
    <div id="r" class="child-div"><p><a href="hivel">← hivel Opcode</a></p></div>
    <div id="c" class="child-div"><p><a href="..">↑ SFZ File Format</a></p></div>
    <div id="l" class="child-div"><p><a href="lobend">→ lobend Opcode</a></p></div>
</div>
