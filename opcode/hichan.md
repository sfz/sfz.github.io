---
title: hichan Opcode
lang: en
---
Causes the associated region to play when a constraint on MIDI channel is
respected. Used in conjunction with [lochan](lochan), it makes the
region play when the incoming note's MIDI channel is equal to or higher than
[lochan](lochan) and equal to or lower than [hichan](hichan).

### Opcode Prototype

[hichan](hichan)=**[upper limit]**

### Parameter

The mandatory **[upper limit]** parameter defines the range's upper limit.
This parameter only accepts valid MIDI channel numbers (from 1 to 16).

### Allowed Sections

May be used in sections <[`global`](../section/global)> and <`region`>.

### Examples

A region triggered only by notes on MIDI channel 1.

<`region`><br>
[sample](sample)=mysamples/piano_C1.wav<br>
[lochan](lochan)=1<br>
[hichan](hichan)=1<br>

### Availability

Since LinuxSampler 2.0.0

Conforms to SFZ v1 Standard.

<br>
<link rel="stylesheet" href="/linuxsampler/style.css">
<div>
    <div id="r" class="child-div"><p><a href="hibend">← hibend Opcode</a></p></div>
    <div id="c" class="child-div"><p><a href="..">↑ SFZ File Format</a></p></div>
    <div id="l" class="child-div"><p><a href="hikey">→ hikey Opcode</a></p></div>
</div>
