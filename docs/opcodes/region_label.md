---
template: "sfz/opcode.j2"
opcode_name: "region_label"
---
Useful for debugging. In order to work properly, generally needs to be set under
a [‹region›] header.
If not set, the info tab will display the file path of the most recently played sample.

## Example

```sfz
<region> sample=china2_30_01.flac seq_position=1 region_label=30 one
// ...
<region> sample=china2_30_09.flac seq_position=9 region_label=30 nine
<region> sample=china2_30_10.flac seq_position=10 region_label=30 ten
```

<img
  class="img-fluid"
  alt="region_label example image"
  src="./../assets/img/opcodes/labels.jpg"
/>


[‹region›]: ../headers/region.md
