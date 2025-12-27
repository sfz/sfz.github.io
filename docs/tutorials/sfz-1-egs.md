---
title: SFZ1 EGs
---

Volume, filter and cutoff also each get an [LFO] and an envelope.

Each envelope has seven parameters:

- [delay][1] -- delay between the start of the voice and the EG taking effect
- [start][2] -- the initial level of the EG
- [attack][3] -- the duration of the attack phase of the EG
- [hold][4] -- .. hold phase
- [decay][5] -- .. decay phase
- [sustain][6] -- the level to which the EG decays
- [release][7] -- the duration of the release phase of the EG

Each envelope parameter can also be modulated by [CC], or by [velocity].

SFZ1 offers no further control: for more complex requirements, see the [SFZ2 modulations].

Here's an example setup for a synth-style ADSR volume envelope
(hold is not specified so the default hold value of 0 is used)
controlled by CCs and some initial minimum values set for attack and release,
along with a default sustain of 0:

```sfz
ampeg_attack=0.001
ampeg_attackcc40=1
ampeg_decaycc41=4
ampeg_sustain=1
ampeg_sustaincc42=100
ampeg_release=0.1
ampeg_releasecc43=0.9
```

Modulating envelope parameters with velocity allows, for example, setting up a filter
on an acid bass which will sweep farther with higher velocity, and also sweep faster.

```sfz
cutoff=120
resonance=12
fileg_attack=0.5
fileg_decay=1
fileg_depth=500
fileg_vel2attack=-0.4
fileg_vel2decay=-0.8
fileg_vel2depth=4000
```

[LFO]: sfz-1-lfos.md
[CC]:       ../modulations/midi_ccs.md
[velocity]: ../modulations/vel2.md
[SFZ2 modulations]: sfz2_modulations.md
[1]: ../opcodes/ampeg_delay.md
[2]: ../opcodes/ampeg_start.md
[3]: ../opcodes/ampeg_attack.md
[4]: ../opcodes/ampeg_hold.md
[5]: ../opcodes/ampeg_decay.md
[6]: ../opcodes/ampeg_sustain.md
[7]: ../opcodes/ampeg_release.md
