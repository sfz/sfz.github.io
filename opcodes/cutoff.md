---
---
# cutoff

Sets the cutoff frequency (Hz) of the [Filters](/types/filter).
Note that while this is specified in Hertz,
filter LFO depths in the SFZ 1 spec are in cents.

##### Examples

```
cutoff=343
cutoff=4333
```

| Type    | Default         | Range               |
| ---     | ---             | ---                 |
| float   | filter disabled | 0 to SampleRate / 2 |

|     Modulation Sources      |
|           ---               |
| Envelope | ✓ | fileg_depth  |
| LFO      | ✓ | fillfo_depth |
| MIDI CC  | ✓ | cutoff_ccN   |
