---
---
# SFZ v1 Opcodes

| Opcode                                        | Category                                               | Type                                                      | Aria  | LinuxSampler |
| :---                                          | :---                                                   | :---                                                      | :---: |    :---:     |
| ***Sample Definition***                       | ***[Sound source](/categories/sound_source)***         | ***[Sample Playback](/types/sample_playback)***
| [sample](sample)                              |                                                        |                                                           |   ✓   |      ✓       |
| ***Input Controls***                          | ***[Region Logic](/categories/region_logic)***         | ***[MIDI Conditions](/types/midi_conditions)***
| [lochan](lo_hichan)                           |                                                        |                                                           |   ✓   |      ✓       |
| [hichan](lo_hichan)                           |                                                        |                                                           |   ✓   |      ✓       |
| [loccN](lo_hiccN)                             |                                                        |                                                           |   ✓   |      ✓       |
| [hiccN](lo_hiccN)                             |                                                        |                                                           |   ✓   |      ✓       |
| [lobend](lo_hibend)                           |                                                        |                                                           |   ✓   |      ✓       |
| [hibend](lo_hibend)                           |                                                        |                                                           |   ✓   |      ✓       |
| [sw_lokey](sw_lo_hikey)                       |                                                        |                                                           |   ✓   |      ✓       |
| [sw_hikey](sw_lo_hikey)                       |                                                        |                                                           |   ✓   |      ✓       |
| [sw_last](sw_last)                            |                                                        |                                                           |   ✓   |      ✓       |
| [sw_down](sw_down)                            |                                                        |                                                           |   ✓   |      ✓       |
| [sw_up](sw_up)                                |                                                        |                                                           |   ✓   |      ✓       |
| [sw_previous](sw_previous)                    |                                                        |                                                           |   ✓   |      ✓       |
| [sw_vel](sw_vel)                              |                                                        |                                                           |   ✓   |      ✓       |
|                                               |                                                        | ***[Key Mapping](/types/key_mapping)***
| [key](key)                                    |                                                        |                                                           |   ✓   |      ✓       |
| [lokey](lo_hikey)                             |                                                        |                                                           |   ✓   |      ✓       |
| [hikey](lo_hikey)                             |                                                        |                                                           |   ✓   |      ✓       |
| [lovel](lo_hivel)                             |                                                        |                                                           |   ✓   |      ✓       |
| [hivel](lo_hivel)                             |                                                        |                                                           |   ✓   |      ✓       |
|                                               |                                                        | ***[Internal Conditions](/types/internal_conditions)***
| [lobpm](lo_hibpm)                             |                                                        |                                                           |   ✓   |      X       |
| [hibpm](lo_hibpm)                             |                                                        |                                                           |   ✓   |      X       |
| [lochanaft](lo_hichanaft)                     |                                                        |                                                           |   ✓   |      ✓       |
| [hichanaft](lo_hichanaft)                     |                                                        |                                                           |   ✓   |      ✓       |
| [lopolyaft](lo_hipolyaft)                     |                                                        |                                                           |   X   |      X       |
| [hipolyaft](lo_hipolyaft)                     |                                                        |                                                           |   X   |      X       |
| [lorand](lo_hirand)                           |                                                        |                                                           |   ✓   |      ✓       |
| [hirand](lo_hirand)                           |                                                        |                                                           |   ✓   |      ✓       |
| [seq_length](seq_length)                      |                                                        |                                                           |   ✓   |      ✓       |
| [seq_position](seq_position)                  |                                                        |                                                           |   ✓   |      ✓       |
|                                               |                                                        | ***[Triggers](/types/triggers)***
| [trigger](trigger)                            |                                                        |                                                           |   ✓   |      ✓       |
| [on_loccN](on_lo_hiccN)                       |                                                        |                                                           |   ✓   |      ✓       |
| [on_hiccN](on_lo_hiccN)                       |                                                        |                                                           |   ✓   |      ✓       |
|                                         | ***[Instrument settings](/categories/instrument_settings)*** | ***[Voice Lifecycle](/types/voice_lifecycle)***
| [group](group)                                |                                                        |                                                           |   ✓   |      ✓       |
| [off_by](off_by)                              |                                                        |                                                           |   ✓   |      ✓       |
| [off_mode](off_mode)                          |                                                        |                                                           |   ✓   |      ✓       |
| ***Performance Parameters***
| ***Sample Player***                           | ***[Sound source](/categories/sound_source)***         | ***[Sample Playback](/types/sample_playback)***
| [delay](delay)                                |                                                        |                                                           |   ✓   |      ✓       |
| [delay_random](delay_random)                  |                                                        |                                                           |   ✓   |      ✓       |
| [delay_ccN](delay)                            |                                                        |                                                           |   ✓   |      ✓       |
| [offset](offset)                              |                                                        |                                                           |   ✓   |      ✓       |
| [offset_random](offset_random)                |                                                        |                                                           |   ✓   |      X       |
| [offset_ccN](offset)                          |                                                        |                                                           |   ✓   |      X       |
| [end](end)                                    |                                                        |                                                           |   ✓   |      ✓       |
| [count](count)                                |                                                        |                                                           |   ✓   |      X       |
| [loopmode / loop_mode](loop_mode)             |                                                        |                                                           |   ✓   |   Partial    |
| [loopstart / loop_start](loop_start)          |                                                        |                                                           |   ✓   |      ✓       |
| [loopend / loop_end](loop_end)                |                                                        |                                                           |   ✓   |      ✓       |
| [sync_beats](sync_beats)                      |                                                        |                                                           |   ✓   |      X       |
| [sync_offset](sync_offset)                    |                                                        |                                                           |   ✓   |      X       |
| ***Amplifier***                   | ***[Performance parameters](/categories/performance_parameters)*** | ***[ Amplifier](/types/amplifier)***
| [volume](volume)                              |                                                        |                                                           |   ✓   |      ✓       |
| [pan](pan)                                    |                                                        |                                                           |   ✓   |      ✓       |
| [width](width)                                |                                                        |                                                           |   ✓   |      X       |
| [position](position)                          |                                                        |                                                           |   ✓   |      X       |
| [amp_keytrack](amp_keytrack)                  |                                                        |                                                           |   ✓   |      X       |
| [amp_keycenter](amp_keycenter)                |                                                        |                                                           |   ✓   |      X       |
| [amp_veltrack](amp_veltrack)                  |                                                        |                                                           |   ✓   |      ✓       |
| [amp_velcurve_N](amp_velcurve_N)              |                                                        |                                                           |   ✓   |      ✓       |
| [amp_random](amp_random)                      |                                                        |                                                           |   ✓   |      X       |
| [rt_decay](rt_decay)                          |                                                        |                                                           |   ✓   |      ✓       |
| [gain_ccN](gain_ccN)                          |                                                        |                                                           |   ✓   |      X       |
| [xfin_lokey](xfin_lo_hikey)                   |                                                        |                                                           |   ✓   |      ✓       |
| [xfin_hikey](xfin_lo_hikey)                   |                                                        |                                                           |   ✓   |      ✓       |
| [xfout_lokey](xfout_lo_hikey)                 |                                                        |                                                           |   ✓   |      ✓       |
| [xfout_hikey](xfout_lo_hikey)                 |                                                        |                                                           |   ✓   |      ✓       |
| [xf_keycurve](xf_keycurve)                    |                                                        |                                                           |   ✓   |      ✓       |
| [xfin_lovel](xfin_lo_hivel)                   |                                                        |                                                           |   ✓   |      ✓       |
| [xfin_hivel](xfin_lo_hivel)                   |                                                        |                                                           |   ✓   |      ✓       |
| [xfout_lovel](xfout_lo_hivel)                 |                                                        |                                                           |   ✓   |      ✓       |
| [xfout_hivel](xfout_lo_hivel)                 |                                                        |                                                           |   ✓   |      ✓       |
| [xf_velcurve](xf_velcurve)                    |                                                        |                                                           |   ✓   |      ✓       |
| [xfin_loccN](xfin_lo_hiccN)                   |                                                        |                                                           |   ✓   |      ✓       |
| [xfin_hiccN](xfin_lo_hiccN)                   |                                                        |                                                           |   ✓   |      ✓       |
| [xfout_loccN](xfout_lo_hiccN)                 |                                                        |                                                           |   ✓   |      ✓       |
| [xfout_hiccN](xfout_lo_hiccN)                 |                                                        |                                                           |   ✓   |      ✓       |
| [xf_cccurve](xf_cccurve)                      |                                                        |                                                           |   ✓   |      ✓       |
|                                         | ***[Instrument settings](/categories/instrument_settings)*** | ***[Voice Lifecycle](/types/voice_lifecycle)***
| [output](output)                              |                                                        |                                                           |   X   |      X       |
|  ***Amplifier EG***                           | ***[Modulation](/categories/modulation)***             | ***[Envelope Generators](/types/envelope_generators)***
| [ampeg_delay](/types/envelope_generators/sfz-1-egs)        |                                      |                                                           |   ✓   |      ✓       |
| [ampeg_delay_oncc](/types/envelope_generators/sfz-1-egs)   |                                      |                                                           |   ✓   |      ✓       |
| [ampeg_start](/types/envelope_generators/sfz-1-egs)        |                                      |                                                           |   ✓   |      ✓       |
| [ampeg_attack](/types/envelope_generators/sfz-1-egs)       |                                      |                                                           |   ✓   |      ✓       |
| [ampeg_attack_oncc](/types/envelope_generators/sfz-1-egs)  |                                      |                                                           |   ✓   |      ✓       |
| [ampeg_hold](/types/envelope_generators/sfz-1-egs)         |                                      |                                                           |   ✓   |      ✓       |
| [ampeg_hold_oncc](/types/envelope_generators/sfz-1-egs)    |                                      |                                                           |   ✓   |      ✓       |
| [ampeg_decay](/types/envelope_generators/sfz-1-egs)        |                                      |                                                           |   ✓   |      ✓       |
| [ampeg_decay_oncc](/types/envelope_generators/sfz-1-egs)   |                                      |                                                           |   ✓   |      ✓       |
| [ampeg_sustain](/types/envelope_generators/sfz-1-egs)      |                                      |                                                           |   ✓   |      ✓       |
| [ampeg_sustain_oncc](/types/envelope_generators/sfz-1-egs) |                                      |                                                           |   ✓   |      ✓       |
| [ampeg_release](/types/envelope_generators/sfz-1-egs)      |                                      |                                                           |   ✓   |      ✓       |
| [ampeg_release_oncc](/types/envelope_generators/sfz-1-egs) |                                      |                                                           |   ✓   |      ✓       |
| [ampeg_vel2delay](/types/envelope_generators/sfz-1-egs)    |                                      |                                                           |   ✓   |      ✓       |
| [ampeg_vel2attack](/types/envelope_generators/sfz-1-egs)   |                                      |                                                           |   ✓   |      ✓       |
| [ampeg_vel2hold](/types/envelope_generators/sfz-1-egs)     |                                      |                                                           |   ✓   |      ✓       |
| [ampeg_vel2decay](/types/envelope_generators/sfz-1-egs)    |                                      |                                                           |   ✓   |      ✓       |
| [ampeg_vel2sustain](/types/envelope_generators/sfz-1-egs)  |                                      |                                                           |   ✓   |      ✓       |
| [ampeg_vel2release](/types/envelope_generators/sfz-1-egs)  |                                      |                                                           |   ✓   |      ✓       |
| ***Amplifier LFO***                                            | ***[Modulation](/categories/modulation)*** | ***[LFO](/types/lfo)***
| [amplfo_delay](/types/lfo#sfz-1-lfos-lfos)                 |                                      |                                                           |   ✓   |      ✓       |
| [amplfo_fade](/types/lfo#sfz-1-lfos-lfos)                  |                                      |                                                           |   ✓   |      ✓       |
| [amplfo_freq](/types/lfo#sfz-1-lfos-lfos)                  |                                      |                                                           |   ✓   |      ✓       |
| [amplfo_depth](/types/lfo#sfz-1-lfos-lfos)                 |                                      |                                                           |   ✓   |      ✓       |
| [amplfo_depthccN](/types/lfo#sfz-1-lfos-lfos)              |                                      |                                                           |   ✓   |      ✓       |
| [amplfo_depthchanaft](/types/lfo#sfz-1-lfos-lfos)          |                                      |                                                           |   ✓   |      ✓       |
| [amplfo_depthpolyaft](/types/lfo#sfz-1-lfos-lfos)          |                                      |                                                           |   X   |      X       |
| [amplfo_freqccN](/types/lfo#sfz-1-lfos-lfos)               |                                      |                                                           |   ✓   |      ✓       |
| [amplfo_freqchanaft](/types/lfo#sfz-1-lfos-lfos)           |                                      |                                                           |   ✓   |      ✓       |
| [amplfo_freqpolyaft](/types/lfo#sfz-1-lfos-lfos)           |                                      |                                                           |   X   |      X       |
|  ***Pitch***                           | ***[Performance parameters](/categories/performance_parameters)*** | ***[Pitch](/types/pitch)***
| [transpose](transpose)                        |                                                        |                                                           |   ✓   |      ✓       |
| [tune](tune)                                  |                                                        |                                                           |   ✓   |      ✓       |
| [pitch_keycenter](pitch_keycenter)            |                                                        |                                                           |   ✓   |      ✓       |
| [pitch_keytrack](pitch_keytrack)              |                                                        |                                                           |   ✓   |   Partial    |
| [pitch_veltrack](pitch_veltrack)              |                                                        |                                                           |   ✓   |      ✓       |
| [pitch_random](pitch_random)                  |                                                        |                                                           |   ✓   |      X       |
| [bend_up / bendup](bend_up)                   |                                                        |                                                           |   ✓   |      X       |
| [bend_down / benddown](bend_down)             |                                                        |                                                           |   ✓   |      X       |
| [bend_step / bendstep](bend_step)             |                                                        |                                                           |   ✓   |      X       |
|  ***Pitch EG***                                                | ***[Modulation](/categories/modulation)*** | ***[Envelope Generators](/types/envelope_generators)***
| [pitcheg_delay](/types/envelope_generators/sfz-1-egs)      |                                      |                                                           |   ✓   |      ✓       |
| [pitcheg_start](/types/envelope_generators/sfz-1-egs)      |                                      |                                                           |   ✓   |      ✓       |
| [pitcheg_attack](/types/envelope_generators/sfz-1-egs)     |                                      |                                                           |   ✓   |      ✓       |
| [pitcheg_hold](/types/envelope_generators/sfz-1-egs)       |                                      |                                                           |   ✓   |      ✓       |
| [pitcheg_decay](/types/envelope_generators/sfz-1-egs)      |                                      |                                                           |   ✓   |      ✓       |
| [pitcheg_sustain](/types/envelope_generators/sfz-1-egs)    |                                      |                                                           |   ✓   |      ✓       |
| [pitcheg_release](/types/envelope_generators/sfz-1-egs)    |                                      |                                                           |   ✓   |      ✓       |
| [pitcheg_depth](/types/envelope_generators/sfz-1-egs)      |                                      |                                                           |   ✓   |      ✓       |
| [pitcheg_vel2delay](/types/envelope_generators/sfz-1-egs)  |                                      |                                                           |   ✓   |      ✓       |
| [pitcheg_vel2attack](/types/envelope_generators/sfz-1-egs) |                                      |                                                           |   ✓   |      ✓       |
| [pitcheg_vel2hold](/types/envelope_generators/sfz-1-egs)   |                                      |                                                           |   ✓   |      ✓       |
| [pitcheg_vel2decay](/types/envelope_generators/sfz-1-egs)  |                                      |                                                           |   ✓   |      ✓       |
| [pitcheg_vel2release](/types/envelope_generators/sfz-1-egs)|                                      |                                                           |   ✓   |      ✓       |
| [pitcheg_vel2depth](/types/envelope_generators/sfz-1-egs)  |                                      |                                                           |   ✓   |      X       |
|  ***Pitch LFO***                                               | ***[Modulation](/categories/modulation)*** | ***[LFO](/types/lfo)***
| [pitchlfo_delay](/types/lfo#sfz-1-lfos-lfos)               |                                      |                                                           |   ✓   |      ✓       |
| [pitchlfo_fade](/types/lfo#sfz-1-lfos)                     |                                      |                                                           |   ✓   |      ✓       |
| [pitchlfo_freq](/types/lfo#sfz-1-lfos)                     |                                      |                                                           |   ✓   |      ✓       |
| [pitchlfo_depth](/types/lfo#sfz-1-lfos)                    |                                      |                                                           |   ✓   |      ✓       |
| [pitchlfo_depthccN](/types/lfo#sfz-1-lfos)                 |                                      |                                                           |   ✓   |      ✓       |
| [pitchlfo_depthchanaft](/types/lfo#sfz-1-lfos)             |                                      |                                                           |   ✓   |      ✓       |
| [pitchlfo_depthpolyaft](/types/lfo#sfz-1-lfos)             |                                      |                                                           |   X   |      X       |
| [pitchlfo_freqccN](/types/lfo#sfz-1-lfos)                  |                                      |                                                           |   ✓   |      ✓       |
| [pitchlfo_freqchanaft](/types/lfo#sfz-1-lfos)              |                                      |                                                           |   ✓   |      ✓       |
| [pitchlfo_freqpolyaft](/types/lfo#sfz-1-lfos)              |                                      |                                                           |   X   |      X       |
|  ***Filters***                         | ***[Performance parameters](/categories/performance_parameters)*** | ***[Filters](/types/filter)***
| [fil_type / filtype](fil_type)                                  |                                      |                                                           | [Partial](fil_type#players-support) | [Partial](fil_type#players-support) |
| [cutoff](cutoff)                                                |                                      |                                                           |   ✓   |      ✓       |
| [cutoff_ccN](cutoff_ccN)                                        |                                      |                                                           |   ✓   |      ✓       |
| [cutoff_chanaft](cutoff_chanaft)                                |                                      |                                                           |   ✓   |      ✓       |
| [cutoff_polyaft](cutoff_polyaft)                                |                                      |                                                           |   ✓   |      X       |
| [resonance](resonance)                                          |                                      |                                                           |   ✓   |      ✓       |
| [fil_keytrack](fil_keytrack)                                    |                                      |                                                           |   ✓   |      ✓       |
| [fil_keycenter](fil_keycenter)                                  |                                      |                                                           |   ✓   |      ✓       |
| [fil_veltrack](fil_veltrack)                                    |                                      |                                                           |   ✓   |      ✓       |
| [fil_random](fil_random)                                        |                                      |                                                           |   ✓   |      X       |
|  ***Filter EG***                                               | ***[Modulation](/categories/modulation)*** | ***[Envelope Generators](/types/envelope_generators)***
| [fileg_delay](/types/envelope_generators/sfz-1-egs)        |                                      |                                                           |   ✓   |      ✓       |
| [fileg_start](/types/envelope_generators/sfz-1-egs)        |                                      |                                                           |   ✓   |      ✓       |
| [fileg_attack](/types/envelope_generators/sfz-1-egs)       |                                      |                                                           |   ✓   |      ✓       |
| [fileg_hold](/types/envelope_generators/sfz-1-egs)         |                                      |                                                           |   ✓   |      ✓       |
| [fileg_decay](/types/envelope_generators/sfz-1-egs)        |                                      |                                                           |   ✓   |      ✓       |
| [fileg_sustain](/types/envelope_generators/sfz-1-egs)      |                                      |                                                           |   ✓   |      ✓       |
| [fileg_release](/types/envelope_generators/sfz-1-egs)      |                                      |                                                           |   ✓   |      ✓       |
| [fileg_depth](/types/envelope_generators/sfz-1-egs)        |                                      |                                                           |   ✓   |      ✓       |
| [fileg_vel2delay](/types/envelope_generators/sfz-1-egs)    |                                      |                                                           |   ✓   |      ✓       |
| [fileg_vel2attack](/types/envelope_generators/sfz-1-egs)   |                                      |                                                           |   ✓   |      ✓       |
| [fileg_vel2hold](/types/envelope_generators/sfz-1-egs)     |                                      |                                                           |   ✓   |      ✓       |
| [fileg_vel2decay](/types/envelope_generators/sfz-1-egs)    |                                      |                                                           |   ✓   |      ✓       |
| [fileg_vel2sustain](/types/envelope_generators/sfz-1-egs)  |                                      |                                                           |   ✓   |      ✓       |
| [fileg_vel2release](/types/envelope_generators/sfz-1-egs)  |                                      |                                                           |   ✓   |      ✓       |
| [fileg_vel2depth](/types/envelope_generators/sfz-1-egs)    |                                      |                                                           |   ✓   |      X       |
|  ***Filter LFO***                                              | ***[Modulation](/categories/modulation)*** | ***[LFO](/types/lfo)***
| [fillfo_delay](/types/lfo#sfz-1-lfos)                      |                                      |                                                           |   ✓   |      ✓       |
| [fillfo_fade](/types/lfo#sfz-1-lfos)                       |                                      |                                                           |   ✓   |      ✓       |
| [fillfo_freq](/types/lfo#sfz-1-lfos)                       |                                      |                                                           |   ✓   |      ✓       |
| [fillfo_depth](/types/lfo#sfz-1-lfos)                      |                                      |                                                           |   ✓   |      ✓       |
| [fillfo_depthccN](/types/lfo#sfz-1-lfos)                   |                                      |                                                           |   ✓   |      ✓       |
| [fillfo_depthchanaft](/types/lfo#sfz-1-lfos)               |                                      |                                                           |   ✓   |      ✓       |
| [fillfo_depthpolyaft](/types/lfo#sfz-1-lfos)               |                                      |                                                           |   X   |      X       |
| [fillfo_freqccN](/types/lfo#sfz-1-lfos)                    |                                      |                                                           |   ✓   |      ✓       |
| [fillfo_freqchanaft](/types/lfo#sfz-1-lfos)                |                                      |                                                           |   ✓   |      ✓       |
| [fillfo_freqpolyaft](/types/lfo#sfz-1-lfos)                |                                      |                                                           |   X   |      X       |
|  ***Per-Voice EQ***                    | ***[Performance parameters](/categories/performance_parameters)*** | ***[EQ](/types/eq)***
| [eq1_freq](eqN_freq)                                            |                                      |                                                           |   ✓   |      ✓       |
| [eq2_freq](eqN_freq)                                            |                                      |                                                           |   ✓   |      ✓       |
| [eq3_freq](eqN_freq)                                            |                                      |                                                           |   ✓   |      ✓       |
| [eq1_freqcc](eqN_freq)                                          |                                      |                                                           |   ✓   |      ✓       |
| [eq2_freqcc](eqN_freq)                                          |                                      |                                                           |   ✓   |      ✓       |
| [eq3_freqcc](eqN_freq)                                          |                                      |                                                           |   ✓   |      ✓       |
| [eq1_vel2freq](eqN_vel2freq)                                    |                                      |                                                           |   ✓   |      ✓       |
| [eq2_vel2freq](eqN_vel2freq)                                    |                                      |                                                           |   ✓   |      ✓       |
| [eq3_vel2freq](eqN_vel2freq)                                    |                                      |                                                           |   ✓   |      ✓       |
| [eq1_bw](eqN_bw)                                                |                                      |                                                           |   ✓   |      ✓       |
| [eq2_bw](eqN_bw)                                                |                                      |                                                           |   ✓   |      ✓       |
| [eq3_bw](eqN_bw)                                                |                                      |                                                           |   ✓   |      ✓       |
| [eq1_bwcc](eqN_bw)                                              |                                      |                                                           |   ✓   |      ✓       |
| [eq2_bwcc](eqN_bw)                                              |                                      |                                                           |   ✓   |      ✓       |
| [eq3_bwcc](eqN_bw)                                              |                                      |                                                           |   ✓   |      ✓       |
| [eq1_gain](eqN_gain)                                            |                                      |                                                           |   ✓   |      ✓       |
| [eq2_gain](eqN_gain)                                            |                                      |                                                           |   ✓   |      ✓       |
| [eq3_gain](eqN_gain)                                            |                                      |                                                           |   ✓   |      ✓       |
| [eq1_gaincc](eqN_gain)                                          |                                      |                                                           |   ✓   |      ✓       |
| [eq2_gaincc](eqN_gain)                                          |                                      |                                                           |   ✓   |      ✓       |
| [eq3_gaincc](eqN_gain)                                          |                                      |                                                           |   ✓   |      ✓       |
| [eq1_vel2gain](eqN_vel2gain)                                    |                                      |                                                           |   ✓   |      ✓       |
| [eq2_vel2gain](eqN_vel2gain)                                    |                                      |                                                           |   ✓   |      ✓       |
| [eq3_vel2gain](eqN_vel2gain)                                    |                                      |                                                           |   ✓   |      ✓       |
|  ***Effects***
| [effect1](effect1)                                              |                                      |                                                           |   X   |      X       |
| [effect2](effect2)                                              |                                      |                                                           |   X   |      X       |
