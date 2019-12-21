---
title: Website Development Reference
lang: en
---
## Introduction

This page has the purpose to document the SFZ Format project website and give
references and rules for maintainance.

## GitHub and Travis-CI

The webpage is hosted on [GitHub] using [Git SCM]
as content management, using 2 git repositories: source and master.
The source repository is used for the website source files written in [Markdown]
format and [Liquid] language, which are used by [Jekyll],
a static pages website generator created and used by GitHub for hosting
project websites.
The master repository is used to store the generated files that are built
externally by Travis Continuous Integration service.
[Travis-CI] was choosed instead GitHub Pages to enable the use of Jekyll custom
plugins required for our purposes, following their [GitHub Pages Deployment]
documentation.

## Rules

- Start any .md file with a 2 triple-dashed lines [front matter],
  otherwise Jekyll will copy the original md file into the resulting `_site`
  directory.

  Opcode files should include:
  - a `layout: sfz/opcode` variable to specify the
    required layout to build the resulting html page
  - the page language code if it's not English
  - optionally, the title of the page if different than the page name
    (see the example below).

- Each opcode file must have also an entry in the [syntax.yml] db file.

- Using block code three back ticks even with a single line, inline code is used
  for opcode keywords highlights.

- Using spaces instead of tabs for indentation in pages, mostly on `_config.yml`
  to avoid issues / unwanted results.

- Using 80 characters per line limit for a better reading.

- Using a naming convention for numbered opcodes starting with N following with
  X Y Z, e.g.: `egN_timeX_onccY`

- Don't use '<' and '>' in md files to avoid the parser to generate wrong html
  code, use '‹' and '›' instead.

## Content

### Opcode File Example

In case the opcode doesn't have any modulation and it has some associated
opcode like on_loccN / on_hiccN, then using `title` is the right choice.
Otherwise use `opcode_name`, so a modulation documentation file (a symlink to the
opcode it modulates in source code) will use the correct references.

<?prettify?>
<pre class="prettyprint">
---
layout: "sfz/opcode"
lang: "en"
title: "lovel / hivel"
---
(Here the auto-generated brief text description from syntax.yml db...)

This is just an example for an opcode extended description to be written in some
/opcodes/lovel.md markdown file.
This text is readable on any editor, with low or high resolutions.

## Examples

```
lovel=value1
hivel=value2
```

(Here the auto-generated description table from syntax.yml db...)
</pre>

<?prettify?>
<pre class="prettyprint">
---
layout: "sfz/opcode"
opcode_name: "volume"
---
...

## Examples

```
...
```

(auto-generated table ->) Modulations: volume_onccN ...

</pre>

## YAML Configuration Files

The main [_config.yml] configuration file is placed in the root of the source repo.
It is used by Jekyll to store its configuration options, but it can also be used
for user custom options as well.
Other configuration files are placed in the `_data` directory, used for other
website contexts, like translation strings, navigation menu, aside blocks,
and other SFZ related data files.

### Translation files

The `/_data/locale/` directory contains all files used for website
language translation subdivided by language codes as subdirectories.
Currently each language translation subdirectory contains 2 files:

- `layout.yml`: contains both the navigation menu links and the aside card blocks
	strings
- `translation.yml`: contains all the language related translation strings used
	by default in the website pages.

#### `layout.yml` navigation and cards section

The `navigation` section is used by the `_includes/navigation.html` layout page
to build the navigation menu. It recognizes the following variable structure:

- title: The menu title
- type:  The menu type, can be normal for simple links or dropdown for submenus,
         identified by an arrow down icon.
- url:   Normal links only, the URL of the link.
- pages: Submenus container. An empty item, using just a hyphen,
         creates a menu separator.

The `cards` section is used by the `_includes/cards.html` layout page to build
the aside [card] blocks on the right side of most of the website pages to place
various internal and external links.
It's very similar to the navigation one with few differences:

- title: The card header title
- icon_type: A Font Awesome icon type name, e.g. "github"
- icon_category: The category of the FA icon
  - fas: solid icon
  - fab: brand icon
- links: The contained card links.

### SFZ related YAML files

The `/_data/sfz/` directory contains all YAML files used for SFZ related data.

#### `syntax.yml`

The `headers` section is used by the `_includes/sfz/headers-table-generator.html`
to build `/headers/index.md` description tables:

- name: The header name
- version: The SFZ version (see below)

The `opcodes` section is used by different files as database information for all
known opcodes, including extension ones.

The data is accessible from the `site.data.sfz.syntax.opcodes` and
 `site.data.sfz.syntax.headers` Liquid variables.

There are various possible variables, which most are not mandatory, so if some
opcode doesn't includes a feature, it can be omitted, resulting in Liquid code as
`variable-name == nil`.

Currently possible values are:

- name: the opcode name.

- short_description: a brief opcode description used to describe all opcodes
  included in the related SFZ version/extension page.

- version: SFZ version or extension, one of:
  - SFZ v1
  - SFZ v2
  - ARIA
  - Cakewalk

- alias: if the opcode has some alias in other specification version.

- value:
  - type_name: Value type (string, integer, float etc.), `mandatory` for opcodes.
  - default:   An optional default value.
  - min:       An optional range minimum value.
  - max:       An optional range maximum value.
  - unit:      Value unit (seconds, decibels, cents etc.).

- modulation:
  - envelope: true (bool, without double quotes) if unspecified but present,
              otherwise the name of modulation (string).

  - lfo: same as for envelope.

  - midi_cc:
    - name: the ccN related opcode event name.
    - version: the opcode modulation SFZ version

For more details, check the file for additional variable options.


[Git SCM]:                 https://git-scm.com/
[GitHub]:                  https://github.com/sfzformat/sfzformat.github.io
[GitHub Pages Deployment]: https://docs.travis-ci.com/user/deployment/pages/
[Jekyll]:                  https://jekyllrb.com/
[Liquid]:                  https://shopify.github.io/liquid/
[Markdown]:                https://daringfireball.net/projects/markdown/syntax
[Travis-CI]:               https://travis-ci.com
[front matter]:            https://jekyllrb.com/docs/front-matter/
[syntax.yml]:              #syntaxyml
[_config.yml]:             https://jekyllrb.com/docs/configuration/
[card]:                    https://getbootstrap.com/docs/4.0/components/card/
