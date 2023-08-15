---
title: Strums
---
Strumming can be difficult to produce with samples. SFZ does have some capabilities to make it a little easier.

Creating a strum is basically triggering several single-string samples with some of them delayed slightly.
Similar but even simpler is a drum flam, which is two drum hits in rapid succession.
```
<region>
sample=snare1.wav
<region>
delay=0.03
sample=snare2.wav
```
## Basic Guitar Chord Strum
Here is how an open E major chord could be triggered with a single key:
```
<group>
key=40
<region>
sample=e4.wav
<region>
delay=0.02
sample=b4.wav
<region>
delay=0.04
sample=e5.wav
<region>
delay=0.06
sample=g#4.wav
<region>
delay=0.08
sample=b4.wav
<region>
delay=0.1
sample=e6.wav
```
This is a downward strum - physically the lower strings on a guitar are located higher, so downward strums begin with the lowest
notes. An upstroke would have the same samples but with the delays in reversed order, so it starts with the higest notes.
```
<group>
key=40
<region>
sample=e4.wav
delay=0.1
<region>
delay=0.08
sample=b4.wav
<region>
delay=0.06
sample=e5.wav
<region>
delay=0.04
sample=g#4.wav
<region>
delay=0.02
sample=b4.wav
<region>
sample=e6.wav
```
## Different Chord Types
An E minor chord would be similar, only with a G instead of the G#. Leaving out the upward strum:
```
<global>
sw_lokey=36
sw_hikey=37
sw_default=36

<group>
key=40
<region>
sample=e4.wav
<region>
delay=0.02
sample=b4.wav
<region>
delay=0.04
sample=e5.wav
//Fourth string is different for major versus minor chords.
<region>
sw_last=36
sw_label=Major
delay=0.06
sample=g#4.wav
<region>
sw_last=37
sw_label=Minor
delay=0.06
sample=g4.wav
<region>
delay=0.08
sample=b4.wav
<region>
delay=0.1
sample=e6.wav
```
Of course for non-barre chords, there could be differences in voicings for more than one string, but the principle
remains the same.

The free Emilyguitar instrument located at https://github.com/sfzinstruments/karoryfer.emilyguitar includes a simple
strum patch with keyswitchable power chords, major barre chords and minor barre chords. It has downward strums only
with a very short strum time. However, it is not well-organized and not at all commented, its patches being just
output from sfzed. Somewhat more organized and including power chords (which are simply the lowest three strings of
the barre chord), our E chord might look like this:
```
<global>
sw_lokey=36
sw_hikey=38
sw_default=36

<group>
key=40
//Lowest three strings are the same regardless of keyswitch
<region>
sample=e4.wav
<region>
delay=0.02
sample=b4.wav
<region>
delay=0.04
sample=e5.wav

//In order to display the keyswitch label for power chords,
//we need a placeholder
<group>
key=40
sw_last=37
sw_label=Power
<region>
sample=*silence
ampeg_decay=0
ampeg_sustain=0
ampeg_release=0

//Fourth string is different for major versus minor chords
//It is not triggered at all for power chords
<group>
key=40
<region>
sw_last=36
sw_label=Major
delay=0.06
sample=g#4.wav
<region>
sw_last=37
sw_label=Minor
delay=0.06
sample=g4.wav

//Top two strings are not triggered for power chords
//Duplicated for major and minor keyswitches
<group>
key=40
sw_last=36
sw_label=Major
<region>
delay=0.08
sample=b4.wav
<region>
delay=0.1
sample=e6.wav
<group>
key=40
sw_last=37
sw_label=Minor
<region>
delay=0.08
sample=b4.wav
<region>
delay=0.1
sample=e6.wav
```
For upwards strums, simply reversing the order of delay values would result in the power chords being
delayed as the e5.wav region would be the first sample triggered, and it would have 0.006 seconds of
delay. This would not be good. Therefore, if we want to add upwards strums on lower keyswitches, we
might end up with something like this:
```
<global>
sw_lokey=33
sw_hikey=38
sw_default=36 //Default is major chord, downward strum

//Lower three strings for barre chords
<group>
key=40
sw_last=35
sw_label=Major Up
<region>
sample=e4.wav
delay=0.1
<region>
delay=0.08
sample=b4.wav
<region>
delay=0.06
sample=e5.wav
<group>
key=40
sw_last=34
sw_label=Minor Up
<region>
sample=e4.wav
delay=0.1
<region>
delay=0.08
sample=b4.wav
<region>
delay=0.06
sample=e5.wav

//Lower three strings for power chords
<group>
key=40
sw_last=33
sw_label=Power Up
<region>
sample=e4.wav
delay=0.04
<region>
delay=0.02
sample=b4.wav
<region>
sample=e5.wav

//Fourth string is different for major versus minor chords
//It is not triggered at all for power chords
<group>
key=40
<region>
sw_last=35
sw_label=Major Up
delay=0.004
sample=g#4.wav
<region>
sw_last=34
sw_label=Minor Up
delay=0.004
sample=g4.wav

//Top two strings are not triggered for power chords
//Duplicated for major and minor keyswitches
<group>
key=40
sw_last=35
sw_label=Major Up
<region>
delay=0.02
sample=b4.wav
<region>
sample=e6.wav
<group>
key=40
sw_last=34
sw_label=Minor up
<region>
delay=0.02
sample=b4.wav
<region>
sample=e6.wav
```
Depending on needs, this might not be worth implementing, as duplicaton of regions adds to the time
required for many SFZ players (certainly ARIA/sforzando) to parse and open an instrument. It is,
however, certainly possible.
## Adjusting Time
The above strums all have a fixed duration. Adjusting strum time is easily done by replacing the
fixed delay with a modulated one. Going back to the simple E major example for brevity's sake:
```
<group>
key=40
<region>
sample=e4.wav
<region>
delay_cc1=0.2
sample=b4.wav
<region>
delay_cc1=0.4
sample=e5.wav
<region>
delay_cc1=0.6
sample=g#4.wav
<region>
delay_cc1=0.8
sample=b4.wav
<region>
delay_cc1=1
sample=e6.wav
```
It would also be easy to add a small random delay to each voice. However, because delay is not an
available target for the var modulator, it is not possible to have an adjustable amount of
randomization, or make the random amount smaller when the CC adjusting the non-random delay is low.
This means adding a simple delay_random to each voice would create the risk of "earlier" notes
actually sounding after "later" ones when the non-random delay is close to zero. However, making
the delay partially fixed and partially adjustable avoids this.
```
<group>
key=40
<region>
sample=e4.wav
<region>
delay=0.01
delay_cc1=0.2
delay_random=0.01
sample=b4.wav
<region>
delay=0.02
delay_cc1=0.4
delay_random=0.01
sample=e5.wav
<region>
delay=0.03
delay_cc1=0.6
delay_random=0.01
sample=g#4.wav
<region>
delay=0.04
delay_cc1=0.8
delay_random=0.01
sample=b4.wav
<region>
delay=0.05
delay_cc1=1
delay_random=0.01
sample=e6.wav
```
## Ringing And Muting
With the above examples, the samples will play until a note-off message, then follow the usual amp
envelope release. In reality, the strings will often ring until the string is hit again, and it
can be more convenient to have the samples always play in their entirety unless muted:
```
<global>
loop_mode=one_shot
<group>
key=40
<region>
sample=e4.wav
group=6
off_by=6
<region>
delay_cc1=0.2
sample=b4.wav
group=5
off_by=5
<region>
delay_cc1=0.4
sample=e5.wav
group=4
off_by=4
<region>
delay_cc1=0.6
sample=g#4.wav
group=3
off_by=3
<region>
delay_cc1=0.8
sample=b4.wav
group=2
off_by=2
<region>
delay_cc1=1
sample=e6.wav
group=1
off_by=1
```
Note that a new strum will mute all strings, without waiting for their delay for that specific string to be completed.
There is currently elegant solution known for this. Using a longer off time or triggering a release sample could be 
possible workarounds to fill the sonic gap, though. On the positive side, a partial strum that does not hit all the
strings would let the other strings keep ringing.

If one shot mode is used, it's probably also useful to allow for quickly muting all strings when desired. That can be
done with a placeholder region for each string, and combining those regions on another key, here one above the
octave of the strums.
```
<group>
key=60
ampeg_sustain=0
ampeg_release=0
<region>
sample=*silence
group=6
off_by=6
<region>
sample=*silence
group=5
off_by=5
<region>
sample=*silence
group=4
off_by=4
<region>
sample=*silence
group=3
off_by=3
<region>
sample=*silence
group=2
off_by=2
<region>
sample=*silence
group=1
off_by=1
```
## Harp Glissandi
Harp glissandi could be set up very similarly to a guitar strum, only with potentially a lot more notes.
For simplicty's sake, let's consider just one octave. Speed is still controlled by CC1, and MIDI note
24 will trigger an upward glissando starting with the C4 note.
```
<group>
key=24
<region>
sample=c4.wav
<region>
sample=d4.wav
delay_cc1=0.1
<region>
sample=e4.wav
delay_cc1=0.2
<region>
sample=f4.wav
delay_cc1=0.3
<region>
sample=g4.wav
delay_cc1=0.4
<region>
sample=a4.wav
delay_cc1=0.5
<region>
sample=b4.wav
delay_cc1=0.6
<region>
sample=c5.wav
delay_cc1=0.7
```
In order to make this more usable, we can add another control which will determine for how many notes
the gliss keeps going before it stops. Let's use CC4.
```
<group>
key=24
//First three notes are not affected by CC4, and are always played
<region>
sample=c4.wav
<region>
sample=d4.wav
delay_cc1=0.1
<region>
sample=e4.wav
delay_cc1=0.2
<region>
sample=f4.wav
delay_cc1=0.3
locc4=1
<region>
sample=g4.wav
delay_cc1=0.4
locc4=32
<region>
sample=a4.wav
delay_cc1=0.5
locc4=64
<region>
sample=b4.wav
delay_cc1=0.6
locc4=96
<region>
sample=c5.wav
delay_cc1=0.7
locc4=127
```
This is essentially how a harp glissando on a folk harp operates. Concert harps have pedals which
allow the retuning of strings to allow playing other scales, and this would need to be implemented,
perhaps with a different MIDI CC for each pitch class. Strumming the drone strings on a Hungarian
zither also works essentially as described here.
## Lyres And Zithers
Many folk lyres, guslis etc. are tuned diatonically and chords on those are played by muting some
strings, and strumming across both the open and muted strings. Keyswitches in another octave could
be added to mute the strings, so that samples are only played when the switch matching that string is
down. This basically works like a harp gliss, but the samples for the muted strings are not played.

The keyswitches will not be displayed on the keyboard by most sfz players, so it will also likely
be necessary to add some placeholder regions just to make them display.

It's also common to strum across fewer than all the strings; this is basically what the power
chord in the above guitar examples is. Instead of keyswitching, it is also possible to have partial
strums on different keys (though this can easily require more keys than an 88-key keyboard),
or selectable by CC, note velocity and possibly other variables as well. The below example uses
CC4 to control how many strings are strummed.
```
<group>
key=24
//First three notes are not affected by CC4
<region>
sample=c4.wav
sw_down=36
<region>
sample=d4.wav
delay_cc1=0.1
sw_down=38
<region>
sample=e4.wav
delay_cc1=0.2
sw_down=40
<region>
sample=f4.wav
delay_cc1=0.3
sw_down=41
locc4=1
<region>
sample=g4.wav
delay_cc1=0.4
sw_down=43
locc4=32
<region>
sample=a4.wav
delay_cc1=0.5
sw_down=45
locc4=64
<region>
sample=b4.wav
delay_cc1=0.6
sw_down=47
locc4=96
<region>
sample=c5.wav
delay_cc1=0.7
sw_down=48
locc4=127

//Placeholders to get the switch keys to be visible
<group>
sample=*silence
ampeg_decay=0
ampeg_sustain=0
ampeg_release=0
<region>
key=36
<region>
key=38
<region>
key=40
<region>
key=41
<region>
key=43
<region>
key=45
<region>
key=47
<region>
key=48
```
For more realism, muted samples could be triggered for the strings which are not down.
Although muting the strings for the keyswitches which are up and skipping the strings where the
switch is down would be more analogous to the way the instruments are played in real life, this
sort of "negative space" chord fingering is much more awkward for most users to play on a keyboard.
It could easily be accomplished by merely switching the sw_up and sw_down opcodes in the below
example.
```
<group>
key=24

//Ringing strings
//First three notes are not affected by CC4
<region>
sample=c4.wav
sw_down=36
<region>
sample=d4.wav
delay_cc1=0.1
sw_down=38
<region>
sample=e4.wav
delay_cc1=0.2
sw_down=40
<region>
sample=f4.wav
delay_cc1=0.3
sw_down=41
locc4=1
<region>
sample=g4.wav
delay_cc1=0.4
sw_down=43
locc4=32
<region>
sample=a4.wav
delay_cc1=0.5
sw_down=45
locc4=64
<region>
sample=b4.wav
delay_cc1=0.6
sw_down=47
locc4=96
<region>
sample=c5.wav
delay_cc1=0.7
sw_down=48
locc4=127

//Muted strings
//First three notes are not affected by CC4
<region>
sample=c4_muted.wav
sw_up=36
<region>
sample=d4_muted.wav
delay_cc1=0.1
sw_up=38
<region>
sample=e4_muted.wav
delay_cc1=0.2
sw_up=40
<region>
sample=f4_muted.wav
delay_cc1=0.3
sw_up=41
locc4=1
<region>
sample=g4_muted.wav
delay_cc1=0.4
sw_up=43
locc4=32
<region>
sample=a4_muted.wav
delay_cc1=0.5
sw_up=45
locc4=64
<region>
sample=b4_muted.wav
delay_cc1=0.6
sw_up=47
locc4=96
<region>
sample=c5_muted.wav
delay_cc1=0.7
sw_up=48
locc4=127

//Placeholders to get the switch keys to be visible
<group>
sample=*silence
ampeg_decay=0
ampeg_sustain=0
ampeg_release=0
<region>
key=36
<region>
key=38
<region>
key=40
<region>
key=41
<region>
key=43
<region>
key=45
<region>
key=47
<region>
key=48
```
## Chromatic Strumming On Diatonic Instruments
The cithara barbarica instrument at https://github.com/sfzinstruments/cithara-barbarica has a patch like this.
It simply duplicates each string's regions to cover the "missing" pitches. This works fine as long as there are
no muted samples used for the stopped strings, and having a muted string sound every half-step would not be
idiomatic for instruments other than the very rare chromatic gusli.

One way to have muted sounds while playing chromatically would be to always trigger a muted sound for whatever
the "real" pitch of each string should be, but have it instantly muted if a pitch in that string's range is
played. This is not great, as the muted sound would be a half-step off, but as the muted strings are shortened
and produce a higher pitch anyway, it seems to work well enough.
```
<group>
key=26

//Muted regions, each with its own group and off_by

<region>
sample=d4_muted.wav
group=11
off_by=21

<region>
sample=e4_muted.wav
group=12
off_by=22
delay_cc1=0.100

<region>
sample=f4_muted.wav
group=13
off_by=23
delay_cc1=0.200

//Non-muted regions, with groups that will mute the above regions if one of the keys covered by that sample is held down

<region>
sample=d4_finger.wav
sw_down=36
group=21
transpose=-2

<region>
sample=d4_finger.wav
sw_down=37
group=21
transpose=-1

<region>
sample=d4_finger.wav
sw_down=38
group=21

<region>
sample=e4_finger.wav
sw_down=39
group=22
transpose=-1
delay_cc1=0.100

<region>
sample=e4_finger.wav
sw_down=40
group=22
delay_cc1=0.100

<region>
sample=f4_finger.wav
sw_down=41
group=23
delay_cc1=0.200
```
A more realistic way to handle this would be to have a MIDI CC for each string to set its tuning, so for example
the C string could sound a B or C# note, like on a concert harp with pedals. However, this is probably not very
convenient for most players who would rather hit a B note to sound a B. This, of course, would not actually be
chromatic - but not limited to a single scale.
## Further Possibilities
In reality, a strum will transfer force to the first strings it hits, and subsequent strings will
be hit with a little less force, and the delay between strings might also be nonlinear.

This tutorial is open source, so feel free to contribute.
