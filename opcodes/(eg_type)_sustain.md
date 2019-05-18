---
title: (eg type)_sustain
---
EG sustain level, in percentage.

##### Examples

```
ampeg_sustain=40.34
pitcheg_sustain=10(eg type)_sustain
```

| Type  | Default | Range      |
| ---   | ---     | ---        |
| float | 100     | 0 to 100 % |

| Modulation Sources
|           ---
| Envelope | X |
| LFO      | X |
| MIDI CC  | ✓ | (eg type)_sustain_onccN

`(eg type)_sustain_onccN` uses the following values:

| Type  | Default | Range         |
| ---   | ---     | ---           |
| float | 0       | -100 to 100 % |
