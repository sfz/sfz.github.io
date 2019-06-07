---
lang: en
title: lfoN_delay
---
Onset delay for LFO number N, in seconds.
Can be modulated by MIDI CC. Default is 0.

Examples:
lfo01_delay=0.1
lfo02_delay=1.2
lfo02_delay_oncc20=2.5
Often useful for delaying vibrato onset in strings, vocals, guitar, saxophone etc.
Can be combined with [lfoN_fade](lfoN_fade) in some cases.

| Modulation Sources
|           ---
| Envelope | ✓ | egN_freq_lfoX
| LFO      | X |
| MIDI CC  | ✓ | lfoN_delay_onccX
