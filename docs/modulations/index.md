---
title: "Modulations"
---

Modulation allows changes to be applied to another opcode value, either at the
time the region is triggered, or in real time whilst the region is playing.

There are several types of modulation _source_:

- [MIDI CC controllers]
- [Envelope Generators] and [Low Frequency Oscillators]
- [Key Tracking] and [Velocity Tracking]
- [Channel Aftertouch] and [Polyphonic Aftertouch]

Depending on player support, sometimes one modulation source can affect
how another modulation source behaves - specifically for MIDI [Note Velocity].

With the exception of [cutoff], the type and units for the modulation source opcode are
the same as the target and the range usually allows the full amount of the target opcode
to be reversed.

[MIDI CC controllers]:       midi_ccs.md
[Envelope Generators]:       envelope_generators.md
[Low Frequency Oscillators]: lfo.md
[Velocity Tracking]:         keytrack_veltrack.md
[Key Tracking]:              keytrack_veltrack.md
[Channel Aftertouch]:        chanaft_polyaft.md
[Polyphonic Aftertouch]:     chanaft_polyaft.md
[Note Velocity]:             vel2.md
[cutoff]:                    ../opcodes/cutoff.md
