---
layout: sfz/opcode
lang: en
title: (lfo type)_freqpolyaft
---
LFO frequency change when polyphonic aftertouch MIDI messages are received, in Hertz.

Can be negative, and according to the SFZ spec the allowed range is -200 to 200,
which could be used to push LFO frequencies into audio frequency range,
allowing AM, FM and filter growl. Perhaps that was a typo and it should be
-20 to 20, as 20 Hz is the maximum LFO frequency in the SFZ 1 spec.

##### Examples

```
fillfo_freqpolyaft=10
fillfo_freqpolyaft=-20
```

| Type  | Default | Range          |
| ---   | ---     | ---            |
| float | 0       | -200 to 200 Hz |
