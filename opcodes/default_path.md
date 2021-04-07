---
layout: "sfz/opcode"
opcode_name: "default_path"
---
Default path under which the samples should be found. Can also be
used as a general prefix for samples, not just a path prefix. At
least in ARIA this is combined with the path given in the
[sample](/opcodes/sample) opcode, so either default_path should
have a trailing slash, or sample should have a leading slash so
when concatenated they will become a valid file path.

Cakewalk products only allow relative path. ARIA, Bassmidi and sfizz
allow either absolute or relative paths.

Used under the ‹[control](/headers/control)› header. In Cakewalk
products, a new control header does not reset the path. In ARIA
default_path gets reset by a new control header. Whether settings
other than default_path should also be reset by a new control header
is not entirely clear. As implemented in ARIA, a new control header
resets default_path only and not other control settings, and this
does not seem unreasonable.

## Examples

```
default_path=../Samples/
default_path=D:/TEST/Count_0_10/
```
