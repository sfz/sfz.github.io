---
layout: "sfz/opcode"
opcode_name: "fil_random"
---
Amount of random variation for filter cutoff in cents. Computed when the note is
triggered, remains the same for that region for as long as the region plays.

In ARIA, this is unipolar. In rcg sfz and Cakewalk, this is bipolar. 

## Examples

```
fil_random=100

fil_random=400
```
