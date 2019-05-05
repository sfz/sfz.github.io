---
title: SFZ v1 Opcodes
---
## [Sound source](/opcodes/categories#sound-source): Sample Playback

| Opcode                                                     | Aria  | LinuxSampler |
| ---                                                        | :---: |    :---:     |
| [sample](sample)                                           |   ✓   |      ✓       |
| [delay](delay)                                             |   ✓   |      ✓       |
| [delay_random](delay_random)                               |   ✓   |      ✓       |
| [delay_ccN](delay)                                         |   ✓   |      ✓       |
| [offset](offset)                                           |   ✓   |      ✓       |
| [offset_random](offset_random)                             |   ✓   |      X       |
| [offset_ccN](offset)                                       |   ✓   |      X       |
| [end](end)                                                 |   ✓   |      ✓       |
| [count](count)                                             |   ✓   |      X       |
| [loopmode / loop_mode](loop_mode)                          |   ✓   |   Partial    |
| [loopstart / loop_start](loop_start)                       |   ✓   |      ✓       |
| [loopend / loop_end](loop_end)                             |   ✓   |      ✓       |
| [sync_beats](sync_beats)                                   |   ✓   |      X       |
| [sync_offset](sync_offset)                                 |   ✓   |      X       |

## [Instrument settings](/opcodes/categories#instrument-settings): Voice Lifecycle

| Opcode                                                     | Aria  | LinuxSampler |
| ---                                                        | :---: |    :---:     |
| [group](group)                                             |   ✓   |      ✓       |
| [off_by](off_by)                                           |   ✓   |      ✓       |
| [off_mode](off_mode)                                       |   ✓   |      ✓       |
| [output](output)                                           |   X   |      X       |

## [Region Logic](/opcodes/categories#region-logic): Key Mapping

| Opcode                                                     | Aria  | LinuxSampler |
| ---                                                        | :---: |    :---:     |
| [key](key)                                                 |   ✓   |      ✓       |
| [lokey](lo_hikey)                                          |   ✓   |      ✓       |
| [hikey](lo_hikey)                                          |   ✓   |      ✓       |
| [lovel](lo_hivel)                                          |   ✓   |      ✓       |
| [hivel](lo_hivel)                                          |   ✓   |      ✓       |

## [Region Logic](/opcodes/categories#region-logic): MIDI Conditions

| Opcode                                                     | Aria  | LinuxSampler |
| ---                                                        | :---: |    :---:     |
| [lochan](lo_hichan)                                        |   ✓   |      ✓       |
| [hichan](lo_hichan)                                        |   ✓   |      ✓       |
| [loccN](lo_hiccN)                                          |   ✓   |      ✓       |
| [hiccN](lo_hiccN)                                          |   ✓   |      ✓       |
| [lobend](lo_hibend)                                        |   ✓   |      ✓       |
| [hibend](lo_hibend)                                        |   ✓   |      ✓       |
| [sw_lokey](sw_lo_hikey)                                    |   ✓   |      ✓       |
| [sw_hikey](sw_lo_hikey)                                    |   ✓   |      ✓       |
| [sw_last](sw_last)                                         |   ✓   |      ✓       |
| [sw_down](sw_down)                                         |   ✓   |      ✓       |
| [sw_up](sw_up)                                             |   ✓   |      ✓       |
| [sw_previous](sw_previous)                                 |   ✓   |      ✓       |
| [sw_vel](sw_vel)                                           |   ✓   |      ✓       |

## [Region Logic](/opcodes/categories#region-logic): Internal Conditions

| Opcode                                                     | Aria  | LinuxSampler |
| ---                                                        | :---: |    :---:     |
| [lobpm](lo_hibpm)                                          |   ✓   |      X       |
| [hibpm](lo_hibpm)                                          |   ✓   |      X       |
| [lochanaft](lo_hichanaft)                                  |   ✓   |      ✓       |
| [hichanaft](lo_hichanaft)                                  |   ✓   |      ✓       |
| [lopolyaft](lo_hipolyaft)                                  |   X   |      X       |
| [hipolyaft](lo_hipolyaft)                                  |   X   |      X       |
| [lorand](lo_hirand)                                        |   ✓   |      ✓       |
| [hirand](lo_hirand)                                        |   ✓   |      ✓       |
| [seq_length](seq_length)                                   |   ✓   |      ✓       |
| [seq_position](seq_position)                               |   ✓   |      ✓       |

## [Region Logic](/opcodes/categories#region-logic): Triggers

| Opcode                                                     | Aria  | LinuxSampler |
| ---                                                        | :---: |    :---:     |
| [trigger](trigger)                                         |   ✓   |      ✓       |
| [on_loccN](on_lo_hiccN)                                    |   ✓   |      ✓       |
| [on_hiccN](on_lo_hiccN)                                    |   ✓   |      ✓       |

## [Performance parameters](/opcodes/categories#performance-parameters): Amplifier

| Opcode                                                     | Aria  | LinuxSampler |
| ---                                                        | :---: |    :---:     |
| [pan](pan)                                                 |   ✓   |      ✓       |
| [position](position)                                       |   ✓   |      X       |
| [volume](volume)                                           |   ✓   |      ✓       |
| [width](width)                                             |   ✓   |      X       |
| [amp_keycenter](amp_keycenter)                             |   ✓   |      X       |
| [amp_keytrack](amp_keytrack)                               |   ✓   |      X       |
| [amp_veltrack](amp_veltrack)                               |   ✓   |      ✓       |
| [amp_velcurve_N](amp_velcurve_N)                           |   ✓   |      ✓       |
| [amp_random](amp_random)                                   |   ✓   |      X       |
| [gain_ccN](gain_ccN)                                       |   ✓   |      X       |
| [rt_decay](rt_decay)                                       |   ✓   |      ✓       |
| [xf_cccurve](xf_cccurve)                                   |   ✓   |      ✓       |
| [xf_keycurve](xf_keycurve)                                 |   ✓   |      ✓       |
| [xf_velcurve](xf_velcurve)                                 |   ✓   |      ✓       |
| [xfin_loccN](xfin_lo_hiccN)                                |   ✓   |      ✓       |
| [xfin_hiccN](xfin_lo_hiccN)                                |   ✓   |      ✓       |
| [xfout_loccN](xfout_lo_hiccN)                              |   ✓   |      ✓       |
| [xfout_hiccN](xfout_lo_hiccN)                              |   ✓   |      ✓       |
| [xfin_lokey](xfin_lo_hikey)                                |   ✓   |      ✓       |
| [xfin_hikey](xfin_lo_hikey)                                |   ✓   |      ✓       |
| [xfout_lokey](xfout_lo_hikey)                              |   ✓   |      ✓       |
| [xfout_hikey](xfout_lo_hikey)                              |   ✓   |      ✓       |
| [xfin_lovel](xfin_lo_hivel)                                |   ✓   |      ✓       |
| [xfin_hivel](xfin_lo_hivel)                                |   ✓   |      ✓       |
| [xfout_lovel](xfout_lo_hivel)                              |   ✓   |      ✓       |
| [xfout_hivel](xfout_lo_hivel)                              |   ✓   |      ✓       |

## [Modulation](/opcodes/categories#modulation): [Envelope Generators](/types/envelope_generators)

| Opcode                                                     | Aria  | LinuxSampler |
| ---                                                        | :---: |    :---:     |
| [ampeg_delay](/types/envelope_generators#sfz-1-egs)        |   ✓   |      ✓       |
| [ampeg_delay_oncc](/types/envelope_generators#sfz-1-egs)   |   ✓   |      ✓       |
| [ampeg_start](/types/envelope_generators#sfz-1-egs)        |   ✓   |      ✓       |
| [ampeg_attack](/types/envelope_generators#sfz-1-egs)       |   ✓   |      ✓       |
| [ampeg_attack_oncc](/types/envelope_generators#sfz-1-egs)  |   ✓   |      ✓       |
| [ampeg_hold](/types/envelope_generators#sfz-1-egs)         |   ✓   |      ✓       |
| [ampeg_hold_oncc](/types/envelope_generators#sfz-1-egs)    |   ✓   |      ✓       |
| [ampeg_decay](/types/envelope_generators#sfz-1-egs)        |   ✓   |      ✓       |
| [ampeg_decay_oncc](/types/envelope_generators#sfz-1-egs)   |   ✓   |      ✓       |
| [ampeg_sustain](/types/envelope_generators#sfz-1-egs)      |   ✓   |      ✓       |
| [ampeg_sustain_oncc](/types/envelope_generators#sfz-1-egs) |   ✓   |      ✓       |
| [ampeg_release](/types/envelope_generators#sfz-1-egs)      |   ✓   |      ✓       |
| [ampeg_release_oncc](/types/envelope_generators#sfz-1-egs) |   ✓   |      ✓       |
| [ampeg_vel2delay](/types/envelope_generators#sfz-1-egs)    |   ✓   |      ✓       |
| [ampeg_vel2attack](/types/envelope_generators#sfz-1-egs)   |   ✓   |      ✓       |
| [ampeg_vel2hold](/types/envelope_generators#sfz-1-egs)     |   ✓   |      ✓       |
| [ampeg_vel2decay](/types/envelope_generators#sfz-1-egs)    |   ✓   |      ✓       |
| [ampeg_vel2sustain](/types/envelope_generators#sfz-1-egs)  |   ✓   |      ✓       |
| [ampeg_vel2release](/types/envelope_generators#sfz-1-egs)  |   ✓   |      ✓       |
| [pitcheg_delay](/types/envelope_generators#sfz-1-egs)      |   ✓   |      ✓       |
| [pitcheg_start](/types/envelope_generators#sfz-1-egs)      |   ✓   |      ✓       |
| [pitcheg_attack](/types/envelope_generators#sfz-1-egs)     |   ✓   |      ✓       |
| [pitcheg_hold](/types/envelope_generators#sfz-1-egs)       |   ✓   |      ✓       |
| [pitcheg_decay](/types/envelope_generators#sfz-1-egs)      |   ✓   |      ✓       |
| [pitcheg_sustain](/types/envelope_generators#sfz-1-egs)    |   ✓   |      ✓       |
| [pitcheg_release](/types/envelope_generators#sfz-1-egs)    |   ✓   |      ✓       |
| [pitcheg_depth](/types/envelope_generators#sfz-1-egs)      |   ✓   |      ✓       |
| [pitcheg_vel2delay](/types/envelope_generators#sfz-1-egs)  |   ✓   |      ✓       |
| [pitcheg_vel2attack](/types/envelope_generators#sfz-1-egs) |   ✓   |      ✓       |
| [pitcheg_vel2hold](/types/envelope_generators#sfz-1-egs)   |   ✓   |      ✓       |
| [pitcheg_vel2decay](/types/envelope_generators#sfz-1-egs)  |   ✓   |      ✓       |
| [pitcheg_vel2release](/types/envelope_generators#sfz-1-egs)|   ✓   |      ✓       |
| [pitcheg_vel2depth](/types/envelope_generators#sfz-1-egs)  |   ✓   |      X       |
| [fileg_delay](/types/envelope_generators#sfz-1-egs)        |   ✓   |      ✓       |
| [fileg_start](/types/envelope_generators#sfz-1-egs)        |   ✓   |      ✓       |
| [fileg_attack](/types/envelope_generators#sfz-1-egs)       |   ✓   |      ✓       |
| [fileg_hold](/types/envelope_generators#sfz-1-egs)         |   ✓   |      ✓       |
| [fileg_decay](/types/envelope_generators#sfz-1-egs)        |   ✓   |      ✓       |
| [fileg_sustain](/types/envelope_generators#sfz-1-egs)      |   ✓   |      ✓       |
| [fileg_release](/types/envelope_generators#sfz-1-egs)      |   ✓   |      ✓       |
| [fileg_depth](/types/envelope_generators#sfz-1-egs)        |   ✓   |      ✓       |
| [fileg_vel2delay](/types/envelope_generators#sfz-1-egs)    |   ✓   |      ✓       |
| [fileg_vel2attack](/types/envelope_generators#sfz-1-egs)   |   ✓   |      ✓       |
| [fileg_vel2hold](/types/envelope_generators#sfz-1-egs)     |   ✓   |      ✓       |
| [fileg_vel2decay](/types/envelope_generators#sfz-1-egs)    |   ✓   |      ✓       |
| [fileg_vel2sustain](/types/envelope_generators#sfz-1-egs)  |   ✓   |      ✓       |
| [fileg_vel2release](/types/envelope_generators#sfz-1-egs)  |   ✓   |      ✓       |
| [fileg_vel2depth](/types/envelope_generators#sfz-1-egs)    |   ✓   |      X       |

## [Modulation](/opcodes/categories#modulation): [LFO](/types/lfo)

| Opcode                                                     | Aria  | LinuxSampler |
| ---                                                        | :---: |    :---:     |
| [amplfo_delay](/types/lfo#sfz-1-lfos)                      |   ✓   |      ✓       |
| [amplfo_fade](/types/lfo#sfz-1-lfos)                       |   ✓   |      ✓       |
| [amplfo_freq](/types/lfo#sfz-1-lfos)                       |   ✓   |      ✓       |
| [amplfo_depth](/types/lfo#sfz-1-lfos)                      |   ✓   |      ✓       |
| [amplfo_depthccN](/types/lfo#sfz-1-lfos)                   |   ✓   |      ✓       |
| [amplfo_depthchanaft](/types/lfo#sfz-1-lfos)               |   ✓   |      ✓       |
| [amplfo_depthpolyaft](/types/lfo#sfz-1-lfos)               |   X   |      X       |
| [amplfo_freqccN](/types/lfo#sfz-1-lfos)                    |   ✓   |      ✓       |
| [amplfo_freqchanaft](/types/lfo#sfz-1-lfos)                |   ✓   |      ✓       |
| [amplfo_freqpolyaft](/types/lfo#sfz-1-lfos)                |   X   |      X       |
| [pitchlfo_delay](/types/lfo#sfz-1-lfos)                    |   ✓   |      ✓       |
| [pitchlfo_fade](/types/lfo#sfz-1-lfos)                     |   ✓   |      ✓       |
| [pitchlfo_freq](/types/lfo#sfz-1-lfos)                     |   ✓   |      ✓       |
| [pitchlfo_depth](/types/lfo#sfz-1-lfos)                    |   ✓   |      ✓       |
| [pitchlfo_depthccN](/types/lfo#sfz-1-lfos)                 |   ✓   |      ✓       |
| [pitchlfo_depthchanaft](/types/lfo#sfz-1-lfos)             |   ✓   |      ✓       |
| [pitchlfo_depthpolyaft](/types/lfo#sfz-1-lfos)             |   X   |      X       |
| [pitchlfo_freqccN](/types/lfo#sfz-1-lfos)                  |   ✓   |      ✓       |
| [pitchlfo_freqchanaft](/types/lfo#sfz-1-lfos)              |   ✓   |      ✓       |
| [pitchlfo_freqpolyaft](/types/lfo#sfz-1-lfos)              |   X   |      X       |
| [fillfo_delay](/types/lfo#sfz-1-lfos)                      |   ✓   |      ✓       |
| [fillfo_fade](/types/lfo#sfz-1-lfos)                       |   ✓   |      ✓       |
| [fillfo_freq](/types/lfo#sfz-1-lfos)                       |   ✓   |      ✓       |
| [fillfo_depth](/types/lfo#sfz-1-lfos)                      |   ✓   |      ✓       |
| [fillfo_depthccN](/types/lfo#sfz-1-lfos)                   |   ✓   |      ✓       |
| [fillfo_depthchanaft](/types/lfo#sfz-1-lfos)               |   ✓   |      ✓       |
| [fillfo_depthpolyaft](/types/lfo#sfz-1-lfos)               |   X   |      X       |
| [fillfo_freqccN](/types/lfo#sfz-1-lfos)                    |   ✓   |      ✓       |
| [fillfo_freqchanaft](/types/lfo#sfz-1-lfos)                |   ✓   |      ✓       |
| [fillfo_freqpolyaft](/types/lfo#sfz-1-lfos)                |   X   |      X       |

## [Performance parameters](/opcodes/categories#performance-parameters): Pitch

| Opcode                                                     | Aria  | LinuxSampler |
| ---                                                        | :---: |    :---:     |
| [bend_up / bendup](bend_up)                                |   ✓   |      X       |
| [bend_down / benddown](bend_down)                          |   ✓   |      X       |
| [bend_step / bendstep](bend_step)                          |   ✓   |      X       |
| [pitch_keycenter](pitch_keycenter)                         |   ✓   |      ✓       |
| [pitch_keytrack](pitch_keytrack)                           |   ✓   |   Partial    |
| [pitch_random](pitch_random)                               |   ✓   |      X       |
| [pitch_veltrack](pitch_veltrack)                           |   ✓   |      ✓       |
| [transpose](transpose)                                     |   ✓   |      ✓       |
| [tune](tune)                                               |   ✓   |      ✓       |

## [Performance parameters](/opcodes/categories#performance-parameters): Filters

| Opcode                                                     | Aria  | LinuxSampler |
| ---                                                        | :---: |    :---:     |
| [cutoff](cutoff)                                           |   ✓   |      ✓       |
| [cutoff_ccN](cutoff_ccN)                                   |   ✓   |      ✓       |
| [cutoff_chanaft](cutoff_chanaft)                           |   ✓   |      ✓       |
| [cutoff_polyaft](cutoff_polyaft)                           |   X   |      X       |
| [fil_keytrack](fil_keytrack)                               |   ✓   |      ✓       |
| [fil_keycenter](fil_keycenter)                             |   ✓   |      ✓       |
| [fil_random](fil_random)                                   |   ✓   |      X       |
| [fil_type / filtype](fil_type)                             |   ✓   |      ✓       |
| [fil_veltrack](fil_veltrack)                               |   ✓   |      ✓       |
| [resonance](resonance)                                     |   ✓   |      ✓       |

## [Performance parameters](/opcodes/categories#performance-parameters): EQ

| Opcode                                                     | Aria  | LinuxSampler |
| ---                                                        | :---: |    :---:     |
| [eq1_freq](eqN_freq)                                       |   ✓   |      ✓       |
| [eq2_freq](eqN_freq)                                       |   ✓   |      ✓       |
| [eq3_freq](eqN_freq)                                       |   ✓   |      ✓       |
| [eq1_freqccN](eqN_freq)                                    |   ✓   |      ✓       |
| [eq2_freqccN](eqN_freq)                                    |   ✓   |      ✓       |
| [eq3_freqccN](eqN_freq)                                    |   ✓   |      ✓       |
| [eq1_vel2freq](eqN_vel2freq)                               |   ✓   |      ✓       |
| [eq2_vel2freq](eqN_vel2freq)                               |   ✓   |      ✓       |
| [eq3_vel2freq](eqN_vel2freq)                               |   ✓   |      ✓       |
| [eq1_bw](eqN_bw)                                           |   ✓   |      ✓       |
| [eq2_bw](eqN_bw)                                           |   ✓   |      ✓       |
| [eq3_bw](eqN_bw)                                           |   ✓   |      ✓       |
| [eq1_bwccN](eqN_bw)                                        |   ✓   |      ✓       |
| [eq2_bwccN](eqN_bw)                                        |   ✓   |      ✓       |
| [eq3_bwccN](eqN_bw)                                        |   ✓   |      ✓       |
| [eq1_gain](eqN_gain)                                       |   ✓   |      ✓       |
| [eq2_gain](eqN_gain)                                       |   ✓   |      ✓       |
| [eq3_gain](eqN_gain)                                       |   ✓   |      ✓       |
| [eq1_gainccN](eqN_gain)                                    |   ✓   |      ✓       |
| [eq2_gainccN](eqN_gain)                                    |   ✓   |      ✓       |
| [eq3_gainccN](eqN_gain)                                    |   ✓   |      ✓       |
| [eq1_vel2gain](eqN_vel2gain)                               |   ✓   |      ✓       |
| [eq2_vel2gain](eqN_vel2gain)                               |   ✓   |      ✓       |
| [eq3_vel2gain](eqN_vel2gain)                               |   ✓   |      ✓       |

## Effects

| Opcode                                                     | Aria  | LinuxSampler |
| ---                                                        | :---: |    :---:     |
| [effect1](effect1)                                         |   X   |      X       |
| [effect2](effect2)                                         |   X   |      X       |
