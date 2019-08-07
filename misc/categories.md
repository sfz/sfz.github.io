---
lang: en
title: Categories
---
## Instruments Settings

Instruments Settings are opcodes used under the <[control](/headers/control)>
header.

Other Instruments settings opcodes are of the
***Voice Lifecycle*** type.

## Modulation

Modulation opcodes comprise of all the LFO and EG controls

- [Envelope Generators](/types/envelope_generators)
- [LFO](/types/lfo)

## Performance Parameters

Performance Parameters are all sound modifiers including:

- ***Pitch***
- ***Amplifier***
- ***Filter***
- ***EQ***

Pitch parameters influence the pitch of the region played

Amplifier opcodes influence the amplitude (volume), pan (width, position)
and crossfades.

Filter opcodes influence the timbre of the layer played. Two filters can be used
at the same time. Further frequency shaping can be added via EQ opcodes.

EQs are simple frequency sound shaping tools independent from the filters.
As many as three EQs can be set for each SFZ file. each names eq1, eq2 and eq3.

Most Performance parameters are targets for the Modulation opcodes

## Region Logic

Region Logic opcodes define the conditions under which a voice plays or stops:

- ***Key Mapping***
- ***MIDI Conditions***
- ***Internal Conditions***
- ***Triggers***

## Sound Source

Sound Source defines the nature of the voice generated.
It could be samples or oscillators

- ***Sample Playback***

Sample Playback opcodes defines the parameters of the sound generation.
