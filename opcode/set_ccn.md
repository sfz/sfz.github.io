# set_ccN Opcode

Sets a different initial MIDI controller value to the requested MIDI controller.

### Opcode Prototype

[set_cc**\[N\]**](set_ccn)=**[value]**

### Parameter

| Parameter Name | Description
| -------------- | -----------
| **N**          | Defines the MIDI controller which should be altered. \[required\]
| **value**      | Defines the MIDI controller's new initial value (0-127). \[required\]

### Allowed Sections

Should be used in <`control`> section.

### Examples

Sets the so called "MIDI Expression Controller" (MIDI CC #11) to its maximum value (127). 

<`control`><br>
[set_cc11](set_ccn)=127<br>

### Availability

Since LinuxSampler 2.0.0.svn41

Conforms to SFZ v2 Standard.

<br>
<link rel="stylesheet" href="/linuxsampler/style.css">
<div>
    <div id="r" class="child-div"><p><a href="seq_position">← seq_position Opcode</a></p></div>
    <div id="c" class="child-div"><p><a href="..">↑ SFZ File Format</a></p></div>
    <div id="l" class="child-div"><p><a href="transpose">→ transpose Opcode</a></p></div>
</div>
