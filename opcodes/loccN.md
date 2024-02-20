---
layout: "sfz/opcode"
title: "loccN / hiccN"
---
N will normally be a number from 1 to 127.

## Examples

```
locc74=30 hicc74=100
```

The region will play only if last MIDI controller 74 received was in the 30 to 100 range.

Allowed range is 0 to 127. The defaults are loccN=0 and hiccN=127.

Practical applications include using MIDI CC to switch things on and off - for
example, additional voices, release noises, vibrato etc. A common example would
be having a hi-hat with various degrees of openness sampled, all of those mapped
to the same MIDI note, and hicc/locc used to define the ranges for which each
degree of openness should play. A simpler example would be switching between
sine, saw and noise waveforms:

```
<region>hicc1=63 sample=*sine
<region>locc1=64 hicc=126 sample=*saw
<region>locc1=127 sample=*noise
```

This is a "hard" switch - if a region is within the locc to hicc range it plays,
if it's outside that range it does not play. For smooth fades controlled by CC
(such as crossfaded dynamic layers or crossfaded vibrato layers on sustained
instruments), other opcodes such as [xfin_loccN / xfin_hiccN]
and [xfout_loccN / xfout_hiccN] should be used, or perhaps
the [amplitude_onccN] ARIA extension.


[amplitude_onccN]:           amplitude
[xfin_loccN / xfin_hiccN]:   xfin_loccN
[xfout_loccN / xfout_hiccN]: xfout_loccN
