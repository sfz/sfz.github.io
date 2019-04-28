# sw_vel

This opcode allows overriding the velocity for the region with the velocity of
the previous note. Values can be:

- ***current***: Region uses the velocity of current note.

- ***previous***: Region uses the velocity of the previous note.

##### Example

```
sw_vel=previous
```

Setting this to previous is useful for making certain legato instruments sound
smoother and more consistent.

| Type | Default | Range    | 
| ---  | ---     | ---      |
| text | current | current  |
|      |         | previous |
