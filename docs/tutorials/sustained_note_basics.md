---
title: Sustained note basics
---
We've covered the basic opcodes required to map simple drum instruments on
[another page][1], and here we are going to apply that
knowledge to pitched instruments, plus add more opcodes. Let's say we want to
sample a folk flute whose lowest note is a D. If the lowest five notes are
D, E, F#, G and A, and there is one sample available for each note, they could
be mapped like this:

```sfz
<region>key=50 sample=d4.wav
<region>key=52 sample=e4.wav
<region>key=54 sample=f#4.wav
<region>key=55 sample=g4.wav
<region>key=57 sample=a4.wav
```

This would work well enough to make a sound when a MIDI note corresponding to
one of the sampled pitches is played. However, playing notes inbetween
the D and E, or E and F#, would mean no sound. We can "stretch" one of the
neighboring notes to cover that D# and that F using the
[lokey / hikey] and [pitch_keycenter] opcodes instead of key.
If a sample does not need to cover multiple notes, it can still use key. Whether
to use the D or E sample to cover the D# in our example is a judgment call -
which sounds better?

```sfz
<region>lokey=50 hikey=51 pitch_keycenter=50 sample=d4.wav
<region>lokey=52 hikey=53 pitch_keycenter=52 sample=e4.wav
<region>key=54 sample=f#4.wav
<region>lokey=55 hikey=55 pitch_keycenter=56 sample=g4.wav
<region>key=57 sample=a4.wav
```

The samples will play as long as a note is held, but when the note is released,
they will end suddenly, which is probably not realistic for a flute sound, or
indeed most other instruments. We'll need to apply a volume envelope with a
release time set, which can be applied to all regions.
The [ampeg_release] opcode accomplishes this.

```sfz
<global>ampeg_release=0.3

<region>lokey=50 hikey=51 pitch_keycenter=50 sample=d4.wav
<region>lokey=52 hikey=53 pitch_keycenter=52 sample=e4.wav
<region>key=54 sample=f#4.wav
<region>key=55 sample=g4.wav
```

If we have samples at various dynamics, such as quiet and loud, we could use
note velocity to choose which sample is played - however, while this makes
perfect sense for drum hits or piano notes, with instruments such as flute or
violin, it's possible for the player to vary the dynamic level while a note is
being sustained. This can be simulated with the
[xfin_loccN / xfin_hiccN] and [xfout_loccN / xfout_hiccN] opcodes. Using only the
D4 and E4 samples as an example, and controlling the dynamics with CC1 (mod wheel).
The [amp_veltrack] opcode is set to 0, so that velocity does not affect volume.

```sfz
<global>ampeg_release=0.3 amp_veltrack=0

<group>lokey=50 hikey=51 pitch_keycenter=50
<region>sample=d4_p.wav xfin_locc1=0 xfin_hicc1=42 xfout_locc1=43 xfout_hicc1=85
<region>sample=d4_mf.wav xfin_locc1=43 xfin_hicc1=85 xfout_locc1=86 xfout_hicc1=127
<region>sample=d4_f.wav xfin_locc1=86 xfin_hicc1=127
<group>lokey=52 hikey=53 pitch_keycenter=52
<region>sample=e4_p.wav xfin_locc1=0 xfin_hicc1=42 xfout_locc1=43 xfout_hicc1=85
<region>sample=e4_mf.wav xfin_locc1=43 xfin_hicc1=85 xfout_locc1=86 xfout_hicc1=127
<region>sample=e4_f.wav xfin_locc1=86 xfin_hicc1=127
```

Now, CC1 would first fade in the quiet sample when it was between 0 and 42.
From 43 to 85, the quiet sample is faded out and the medium sample faded in.
From 86 to the max value of 127, the medium sample is faded out while the loud
sample fades in. If we have multiple techniques or articulation sampled, for
example regular sustains and fluttertongue sustains, we need a way to switch
between them. Each could be its own independent and complete SFZ file, and we
could just load the desired file into the player, but for convenience,
especially in live performance, it's good to load both at once and have a way of
switching between them. One way is [loccN / hiccN] where which sample is triggered
for a particular note depends on the value of a MIDI CC - let's use MIDI CC 11.
Notice that the fluttertongue samples in this example have fewer dynamic layers
than the main sustain samples - it's common for the "core" articulations of an
instrument to be sampled in more detail, and the SFZ format is flexible enough
to allow this, or even allow different amounts of dynamic layers or round robins
for different notes within the same articulation.

```sfz
<global>ampeg_release=0.3 amp_veltrack=0

<group>lokey=50 hikey=51 pitch_keycenter=50 hicc11=63
<region>sample=d4_p.wav xfin_locc1=0 xfin_hicc1=42 xfout_locc1=43 xfout_hicc1=85
<region>sample=d4_mf.wav xfin_locc1=43 xfin_hicc1=85 xfout_locc1=86 xfout_hicc1=127
<region>sample=d4_f.wav xfin_locc1=86 xfin_hicc1=127
<group>lokey=52 hikey=53 pitch_keycenter=52 hicc11=63
<region>sample=e4_p.wav xfin_locc1=0 xfin_hicc1=42 xfout_locc1=43 xfout_hicc1=85
<region>sample=e4_mf.wav xfin_locc1=43 xfin_hicc1=85 xfout_locc1=86 xfout_hicc1=127
<region>sample=e4_f.wav xfin_locc1=86 xfin_hicc1=127
<group>lokey=50 hikey=51 pitch_keycenter=50 locc11=64
<region>sample=d4_ft_p.wav xfin_locc1=0 xfin_hicc1=63 xfout_locc1=64 xfout_hicc1=127
<region>sample=d4_ft_f.wav xfin_locc1=64 xfin_hicc1=127
<group>lokey=52 hikey=53 pitch_keycenter=52 locc11=64
<region>sample=e4_ft_p.wav xfin_locc1=0 xfin_hicc1=63 xfout_locc1=64 xfout_hicc1=127
<region>sample=e4_ft_f.wav xfin_locc1=64 xfin_hicc1=127
```

Another, probably more common, way is to use keyswitches. If we define the
keyswitch range as the C and C# below our lowest D using
[sw_lokey / sw_hikey], we can then use [sw_last] to select articulations.

```sfz
<global>ampeg_release=0.3 amp_veltrack=0 sw_lokey=48 sw_hikey=49

<group>lokey=50 hikey=51 pitch_keycenter=50 sw_last=48
<region>sample=d4_p.wav xfin_locc1=0 xfin_hicc1=42 xfout_locc1=43 xfout_hicc1=85
<region>sample=d4_mf.wav xfin_locc1=43 xfin_hicc1=85 xfout_locc1=86 xfout_hicc1=127
<region>sample=d4_f.wav xfin_locc1=86 xfin_hicc1=127
<group>lokey=52 hikey=53 pitch_keycenter=52 sw_last=48
<region>sample=e4_p.wav xfin_locc1=0 xfin_hicc1=42 xfout_locc1=43 xfout_hicc1=85
<region>sample=e4_mf.wav xfin_locc1=43 xfin_hicc1=85 xfout_locc1=86 xfout_hicc1=127
<region>sample=e4_f.wav xfin_locc1=86 xfin_hicc1=127
<group>lokey=50 hikey=51 pitch_keycenter=50 sw_last=49
<region>sample=d4_ft_p.wav xfin_locc1=0 xfin_hicc1=63 xfout_locc1=64 xfout_hicc1=127
<region>sample=d4_ft_f.wav xfin_locc1=64 xfin_hicc1=127
<group>lokey=52 hikey=53 pitch_keycenter=52 sw_last=49
<region>sample=e4_ft_p.wav xfin_locc1=0 xfin_hicc1=63 xfout_locc1=64 xfout_hicc1=127
<region>sample=e4_ft_f.wav xfin_locc1=64 xfin_hicc1=127
```

There are other possibilities - for example, since velocity is not needed to
control dynamics, we could use that to select articulations using
[lovel / hivel], for example. However, it' is quite common,
especially with string instruments, to use a MIDI CC to control the dynamics of
sustained articulations, and velocity to control the dynamics of short
articulations such as staccato. In those cases, the short articulations could
use amp_veltrack set to 100 instead of 0, and generally be mapped in the same
way as [the drums we've discussed before][1]. The flute is
a monophonic instrument in reality - you can't play chords on it, while you can
using our SFZ here. For more realism, playing a note on this flute should mute
any previously playing notes. To make an instrument which can only play one note
at a time, the [group] and [off_by] opcodes can be used.
Although these can be used in more complex scenarios, for a
monophonic instrument with no multiple microphone positions sampled, it's enough
to put all samples in the same group, and have that group muted whenever a new
note from that group is played.

```sfz
<global>ampeg_release=0.3 amp_veltrack=0 sw_lokey=48 sw_hikey=49 group=1 off_by=1

<group>lokey=50 hikey=51 pitch_keycenter=50 sw_last=48
<region>sample=d4_p.wav xfin_locc1=0 xfin_hicc1=42 xfout_locc1=43 xfout_hicc1=85
<region>sample=d4_mf.wav xfin_locc1=43 xfin_hicc1=85 xfout_locc1=86 xfout_hicc1=127
<region>sample=d4_f.wav xfin_locc1=86 xfin_hicc1=127
<group>lokey=52 hikey=53 pitch_keycenter=52 sw_last=48
<region>sample=e4_p.wav xfin_locc1=0 xfin_hicc1=42 xfout_locc1=43 xfout_hicc1=85
<region>sample=e4_mf.wav xfin_locc1=43 xfin_hicc1=85 xfout_locc1=86 xfout_hicc1=127
<region>sample=e4_f.wav xfin_locc1=86 xfin_hicc1=127
<group>lokey=50 hikey=51 pitch_keycenter=50 sw_last=49
<region>sample=d4_ft_p.wav xfin_locc1=0 xfin_hicc1=63 xfout_locc1=64 xfout_hicc1=127
<region>sample=d4_ft_f.wav xfin_locc1=64 xfin_hicc1=127
<group>lokey=52 hikey=53 pitch_keycenter=52 sw_last=49
<region>sample=e4_ft_p.wav xfin_locc1=0 xfin_hicc1=63 xfout_locc1=64 xfout_hicc1=127
<region>sample=e4_ft_f.wav xfin_locc1=64 xfin_hicc1=127
```

However, this cuts off the note suddenly, creating a gap before the next note
can reach full volume. That problem can be fixed by setting [off_mode]
to normal, which will make the notes being muted fade out gradually over the
duration previously specified with the ampeg_release opcode.

```sfz
<global>ampeg_release=0.3 amp_veltrack=0 sw_lokey=48 sw_hikey=49

group=1 off_by=1 off_mode=normal
<group>lokey=50 hikey=51 pitch_keycenter=50 sw_last=48
<region>sample=d4_p.wav xfin_locc1=0 xfin_hicc1=42 xfout_locc1=43 xfout_hicc1=85
<region>sample=d4_mf.wav xfin_locc1=43 xfin_hicc1=85 xfout_locc1=86 xfout_hicc1=127
<region>sample=d4_f.wav xfin_locc1=86 xfin_hicc1=127
<group>lokey=52 hikey=53 pitch_keycenter=52 sw_last=48
<region>sample=e4_p.wav xfin_locc1=0 xfin_hicc1=42 xfout_locc1=43 xfout_hicc1=85
<region>sample=e4_mf.wav xfin_locc1=43 xfin_hicc1=85 xfout_locc1=86 xfout_hicc1=127
<region>sample=e4_f.wav xfin_locc1=86 xfin_hicc1=127
<group>lokey=50 hikey=51 pitch_keycenter=50 sw_last=49
<region>sample=d4_ft_p.wav xfin_locc1=0 xfin_hicc1=63 xfout_locc1=64 xfout_hicc1=127
<region>sample=d4_ft_f.wav xfin_locc1=64 xfin_hicc1=127
<group>lokey=52 hikey=53 pitch_keycenter=52 sw_last=49
<region>sample=e4_ft_p.wav xfin_locc1=0 xfin_hicc1=63 xfout_locc1=64 xfout_hicc1=127
<region>sample=e4_ft_f.wav xfin_locc1=64 xfin_hicc1=127
```

This is enough to make a basic monophonic wind instrument, vocal, or other
monophonic instrument. There are more possibilities - better legato, vibrato
emulation, multiple microphone positions etc. - which we'll describe later in
another part of this guide. Together with the information covered in [drum basics][1]
earlier, this should also be enough to make a basic sampled piano or guitar.


[1]:                         drum_basics.md
[amp_veltrack]:              ../opcodes/amp_veltrack.md
[ampeg_release]:             ../opcodes/ampeg_release.md
[group]:                     ../opcodes/group.md
[loccN / hiccN]:             ../opcodes/loccN.md
[lokey / hikey]:             ../opcodes/lokey.md
[lovel / hivel]:             ../opcodes/lovel.md
[off_by]:                    ../opcodes/off_by.md
[off_mode]:                  ../opcodes/off_mode.md
[pitch_keycenter]:           ../opcodes/pitch_keycenter.md
[sw_last]:                   ../opcodes/sw_last.md
[sw_lokey / sw_hikey]:       ../opcodes/sw_lokey.md
[xfin_loccN / xfin_hiccN]:   ../opcodes/xfin_loccN.md
[xfout_loccN / xfout_hiccN]: ../opcodes/xfout_loccN.md
