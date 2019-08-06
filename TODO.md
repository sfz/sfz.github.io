# TODO

### Missing opcode versions

Sample Playback:

- direction

Instrument settings:

- note_offset (Missing values)
- octave_offset (Missing values)

- Filter

- cutoff (ensure about modulations and possibly merge them all)
- fil2_type (options and default value)

Pitch:

- bend_smooth (Missing values)
- pitch

Amplifier:

- pan_keycenter
- pan_keytrack
- pan_veltrack
- position_onccN
- volume (Real range, MIDI CC values)

### Missing SFZ2 from LS page:

- loading and wave oscillator category opcodes.
- delay_samples
- delay_samples_onccN

Amplifier: not listed in the book, but recognized by Dimension LE:

- volume_smoothccN
- volume_stepccN
- volume_curveccN
- pan_onccN
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

- Add value type unit table (default and/or range) in opcode pages.
- Check for missing opcode datatype, range information and modulations.
- Complete envelope_generators and lfo type pages.
- Add links to version / category / type table in opcode pages.
- Add missing links to external opcode pages and tooltips with brief opcode
    descriptions when hover over links, this could be done by using
    a .yml opcode database.
- Improve syntax highlighting
