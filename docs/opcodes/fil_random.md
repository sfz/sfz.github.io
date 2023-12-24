---
template: "sfz/opcode.j2"
opcode_name: "fil_random"
---
Computed when the note is triggered, remains the same for that region
for as long as the region plays.

## Examples

```sfz
fil_random=100

fil_random=400
```

## Practical Considerations

In ARIA, this is unipolar. In rcg sfz and Cakewalk, this is bipolar.
