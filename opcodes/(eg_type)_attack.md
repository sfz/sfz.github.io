---
---
# (eg type)_attack

EG attack time, in seconds.

##### Examples

```
ampeg_attack=1.2
fileg_attack=0.1
```

These are very frequently used, especially with amplifier envelopes.
`ampeg_attack` is the standard "A" in the basic ADSR volume envelope.
`fileg_attack` is key to 303-style basses.

| Type  | Default | Range      |
| ---   | ---     | ---        |
| float | 0       | 0 to 100 s |

| Modulation Sources
|           ---
| Envelope | X |
| LFO      | X |
| MIDI CC  | ✓ | (eg type)_attack_onccN
