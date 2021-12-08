---
layout: "sfz/opcode"
opcode_name: "volume"
---
Range is -144.6 to 6 in the specification,
but many SFZ players can utilize values above 6. Sfz.dll, Rapture and Dimension
have a +24 dB maximum, and ARIA has an upper limit of at least +144,
perhaps even more.

## Examples

```
volume=-24
volume=0
volume=3.5

gain_cc1=12
```

This will play the sample at unchanged volume when CC1 is at 0,
and apply a 12 dB boost when CC1 is at maximum.

`gain_ccN`/`volume_onccN` is useful for creating volume controls.

In Aria, either gain or volume can be used in modulations; however, gain by itself
(for example gain=5) is not valid. For a fixed volume change wihtout modulation,
only volume works.
