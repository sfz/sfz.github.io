---
title: "Versions"
---
## SFZ v1

The first version of the format was originally published on the [rgc:audio website],
which is the most supported by sfz related software.

## SFZ v2

The SFZ v2 standard has never been clearly set down anywhere.
For the purpose of this website, anything included in the Simon Cann's
[Cakewalk Synthesizers] is considered SFZ v2, regardless of which SFZ players
it might or might not be actually implemented in.

If something works in ARIA but not in any Cakewalk products,
that's considered an ARIA extension.

Cakewalk Synthesizers is not a recent book, and was not intended
to be a standards document, but rather a manual for users of Cakewalk products.
So, if you are developing a new SFZ player, do not feel obligated to support
[all opcodes], [headers] etc. listed on this website - instead, use your judgment.

## Extensions

### ARIA

ARIA also adds some [extended MIDI CCs] in addition to those already added
by SFZ 2, and [XML instrument banks] as a way of organizing multiple
SFZ instruments and configuring graphical user interfaces.
See also the Plogue forum's [ARIA's Custom opcodes] post.


[rgc:audio website]:       https://web.archive.org/web/20071020023100/http://www.rgcaudio.com/sfzformat.htm
[Cakewalk Synthesizers]:   https://noisesculpture.com/cakewalk-synthesizers/
[all opcodes]:             opcodes/index.md
[headers]:                 headers/index.md
[extended MIDI CCs]:       extensions/midi_ccs.md
[XML instrument banks]:    extensions/aria/xml_instrument_bank.md
[ARIA's Custom opcodes]:   https://www.plogue.com/plgfrms/viewtopic.php?f=14&t=4389&sid=1499dd5d481dc9c02a51c57da3b11364
