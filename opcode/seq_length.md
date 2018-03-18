# seq_length Opcode

Used in conjunction with [seq_position](seq_position), it defines the length
of a sequence. 

### Opcode Prototype

[seq_length](seq_length)=**[length]**

### Parameter

The mandatory **[length]** defines the length of a sequence.

### Allowed Sections

May be used in <`region`> section.

### Examples

Sets the region as the 3rd step in a sequence of six elements.

<`group`><br>
[seq_length](seq_length)=6<br>
[seq_position](seq_position)=3<br>

### Availability

Since LinuxSampler 2.0.0

Conforms to SFZ v1 Standard.

<br>
<link rel="stylesheet" href="/linuxsampler/style.css">
<div>
    <div id="r" class="child-div"><p><a href="script">← script Opcode</a></p></div>
    <div id="c" class="child-div"><p><a href="..">↑ SFZ File Format</a></p></div>
    <div id="l" class="child-div"><p><a href="seq_position">→ seq_position Opcode</a></p></div>
</div>
