---
title: (target)_vel2(param) Velocity Tracking
---
## Envelope Generators

`ampeg`, `fileg` and `pitcheg` can have all their parameters modulated by note velocity.

```
(param) = (eg type)_(param) + ( (eg type)_vel2(param) * velocity / 127 )
```

Range is -100 seconds to 100 seconds or -100 to 100 percent but, in most typical cases,
the effect of velocity on envelope delay and attack times will be negative
and the effect of velocity on other envelope parameters positive.

This would make a sound have a faster attack and a slower decay when a note has higher velocity,
with attack of 0.5 seconds at 0 velocity and 0.1 seconds at 127 velocity:

```sfz
ampeg_attack=0.5
ampeg_vel2attack=-0.4
ampeg_decay=0.5
ampeg_vel2decay=1
ampeg_sustain=50
ampeg_release=0.25
```

## EQ Bands

For the EQ parameters, the same calculation applies:

```
(param) = (eq band)_(param) + ( (eq band)_vel2(param) * velocity / 127 )
```

To set up the EQ1 band at 880 HZ with a 6dB cut and half an octave bandwidth,
but allowing note velocity to adjust this by cutting the EQ midpoint by up to 110 Hz (at velocity 127)
and increasing the cut to -12dB (at velocity 127), you might write the following:
```sfz
eq1_bw=0.5
eq1_freq=880
eq1_gain=-6
eq1_vel2freq=-110
eq1_vel2gain=-6
```
