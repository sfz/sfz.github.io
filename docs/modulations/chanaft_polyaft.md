---
title: MIDI Channel and Polyphonic Aftertouch Tracking
---

Certain aspects of player output may - depending on implementation - be affected by
MIDI Channel Aftertouch and MIDI Polyphonic Aftertouch messages.

The traditional meanings are:

- _Channel Aftertouch_ is intended to affect player output for all voices triggered
on the same MIDI Channel Numer as the Channel Aftertouch message.
- _Polyphonic Aftertouch_ is intended to affect player output for voices triggered
by the same MIDI Note Number on the same MIDI Channel as the Polyphonic Aftertouch message.
Depending on implementation, Polyphonic Aftertouch may or may not be
fully implemented.

These use `chanaft` and `polyaft` suffixes respectively: [pitchlfo_freqchanaft].
`cutoff` and `cutoff2` have the extra underscore: [cutoff_polyaft].

The targets are:

- `_depth` and `_freq` for `amplfo`, `fillfo` and `pitchlfo` -- see the last of the [Velocity tracking, keytracking and randomization] examples
- `cutoff` and `cutoff2` -- see the [first example] for `cutoff`

See the [opcode list] and search for `chanaft` or `polyaft` to see more.

[opcode list]:          ../opcodes/index.md
[cutoff_polyaft]:       ../opcodes/cutoff.md
[pitchlfo_freqchanaft]: ../opcodes/pitchlfo_freq.md
[Velocity tracking, keytracking and randomization]: ../tutorials/sfz1_modulations.md#velocity-tracking-keytracking-and-randomization
[first example]:        ../opcodes/cutoff.md#examples
