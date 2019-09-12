---
layout: "sfz/opcode"
lang: "en"
opcode_name: "fil_keytrack"
---
A value of 100 means 100 cents per half-step.

## Examples

```
fil_keytrack=100

fil_keytrack=0
```

The center key for this is specified by [fil_keycenter](fil_keycenter) -
for keys below this key, the change in filter cutoff will be negative,
and above this key, it will be positive.
