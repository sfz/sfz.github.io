---
title: "Basic SFZ file"
---
Just copy the following in your preferred text editor.
We also have a section in the [tools page] listing some text editor's
SFZ syntax highlighting add-ons.
Fill in the blanks and save as an SFZ:

```sfz
//------------------------------------------------------------------------------
// A basic sfz template
//------------------------------------------------------------------------------
<control>
default_path= // relative path of your samples

<global>
// parameters that affect the whole instrument go here.

// *****************************************************************************
// Your mapping starts here
// *****************************************************************************

<group> // 1

// Parameters that affect multiple regions go here

  fil_type=         // One of the many filter types available
  cutoff=           // freq in hertz
  cutoff_onccX=     // variation in cents
  resonance=        // value in db
  resonance_onccX=  // variation in db

  trigger=attack    // or release or first or legato
  loop_mode=no_loop // or loop_continuous or one_shot or loop_sustain

<region> sample=/*wav or flac file*/ key=// or lokey= hikey= pitch_keycenter=
<region> sample= key=
<region> sample= key=
<region> sample= key=
<region> sample= key=
<region> sample= key=
<region> sample= key=
<region> sample= key=
```


[tools page]: ../software/tools.md
