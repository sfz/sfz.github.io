---
title: "Extended MIDI CCs"
lang: "en"
---
In the MIDI specification, [MIDI Control Change Messages] can have numbers from 0 to 127.

[SFZ 2] and [ARIA] add some special CCs numbered 128 and above.

The additions in SFZ 2 are:

- pitch bend: 128
- channel aftertouch: 129
- polyphonic aftertouch: 130
- note on velocity: 131
- note off velocity: 132
- keyboard note number: 133
- keyboard note gate: 134
- unipolar random: 135
- bipolar random: 136
- alternate: 137

Note gate is an on/off - it's 0 when no MIDI notes are pressed, and 1 when
at least one note is currently pressed. Unipolar random is from 0 to 1.
Bipolar random is from -1 to 1. Alternate changes between 0 and 1 every time
a note on message is received.

Anything above 137 is not specified in the SFZ 2 standard and strictly
engine-dependent. ARIA adds more:

- keydelta: 140
- keydelta absolute: 141
- host tempo (bpm): 142

In Cakewalk Dimension Pro, 140 is bitred and 141 is decim.

[MIDI Control Change Messages]: https://www.midi.org/specifications-old/item/table-3-control-change-messages-data-bytes-2
[SFZ 2]: /misc/sfz2
[ARIA]: /extensions/aria
