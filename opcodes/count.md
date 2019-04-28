---
---
# count

The number of times the sample will be played. If this opcode is specified, the
sample will restart as many times as defined. Envelope generators will not be
retriggered on sample restart. When this opcode is defined, [loop_mode](loop_mode)
is automatically set to one_shot.

##### Examples

```
count=3

count=2
```

| Type    | Default | Range           |
| ---     | ---     | ---             |
| integer | 0       | 0 to 4294967296 |
