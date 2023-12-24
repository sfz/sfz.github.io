---
template: "sfz/opcode.j2"
opcode_name: "offset_random"
---
In many cases, will need to be used with a small [ampeg_attack]
value to avoid clicks caused by the region playing starting with a point
in the sample file where the value is non-zero. Computed when the note is
triggered. Unipolar in ARIA, Cakewalk and rcg sfz.

Note: when using a player with disk streaming, such as Sforzando/ARIA, which does
not load entire samples to memory but instead preloads on only the start (usually
about half a second, following the original Gigasampler method), it is generally
not a good idea to make the offset_random values so high that they would cause the
offset to exceeed this buffer. In practice, that means keeping offset_random no
higher than 20000 or so on most systems.

## Examples

```sfz
offset_random=300

offset_random=100
```

Potential uses: randomizing the phase alignment of multiple samples playing in
unison; playing a looped sample from a randomized start point in order to create
natural variation.


[ampeg_attack]: ampeg_attack.md
