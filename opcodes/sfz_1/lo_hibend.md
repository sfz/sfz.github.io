# lobend / hibend

Defines the range of the last Pitch Bend message required for the region to play.

Examples:

```
lobend=0 hibend=4000
```

The region will play only if last Pitch Bend message received was in the 0 to 4000 range.
Allowed range is -8192 to 8192. Default is lobend=-8192 and hibend=8192.
