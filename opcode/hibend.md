# hibend Opcode

Causes the associated region to play when a constraint on MIDI pitch bend is
respected. Used in conjunction with [lobend](lobend), it makes the
region play when the last pitch bend value received is equal to or higher than
[lobend](lobend) and equal to or lower than [hibend](hibend).

### Opcode Prototype

[hibend](hibend)=**[upper limit]**

### Parameter

The mandatory **[upper limit]** parameter defines the range's upper limit. This
parameter only accepts valid MIDI pitch bend values (from -8192 to 8192).

### Allowed Sections

May be used in sections <[`global`](../section/global)> and <`region`>.

### Examples

Defines a guitar instrument with two regions assigned to different position of
the pitch bend wheel.

<`region`><br>
[sample](sample)=mysamples/guitar-1.wav<br>
[lobend](lobend)=-5000<br>
[hibend](hibend)=0<br>
<`region`><br>
[sample](sample)=mysamples/guitar-2.wav<br>
[lobend](lobend)=1<br>
[hibend](hibend)=5000<br>

### Availability

Since LinuxSampler 2.0.0

Conforms to SFZ v1 Standard.

<br>
<link rel="stylesheet" href="/linuxsampler/style.css">
<div>
    <div id="r" class="child-div"><p></p></div>
    <div id="c" class="child-div"><p><a href="..">↑ SFZ File Format</a></p></div>
    <div id="l" class="child-div"><p><a href="hichan">→ hichan Opcode</a></p></div>
</div>
