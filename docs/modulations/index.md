---
title: "Modulations"
---

Modulation allows changes to be applied to another opcode value, either at the
time the region is triggered, or in real time whilst the region is playing.

There are several types of modulation _source_:

- [MIDI CC controllers]
- [Envelope Generators] and [Low Frequency Oscillators]
- [Key Tracking][1] and [Velocity Tracking][1]
- [Channel Aftertouch][2] and [Polyphonic Aftertouch][2]

Depending on player support, sometimes one modulation source can affect
how another modulation source behaves - specifically for MIDI [Note Velocity].

With the exception of [cutoff], the type and units for the modulation source opcode are
the same as the target and the range usually allows the full amount of the target opcode
to be reversed.

[MIDI CC controllers]:       midi_ccs.md
[Envelope Generators]:       envelope_generators.md
[Low Frequency Oscillators]: lfo.md
[1]:                         keytrack_veltrack.md
[2]:                         chanaft_polyaft.md
[Note Velocity]:             vel2.md
[cutoff]:                    ../opcodes/cutoff.md
