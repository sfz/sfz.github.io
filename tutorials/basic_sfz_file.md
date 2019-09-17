---
title: "Basic SFZ file"
lang: "en"
---
Just copy the following in your preferred text editor.
We recommend [Sublime Text] and [VSCode], available for various operating
systems and [Notepad++], available only for Windows.
Fill in the blanks and save as an SFZ:

```
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
  cutoff=           // freq un hertz
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

[Notepad++]: https://notepad-plus-plus.org/
[Sublime Text]: https://www.sublimetext.com/
[VSCode]: https://code.visualstudio.com/
