---
title:  "‹control›"
layout: "sfz/header"
---
SFZ 2 header which should come before [‹global›] in the file,
and can contain the following special directives,
which should not be used under other headers:

- [#define]
- [default_path]
- [note_offset]
- [octave_offset]
- [label_ccN]
- [set_ccN]

Multiple `‹control›` headers can be used in one file, and this can be very
useful when specifying default_path. This path will then be used for
all regions until another `‹control›` header is encountered. Whether settings
other than default_path should also be reset by a new control header is not
entirely clear. As implemented in ARIA, a new control header resets
default_path only and not other control settings, and this does not seem
unreasonable.

See also [ARIA Extensions].


[‹global›]:      global
[ARIA Extensions]: {{ '/extensions/aria/#instrument-settings' | relative_url }}
[#define]:         {{ '/opcodes/define' | relative_url }}
[default_path]:    {{ '/opcodes/default_path' | relative_url }}
[note_offset]:     {{ '/opcodes/note_offset' | relative_url }}
[octave_offset]:   {{ '/opcodes/octave_offset' | relative_url }}
[label_ccN]:       {{ '/opcodes/label_ccN' | relative_url }}
[set_ccN]:         {{ '/opcodes/set_ccN' | relative_url }}
