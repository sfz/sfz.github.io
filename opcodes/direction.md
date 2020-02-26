---
layout: "sfz/opcode"
lang: "en"
opcode_name: "direction"
---
This is similar to [loop_type](loop_type) but affects the entire sample,
not just the defined loop regions.

At least in ARIA, direction=reverse doesn't always work as expected.
However, it seems to work if the sample= opcode is specified for every
region. Specifying the sample at the group header level and then
specifying direction under the region doesn't seem to work at least in
cases where one region has the sample playing forward, and another
region has the same sample playing backwards.

## Example

```
direction=reverse
```
