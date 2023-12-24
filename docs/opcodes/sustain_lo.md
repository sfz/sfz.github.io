---
template: "sfz/opcode.j2"
opcode_name: "sustain_lo"
---
This ARIA extension sets the minimum point
at which the sustain pedal (MIDI CC 64) is considered "down".
Default is 0.5, meaning the sustain pedal is down as long as the CC value is
anything above 0. To make the pedal only act as "down" past the halfway point,
set this to 64 - then the pedal is considered "up" from CC value 0 to 63,
and "down" from 64 to 127. Leaving this at the default value of 1, or setting it
to some other low number such as 10, is useful when the piano supports
half-pedaling. Setting it to 64 is preferred by some users who want to use the
sustain pedal as an on/off sustain switch for instruments with no half-pedaling.

Please note that the direction of the MIDI CC values is normally from 0 at the
top of the pedal to 127 when it is at the bottom, meaning that physically "down"
on the pedal is up in terms of MIDI CC value.

It is possible to set this to different values for different regions, so that
for example mechanical noises and notes will not be affected by the sustain pedal
in the same way.

## Examples

```sfz
sustain_lo=64
sustain_lo=20
```
