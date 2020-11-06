---
title: "Opcodes"
cards: "sfz/opcodes-table-cards.liquid"
scripts: ["opcodes-table-filters"]
---
All opcode [versions], including extensions, starting in alphabetical order.
Note that [modulations] such as (on)ccN and vel2* are included in the pages
describing the parameters they modulate.

<div markdown="0">
{% include sfz/opcodes-table-generator.liquid %}
{%-comment-%} Tables data is at /_data/sfz/syntax.yml {%-endcomment-%}
</div>

[modulations]: {{ '/modulations/' | relative_url }}
[versions]:    {{ '/versions' | relative_url }}
