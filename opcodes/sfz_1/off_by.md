# off_by

Region off group. When a new region with a group number equal to `off_by` plays,
this region will be turned off.

##### Examples

```
off_by=3

off_by=334
```

This is used in conjunction with [group](/opcodes/sfz_1/group) to make things
monophonic, but can also be used in other contexts where one sound should cause
another to stop - for example, cymbal chokes.

| Type    | Default | Range           |
| ---     | ---     | ---             |
| integer | 0       | 0 to 4294967296 |
