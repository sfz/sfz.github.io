---
---
Can be negative, and according to the SFZ spec the allowed range is -200 to 200,
which could be used to push LFO frequencies into audio frequency range,
allowing AM, FM and filter growl. Perhaps that was a typo and it should be
-20 to 20, as 20 Hz is the maximum LFO frequency in the SFZ 1 spec.

## Examples

```
fillfo_freqchanaft=10
fillfo_freqchanaft=-20
```
