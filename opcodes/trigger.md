---
layout: "sfz/opcode"
opcode_name: "trigger"
---
Values can be:

- ***attack*** : (Default): Region will play on note-on.
- ***release***: Region will play on note-off or sustain pedal off. The velocity
                used to play the note-off sample is the velocity value of the
                corresponding (previous) note-on message.
- ***first***: Region will play on note-on, but if there's no other note going on
                (staccato, or first note in a legato phrase).
- ***legato***: Region will play on note-on, but only if there's a note going on
                (notes after first note in a legato phrase).
- ***release_key***: ARIA addition. Region will play on note-off. Ignores sustain pedal.
								
Setting trigger to release requires a corresponding region with trigger set
to attack to be active at the moment when the note-off message is received, or the
release region will never play.

An attack region is considered corresponding if it has the same MIDI note number,
and the same velocity range, as the release region. The velocity which matters here is
the note-on velocity of the initial region - not the velocity of the note-off message
which triggers the release region. Round robins do not need to match, so it is possible
to for example have five round robins for releases and only four round robins for
attacks.

This corresponding attack region is then used to calculate the volume of the release
region based on the attack region's velocity and rt_decay. If there is no corresponding
attack region, or the corresponding attack region has finished playing due to reaching
sample end etc, then the release region will not play. This is designed primarily
designed for piano release samples.

Setting trigger to release_key will trigger a sound on note release regardless of
whether there is any corresponding attack region or not. This is useful for release
samples which are noises not dependent on the volume of any corresponding note, such
as hurdy-gurdy key returns, which will sound the same whether the wheel is turning
or not.

## Example

```
trigger=release
```
