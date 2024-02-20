---
template: "sfz/opcode.j2"
opcode_name: "xf_velcurve"
---
Values can be:

- **gain**: Linear gain crossfade. This setting is best when crossfading
            phase-aligned material. Linear gain crossfades keep constant
            amplitude during the crossfade, preventing clipping.
- **power**: Equal-power RMS crossfade. This setting works better to mix very
             different material, as a constant power level is kept
             during the crossfade.
