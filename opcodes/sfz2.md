---
---
# SFZ v2 Opcodes

## [Sound source](/opcodes/categories#sound-source): Sample Playback

| Opcode                                                     |  Aria   | LinuxSampler |
| ---                                                        |  :---:  |    :---:     |
| [delay_beats](/opcodes/delay_beats)                        |    ✓    |      X       |
| [stop_beats](/opcodes/stop_beats)                          |    ✓    |      X       |
| [direction](/opcodes/direction)                            | Partial |      X       |
| [loop_count](/opcodes/loop_count)                          |    ✓    |      X       |
| [loop_crossfade](/opcodes/loop_crossfade)                  |    X    |      X       |
| [loop_type](/opcodes/loop_type)                            |    ✓    |      X       |
| [md5](/opcodes/md5)                                        |    ✓    |      X       |
| [reverse_loccN / reverse_hiccN](/opcodes/reverse_lo_hiccN) |    X    |      X       |
| [waveguide](/opcodes/waveguide)                            |    X    |      X       |

<br>

## [Instrument settings](/opcodes/categories#instrument-settings)

| Opcode                                                     |  Aria   | LinuxSampler |
| ---                                                        |  :---:  |    :---:     |
| [#define](/directives/define)                              |    ✓    |      ✓       |
| [default_path](/opcodes/default_path)                      |    ✓    |      ✓       |
| [note_offset](note_offset)                                 |    ✓    |      ✓       |
| [octave_offset](/opcodes/octave_offset)                    |    ✓    |      ✓       |
| [label_ccN](/opcodes/label_ccN)                            |    ✓    |      X       |
| [set_ccN](/opcodes/set_ccN)                                |    ✓    |      ✓       |

<br>

## [Instrument settings](/opcodes/categories#instrument-settings): Voice Lifecycle

| Opcode                                                     |  Aria   | LinuxSampler |
| ---                                                        |  :---:  |    :---:     |
| [polyphony](/opcodes/polyphony)                            |    ✓    |      X       |
| [note_polyphony](/opcodes/note_polyphony)                  |    ✓    |      X       |
| [note_selfmask](/opcodes/note_selfmask)                    |    ✓    |      X       |
| [rt_dead](/opcodes/rt_dead)                                |    ✓    |      X       |

<br>

## [Region Logic](/opcodes/categories#region-logic): MIDI Conditions

| Opcode                                                     |  Aria   | LinuxSampler |
| ---                                                        |  :---:  |    :---:     |
| [sustain_sw](/opcodes/sustain_sw)                          |    ✓    |      X       |
| [sostenuto_sw](/opcodes/sostenuto_sw)                      |    ✓    |      X       |
| [loprog](/opcodes/lo_hiprog)                               |    ✓    |      X       |
| [hiprog](/opcodes/lo_hiprog)                               |    ✓    |      X       |

<br>

## [Region Logic](/opcodes/categories#region-logic): Internal Conditions

| Opcode                                                     |  Aria   | LinuxSampler |
| ---                                                        |  :---:  |    :---:     |
| [lotimer](/opcodes/lo_hitimer)                             |    X    |      X       |
| [hitimer](/opcodes/lo_hitimer)                             |    X    |      X       |

<br>

## [Region Logic](/opcodes/categories#region-logic): Triggers

| Opcode                                                     |  Aria   | LinuxSampler |
| ---                                                        |  :---:  |    :---:     |
| [start_loccN](/opcodes/start_lo_hiccN)                     |    ✓    |      X       |
| [start_hiccN](/opcodes/start_lo_hiccN)                     |    ✓    |      X       |
| [stop_loccN](/opcodes/stop_lo_hiccN)                       |    ✓    |      X       |
| [stop_hiccN](/opcodes/stop_lo_hiccN)                       |    ✓    |      X       |

<br>

## [Performance parameters](/opcodes/categories#performance-parameters): Amplifier

| Opcode                                                     |  Aria   | LinuxSampler |
| ---                                                        |  :---:  |    :---:     |
| [volume_onccN](/opcodes/volume)                            |    ✓    |      ✓       |
| [phase](/opcodes/phase)                                    |    ✓    |      X       |
| [width_onccN](/opcodes/width)                              |    ✓    |      X       |

<br>

## [Modulation](/opcodes/categories#modulation): [Envelope Generators](/types/envelope_generators)

| Opcode                                                     |  Aria   | LinuxSampler |
| ---                                                        |  :---:  |    :---:     |
| TODO                                                       |         |              |

<br>

## [Modulation](/opcodes/categories#modulation): [LFO](/types/lfo)

| Opcode                                                     |  Aria   | LinuxSampler |
| ---                                                        |  :---:  |    :---:     |
| TODO                                                       |         |              |

<br>

## [Performance parameters](/opcodes/categories#performance-parameters): Pitch

| Opcode                                                     |  Aria   | LinuxSampler |
| ---                                                        |  :---:  |    :---:     |
| [bend_smooth](/opcodes/bend_smooth)                        |    ✓    |      X       |
| [bend_stepup](/opcodes/bend_stepup)                        |    ✓    |      X       |
| [bend_stepdown](/opcodes/bend_stepdown)                    |    ✓    |      X       |

<br>

## [Performance parameters](/opcodes/categories#performance-parameters): Filters

| Opcode                                                     |  Aria   | LinuxSampler |
| ---                                                        |  :---:  |    :---:     |
| [cutoff2](/opcodes/cutoff2)                                |    ✓    |      X       |
| [cutoff2_onccN](/opcodes/cutoff2)                          |    ✓    |      X       |
| [resonance_onccN](/opcodes/resonance)                      |    ✓    |      ✓       |
| [resonance2](/opcodes/resonance2)                          |    ✓    |      X       |
| [resonance2_onccN](/opcodes/resonance2)                    |    ✓    |      X       |
| [fil2_type](/opcodes/fil2_type)|[Partial](fil2_type#players-support) | [Partial](fil2_type#players-support)|

<br>

## [Curves](/headers/curve)

| Opcode                                                     |  Aria   | LinuxSampler |
| ---                                                        |  :---:  |    :---:     |
| [vN](/headers/curve)                                       |    ✓    |      ✓       |
