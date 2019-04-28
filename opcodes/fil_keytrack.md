---
---
# fil_keytrack

Filter keyboard tracking (change on cutoff for each key) in cents. A value of 100 means 100 cents per half-step.

##### Examples

```
fil_keytrack=100

fil_keytrack=0
```

Range is 0 to 1200. The center key for this is specified by [fil_keycenter](fil_keycenter) -
for keys below this key, the change in filter cutoff will be negative,
and above this key, it will be positive.

| Type    | Default | Range           |
| ---     | ---     | ---             |
| integer | 0       | 0 to 1200 cents |
