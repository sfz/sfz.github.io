# TODO

### Opcode errata

- amp_keytrack: legacy values -96 to 12 dB, opcode page values -12 to 96.
- gain_ccN -> gain_onccN?

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

- LS opcode extensions

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

### Other tasks

- Add SFZ2 LFOs and EGs.
- Add more syntax highlight and links to other opcodes.
- Add tooltips on opcode links with brief opcode description.
- Add relative descriptions to various *_onccX.
- Remove category and type pages, too redundant and difficult to maintain.
- Replace Google CSE with internal search.
- Add linkto version / category / type in opcode pages.
- Check modulation tables in opcode pages.
