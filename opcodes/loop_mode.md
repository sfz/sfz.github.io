---
layout: "sfz/opcode"
lang: "en"
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

## Examples

```
loop_mode=no_loop

loop_mode=loop_continuous
```
