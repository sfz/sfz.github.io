---
title: SFZ1 Basic MIDI CC modulations
---

The following SFZ1 opcodes can be modulated by MIDI CCs, with the value of
the MIDI CC adjusting the setting applied by the opcode
(0 to 127 mapped to the maximum set in the modulation).

These opcode names have `_ccN` appended:

- [delay][1]
- [offset][2]
- [gain][3]
- [cutoff][4]
- [resonance][5]

Where the name is already more complex, in SFZ1, just `ccN` is appended:

- (eg type)\_(eg parameter) -- see: ampeg, fileg and pitcheg parameters [delay][6], [start][7], [attack][8], [hold][9], [decay][10], [sustain][11] and [release][12]; for examples, see [the EGs page](sfz-1-egs.md)
- (lfo type)\_(depth or freq) -- see: amplfo, fillfo and pitchlfo parameters [depth][13] and [freq][14]; for examples, see [the LFOs page](sfz-1-lfos.md)
- (eq band)\_(eq parameter) -- see: eq 1 to 3 parameters [bw][15], [freq][16] and [gain][17]

In all these cases except for [cutoff][4], the units match the opcode.
For [cutoff][4], the base opcode is in Hz whilst modulation is in cents.

### Examples

When triggered, the following causes a region to start playing a sample from offset 500.
("offset 0" would mean from the start - but note that some players use "offset 1" to play from the start.)
CC100 then allows an additional 500 samples of offset to be added (note that MIDI CCs only have 128 steps, so
this will not necessarily be smoothly interpolated), giving an offset of 1000 at maximum.

```sfz
offset=500
offset_cc100=500
```

[1]: ../opcodes/delay_ccN.md
[2]: ../opcodes/offset_ccN.md
[3]: ../opcodes/gain_ccN.md
[4]: ../opcodes/cutoff_ccN.md
[5]: ../opcodes/resonance_ccN.md
[6]: ../opcodes/ampeg_delayccN.md
[7]: ../opcodes/ampeg_startccN.md
[8]: ../opcodes/ampeg_attackccN.md
[9]: ../opcodes/ampeg_holdccN.md
[10]: ../opcodes/ampeg_decayccN.md
[11]: ../opcodes/ampeg_sustainccN.md
[12]: ../opcodes/ampeg_releaseccN.md
[13]: ../opcodes/amplfo_depthccN.md
[14]: ../opcodes/amplfo_freqccN.md
[15]: ../opcodes/eqN_bwccX.md
[16]: ../opcodes/eqN_freqccX.md
[17]: ../opcodes/eqN_gainccX.md
