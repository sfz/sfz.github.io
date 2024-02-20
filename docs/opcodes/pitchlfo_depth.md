---
layout: "sfz/opcode"
opcode_name: "pitchlfo_depth"
---
## Examples

```
amplfo_depth=1
pitchlfo_depth=40
```

For amplifier LFO, this is measured in decibels and can range from -10 to 10.
For pitch and filter LFO, this is measured in cents and can
range from -1200 to 1200. Whether these values are negative or positive, the LFO
will oscillate both up and down around the center value of the amplitude, pitch
or filter cutoff - a negative sign for depth only inverts the phase.
For cases where an LFO needs to oscillate only in one direction from the normal
value (for example: typical guitar vibrato which only bends the pitch upwards,
or saxophone vibrato which only bends the pitch down), an offset to the center
pitch value will need to be added using the appropriate opcode such as tune.
In SFZ2 LFOs add the ability to set the starting phase, making this much easier.
