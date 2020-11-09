# "TODO"

## Opcode documentation

- Complete versions page.
- Complete _envelope_generators_ and _lfo_ type pages

### Modulations

- varNN_eqX{gain|freq}
- Remove the temporary /modulations/moved directory when done

## Website / db features

- Remove redundant MIDI CC modulations from list that is already in the opcode
	info table and keep track of aliases (opcode layout)
	(E.g.: see [cutoff] opcode page)
- Variables inheritance
- OpenMPT: Missing section "Import / Export"

### Other tasks

- Check for missing opcode datatype, range information and modulations
- Improve SFZ syntax highlighting in [Prettify SFZ definition script]:
	- opcode values: fix slash issue for POSIX paths (see FIXME in comment)
	- \#define $variables
	- option values validation? (no_loop, one_shot etc)
- Add missing links to external opcode pages and use tooltips with brief opcode
	descriptions from the syntax.yml opcode db when hover over links

[cutoff]: /opcodes/cutoff.md
[Prettify SFZ definition script]: /assets/js/prettify/lang-sfz.js
