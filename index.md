# SFZ File Format

The SFZ file format is a human readable instrument definition file format for
audio sample based virtual instruments. In contrast to many other sampler file
formats you can open and modify such .sfz files simply with any text editor.

## Sections

A SFZ file is divided into sections. A section defines in which context the
subsequent statements in the SFZ file shall be interpreted as. For example You
may want to declare a lowpass filter to be used either for the entire SFZ
instrument, or you may declare the lowpass filter to be only used for a certain
region on the keyboard instead. A section is introduced by its section name,
where the section name is placed in a pair of angle brackets. The section name
is then followed by the respective SFZ opcodes which shall be assigned to that
particular section. The sections available with SFZ are:

| Section                      | Standard | Description
| ---------------------------- | -------- | -----------
| <[`global`](section/global)> | SFZ v1   | Declarations which shall apply to the entire instrument.

## Opcodes

The actual individual statements which make up the articulation definition of a
SFZ instrument are called opcodes. For example there is an opcode for loading and
assigning a sample file to be played. And there is an opcode for defining envelope
parameters, and so on. The opcodes available with the SFZ file format are:

| Opcode                              | Standard          | Description
| ----------------------------------- | ----------------- | -----------
| [hibend](opcode/hibend)             | SFZ v1            | Assign pitch pend upper limit to region.
| [hichan](opcode/hichan)             | SFZ v1            | Assign MIDI channel upper limit to region.
| [hikey](opcode/hikey)               | SFZ v1            | Assign MIDI note number upper limit to region.
| [hirand](opcode/hirand)             | SFZ v1            | Assign random number generator upper limit to region.
| [hivel](opcode/hivel)               | SFZ v1            | Assign MIDI velocity upper limit to region.
| [key](opcode/key)                   | SFZ v1            | Assign precise note number to region.
| [lobend](opcode/lobend)             | SFZ v1            | Assign pitch bend lower limit to region.
| [lochan](opcode/lochan)             | SFZ v1            | Assign MIDI channel lower limit to region.
| [lokey](opcode/lokey)               | SFZ v1            | Assign MIDI note number lower limit to region.
| [lorand](opcode/lorand)             | SFZ v1            | Assign random number generator lower limit to region.
| [lovel](opcode/lovel)               | SFZ v1            | Assign MIDI velocity lower limit to region.
| [sample](opcode/sample)             | SFZ v1            | Load and assign an audio sample file.
| [script](opcode/script)             | LinuxSampler Ext. | Load an real-time instrument script for the instrument.
| [seq_length](opcode/seq_length)     | SFZ v1            | Defines a round robin length.
| [seq_position](opcode/seq_position) | SFZ v1            | Assigns a round robin position to a region.
| [set_ccN](opcode/set_ccn)           | SFZ v2            | Assign initial value to MIDI controller.
| [transpose](opcode/transpose)       | SFZ v1            | Transpose by given amount of semi tones.
| [tune](opcode/tune)                 | SFZ v1            | Fine tuning by given amount of cents.
