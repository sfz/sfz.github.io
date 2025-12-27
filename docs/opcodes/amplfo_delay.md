---
template: "sfz/opcode.j2"
opcode_name: "amplfo_delay"
---
SFZ1 supports amplitude, filter and pitch LFOs, see [SFZ1 LFOs][1] for details.

Delay itself is not a modulator - it simply adjust the time after
the voice is triggered that the LFO effect starts.
This is very useful, as many instruments and vocals don't trigger
vibrato immediately when a note starts, but slightly later.

```sfz
amplfo_delay=0.4
fillfo_delay=6
pitchlfo_delay=1
```

[1]: ../tutorials/sfz-1-lfos.md
