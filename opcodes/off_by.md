---
layout: "sfz/opcode"
opcode_name: "off_by"
---
When a new region with a group number equal to `off_by` plays,
this region will be turned off.

## Examples

```
off_by=3

off_by=334
```

This is used in conjunction with [group](/opcodes/group) to make things
monophonic, but can also be used in other contexts where one sound should cause
another to stop - for example, cymbal chokes.

## Practical considerations

With the default for both group and off_by being 0, any instruments that
leave these default values in place should in theory be monophonic. As a
workaround, rgc sfz, Cakewalk players, BassMIDI and LinuxSampler implement
special behavior where if group=0 and off_by=0, regions are not muted,
and muting only happens for non-zero values of off_by. ARIA/Sforzando
has a different workaround, with the default value of off_by being 4294967295.

The actual minimum and maximum values are not currently known. Some players
will treat numbers outside a certain range as equivalent to off_by=0, and
ARIA/Sforzando will also do this with text strings. The behavior of
non-integer numbers is also currently unknown. This makes it possible to use
an extremely large number for one group/off_by combination, but it's obviously
not recommended.
