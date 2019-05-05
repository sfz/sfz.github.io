---
title: sostenuto_lo
---
This ARIA extension used under the <[control](/headers/control)> header sets the
minimum point at which the sostenuto pedal (MIDI CC 66) is considered "down".
Default is 1, meaning the sustain pedal is down as long as the CC value is
anything above 0. To make the pedal only act as "down" past the halfway point,
set this to 64 - then the pedal is considered "up" from CC value 0 to 63, and
"down" from 64 to 127. Leaving this at the default value of 1, or setting it to
some other low number such as 10, is useful when the piano supports
half-pedaling. Setting it to 64 is preferred by some users who want to use the
sostenuto pedal as an on/off switch for instruments with no half-pedaling.

##### Examples

```
sostenuto_lo=64
sostenuto_lo=20
```
