---
layout: "sfz/opcode"
opcode_name: "amplitude"
---
100% amplitude meaning no volume change is applied to the sample when played.
Can be modulated with MIDI CC.

Note: Range in the table below is 0 to 100, but some players such as
Aria/Sforazando do not clamp the range.  Negative values invert the signal.

## Examples

```
amplitude=12
amplitude=40
amplitude_oncc108=100
amplitude_oncc50=35
```

When modulated by MIDI CC, this is a very convenient way to set up a volume
control which goes from silence to full volume.

See also the [‹curve›] header example.


[‹curve›]: {{ '/headers/curve' | relative_url }}
