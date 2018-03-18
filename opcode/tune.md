---
title: tune Opcode
lang: en
---
With this opcode you can fine tune the sample played. You can change the original
pitch of the sample, increasing or decreasing it within the range of +-100 cents.
If you want to increase or decrease the pitch to more than a semitone, please
see the [transpose](transpose) opcode.

### Opcode Prototype

[tune](tune)=**[cents]**

### Parameter

The mandatory **[cents]** parameter defines the amount of pitch shifting.
This parameter accepts values from -100 to 100.

### Allowed Sections

May be used in sections <[`global`](../section/global)> and <`region`>.

### Examples

Adjusts the pitch of a sample in a region.

<`region`><br>
[sample](sample)=mysamples/piano-c2-out_of_tune.wav<br>
[tune](tune)=50<br>

### Availability

Since LinuxSampler 2.0.0

Conforms to SFZ v1 Standard.

<br>
<link rel="stylesheet" href="/linuxsampler/style.css">
<div>
    <div id="r" class="child-div"><p><a href="transpose">← transpose Opcode</a></p></div>
    <div id="c" class="child-div"><p><a href="..">↑ SFZ File Format</a></p></div>
</div>
