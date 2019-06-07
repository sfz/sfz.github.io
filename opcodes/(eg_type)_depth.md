---
lang: en
title: (eg type)_depth
---
Envelope depth.

For pitcheg and fileg, this is in cents, and can range from -12000 to 12000.
-12000 cents is 10 octaves.

For ampeg, this should not normally be used.

##### Examples

```
fileg_depth=1200
pitcheg_depth=-100
```

| Type    | Default | Range                 |
| ---     | ---     | ---                   |
| integer | 0       | -12000 to 12000 cents |

| Modulation Sources
|           ---
| Envelope | X |
| LFO      | X |
| MIDI CC  | ✓ |
