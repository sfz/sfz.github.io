---
layout: sfz/opcode
lang: en
title: volume
---
Range is -144.6 to 6 in the specification,
but some SFZ players can utilize values above 6.

##### Examples

```
volume=-24
volume=0
volume=3.5

gain_cc1=12
```

This will play the sample at unchanged volume when CC1 is at 0,
and apply a 12 dB boost when CC1 is at maximum.

`gain_ccN` is useful for creating volume controls, an alias for the ARIA extension
`volume_onccN`.

| Name     | Version | Type  | Default | Range         |
| ---      |   ---   | ---   | ---     | ---           |
| gain_ccN |  SFZ v1 | float | 0       | -144 to 48 dB |

Also see the ARIA extension [amplitude_onccN](/opcodes/amplitude) for another way
to do a simple volume control.
