---
title: Home
no_title_header: true
---
### Welcome to SFZFormat.com!

<div
  markdown="1"
  class="h-100 p-5 mb-3 bg-body-tertiary border rounded-3"
>

This is the main reference point for anyone who wants to create virtual musical
instruments using the SFZ format.

The SFZ format is a file format to define how a collection of samples are
arranged for performance. The goal behind the SFZ format is to provide a free,
simple, minimalistic and expandable format to arrange, distribute and use audio
samples with the highest possible quality and the highest possible performance
flexibility. Soundware, software and hardware developers can create, use and
distribute the SFZ format files for free, for either free or commercial applications.

</div>

### What SFZ is not

To clarify, the term SFZ as used on this site does not mean a sforzando dynamic marking,
and it also is not the same thing as a soundfont. Soundfonts are a completely different
file format which includes both the samples and the definitions of sample behavior in the
same binary file, while SFZ is a file format which only defines the behavior of musical
instruments and does not include the sample content. SF2 may look a bit like SFZ visually,
but that's a coincidence.

### Features

- A .sfz definition file is just a text file. Consequently,
  it can be created by using any text editor.
- Samples of any bit depth (8/16/24/32-bit)
  and sample rate (44.1 kHz, 48 kHz, 384 kHz etc.), mono or stereo.
- Compressed and uncompressed sample formats can both be used within the same instrument.
- Loops embedded in sample files or configured in the SFZ.
- Velocity layers, round robins, keyboard splits and layers.
- Sample playback based on MIDI controllers (note on, note off,
  continuous controllers, pitch bend, channel - and polyphonic aftertouch,
  keyboard switches) and internal generators (random, sequence counters).
- Unidirectional and bidirectional exclusive regions (mute groups).
- Release trigger regions with release trigger attenuation control.
- Crossfade layer controls.
- Ability to distinguish legato notes from first notes.
- Envelope and LFO modulation sources with possible targets including volume,
  pitch, filter cutoff and more.

### Requirements

To make use of the SFZ format requires three things:

- [Samples]
- [SFZ player]
- [SFZ file]

which tells the player how to use the samples. The SFZ file itself can be created
using any text editor, though for more complex cases with hundreds or thousands
of samples, additional tools can make this easier - some people use spreadsheets,
and there are also dedicated [SFZ creation tools].

Here's a [basic SFZ file] you can copy to start your own.

### Making Instruments

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


[ARIA / Sforzando]:      /opcodes/?v=aria
[basic SFZ file]:        /tutorials/basic_sfz_file
[Brush stirs]:           /tutorials/brush_stirs
[Cymbal muting]:         /tutorials/cymbal_muting
[Drum basics]:           /tutorials/drum_basics
[list of SFZ 1 opcodes]: /opcodes/?v=1
[list of SFZ headers]:   /headers
[SFZ creation tools]:    /software/tools
[Samples]:               /opcodes/sample
[SFZ file]:              /tutorials/basic_sfz_file
[SFZ player]:            /software/players
[starting here]:         /opcodes/?v=2
[Sustained note basics]: /tutorials/sustained_note_basics
[Legato]:                /tutorials/legato
[Vibrato]:               /tutorials/vibrato
