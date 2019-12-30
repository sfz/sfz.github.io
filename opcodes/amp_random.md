---
layout: "sfz/opcode"
lang: "en"
opcode_name: "amp_random"
---
Amount of random variation for volume, in decibels. Computed when the note is
triggered, remains the same for that region for as long as the region plays.

The variation is additive - to create variation which can be either negative
or positive, this needs to be combined with a fixed [volume](/opcodes/volume)
offset for half the negative value that amp_random is set to.

## Examples

```
amp_random=10

amp_random=3

volume=-3 amp_random=6
```
