---
---
# (eg type)_decay

EG decay time, in seconds.

##### Examples

```
ampeg_decay=1.5
fileg_decay=0.5
```

This should normally not be shorter than the corresponding envelope's release time.

| Type  | Default | Range      |
| ---   | ---     | ---        |
| float | 0       | 0 to 100 s |

| Modulation Sources
|           ---
| Envelope | X |
| LFO      | X |
| MIDI CC  | ✓ | (eg type)_decay_onccN
