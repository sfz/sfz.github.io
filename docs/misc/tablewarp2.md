---
title: "TableWarp2"
---
## Overview
TableWarp2 is an instrument built into the plogue Sforzando sfz player. It's a synthesizer which is a plugin for sforzando, and does not quite operate like standard sfz instrument but does use sfz for its controls. So, while it is capable of FM syntheiss, this does not mean that other sfz instruments in sforzando can also do FM.

It was implemented by Hubert Lamontagne, with GUI by Hubert Lamontagne and Eric Patenaude.

TableWarp2 uses a special value for the [sample] opcode.

```sample=*com.Madbrain.TableWarp2```

## Parameters

TableWarp2 uses the [sample_dyn_paramN] opcode for its controls, as sample_dyn_param allows ARIA-specific controls to exist without having to create new opcodes or parameters. Here are the four parameters:

**01**
Wave Table offset (the transition between waveforms, like Serum/Vital)
Float
Range: 0.0 - 1.0

**02**
Warp offset (The intensity of the warp effect)
Float
Range: 0.0 - 1.0

**03**
Wave Table switcher
Float
Range: 0.0 - 15.875

Wave list:
- WAVE            CC    %
- Sine-tri-saw    4     0
- Sine-tri-sqr    12    7
- Overdrive saw   20    14
- Overdrive sqr   28    19
- Resonant saw    36    26
- Resonant sqr    44    32
- Dist reso saw   52    38
- Dist reso sqr   60    45
- Plucked str     68    51
- Abs sine pwm    76    58
- Soft pwm        84    64
- Hard pwm        92    70
- Hard sync       100   78
- Xor wave        108   82
- Dark noise      116   89
- Bright noise    124   95

**04**
Warp switcher
Float
Range: 0.0 - 15.875

Warp list:
- WARP            CC    %
- Saw bend        4     0
- Pwm bend        12    7
- Square bend     20    14
- Square bend 2   28    19
- Pulse bend      36    26
- Pulse bend 2    44    32
- Impulse bend    52    38
- Impulse bend 2  60    45
- FM sine         68    51
- FM half-sine    76    58
- FM 1:5          84    64
- FM 1:7          92    70
- Pseudo filter   100   78
- Soft sync       108   82
- Pwm-like fx     116   89
- Pixelate        124   95

## Modulators
egX_sample_dyn_paramY / lfoX_sample_dyn_paramY
egX_sample_dyn_paramY_onccZ / lfoX_sample_dyn_paramY_onccZ

## Note
Researched and documented by a user on the sfz Discord.

[sample]:                ../opcodes/sample.md
[sample_dyn_paramN]:     ../opcodes/sample_dyn_paramN.md
