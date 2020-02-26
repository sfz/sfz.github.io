---
layout: "sfz/opcode"
lang: "en"
opcode_name: "lfoN_steps"
---

The number of steps in the step sequencer. This can be used in some
Cakewalk products, together with lfoN_stepX, to use an LFO as a
step sequencer instead of a typical LFO.

If both lfoN_steps and lfoN_wave are set for the same region, the
one which is set later in the SFZ file takes effect - an LFO can't
have both a wave and steps, so if lfoN_wave is set and then
lfoN_steps is set, the LFO will only act as a step sequencer.

lfoN_phase can't be used with step sequencers, but lfoN_delay,
lfoN_fade and lfoN_count all can.

## Examples

```
lfo3_steps=16
lfo1_steps=8
```
