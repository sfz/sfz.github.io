---
layout: "sfz/opcode"
lang: "en"
opcode_name: "*_mod"
---
ARIA extension specifying whether modulation of the target parameter
should be additive or multiplicative. The default is add for all
modulation targets except amplitude, which has mult as the default.
Valid targets: delay, delay_beats, stop_beats, offset, pitch, tune,
volume, amplitude, cutoff, resonance, fil_gain, cutoff2, resonance2,
fil2_gain, pan, position, width. In addition, bitred and decim are
also valid targets, though decim and bitred themselves are not
implemented in ARIA.

Also see [varNN_mod](/opcodes/varNN_mod).

## Examples

```
cutoff_mod=mult
amplitude_mod=add
pitch_mod=add
```
