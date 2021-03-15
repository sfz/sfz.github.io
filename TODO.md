# "TODO"

## Opcode documentation

- Complete versions page.
- Complete _envelope_generators_ and _lfo_ type pages

### Modulations

- varNN_eqX{gain|freq}
- Remove the temporary /modulations/moved directory when done

## Website / db features

- Variables inheritance
- recrate_symlinks.sh script:
  - set range based {lo|hi} opcodes to share the same page (support from db?)
  - curve_index and vN to curve header page
  - not symlinks but share same content, like lfoN_ratio|scale

### Other tasks

- Check for missing opcode datatype, range information and modulations
- Improve SFZ syntax highlighting in [Prettify SFZ definition script]:
	- opcode values: fix slash issue for POSIX paths (see FIXME in comment)
	- \#define $variables
	- option values validation? (no_loop, one_shot etc)
- Add missing links to external opcode pages and use tooltips with brief opcode
	descriptions from the syntax.yml opcode db when hover over links

[Prettify SFZ definition script]: /assets/js/prettify/lang-sfz.js
