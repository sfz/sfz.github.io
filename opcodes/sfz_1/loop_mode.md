# loop_mode

If loop_mode is not specified, each sample will play according to its predefined
loop mode according to the loop metadata in the audio file. That is, the player
will play the sample looped using the first defined loop, if available. If no
loops are defined (which is usually the case with most files), the wave will
play unlooped.

The loop_mode opcode allows playing samples with loops defined in the unlooped mode.
The possible values are:

- ***no_loop***: no looping will be performed. Sample will play straight from start
                to end, or until note off, whatever reaches first.
- ***one_shot***: sample will play from start to end, ignoring note off.
                This is commonly used for drums.
                This mode is engaged automatically if the count opcode is defined.
- ***loop_continuous***: once the player reaches sample loop point,
                        the loop will play until note expiration.
- ***loop_sustain***: the player will play the loop while the note is held, by keeping
                    it depressed or by using the sustain pedal (CC64).
                    The rest of the sample will play after note release.

Default values:

- ***no_loop***         for samples without a loop defined,
- ***loop_continuous*** for samples with defined loop(s).

##### Examples

```
loop_mode=no_loop
loop_mode=loop_continuous
```


| Modulation Sources |     |
| :---               | --- |
| Envelope           |  X  |
| LFO                |  X  |
| MIDI CC            |  X  |
