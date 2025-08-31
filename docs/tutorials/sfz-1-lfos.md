---
title: SFZ1 LFOs
---

Volume, filter and cutoff also each get an LFO and an [envelope].

Each LFO has four parameters:

- [depth][1] -- the maximum degree of modulation applied to the target, in the units of the target
- [frequency][2] (`(lfo type)_freq`) -- specifies the cycle time in Hz (with negative values allowing inverse phase)
- [delay][3] -- the amount of time after the voice is triggered that the LFO starts applying its effect
- [fade][4] -- the time taken after the delay for the depth to reach maximum

The rate and depth can be modulated by MIDI CC, channel aftertouch and polyphonic aftertouch.

SFZ1 offers no further control: for more complex requirements, see the [SFZ2 modulations].

### Examples

Here's a typical pitch vibrato LFO:

```sfz
pitchlfo_freq=2
pitchlfo_freqcc50=10
pitchlfo_depthcc51=33
```

To have amplitude modulation fade in over two seconds, after a delay of a second, then cycling by 3dB every 5 seconds:
```sfz
volume=-3
amplfo_depth=3
amplfo_freq=0.2
amplfo_delay=1
amplfo_fade=2
```

To add a filter LFO, adjusting the filter cutoff, controlled by CC1, channel aftertouch and polyphonic aftertouch:
```sfz
cutoff=3520
fillfo_depth=1200
fillfo_depthcc1=-1200
fillfo_freq=-0.1
fillfo_freqchanaft=0.2
fillfo_freqpolyaft=0.2
```

[envelope]:         sfz-1-egs.md
[1]:                ../opcodes/amplfo_depth.md
[2]:                ../opcodes/amplfo_freq.md
[3]:                ../opcodes/amplfo_delay.md
[4]:                ../opcodes/amplfo_fade.md
[SFZ2 modulations]: sfz2_modulations.md
