---
template: "sfz/opcode.j2"
opcode_name: "eqN_gain"
---
## Examples

```sfz
eq1_gain=-3
eq2_gain=6
eq3_gain=-6

eq1_gain_oncc23=-12
```

##### Notes

When emulating timbral changes when there are not enough dynamic level samples
available, and modulating EQ bands with MIDI CC, this will often be a negative
value for the lowest band, and a positive value for the two higher bands.
