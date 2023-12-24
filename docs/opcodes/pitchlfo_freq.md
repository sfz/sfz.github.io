---
layout: "sfz/opcode"
opcode_name: "pitchlfo_freq"
---
## Examples

```
amplfo_freq=0.4
amplfo_freq=10
```

Range is 0 to 20 Hertz, according to the SFZ spec, which means audio-rate LFOs,
similar to what is found in some classic hardware synthesizers, are not possible.
Some players may in fact be able to utilize higher rates, but 20 Hz is the upper
limit required by the SFZ specification.
