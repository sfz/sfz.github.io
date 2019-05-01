# TODO

### Missing opcode versions

Sample Playback:

- direction

Instrument settings:

- note_offset (SFZ2, missing description)

Pitch:

- pitch

Amplifier:

- pan_keycenter
- pan_keytrack
- pan_veltrack
- position_onccN

### Missing SFZ2 from LS page:

- loading and wave oscillator category opcodes.
- delay_samples 
- delay_samples_onccN

Amplifier: not listed in the book, but recognized by Dimension LE:

- volume_smoothccN
- volume_stepccN
- volume_curveccN
- pan_onccN	Yes
- pan_smoothccN
- pan_stepccN
- pan_curveccN
- width_smoothccN 
- width_stepccN
- width_curveccN

Pitch

- pitch_onccN
- pitch_curveccN
- pitch_stepccN
- pitch_smoothccN

Filters

- cutoff_curveccN
- cutoff_smoothccN
- cutoff_stepccN
- cutoff2_curveccN
- cutoff2_smoothccN
- cutoff2_stepccN
- fil2_keytrack
- fil2_keycenter
- fil2_veltrack
- resonance_curveccN
- resonance_smoothccN
- resonance_stepccN
- resonance2_curveccN
- resonance2_smoothccN
- resonance2_stepccN

LS opcode extensions

### Other tasks

- Add SFZ2 LFOs and EGs.
- Check for missing modulation tables in opcode pages.
- Check for missing datatype and range information tables in opcode pages.
- Complete envelope_generators and lfo type pages.
- Handle SFZ2 opcode name aliases.
- Add specific, non redundant informations to various *_onccX.
- Add linkto version / category / type in opcode pages.
- Add more syntax highlight and links to external opcode pages.
- Replace Google CSE with internal search.
- Create a .yml opcode database and handle it from code to automate pages generation.
- Add tooltips on opcode links with brief opcode description (from db?).
