---
layout: "sfz/opcode"
lang: "en"
opcode_name: "lfoN_stepX"
---
The level of step number X in an LFO used as a step sequencer,
which is possible in some Cakewalk products. Must have lfoN_steps
set for the LFO in order for this to mean anything.

Range is from -100% to 100%, and the range of the MIDI CC modulation
is the same, though both added together will effectively be -100%
or 100% if their sum exceeds one of those bounds.

If this is not set for a particular step, the default value for that
step is 0.

## Examples

```
lfo01_step01=10
lfo01_step01_oncc1=50

lfo01_step02=80
lfo01_step02_oncc1=50
```
