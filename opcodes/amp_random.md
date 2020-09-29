---
layout: "sfz/opcode"
opcode_name: "amp_random"
---
Amount of random variation for volume, in decibels. Computed when the note is
triggered, remains the same for that region for as long as the region plays.

In ARIA and Cakewalk, amp_random is unipolar. To create variation which can
be either negative or positive, this needs to be combined with a fixed
[volume](/opcodes/volume) offset for half the negative value that amp_random
is set to.

In the rgc sfz player, amp_random is bipolar.

## Examples

```
amp_random=10

amp_random=3

volume=-3 amp_random=6
```
