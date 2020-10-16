---
title: "Opcodes"
cards: "sfz/opcodes-table-cards.html"
scripts: ["filterable.min", "filterable-init"]
---
All opcodes, including extensions, starting in alphabetical order.\
Note that [modulations] such as (on)ccN, and vel2* opcodes are included
in the pages describing the parameters they modulate.

## SFZ v2 Notes

The SFZ v2 standard has never been clearly set down anywhere.
For the purpose of this website, anything included in the SFZ v2 regression
tests or mentioned in the Cakewalk book is considered SFZ v2, and anything
not there is considered an extension. If something works in a Cakewalk product,
such as Rapture, but is not mentioned in the book,
that's considered a Cakewalk extension.

The book is not recent, and was not intended to be a standards document, but rather
a manual for users of Cakewalk products. So, if you are developing a new SFZ player,
do not feel obligated to support all opcodes in this list - instead, use your judgment.

## ARIA Extensions

ARIA also adds some [extended MIDI CCs] in addition to those already added
by SFZ 2, and [XML instrument banks] as a way of organizing multiple
SFZ instruments and configuring graphical user interfaces.
See also the Plogue forum's [ARIA's Custom opcodes] post.

<div markdown="0">
{% include sfz/opcodes-table-generator.html %}
{%-comment-%} Tables data is at /_data/sfz/syntax.yml {%-endcomment-%}
</div>

[ARIA's Custom opcodes]: https://www.plogue.com/plgfrms/viewtopic.php?f=14&t=4389&sid=1499dd5d481dc9c02a51c57da3b11364
[modulations]:          {{ '/modulations/' | relative_url }}
[extended MIDI CCs]:    {{ '/extensions/midi_ccs' | relative_url }}
[XML instrument banks]: {{ '/extensions/aria/xml_instrument_bank' | relative_url }}
