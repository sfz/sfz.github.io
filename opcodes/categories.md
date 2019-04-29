---
---
# Categories

## Instruments Settings

Instruments Settings are opcodes used under the <[control](/headers/control)>
header:

| Opcode                                  | Version |
| ---                                     | ---     |
| [default_path](/opcodes/default_path)   | SFZ v2  |
| [octave_offset](/opcodes/octave_offset) | SFZ v2  |
| [set_ccN](/opcodes/set_ccN)             | SFZ v2  |
| [#define](/directives/define)           | SFZ v2  |
| [label_ccN](/opcodes/label_ccN)         | SFZ v2  |
| [set_hdccN](/opcodes/set_hdccN)         |  ARIA   |
| [hint_*](/opcodes/hint_)                |  ARIA   |

<br>

Other Instruments settings opcodes are of the
[Voice Lifecycle](/types/voice_lifecycle) type:

| Opcode                                     | Version |
| ---                                        | ---     |
| [off_by](/opcodes/off_by)                  | SFZ v1  |
| [off_mode](/opcodes/off_mode)              | SFZ v1  |
| [polyphony](/opcodes/polyphony)            | SFZ v1  |
| [rt_dead](/opcodes/rt_dead)                | SFZ v2  |
| [output](/opcodes/output)                  | SFZ v2  |
| [note_polyphony](/opcodes/note_polyphony)  | SFZ v2  |
| [note_selfmask](/opcodes/note_selfmask)    | SFZ v2  |
| [polyphony_group](/opcodes/polyphony_group)|  ARIA   |

## Modulation

Modulation opcodes comprise of all the LFO and EG controls

[Envelope Generators](/types/envelope_generators)

[LFO](/types/lfo)

## Performance Parameters

Performance Parameters are all sound modifiers including:

[Pitch](/types/pitch)

[Amplifier](/types/amplifier)

[Filter](/types/filter)

[EQ](/types/eq)

Most Performance parameters are targets for the Modulation opcodes

## Region Logic

Region Logic opcodes define the conditions under which a voice plays or stops:

[Key Mapping](/types/key_mapping)

[MIDI Conditions](/types/midi_conditions)

[Internal Conditions](/types/internal_conditions)

[Triggers](/types/triggers)

## Sound Source

Sound Source defines the nature of the voice generated.
It could be samples or oscillators

[Sample Playback](/types/sample_playback)
