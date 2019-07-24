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

[Git SCM]: https://git-scm.com/
[GitHub]: https://github.com/sfzformat/sfzformat.github.io
[GitHub Pages Deployment]: https://docs.travis-ci.com/user/deployment/pages/
[Jekyll]: https://jekyllrb.com/
[Liquid]: https://shopify.github.io/liquid/
[Markdown]: https://daringfireball.net/projects/markdown/syntax
[Travis-CI]: https://travis-ci.com

## Rules

- Start any .md file with a 2 triple-dashed lines [front matter],
  otherwise Jekyll will copy the original md file into the resulting `_site`
  directory.
  Opcode files should include a `layout: opcode` variable to specify the required
  layout to build the resulting html page (see the example below).

- Using block code three back ticks even with a single line, inline code is used
  for opcode keywords highlights.

- Using spaces instead of tabs for indentation in pages, mainly on _config.yml
  to avoid issues / unwanted results.

- Using 80 characters per line limit for a better reading.

- Using a naming convention for numbered opcodes starting with N following with
  X Y Z, e.g.: `egN_timeX_onccY`

[front matter]: https://jekyllrb.com/docs/front-matter/

## Content

### Opcode File Example

<?prettify?>
<pre class="prettyprint">
---
layout: opcode
---
This is just an example for an opcode description to be written in some
/opcodes/opcodename.md markdown file.
This text is readable on any editor, with low or high resolutions.

##### Examples

```
opcode_name=value1

opcode_name=value2
```
</pre>

## YAML Configuration Files

The main [_config.yml] configuration file is placed in the root of the source repo.
It is used by Jekyll to store its configuration options, but it can also be used
for user custom options as well.
Other configuration files are placed in the `_data` directory, used for other
website contexts, like translation strings, navigation menu, aside blocks,
and other Sfz related data files.

[_config.yml]: https://jekyllrb.com/docs/configuration/

### Translation files

The `/_data/i18n/` directory contains all YAML files used for website
language translation:

- `config.yml`: At the moment it contains only the default language.
- `locales` directory: contains locale language related strings.

Currently each language translation directory contains 2 files:

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

[card]: https://getbootstrap.com/docs/4.0/components/card/

### Sfz related YAML files

The `/_data/sfz/` directory contains all YAML files used for Sfz related data.

#### `syntax.yml`

The `headers` section is used by the `_includes/sfz/headers-table-generator.html`
to build `/opcodes/headers.md` description tables:

- name: The header name
- version: The SFZ version, can be one of:
  - SFZ v1
  - SFZ v2
  - ARIA
  - LinuxSampler

The `opcodes` section is used by different files as database information for all
known opcodes, including extension ones.

The data is accessible from the `site.data.sfz.syntax.opcodes` and
 `site.data.sfz.syntax.headers` Liquid variables.

There are various possible variables, which most are not mandatory, so if some
opcode doesn't includes a feature, it can be omitted, resulting in Liquid code as
`variable-name == nil`.

Currently possible values are:

- version: SFZ version or extension (same as for headers).

- value:
  - type_name: Value type (string, integer, float etc.), `mandatory` for opcodes.
  - default:   An optional default value.
  - min:       An optional range minimum value.
  - max:       An optional range maximum value.
  - unit:      Value unit (seconds, decibels, cents etc.).<br><br>

- page: The page name where the opcode will be documented.
        It's the filename without the .md extension.
        If omitted, the opcode name will be used instead.

- modulation:
  - midi_cc:
    - name: the ccN related opcode event name.
