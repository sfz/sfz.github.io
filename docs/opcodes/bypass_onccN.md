---
layout: "sfz/opcode"
opcode_name: "bypass_onccN"
---
When the MIDI CC value (0-127) is >= a threshold, the effect plays,
otherwise it's disabled.
The threshold is determined according to this expression: 64.0 / BypassValue
where BypassValue is the opcode's value, strictly positive, interpreted as
real number. At BypassValue=1, without doubt the most useful, the effect is
off at CC<64 and on at CC>=64.
