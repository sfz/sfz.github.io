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

Values such as note on velocity and MIDI note number, when used as CCs, do not
behave exactly the same as note number or velocity of the note itself, in
some contexts. This is because once a note is played, its MIDI note number and
note on velocity remain the same for that note. MIDI CC, however, is shared
across the entire instrument, and this means another note on or note off event
will change CC 131, 132 and 133. This can give unexpected results when using
these CCs to adjust keytracking or velocity tracking of various parameters,
especially in polyphonic instruments with long-sustaining sounds.

Note gate is an on/off - it's 0 when no MIDI notes are pressed, and 1 when
at least one note is currently pressed. Unipolar random is from 0 to 1.
Bipolar random is from -1 to 1. Alternate changes between 0 and 1 every time
a note on message is received.

Some of the parameters, such as aftertouch and note off velocity, are rarely
supported by modern MIDI hardware controllers, though they are part of the MIDI
specification and can be edited in DAWs. Many MIDI keyboards will send a
default note off velocity, such as 64, with every note off event regardless of
how fast the key was actually moving at the time.

Anything above 137 is not specified in the SFZ 2 standard and strictly
engine-dependent. ARIA adds more. Some of these might not work properly in
all DAWs.

- keydelta: 140
- keydelta absolute: 141
- host tempo (bpm): 142
- host transport status (0 is off, 1 on in non-loop mode, 2 is playing in loop mode): 143
- host sample rate: 144
- time since the engine has been up: 145
- current time signature numerator: 146
- current time signature denominator: 147
- position since song start in PPQ (pulses per quarter note): 148
- position since bar start in PPQ: 149
- time since the instrument has been up: 150
- time since last key on (in seconds): 151
- time since last key off (in seconds): 152
- number of keys currently down: 153
- number of currently active voices: 154
- last playahead (offset) of any sample in the instrument: 155

Some of these are shared across all instances of the ARIA engine currently running.
Others can have concurrently have a different value for different instances or different
instruments concurrently.

CC 151 is reset as soon as a new note is hit, so it cannot be used to measure
the time between the previous note and the current one, for adaptive legato
speed purposes. CC 141 has been used successfully for portamento glides, though.

In Cakewalk Dimension Pro, 140 is bitred and 141 is decim.

[ARIA]: /extensions/aria
[MIDI Control Change Messages]: https://www.midi.org/specifications-old/item/table-3-control-change-messages-data-bytes-2
[SFZ 2]: /misc/sfz2
