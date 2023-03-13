---
title: "SFZ Players"
app_categories: ['Players', 'Import from SFZ']
show_category_titles: true
---
There are several SFZ players, which are used to play samples as defined in SFZ
files.

Sforzando currently offers the most complete SFZ standard support, including
[ARIA extensions], but SFZ files which only use the [SFZ v1] or [SFZ v2] standard
will work with multiple SFZ players.

We use "Free and Open Source" (FOSS) as defined by the [OSI]
as "software to be freely used, modified, and shared."

## Supported Opcodes

Below are the known links to the various lists of supported opcodes:\
[BassMIDI], [Bitwig], [Equator 2], [HISE], [LinuxSampler], [liquidsfz],
[OpenMPT], [sfizz] and [zerberus] (MuseScore <= v3.6.2).

{% include sfz/software-table-generator.liquid %}
{%-comment-%} Tables data is at /_data/sfz/software.yml {%-endcomment-%}

## No longer available

- Cakewalk [sfz] (backup on web.archive.org)
- Alchemy (Camel Audio was acquired by Apple,
  and the current incarnation of Alchemy no longer supports SFZ.)


[ARIA extensions]: {{ '/opcodes/?v=aria' | relative_url }}
[SFZ v1]:          {{ '/opcodes/?v=1' | relative_url }}
[SFZ v2]:          {{ '/opcodes/?v=2' | relative_url }}
[OSI]: https://opensource.org/licenses
[sfz]: https://web.archive.org/web/20071011005744/http://www.rgcaudio.com/sfz.htm
[BassMIDI]:     https://www.un4seen.com/doc/#bassmidi/BASS_MIDI_FontInit.html
[Bitwig]:       https://github.com/sfzformat/sfzformat.github.io/pull/48#issuecomment-731244523
[Equator 2]:    https://github.com/sfzformat/sfzformat.github.io/wiki/Player-Equator2
[HISE]:         https://github.com/christophhart/HISE/blob/master/hi_sampler/sampler/SfzImporter.h#L47
[LinuxSampler]: http://linuxsampler.org/sfz/
[liquidsfz]:    https://github.com/swesterfeld/liquidsfz/blob/master/OPCODES.md
[OpenMPT]:      https://wiki.openmpt.org/Manual:_SFZ_Implementation
[sfizz]:        https://sfz.tools/sfizz/development/status/opcodes
[zerberus]:     https://github.com/musescore/MuseScore/blob/3.6.2/audio/midi/zerberus/README
