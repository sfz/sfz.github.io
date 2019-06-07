---
title: Website Development Reference
lang: en
---
## Introduction

This page has the purpose to document the SFZ Format project website and give
references and rules for maintainance.

## GitHub and Travis-CI

The webpage is hosted on [GitHub][] using [Git SCM][]
as content management, using 2 git repositories: source and master.
The source repository is used for the website source files written in [Markdown][]
format and [Liquid] language, which are used by [Jekyll][],
a static pages website generator created and used by GitHub for hosting
project websites.
The master repository is used to store the generated files that are built
externally by Travis Continuous Integration service.
[Travis-CI] was choosed instead GitHub Pages to enable the use of Jekyll custom
plugins required for our purposes, following their [GitHub Pages Deployment][]
documentation.

[Git SCM]: https://git-scm.com/
[GitHub]: https://github.com/sfzformat/sfzformat.github.io
[GitHub Pages Deployment]: https://docs.travis-ci.com/user/deployment/pages/
[Jekyll]: https://jekyllrb.com/
[Liquid]: https://shopify.github.io/liquid/
[Markdown]: https://daringfireball.net/projects/markdown/syntax
[Travis-CI]: https://travis-ci.com

## Rules

- Start any .md file with a 2 triple-dashed lines [front matter][],
  otherwise Jekyll will copy the original md file into the resulting `_site`
  directory.
  Opcode files should include a `layout: opcode` variable to specify the required
  layout to build the resulting html page.

- Using block code three back ticks even with a single line, inline code is used
  for opcode keywords highlights.

- Using spaces instead of tabs for indentation in pages, mainly on _config.yml
  to avoid issues / unwanted results.

- Using 80 characters per line limit for a better reading.

- Using a naming convention for numbered opcodes starting with N following with
  X Y Z, e.g.: `egN_timeX_onccY`

[front matter]: https://jekyllrb.com/docs/front-matter/

### Content

#### Opcode File Example

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

## Configurations

Other than the main [_config.yml][] file in the root of the source repo,
there are some others configuration files in the `_data` directory, used in
different contexts, some using the support of the `_layouts` files to keep
content data and UI layout code separated, building page structures like tables
from a common place.

[_config.yml]: https://jekyllrb.com/docs/configuration/

### `navigation.yml`

Used by the `_layouts/navigation.html` layout to build the navigation menu,
this file recognize the following variable structure:

- title: The menu title
- type:  The menu type, can be normal for simple links or dropdown for submenus,
         identified by an arrow down icon.
- url:   Normal links only, the URL of the link.
- pages: Submenus container. An empty item, using just a hyphen,
         creates a menu separator.

### `cards.yml`

Used by the `_layouts/cards.html` layout to build the [cards][] at the right
side of the pages. It's very similar to the navigation one with few differences:

- title: The card header title
- icon_type: A Font Awesome icon type name, e.g. "github"
- icon_category: The category of the FA icon
  - fas: solid icon
  - fab: brand icon
- links: The contained card links.

[cards]: https://getbootstrap.com/docs/4.0/components/card/

### `headers.yml`

Used by `_includes/sfz-tables-headers.html` to build `/opcodes/headers.md`
description tables:

- name: The header name
- version: The SFZ version, can be on of:
  - SFZ v1
  - SFZ v2
  - ARIA
  - LinuxSampler
- supported_by: List of players supporting the related header. Value is the name
  of the player, value represents a status.

### `opcodes.yml`

The file is accessible from the `site.data.opcodes` variable, which is accessed
mainly by the `_layouts/opcode.html` layout to build each opcode related page.

The file is subdivided by opcode name data variables, each including data
to describe the opcode structure.

There are various possible values, which most are not mandatory, so if some opcode
doesn't include a feature it can be omitted, resulting in code as
`variable == nil`.
Currently possible values are:

- version: SFZ version or extension (1, 2, aria and linuxsampler).

- type: Valid values are header and directive, opcode is implicit.
        Directives should not include any '#' and headers not including
        '<' or '>' in names.

- value:
  - type:    Value type (string, integer, float etc.), `mandatory` for opcodes.
  - default: An optional default value.
  - min:     An optional range minimum value.
  - max:     An optional range maximum value.
  - unit:    Value unit (seconds, decibels, cents etc.).<br><br>

- page: The page name where the opcode will be documented.
        It's the filename without the .md extension.

If omitted, the opcode name will be used instead.

- category:
  - name: Opcode category name. E.g.: instrument-settings.
  - type: Opcode category type. E.g.: voice-lifecycle.

Both `name` and `type` are lowercase separated by a hyphen, translated in pages
as e.g. "Instruments Settings" or "Voice Lifecycle".

- supported_by:
  - name:   Player name (ARIA, LinuxSampler) that supports the current opcode.
  - status: Some displayed status symbol (✓ or Partial).

If name or status is omitted is same as `status: X` and
`site.data.opcodes.<opcode-name>.supported_by.{name|status} == nil` in Liquid.

- modulation:
  - midi_cc:
    - same as above; type, default etc. and name: the ccN related opcode event name.
