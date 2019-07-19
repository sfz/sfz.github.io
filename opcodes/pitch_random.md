---
lang: en
title: pitch_random
---
Random tuning for the region, in cents. 

##### Examples

```
pitch_random=10

pitch_random=400
```

Useful for humanizing the pitch of instruments with naturally imprecise
intonation, especially when playing multiple regions in unison.

At least in ARIA and Cakewalk
Dimension Pro this is unipolar, and equivalent to `pitch_oncc135`. So,
if `pitch_random` is set to 20, the region will play at pitches tuned by
an amount in the range from 0 cents to +20 cents. In order to get pitch
to fluctuate between -20 and +20 cents, there would be two ways to get there,
either by applying a fixed shift of -20 cents and a random shift of up to
40 cents:

```
pitch=-20
pitch_random=40
```

Or use CC136, which is bipolar random from -1 to 1:

```
pitch_oncc136=20
```

| Type    | Default | Range           |
| ---     | ---     | ---             |
| integer | 0       | 0 to 9600 cents |
