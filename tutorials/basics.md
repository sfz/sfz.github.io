---
title: Intro to SFZ
---
A SFZ file is a set of plain text, computer-readable instructions, which
accompany a sample set and define how the sampler should load and work with
those samples. If the samples are the strings of a piano or pipes of an organ,
the SFZ file is the mechanism that connects the key to the hammer which strikes
the strings or the air and signals to the pipes of the organ.

SFZ files can be opened, edited, and created in any text editor application,
even the default 'Notepad' in Windows. No external software is necessary
to create or modify a SFZ file, though there are some pieces of software
or scripts out there which greatly ease the creation or editing process.
An example of this is an automapper, which is a script or application that takes
a sample set and uses the names of the samples or actual audio content
to determine how to map those samples.

## Opcodes

The primary component of any SFZ file is the opcode. Opcodes essentially define
'thing=value'. For example, the opcode 'volume=6' defines the volume
of the sample as +6 decibels relative to normal.

Opcodes functionally perform two different roles: defining performance properties,
or restricting the conditions under which that sound may be used. For example,
'volume=6' defines a performance property: the sample will sound 6 decibels louder.
On the other hand, 'lokey=36 hikey=38' limits what condition
the sound may play: the key must be 36, 37, or 38.

If using a pitch based instrument, you will most likely be working heavily with
three opcodes: lokey, hikey, and pitch_keycenter. These opcodes define the range
of MIDI note numbers or note names that will allow the note to play.
It is highly recommended that you use MIDI note numbers, as pitch naming
conventions are poorly standardized at best.

You can remember the MIDI note numbers for the C's as follows,
using International Pitch Notation, which states C4=MIDI note number 60:

```
C1:24
C2: 36 (this is the C below bass clef)
C3: 48 (this is the C in bass clef)
C4: 60 (this is Middle C)
C5: 72 (this is the C in treble clef)
C6: 84 (this is the C above treble clef)
C7: 96
```

(note that many, many samplers use a different standard of C3=60,
in which case all numbers are shifted down one)

You'll notice each value is exactly 12 notes apart from the others.
It's not too difficult to calculate notes between the C's, or keep a chart
on your wall or desk with the note names and MIDI numbers listed out.
Many hours have been saved debugging and mapping for me in this way.

## Headers

Headers serve to organize and separate opcodes, and are marked with `<` `>`
on either side. There are three primary headers: `<region>`, `<group>`,
and `<global>`, from most to least restrictive. A region, for example,
may only contain a single sample. A group is comprised of a series of regions,
each containing a single sample. A global is comprised of a series of groups,
each containing a series of regions, etc.

`<control>` is a special purpose header used for a few special opcodes
such as `default_path`.

Generally SFZ instruments are not indented, but if they were,
they would appear as such:

```
<control>
<global>
	<group>
		<region>
			sample=
		<region>
			sample=
	<group>
		<region>
			sample=
		<region>
			sample=
```

Note that if you entered an opcode between a `<group>` and its first `<region>`,
that opcode would be inherited by the \<regions\> within the group.
The same can be done for `<global>` as well, allowing the parameters of dozens,
hundreds, or thousands of samples to be altered with a single line.

This behavior can be overriden if that same opcode is specified within
the lesser header with a different value. For example:

```
<global>
	volume=6
	<group> //Group A
		volume=5
		<region> //Region 1
			volume=4
		<region> //Region 2
	<group> //Group B
		<region> //Region 3
			volume=2
		<region> //Region 4
```

Here's what's going on here:

* Region 1's volume is 4, as it has volume defined.
* Region 2's volume is 5, as it doesn't have volume defined,
  so it inherits from Group A, as Group A has volume defined.
* Region 3's volume is 2, as it has volume defined.
* Region 4's volume is 6 as it doesn't have volume defined, nor does Group B,
  so it inherits from the Global volume setting which is 6.

Always look for opportunities to use inheriting to keep your scripts tidy
by removing duplicate code.
