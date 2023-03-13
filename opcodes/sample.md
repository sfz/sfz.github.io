---
layout: "sfz/opcode"
opcode_name: "sample"
---
Possibly the most important opcode, this is the one that tells the sampler which
sample file to actually play. This should include a relative file path from the
folder where the SFZ file is.

In most cases, there will be a sample opcode in every region of an SFZ file,
though not always.

If the sample file is not found, the player will ignore the whole region
contents as there's nothing to play. Long names and names with blank spaces and
other special characters (excepting the = character) are allowed in the sample
definition.

Getting the sample to play back at the correct pitch is not automatic, and
generally can't be done with the sample opcode alone, even if the file name
includes pitch information. Assuming that the tune or transpose opcodes are not
used to change the pitch, the sample will play unchanged in pitch when a note
equal to the [pitch_keycenter] opcode value is played.
If [pitch_keycenter] is not defined for the region, sample will
play unchanged on note 60 (middle C). If [pitch_keytrack]
is set to 0, the sample will also play unchanged in pitch,
regardless of how [pitch_keycenter] is set.
If the key opcode is used to define the range of the sample (instead of [lokey],
[hikey] and [pitch_keycenter]) the sample will also be unchanged in pitch.

## Formats

At the SFZ1 specification level, the supported sample formats are:
+ WAV of any sample rate
+ Ogg Vorbis compressed samples

For SFZ2, the Cakewalk book specifies the following sample types in addiction of
the above:
+ AIFF of any sample rate
+ [FLAC] support is not specified as mandatory, though FLAC was supported by
  Cakewalk Session Drummer, and is supported by ARIA

See also [Features] section in the home page.

WAV is usually the first choice, or perhaps AIFF when using macOS.
FLAC is the second choice, as it is [lossless] compression audio is always preferable,
though it needs to be decoded which can cause slower performance compared to WAV.
Other compressed formats can be used for test cases or situations where keeping
the file size small is more important than audio quality.

See also the table of supported sample [formats] by some engines for more details.

## Examples

```
sample=A3.wav
sample=..\Samples\close\c4_pp_rr3.wav
```

Each engine can also support custom oscillators. For example, ARIA supports
using this opcode for some basic synthesized sound waves such as:

```
sample=*sine
sample=*saw
sample=*square
sample=*triangle
sample=*tri
sample=*noise
sample=*silence
```

Tri is an alias for triangle. For cases where we don't want to actually play
a sample but want a region to exist and be played
(for example, to mute other sounds when using [group] and
[off_by], the silence value can be very convenient).

Note that in this case the `*` is a real character and not a wildcard.


[group]:           group
[hikey]:           hikey
[lokey]:           lokey
[off_by]:          off_by
[pitch_keycenter]: pitch_keycenter
[pitch_keytrack]:  pitch_keytrack
[formats]:  {{ '/software/engines/' | relative_url }}
[Features]: {{ '/#features' | relative_url }}
[FLAC]:     https://en.wikipedia.org/wiki/FLAC
[lossless]: https://en.wikipedia.org/wiki/Lossless_compression
