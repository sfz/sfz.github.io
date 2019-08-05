---
layout: sfz/opcode
lang: en
title: xf_velcurve
---
Velocity crossfade curve for the region. Values can be:

- ***gain***: Linear gain crossfade. This setting is best when crossfading
            phase-aligned material. Linear gain crossfades keep constant
            amplitude during the crossfade, preventing clipping.
- ***power***: Equal-power RMS crossfade. This setting works better to mix very
            different material, as a constant power level is kept
            during the crossfade.

| Type | Default | Range       |
| ---  | ---     | ---         |
| text | power   | gain, power |
