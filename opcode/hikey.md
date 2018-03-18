# hikey Opcode

Causes the associated region to play when a constraint on MIDI note is respected.
Used in conjunction with [lokey](lokey), it makes the region play when the
incoming note is equal to or higher than [lokey](lokey) and equal to or lower
than [hikey](hikey).

### Opcode Prototype

[hikey](hikey)=**[upper limit]**

### Parameter

The mandatory **[upper limit]** parameter defines the range's upper limit.
This parameter only accepts valid MIDI note numbers (from 0 to 127) or names
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

Defines one region for each of three octaves.

<`region`><br>
[sample](sample)=mysamples/octave01.wav<br>
[lokey](lokey)=24<br>
[hikey](hikey)=35<br>
<`region`><br>
[sample](sample)=mysamples/octave02.wav<br>
[lokey](lokey)=C2<br>
[hikey](hikey)=B2<br>
<`region`><br>
[sample](sample)=mysamples/octave03.wav<br>
[lokey](lokey)=48<br>
[hikey](hikey)=59<br>

### Availability

Since LinuxSampler 2.0.0

Conforms to SFZ v1 Standard.

<br>
<link rel="stylesheet" href="/linuxsampler/style.css">
<div>
    <div id="r" class="child-div"><p><a href="hichan">← hichan Opcode</a></p></div>
    <div id="c" class="child-div"><p><a href="..">↑ SFZ File Format</a></p></div>
    <div id="l" class="child-div"><p><a href="hirand">→ hirand Opcode</a></p></div>
</div>
