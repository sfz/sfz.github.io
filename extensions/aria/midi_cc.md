---
---
# Extended MIDI CCs

In the MIDI specification, MIDI continous controls can have numbers from 1 to 127.
SFZ 2 and ARIA add some special CCs numbered 128 and above.
The additions in SFZ 2 are:

pitch bend: 128
channel aftertouch: 129
polyphonic aftertouch: 130
note on velocity: 131
note off velocity: 132
keyboard note number: 133
keyboard note gate: 134
unipolar random: 135
bipolar random: 136
alternate: 137
coarse tune (not sure, this needs testing): 138
fine tune (not sure, this needs testing): 139

Note gate is an on/off - it's 0 when no MIDI notes are pressed, and 1 when
at least one note is currently pressed. Unipolar random is from 0 to 1.
Bipolar random is from -1 to 1. Alternate changes between 0 and 1 every time
a note on message is received.

ARIA adds more:

keydelta: 140
keydelta absolute: 141
host tempo (bpm): 142

| SFZ Level: SFZ 2                 |
| -------------------------------- |
| Engines supporting this opcode:  |
| ARIA                           ✓ |
| LinuxSampler                   X |
| Opcode Type: Region Logic        |
| Category: MIDI Conditions        |
