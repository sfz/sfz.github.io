---
title: Home
layout: home
---
### Welcome to SFZFormat.com!

<div markdown="1" class="jumbotron p-4 mb-3">

This is the main reference point for anyone who wants to create virtual musical
instruments using the SFZ format. Currently the SFZ 2 opcodes and ARIA extensions
are documented though some require more detail, and SFZ 2 opcodes not supported by
ARIA still need to be added. There's enough information to make complex SFZ
instruments already, but we'll continue to add more.

To make use of the SFZ format requires three things:

- Samples
- [SFZ player]
- [SFZ file]

which tells the player how to use the samples. The SFZ file itself can be created
using any text editor, though for more complex cases with hundreds or thousands
of samples, additional tools can make this easier - some people use spreadsheets,
and there are also dedicated [SFZ creation tools].

The SFZ format is a file format to define how a collection of samples are
arranged for performance. The goal behind the SFZ format is to provide a free,
simple, minimalistic and expandable format to arrange, distribute and use audio
samples with the highest possible quality and the highest possible performance
flexibility. Soundware, software and hardware developers can create, use and
distribute the SFZ format files for free, for either free or commercial applications.

- Here's a [basic SFZ file] you can copy to start your own
- Here is the [list of SFZ headers]
- The [list of SFZ 1 opcodes] can be found here.
- You can browse the many SFZ 2 opcodes [starting here].
- A few opcodes have been added to [ARIA / Sforzando] for more flexibility
</div>

### What SFZ is not

To clarify, the term SFZ as used on this site does not mean a sforzando dynamic marking,
and it also is not the same thing as a soundfont. Soundfonts are a completely different
file format which includes both the samples and the definitions of sample behavior in the
same binary file, while SFZ is a file format which only defines the behavior of musical
instruments and does not include the sample content. SF2 may look a bit like SFZ visually,
but that's a coincidence.

### Making Instruments

<div markdown="1" class="jumbotron p-4 mb-3">

Text guides on how to make a simple instrument, covering the essential opcodes

- [Drum basics] - covers `global`, `group` and
  `region` headers, `sample`, `key`, `lovel` / `hivel`, `amp_velcurve_N`,
  `seq_length`, `seq_position` and `lorand` / `hirand`.

- [Sustained note basics] - using a flute
  as an example.
  Adds `lokey` / `hikey`, `pitch_keycenter`, `xfin` / `xfout`, `locc` / `hicc`,
  `keyswitching`, `group`, `off_by` and `off_mode`.

Some more advanced topics

- [Vibrato] - typical string vibrato, humanized vibrato,
  asymmetrical vibrato, and even filter wobble.

- [Legato] - simulated legato and portamento as well as
  true sampled legato.

- [Cymbal muting] - using `group`, `off_by`, `off_mode`
  and `polyphony` to make hi-hat and cymbal notes mute previous notes
  in a musically useful way.

- [Brush stirs] - two different approaches to brushed
	drum techniques which produce a continuous sound rather than a hit.
</div>

[ARIA / Sforzando]:      /opcodes/?v=aria
[basic SFZ file]:        /tutorials/basic_sfz_file
[Brush stirs]:           /tutorials/brush_stirs
[Cymbal muting]:         /tutorials/cymbal_muting
[Drum basics]:           /tutorials/drum_basics
[list of SFZ 1 opcodes]: /opcodes/?v=1
[list of SFZ headers]:   /headers
[SFZ creation tools]:    /software/tools
[SFZ file]:              /tutorials/basic_sfz_file
[SFZ player]:            /software/players
[starting here]:         /opcodes/?v=2
[Sustained note basics]: /tutorials/sustained_note_basics
[Legato]:                /tutorials/legato
[Vibrato]:               /tutorials/vibrato
