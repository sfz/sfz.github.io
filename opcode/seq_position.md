# seq_position Opcode

Used in conjunction with [seq_length](seq_length), it makes the region play
when the internal sequence counter is equal to [seq_position](seq_position)
value.

### Opcode Prototype

[seq_position](seq_position)=**[position]**

### Parameter

The mandatory **[position]** parameter defines the region's position in a sequence.

### Allowed Sections

May be used in <`region`> section.

### Examples

Sets the region as the 3rd step in a sequence of six elements.

<`group`><br>
[seq_length](seq_length)=6<br>
[seq_position](seq_position)=3<br>

Sets a sequence of three snare samples.

<`region`><br>
[sample](sample)=mysamples/snare_01.wav<br>
[seq_length](seq_length)=3<br>
[seq_position](seq_position)=1<br>
<`region`><br>
[sample](sample)=mysamples/snare_02.wav<br>
[seq_length](seq_length)=3<br>
[seq_position](seq_position)=2<br>
<`region`><br>
[sample](sample)=mysamples/snare_03.wav<br>
[seq_length](seq_length)=3<br>
[seq_position](seq_position)=3<br>

### Availability

Since LinuxSampler 2.0.0

Conforms to SFZ v1 Standard.

<br>
<link rel="stylesheet" href="/linuxsampler/style.css">
<div>
    <div id="r" class="child-div"><p><a href="seq_length">← seq_length Opcode</a></p></div>
    <div id="c" class="child-div"><p><a href="..">↑ SFZ File Format</a></p></div>
    <div id="l" class="child-div"><p><a href="set_ccn">→ set_ccN Opcode</a></p></div>
</div>
