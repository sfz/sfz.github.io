---
template: "sfz/opcode.j2"
opcode_name: "amp_random"
---
Computed when the note is triggered,
remains the same for that region for as long as the region plays.

## Examples

```sfz
amp_random=10

amp_random=3

volume=-3 amp_random=6
```

## Practical Considerations

In ARIA and Cakewalk, amp_random is unipolar. To create variation which can
be either negative or positive, this needs to be combined with a fixed
[volume] offset for half the negative value that amp_random is set to.

In the rgc sfz player, amp_random is bipolar.


[volume]: volume.md
