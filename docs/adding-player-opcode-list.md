---
title: Add players description and opcode support pages
lang: en
---
Some players in the [players page] are flagged as documented, that means that
their opcode support is known. For those items in the list the link doesn't
point directly to the related project page but to one in our website where there
is a short description and a table with opcodes supported for that application.
To add that page the following steps are required:

- Create a markdown file with the name of the player in [software/players] (lowercase)
- Add either the table generator link (see the other ones as reference) or, if
  you have your own list of supported opcodes webpage, a link to it
- In case you need to create a supported opcode list you need to add also a
  YAML file under [_data/sfz/players] (same as above)
- Add the player's table item in the [players data file] under the "Players"
  category

The YAML file syntax is quite trivial, just use the appropriate [SPDX License ID]
as license value.

[players page]:      {{site.repository.url}}/tree/{{site.repository.name}}/software/players.md
[software/players]:  {{site.repository.url}}/tree/{{site.repository.name}}/software/players/
[_data/sfz/players]: {{site.repository.url}}/tree/{{site.repository.name}}/_data/sfz/players/
[SPDX License ID]:   https://spdx.org/licenses/
[players data file]: {{site.repository.url}}/tree/{{site.repository.name}}/_data/sfz/software.yml
