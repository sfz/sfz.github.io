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
                (comoonly used for or first note in a legato phrase).
- ***legato***: Region will play on note-on, but only if there's a note going on
                (notes after first note in a legato phrase).
- ***release_key***: Region will play on note-off. Ignores sustain pedal.
								
## Practical Considerations

Setting trigger to release or release_key will cause the region to play as if [loop_mode]
(/opcodes/loop_mode) was set to one_shot.

Beyond that, release region behavior varies considerably between SFZ players.

rcg sfz:
* Both release or release_key regions play whether there is a previous attack region or not.
* Release_key regions won't play when releasing the sustain pedal. Release samples only play
when sustain pedal is up (not depressed).
* In sfz v1, there is no polyphony or note_polyphony for limiting the number of simultaneous
release regions playing, which can result in a very large number of release regions triggered
when the sustain pedal is raised.

DropZone and other Cakewalk players:
* Both release or release_key require a previous attack region.
* Release_key regions won't play when releasing the sustain pedal. Release samples only play
when sustain pedal is up (not depressed).
* To make release or release_key plays without any previous attack region, set
[rt_dead](/opcodes/rt_dead) to on.
* [note_polyphony](/opcodes/note_polyphony) is now available to control the accumulation of
release voices of repeated notes when Sustain pedal is down.

ARIA and Sforzando:
* release requires a previous attack region.
* release_key doesn't require a previous attack region.
* release responds to Sustain Pedal position.
* release_key ignores Sustain Pedal completely.
* rt_dead is not supported, and defaults to off.
* note_polyphony is available to control the accumulation of release voices.

Release samples can require a corresponding region with trigger set to attack to be active at
the moment when the note-off message is received, or the release region will never play.
In rgc sfz, this is not required. In DropZone and other Cakewalk players, it is required
unless [rt_dead](/opcodes/rt_dead) is set to on. In ARIA, it is required for trigger=release
regions but not for trigger=release_key regions.

For cases where a corresponding attack region is required, here is more detail.
An attack region is considered corresponding if it has the same MIDI note number,
and the same velocity range, as the release region. The velocity which matters here is
the note-on velocity of the initial region - not the velocity of the note-off message
which triggers the release region. Round robins do not need to match, so it is possible
to for example have five round robins for releases and only four round robins for
attacks.

This corresponding attack region is then used to calculate the volume of the release
region based on the attack region's velocity and [rt_decay](/opcodes/rt_decay). If there is
no corresponding attack region, or the corresponding attack region has finished playing due
to reaching sample end etc, then the release region will not play. This is designed primarily
designed for piano release samples.

Triggering a release sample without a corresponding attack region is is useful for release
samples which are noises not dependent on the volume of any corresponding note, such
as hurdy-gurdy key returns, which will sound the same whether the wheel is turning
or not.

More detail about release sample behavior in different SFZ players can be found at
https://github.com/kinwie/sfztest/wiki/How-Release-Trigger-Works-in-SFZ

## Examples

```
trigger=release
trigger=legato
```
