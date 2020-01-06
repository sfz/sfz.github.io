---
title: "TODO"
---
## Opcode documentation

- Test and document fil_gain
- Update [sw_down] with new info
- Complete _envelope_generators_ and _lfo_ type pages
- Envelopes visual examples, see [PR #5]
- Add screenshots to group_label/master_label/global_label and also to sw_label
- Add a "see also" section on opcode pages footer

### Modulations

- Merge _curveccN_ info into one page
- Merge eqN_vel2freq, eqN_vel2gain, varNN_*ccX, ampeg_vel2*, amplfo_depth*
	and amplfo_freq* with related opcodes
- varNN_eqX{gain|freq}, ampeg_{hold|decay|sustain}_curveccN
- Remove the temporary /modulations/moved directory when done

### Instrument settings:

- Filter
	- cutoff: merge with cutoff2
	- fil_type: merge with fil2_type
	- resonance: merge with resonance2

- Pitch:
	- bend_smooth: Missing range
	- pitch: check whether ARIA supports ccN and onccN for tune and how tune/pitch aliases work

- Amplifier:
	- position_onccN
	- volume: 'Real' range?

## Website / db features

- Fix/replace Yarn (with [gulp]?)
- Anchor links in h2 titles
- Site search on generated HTML, not markdown source
- Specify opcode option value version
	(See [off_mode] `time` and [trigger] `release_key`)
- Generate opcode list in [Prettify SFZ definition script]
- Remove redundant MIDI CC modulations from list that is already in the opcode
	info table and keep track of aliases (opcode layout)
	(E.g.: see [cutoff] opcode page)
- Support for aliased opcodes, removing duplicated data
- Variables inheritance

### Other tasks

- Check for missing opcode datatype, range information and modulations
- Improve SFZ syntax highlighting in [Prettify SFZ definition script]:
	- opcode values: fix slash issue for POSIX paths (see FIXME in comment)
	- \#define $variables
	- option values validation? (no_loop, one_shot etc)
- Add missing links to external opcode pages and use tooltips with brief opcode
	descriptions from the syntax.yml opcode db when hover over links

[cutoff]:   /opcodes/cutoff.md
[off_mode]: /opcodes/off_mode.md
[trigger]:  /opcodes/trigger.md
[sw_down]:  /opcodes/sw_down.md
[PR #5]:    https://github.com/sfzformat/sfzformat.github.io/pull/5
[gulp]:     https://gulpjs.com/
[Prettify SFZ definition script]: /assets/js/prettify/lang-sfz.js
