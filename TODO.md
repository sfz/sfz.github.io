# "TODO"

## Opcode documentation

- Update [sw_down] with new info
- bend_smooth: Missing range
- cutoff: merge with cutoff2
- resonance: merge with resonance2
- Complete _envelope_generators_ and _lfo_ type pages

### Modulations

- Merge eqN_vel2freq, eqN_vel2gain, varNN_*ccX, ampeg_vel2*, amplfo_depth*
	and amplfo_freq* with related opcodes
- varNN_eqX{gain|freq}, ampeg_{hold|decay|sustain}_curveccN
- Remove the temporary /modulations/moved directory when done
- Add missing ARIA aliases (WIP)

## Website / db features

- Fix/replace Yarn (with [gulp]?)
- Generate opcode list in [Prettify SFZ definition script]
- Remove redundant MIDI CC modulations from list that is already in the opcode
	info table and keep track of aliases (opcode layout)
	(E.g.: see [cutoff] opcode page)
- Support for aliased opcodes, removing duplicated data,
  add some `custom_title` option for page titles
- Variables inheritance
- Add DragonFlyBSD, FreeBSD, NetBSD and Solaris as OSs in software section
- Use the same OSs info for both software section and player pages
- OpenMPT: Missing section "Import / Export"

### Other tasks

- Check for missing opcode datatype, range information and modulations
- Improve SFZ syntax highlighting in [Prettify SFZ definition script]:
	- opcode values: fix slash issue for POSIX paths (see FIXME in comment)
	- \#define $variables
	- option values validation? (no_loop, one_shot etc)
- Add missing links to external opcode pages and use tooltips with brief opcode
	descriptions from the syntax.yml opcode db when hover over links
- Add a 1st small column on the left of the `all opcodes` page,
  fill its cell with colors and add a card legend on the right with matching
  color categories like in [this page]

[cutoff]:   /opcodes/cutoff.md
[off_mode]: /opcodes/off_mode.md
[trigger]:  /opcodes/trigger.md
[sw_down]:  /opcodes/sw_down.md
[PR #5]:    https://github.com/sfzformat/sfzformat.github.io/pull/5
[gulp]:     https://gulpjs.com/
[Prettify SFZ definition script]: /assets/js/prettify/lang-sfz.js
[this page]: https://software.intel.com/sites/landingpage/IntrinsicsGuide/#
