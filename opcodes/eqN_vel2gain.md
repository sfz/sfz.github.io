---
---
# eqN_vel2gain

Gain change of the equalizer band with MIDI velocity, in decibels.

##### Examples

```
eq1_vel2gain=-6
eq2_vel2gain=9
```

##### Notes

When emulating timbral changes when there are not enough dynamic levels sampled,
this will often be a negative value for the lowest band, and a positive value
for the two higher bands.

| Type  | Default | Range        |
| ---   | ---     | ---          |
| float | 0       | -96 to 24 dB |
