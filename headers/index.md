# SFZ Headers

SFZ files are subdivided into sections by headers. The region header is the most
essential, and is the basic unit from which instruments are constructed. A group
is an optional organizational level containing one or more regions. The global
header (one per file) contains opcodes which apply to all regions in the file.
The master header is an extra level added inbetween group and global for the
ARIA player. So, the global/group/region or global/master/group/region hierarchy
contains the opcodes which define which samples are played, when they are to be
played, and how.

The control header would be found at the beginning of the file and includes
special opcodes for setting up MIDI CC controls. The curve headers, when used,
are normally found at the end of the file, and define the curves used for
shaping envelopes, parameter response etc.

<[region](/headers/region)>

<[group](/headers/group)>

<[global](/headers/global)>

<[control](/headers/control)>

<[curve](/headers/curve)>

<[effect](/headers/effect)>

<[master](/headers/master)> (ARIA extension)

Also, though they are not SFZ headers, there are two other important
organizational elements of SFZ.

\#[include](/directives/include)

[ARIA XML instrument bank](/aria/xml_instrument_bank)
