---
template: "sfz/opcode.j2"
opcode_name: "polyphony"
---

This can be applied to all regions under a header such as
[‹global›] or [‹group›] or to regions
which have the same [group] opcode value set. The
below examples all use the group opcode, not the group header, but
that is not the only way to use the polyphony opcode.

In addition to positive integer values, polyphony can also be set to
one of three special text values. With all of these, the polyphony limit
is set to 1, and the following behavior is also triggered:

- **legato_high**: the highest note played sounds and lower notes are muted.
- **legato_last**: the most recent note played sounds (typical legato behavior).
- **legato_low**:  the lowest note played sounds.

## Examples

```sfz
polyphony=12
polyphony=5
polyphony=legato_low
```

An example limiting a crash cymbal to four polyphony voices.

```sfz
group=1
polyphony=4
<region> key=49 sample=crash.wav
```

Here is a ride limited to a total of seven voices, with both bow and bell
articulations sharing the same polyphony group and the same seven-voice
limit.

```sfz
group=2
polyphony=7
<region> key=51 sample=ride_bow.wav
<region> key=53 sample=ride_bell.wav
```

This opcode is useful for controlling sound buildup, limiting resource use,
and for emulating the behavior of vintage keyboards with limited polyphony.
It's also possible to use [note_polyphony] instead when all the sounds we want
to mute each other are mapped to the same pitch, or use both in combination.
An alternative for controlling sound buildup is using
[ampeg_release] with [off_mode] set to normal.

It's also possible to have a group with limited polyphony which can be muted by
another group, such as a cymbal with edge chokes.

```sfz
<group>
group=2
off_by=3
polyphony=7
<region> key=51 sample=ride_bow.wav
<region> key=53 sample=ride_bell.wav

<group>
group=3
<region> key=54 sample=ride.choke.wav
```

An alternative is [note_polyphony]. The difference between
applying polyphony across one note and using note_polyphony is that
note_polyphony also uses [note_selfmask] which opens up some additional options.
With the default setting, lower-velocity notes do not mute higher-velocity ones.
This is useful for long-ringing instruments such as piano with the sustain pedal
pressed down or hammered dulcimer. It can also be useful for cymbals, although
especially with hi-hats, those will often use different notes for different
articulations, and note_polyphony would be limited to working within an
articulation.


[‹global›]:       ../headers/global.md
[‹group›]:        ../headers/group.md
[ampeg_release]:  ampeg_release.md
[group]:          group.md
[note_polyphony]: note_polyphony.md
[note_selfmask]:  note_selfmask.md
[off_mode]:       off_mode.md
