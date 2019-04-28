# pitch_random

Random tuning for the region, in cents. Random pitch will be centered, with
positive and negative values. So, if pitch_random is set to 20, the region will
play at pitches tuned by an ammount in the range from -20 to +20 cents.

##### Examples

```
pitch_random=10

pitch_random=400
```

Useful for humanizing the pitch of instruments with naturally imprecise
intonation, especially when playing multiple regions in unison.

| Type    | Default | Range           |
| ---     | ---     | ---             |
| integer | 0       | 0 to 9600 cents |
