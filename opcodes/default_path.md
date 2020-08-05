---
layout: "sfz/opcode"
opcode_name: "default_path"
---
Default path under which the samples should be found. Can also be
used as a general prefix for samples, not just a path prefix.

Used under the ‹[control](/headers/control)› header. Default_path
gets reset by a new control header. Whether settings other than
default_path should also be reset by a new control header is not
entirely clear. As implemented in ARIA, a new control header
resets default_path only and not other control settings, and this
does not seem unreasonable.

## Example

```
default_path=../Samples
```
