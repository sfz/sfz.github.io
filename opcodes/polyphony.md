---
---
# polyphony

Polyphony voice limit for a group.

##### Examples

```
polyphony=12
polyphony=5
```

An example limiting a crash cymbal to four polyphony voices, and a ride to a
total of seven voices,
with the ride group including both the bow and bell articulations:

```
<group>
group=1
polyphony=4
<region> key=49 sample=crash.wav

<group>
group=2
polyphony=7
<region> key=51 sample=ride_bow.wav
<region> key=53 sample=ride_bell.wav
```

This opcode is useful for controlling sound buildup, limiting resource use,
and for emulating the behavior of vintage keyboards with limited polyphony.
It's also possible to use [note_polyphony](note_polyphony) instead when there is
only one pitch in a group, or use both in combination. An alternative for
controlling sound buildup is using [ampeg_release](ampeg_release) with
[off_mode](off_mode) set to normal.
