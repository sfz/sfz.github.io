---
---
# (eg type)_delay

EG delay time, in seconds. This is the time elapsed from note on to the start of
the Attack stage. If both envelope delay and the general [delay](delay)
or [delay_random](delay_random) are used in the same region, the envelope delays
start after delay and delay_random have both completed their duration.

##### Examples

```
fileg_delay=0.004
ampeg_delay=0.05
```

| Type  | Default | Range      |
| ---   | ---     | ---        |
| float | 0       | 0 to 100 s |

| Modulation Sources
|           ---
| Envelope | ✓ |
| LFO      | X |
| MIDI CC  | ✓ | (eg type)_delay_onccN
