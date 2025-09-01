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

- `_depth` and `_freq` for `amplfo`, `fillfo` and `pitchlfo` -- see [below](#lfo-modulation-example)
- `cutoff` and `cutoff2` -- see the [first example] for `cutoff`

See the [opcode list] and search for `chanaft` or `polyaft` to see the syntax in full.

### LFO modulation example

The same basic principle applies as in the [SFZ1 LFO tutorial], just using
`chanaft` or `polyaft` in place of `ccN`:

```sfz
pitchlfo_freq=2
pitchlfo_freqchanaft=10
pitchlfo_depthpolyaft=33
```

[opcode list]:          ../opcodes/index.md
[cutoff_polyaft]:       ../opcodes/cutoff.md
[pitchlfo_freqchanaft]: ../opcodes/pitchlfo_freq.md
[first example]:        ../opcodes/cutoff.md#examples
[SFZ1 LFO tutorial]:    ../tutorials/sfz1_modulations.md#lfos-and-envelopes
