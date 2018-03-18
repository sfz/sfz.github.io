---
title: transpose Opcode
lang: en
---
With this opcode you can change the original pitch of the sample, increasing or
decreasing it within the range of +-127 semitones.
If you want to increase or decrease the pitch within a semitone, please see the
[tune](tune) opcode.

### Opcode Prototype

[transpose](transpose)=**[semitones]**

### Parameter

The mandatory **[semitones]** parameter defines the amount of pitch shifting.
This parameter accepts values from -127 to 127.

### Allowed Sections

May be used in sections <[`global`](../section/global)> and <`region`>.

### Examples

Create the first four semitones of a piano octave using only one sample.

<`group`><br>
[sample](sample)=mysamples/piano-c1.wav<br>
<`region`><br>
[key](key)=24<br>
<`region`><br>
[key](key)=25<br>
[transpose](transpose)=1<br>
<`region`><br>
[key](key)=26<br>
[transpose](transpose)=2<br>
<`region`><br>
[key](key)=27<br>
[transpose](transpose)=3<br>

### Availability

Since LinuxSampler 2.0.0

Conforms to SFZ v1 Standard.

<br>
<link rel="stylesheet" href="/linuxsampler/style.css">
<div>
    <div id="r" class="child-div"><p><a href="set_ccn">← set_ccN Opcode</a></p></div>
    <div id="c" class="child-div"><p><a href="..">↑ SFZ File Format</a></p></div>
    <div id="l" class="child-div"><p><a href="tune">→ tune Opcode</a></p></div>
</div>
