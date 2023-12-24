---
layout: "sfz/opcode"
opcode_name: "pitch_keycenter"
---
For samples which only need to be played at their
natural pitch and triggered by one specific MIDI note, it's generally easier to
use [key] instead. Cases using both pitch_keycenter and key are described in
more detail under key.

## sample as value

Starting with SFZ v2, it's possible to set pitch_keycenter to sample
(pitch_keycenter=sample). This causes the SFZ player to look in the sample file
metadata for the keycenter value. If pitch_keycenter is set to sample and the
file metadata does not contain pitch information, it defaults to MIDI note 0.

If samples contain good quality metadata, setting pitch_keycenter to sample
can be simpler than setting the keycenter for each individual sample.

If pitch_keycenter is set to sample and [key] is also used, the behavior depends
on the sampler. ARIA uses the value set using the [key] opcode, while rgc sfz and
Cakewalk products use the value from the sample metadata. ARIA also supports
setting pitch_keycenter to sample only at the `<region>` level, not at `<group>`
or higher levels.

## Examples

```
pitch_keycenter=56

pitch_keycenter=c#2

pitch_keycenter=sample
```

[key]: key
