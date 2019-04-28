---
---
# offset_random

Random offset added to the region offset, in sample units. In many cases, will
need to be used with a small [ampeg_attack](ampeg_attack) value to avoid clicks
caused by the region playing starting with a point in the sample file where the
value is non-zero.

##### Examples

```
offset_random=300

offset_random=100
```

Potential uses: randomizing the phase alignment of multiple samples playing in
unison; playing a looped sample from a randomized start point in order to create
natural variation.

| Type    | Default | Range           |
| ---     | ---     | ---             |
| integer | 0       | 0 to 4294967296 |
