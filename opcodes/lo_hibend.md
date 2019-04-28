# lobend / hibend

Defines the range of the last Pitch Bend message required for the region to play.

##### Examples

The region will play only if last Pitch Bend message received was in the
0 to 4000 range.

```
lobend=0 hibend=4000
```

|    Type    |    Default   |     Range     |
|    ---     |      ---     |      ---      |
|   integer  | lobend=-8192 | -8192 to 8192 |
|            | hibend=8192  |               |
