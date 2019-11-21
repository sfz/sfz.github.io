---
title: "TODO"
---
- Specify opcode option value version.
	(See [off_mode] `time` and [trigger] `release_key`)
- Merge eqN_vel2freq, eqN_vel2gain, varNN_*ccX, ampeg_vel2*, amplfo_depth*
	and amplfo_freq* with related opcodes.
- Generate opcode list in [Prettify SFZ definition script].
- Remove redundant MIDI CC modulations from list that is already in the opcode
	info table and keep track of aliases (opcode layout).
	(E.g.: see [cutoff] opcode page)
- Support for aliased opcodes, removing duplicated data.
- Variables inheritance.
- Update [sw_down] with new info.

## Instrument settings:

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

## Other tasks

- Check for missing opcode datatype, range information and modulations.
- Complete _envelope_generators_ and _lfo_ type pages.
- Improve SFZ syntax highlighting in [Prettify SFZ definition script]:
	- \#define $variables
	- option values (no_loop, one_shot etc),
	- predefined sample names (*silence)
	- remove number colors from strings, use them only for numeric values
- Add missing links to external opcode pages and use tooltips with brief opcode
	descriptions from the syntax.yml opcode db when hover over links.
- Add loading and wave oscillator SFZ2 category opcodes.

[cutoff]:   /opcodes/cutoff.md
[off_mode]: /opcodes/off_mode.md
[trigger]:  /opcodes/trigger.md
[sw_down]:  /opcodes/sw_down.md
[Prettify SFZ definition script]: /assets/js/prettify/lang-sfz.js
