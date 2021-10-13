---
layout: "sfz/opcode"
opcode_name: "loop_mode"
---
If `loop_mode` is not specified, each sample will play according to its predefined
loop mode according to the loop metadata in the audio file. That is, the player
will play the sample looped using the first defined loop, if available. If no
loops are defined (which is usually the case with most files), the wave will
play unlooped.

The possible values are:

- ***no_loop***: no looping will be performed. Sample will play straight from start
                to end, or until note off, whatever reaches first.
- ***one_shot***: sample will play from start to end, ignoring note off.
                This is commonly used for drums.
                This mode is engaged automatically if the [count](count) opcode
                is defined.
- ***loop_continuous***: once the player reaches sample loop point,
                        the loop will play until note expiration. This includes looping during the release phase.
- ***loop_sustain***: the player will play the loop while the note is held, by keeping
                    it depressed or by using the sustain pedal (CC64). During the release phase, there's no looping.
										
Whether no_loop, loop_continuous or loop_sustain is set, the duration of the release phase is set using
[ampeg_release](/opcodes/ampeg_release). However, in loop_sustain or no_loop mode, the sound can be cut off
before the release phase ends, if the end of sample is reached. In loop_continuous mode, the loop will
repeat if the loop end is reached during the release phase, including repeating multiple times if the release
time is longer than the loop length.

## Practical Considerations
										
For samples with [trigger](/opcodes/trigger)=release set, no_loop and one_shot will both behave as one_shot
and the entire release sample will play. If loop_continuous is set, looping will be
applied - and unless loop_count is set or there is some other way the sound will be muted,
that means the sound can potentially continue indefinitely.

If an instrument is using the default loop_mode=no_loop, there is no need to set loop_mode=one_shot for the
release samples; however, if an instrument has loop_mode=loop_continuous set under a header which also
includes release samples, the release regions will normally need to be set to loop_mode=one_shot to override that.

In ARIA, if loop_mode=loop_continuous or loop_sustain, `loop_end` is not specified, and the sample does not have
a loop defined, the player will loop through the entire sample file.

## Examples

```
loop_mode=no_loop

loop_mode=loop_continuous
```
