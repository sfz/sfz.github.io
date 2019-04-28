---
---
# (eg type)_hold

EG hold time, in seconds. During the hold stage,
EG output will remain at its maximum value.

##### Examples

```
ampeg_hold=1.5
fileg_hold=0.1
```

| Type  | Default | Range      |
| ---   | ---     | ---        |
| float | 0       | 0 to 100 s |

| Modulation Sources
|           ---
| Envelope | ✓ |
| LFO      | X |
| MIDI CC  | ✓ | (eg type)_hold_onccN
