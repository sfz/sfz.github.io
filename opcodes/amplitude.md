---
title: amplitude
---
Amplitude for the specified region in percentage of full amplitude.
Range is 0 to 100. Default is 100 - 100% amplitude meaning no volume change is
applied to the sample when played. Can be modulated with MIDI CC.

##### Examples

```
amplitude=12
amplitude=40
amplitude_oncc108=100
amplitude_oncc50=35
```

When modulated by MIDI CC, this is a very convenient way to set up a volume
control which goes from silence to full volume.

| Modulation Sources |
| ---                | --- |
| Envelope           |  ✓  |
| LFO                |  ✓  |
| MIDI CC            |  ✓  | amplitude_onccN
