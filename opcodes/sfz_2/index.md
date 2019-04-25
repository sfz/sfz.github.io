# SFZ 2

## Instruments settings

Instruments settings are opcodes used under the <[control](/headers/control)> tag:

[default_path](default_path)

[octave_offset](octave_offset)

[set_ccN](set_ccN)

[set_hdccN](set_hdccN)

[label_ccN](label_ccN)

[#define](/directives/define)

[hint_*](hint_)

Other Instruments settings opcodes are of the
[Voice Lifecycle](/opcodes/categories/voice_lifecycle) category:

[polyphony_group](polyphony_group)

[off_by](off_by)

[off_mode](off_mode)

[polyphony](polyphony)

[note_polyphony](note_polyphony)

[note_selfmask](note_selfmask)

[rt_dead](rt_dead)

[output](output)

## Effects

## Modulation

Modulation opcodes comprise of all the LFO and EG controls

[Envelope Generators]()

[LFO]()

## Performance parameters

Performance parameters are all sound modifiers including:

[Pitch]()

[Amplifier]()

[Filter]()

[EQ]()

Most Performance parameters are targets for the Modulation opcodes

## Region Logic

Region Logic opcodes define the conditions under which a voice plays or stops:

[Key Mapping]()

[MIDI Conditions]()

[Internal Conditions]()

[Triggers]()

## Sound source

Sound source defines the nature of the voice generated.
It could be samples or oscillators 

