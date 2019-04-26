# SFZ v1 Opcodes

| Opcode                                        | Type                                                   | Category                                                  | Aria  | LinuxSampler |
| :---                                          | :---                                                   | :---                                                      | :---: |    :---:     |
| ***Sample Definition***                       | ***[Sound source](/categories/sound_source)***         | ***[Sample Playback](/categories/sample_playback)***
| [sample](sample)                              |                                                        |                                                           |   ✓   |      ✓       |
| ***Input Controls***                          | ***[Region Logic](/categories/region_logic)***         | ***[MIDI Conditions](/categories/midi_conditions)***
| [lochan](lo_hichan)                           |                                                        |                                                           |   ✓   |      ✓       |
| [hichan](lo_hichan)                           |                                                        |                                                           |   ✓   |      ✓       |
|                                               |                                                        | ***[Key Mapping](/categories/key_mapping)***
| [key](key)                                    |                                                        |                                                           |   ✓   |      ✓       |
| [lokey](lo_hikey)                             |                                                        |                                                           |   ✓   |      ✓       |
| [hikey](lo_hikey)                             |                                                        |                                                           |   ✓   |      ✓       |
| [lovel](lo_hivel)                             |                                                        |                                                           |   ✓   |      ✓       |
| [hivel](lo_hivel)                             |                                                        |                                                           |   ✓   |      ✓       |
|                                               |                                                        | ***[MIDI Conditions](/categories/midi_conditions)***
| [loccN](lo_hiccN)                             |                                                        |                                                           |   ✓   |      ✓       |
| [hiccN](lo_hiccN)                             |                                                        |                                                           |   ✓   |      ✓       |
| [lobend](lo_hibend)                           |                                                        |                                                           |   ✓   |      ✓       |
| [hibend](lo_hibend)                           |                                                        |                                                           |   ✓   |      ✓       |
|                                               |                                                        | ***[Internal Conditions](/categories/internal_conditions)***
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
|                                               |                                                        | ***[MIDI Conditions](/categories/midi_conditions)***
| [sw_lokey](sw_lo_hikey)                       |                                                        |                                                           |   ✓   |      ✓       |
| [sw_hikey](sw_lo_hikey)                       |                                                        |                                                           |   ✓   |      ✓       |
| [sw_last](sw_last)                            |                                                        |                                                           |   ✓   |      ✓       |
| [sw_down](sw_down)                            |                                                        |                                                           |   ✓   |      ✓       |
| [sw_up](sw_up)                                |                                                        |                                                           |   ✓   |      ✓       |
| [sw_previous](sw_previous)                    |                                                        |                                                           |   ✓   |      ✓       |
| [sw_vel](sw_vel)                              |                                                        |                                                           |   ✓   |      ✓       |
|                                               |                                                        | ***[Triggers](/categories/triggers)***
| [trigger](trigger)                            |                                                        |                                                           |   ✓   |      ✓       |
|                                         | ***[Instrument settings](/categories/instrument_settings)*** | ***[Voice Lifecycle](/categories/voice_lifecycle)***
| [group](group)                                |                                                        |                                                           |   ✓   |      ✓       |
| [off_by](off_by)                              |                                                        |                                                           |   ✓   |      ✓       |
| [off_mode](off_mode)                          |                                                        |                                                           |   ✓   |      ✓       |
|                                               | ***[Region Logic](/categories/region_logic)***         | ***[Triggers](/categories/triggers)***
| [on_loccN](on_lo_hiccN)                       |                                                        |                                                           |   ✓   |      ✓       |
| [on_hiccN](on_lo_hiccN)                       |                                                        |                                                           |   ✓   |      ✓       |
| ***Performance Parameters***
| ***Sample Player***                           | ***[Sound source](/categories/sound_source)***         | ***[Sample Playback](/categories/sample_playback)***
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
| ***Amplifier***                   | ***[Performance parameters](/categories/performance_parameters)*** | ***[ Amplifier](/categories/amplifier)***
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
|                                         | ***[Instrument settings](/categories/instrument_settings)*** | ***[Voice Lifecycle](/categories/voice_lifecycle)***
| [output](output)                              |                                                        |                                                           |   X   |      X       |
|                                   | ***[Performance parameters](/categories/performance_parameters)*** | ***[Amplifier](/categories/amplifier)***
| [gain_ccN](gain_ccN)                          |                                                        |                                                           |   ✓   |      X       |
| [xfin_lokey](xfin_lokey)                      |                                                        |                                                           |   ✓   |      ✓       |
| [xfin_hikey](xfin_hikey)                      |                                                        |                                                           |   ✓   |      ✓       |
| [xfout_lokey](xfout_lokey)                    |                                                        |                                                           |   ✓   |      ✓       |
| [xfout_hikey](xfout_hikey)                    |                                                        |                                                           |   ✓   |      ✓       |
| [xf_keycurve](xf_keycurve)                    |                                                        |                                                           |   ✓   |      ✓       |
| [xfin_lovel](xfin_lovel)                      |                                                        |                                                           |   ✓   |      ✓       |
| [xfin_hivel](xfin_hivel)                      |                                                        |                                                           |   ✓   |      ✓       |
| [xfout_lovel](xfout_lovel)                    |                                                        |                                                           |   ✓   |      ✓       |
| [xfout_hivel](xfout_hivel)                    |                                                        |                                                           |   ✓   |      ✓       |
| [xf_velcurve](xf_velcurve)                    |                                                        |                                                           |   ✓   |      ✓       |
| [xfin_loccN](xfin_loccN)                      |                                                        |                                                           |   ✓   |      ✓       |
| [xfin_hiccN](xfin_hiccN)                      |                                                        |                                                           |   ✓   |      ✓       |
| [xfout_loccN](xfout_loccN)                    |                                                        |                                                           |   ✓   |      ✓       |
| [xfout_hiccN](xfout_hiccN)                    |                                                        |                                                           |   ✓   |      ✓       |
| [xf_cccurve](xf_cccurve)                      |                                                        |                                                           |   ✓   |      ✓       |
|  ***Amplifier EG***                                       | ***[Modulation](/categories/modulation)*** | ***[Envelope Generators](/categories/envelope_generators)***
| [ampeg_delay](/categories/envelope_generators/sfz-1-egs)        |                                      |                                                           |   ✓   |      ✓       |
| [ampeg_delay_oncc](/categories/envelope_generators/sfz-1-egs)   |                                      |                                                           |   ✓   |      ✓       |
| [ampeg_start](/categories/envelope_generators/sfz-1-egs)        |                                      |                                                           |   ✓   |      ✓       |
| [ampeg_attack](/categories/envelope_generators/sfz-1-egs)       |                                      |                                                           |   ✓   |      ✓       |
| [ampeg_attack_oncc](/categories/envelope_generators/sfz-1-egs)  |                                      |                                                           |   ✓   |      ✓       |
| [ampeg_hold](/categories/envelope_generators/sfz-1-egs)         |                                      |                                                           |   ✓   |      ✓       |
| [ampeg_hold_oncc](/categories/envelope_generators/sfz-1-egs)    |                                      |                                                           |   ✓   |      ✓       |
| [ampeg_decay](/categories/envelope_generators/sfz-1-egs)        |                                      |                                                           |   ✓   |      ✓       |
| [ampeg_decay_oncc](/categories/envelope_generators/sfz-1-egs)   |                                      |                                                           |   ✓   |      ✓       |
| [ampeg_sustain](/categories/envelope_generators/sfz-1-egs)      |                                      |                                                           |   ✓   |      ✓       |
| [ampeg_sustain_oncc](/categories/envelope_generators/sfz-1-egs) |                                      |                                                           |   ✓   |      ✓       |
| [ampeg_release](/categories/envelope_generators/sfz-1-egs)      |                                      |                                                           |   ✓   |      ✓       |
| [ampeg_release_oncc](/categories/envelope_generators/sfz-1-egs) |                                      |                                                           |   ✓   |      ✓       |
| [ampeg_vel2delay](/categories/envelope_generators/sfz-1-egs)    |                                      |                                                           |   ✓   |      ✓       |
| [ampeg_vel2attack](/categories/envelope_generators/sfz-1-egs)   |                                      |                                                           |   ✓   |      ✓       |
| [ampeg_vel2hold](/categories/envelope_generators/sfz-1-egs)     |                                      |                                                           |   ✓   |      ✓       |
| [ampeg_vel2decay](/categories/envelope_generators/sfz-1-egs)    |                                      |                                                           |   ✓   |      ✓       |
| [ampeg_vel2sustain](/categories/envelope_generators/sfz-1-egs)  |                                      |                                                           |   ✓   |      ✓       |
| [ampeg_vel2release](/categories/envelope_generators/sfz-1-egs)  |                                      |                                                           |   ✓   |      ✓       |
| ***Amplifier LFO***                                       | ***[Modulation](/categories/modulation)*** | ***[LFO](/categories/lfo)*** 
| [amplfo_delay](/categories/lfo#sfz-1-lfos-lfos)                 |                                      |                                                           |   ✓   |      ✓       |
| [amplfo_fade](/categories/lfo#sfz-1-lfos-lfos)                  |                                      |                                                           |   ✓   |      ✓       |
| [amplfo_freq](/categories/lfo#sfz-1-lfos-lfos)                  |                                      |                                                           |   ✓   |      ✓       |
| [amplfo_depth](/categories/lfo#sfz-1-lfos-lfos)                 |                                      |                                                           |   ✓   |      ✓       |
| [amplfo_depthccN](/categories/lfo#sfz-1-lfos-lfos)              |                                      |                                                           |   ✓   |      ✓       |
| [amplfo_depthchanaft](/categories/lfo#sfz-1-lfos-lfos)          |                                      |                                                           |   ✓   |      ✓       |
| [amplfo_depthpolyaft](/categories/lfo#sfz-1-lfos-lfos)          |                                      |                                                           |   X   |      X       |
| [amplfo_freqccN](/categories/lfo#sfz-1-lfos-lfos)               |                                      |                                                           |   ✓   |      ✓       |
| [amplfo_freqchanaft](/categories/lfo#sfz-1-lfos-lfos)           |                                      |                                                           |   ✓   |      ✓       |
| [amplfo_freqpolyaft](/categories/lfo#sfz-1-lfos-lfos)           |                                      |                                                           |   X   |      X       |
|  ***Pitch***                      | ***[Performance parameters](/categories/performance_parameters)*** | ***[Pitch](/categories/pitch)***
| [transpose](transpose)                        |                                                        |                                                           |   ✓   |      ✓       |
| [tune](tune)                                  |                                                        |                                                           |   ✓   |      ✓       |
| [pitch_keycenter](pitch_keycenter)            |                                                        |                                                           |   ✓   |      ✓       |
| [pitch_keytrack](pitch_keytrack)              |                                                        |                                                           |   ✓   |   Partial    |
| [pitch_veltrack](pitch_veltrack)              |                                                        |                                                           |   ✓   |      ✓       |
| [pitch_random](pitch_random)                  |                                                        |                                                           |   ✓   |      X       |
| [bend_up / bendup](bend_up)                   |                                                        |                                                           |   ✓   |      X       |
| [bend_down / benddown](bend_down)             |                                                        |                                                           |   ✓   |      X       |
| [bend_step / bendstep](bend_step)             |                                                        |                                                           |   ✓   |      X       |
|  ***Pitch EG***                                           | ***[Modulation](/categories/modulation)*** | ***[Envelope Generators](/categories/envelope_generators)***
| [pitcheg_delay](/categories/envelope_generators/sfz-1-egs)      |                                      |                                                           |   ✓   |      ✓       |
| [pitcheg_start](/categories/envelope_generators/sfz-1-egs)      |                                      |                                                           |   ✓   |      ✓       |
| [pitcheg_attack](/categories/envelope_generators/sfz-1-egs)     |                                      |                                                           |   ✓   |      ✓       |
| [pitcheg_hold](/categories/envelope_generators/sfz-1-egs)       |                                      |                                                           |   ✓   |      ✓       |
| [pitcheg_decay](/categories/envelope_generators/sfz-1-egs)      |                                      |                                                           |   ✓   |      ✓       |
| [pitcheg_sustain](/categories/envelope_generators/sfz-1-egs)    |                                      |                                                           |   ✓   |      ✓       |
| [pitcheg_release](/categories/envelope_generators/sfz-1-egs)    |                                      |                                                           |   ✓   |      ✓       |
| [pitcheg_depth](/categories/envelope_generators/sfz-1-egs)      |                                      |                                                           |   ✓   |      ✓       |
| [pitcheg_vel2delay](/categories/envelope_generators/sfz-1-egs)  |                                      |                                                           |   ✓   |      ✓       |
| [pitcheg_vel2attack](/categories/envelope_generators/sfz-1-egs) |                                      |                                                           |   ✓   |      ✓       |
| [pitcheg_vel2hold](/categories/envelope_generators/sfz-1-egs)   |                                      |                                                           |   ✓   |      ✓       |
| [pitcheg_vel2decay](/categories/envelope_generators/sfz-1-egs)  |                                      |                                                           |   ✓   |      ✓       |
| [pitcheg_vel2release](/categories/envelope_generators/sfz-1-egs)|                                      |                                                           |   ✓   |      ✓       |
| [pitcheg_vel2depth](/categories/envelope_generators/sfz-1-egs)  |                                      |                                                           |   ✓   |      X       |
|  ***Pitch LFO***                                          | ***[Modulation](/categories/modulation)*** | ***[LFO](/categories/lfo)***
| [pitchlfo_delay](/categories/lfo#sfz-1-lfos-lfos)               |                                      |                                                           |   ✓   |      ✓       |
| [pitchlfo_fade](/categories/lfo#sfz-1-lfos)                     |                                      |                                                           |   ✓   |      ✓       |
| [pitchlfo_freq](/categories/lfo#sfz-1-lfos)                     |                                      |                                                           |   ✓   |      ✓       |
| [pitchlfo_depth](/categories/lfo#sfz-1-lfos)                    |                                      |                                                           |   ✓   |      ✓       |
| [pitchlfo_depthccN](/categories/lfo#sfz-1-lfos)                 |                                      |                                                           |   ✓   |      ✓       |
| [pitchlfo_depthchanaft](/categories/lfo#sfz-1-lfos)             |                                      |                                                           |   ✓   |      ✓       |
| [pitchlfo_depthpolyaft](/categories/lfo#sfz-1-lfos)             |                                      |                                                           |   X   |      X       |
| [pitchlfo_freqccN](/categories/lfo#sfz-1-lfos)                  |                                      |                                                           |   ✓   |      ✓       |
| [pitchlfo_freqchanaft](/categories/lfo#sfz-1-lfos)              |                                      |                                                           |   ✓   |      ✓       |
| [pitchlfo_freqpolyaft](/categories/lfo#sfz-1-lfos)              |                                      |                                                           |   X   |      X       |
|  ***Filters***                    | ***[Performance parameters](/categories/performance_parameters)*** | ***[Filters](/categories/filters)***
| [fil_type / filtype](fil_type)                                  |                                      |                                                         | Partial |   Partial    |
| [cutoff](cutoff)                                                |                                      |                                                           |   ✓   |      ✓       |
| [cutoff_ccN](cutoff_ccN)                                        |                                      |                                                           |   ✓   |      ✓       |
| [cutoff_chanaft](cutoff_chanaft)                                |                                      |                                                           |   ✓   |      ✓       |
| [cutoff_polyaft](cutoff_polyaft)                                |                                      |                                                           |   ✓   |      X       |
| [resonance](resonance)                                          |                                      |                                                           |   ✓   |      ✓       |
| [fil_keytrack](fil_keytrack)                                    |                                      |                                                           |   ✓   |      ✓       |
| [fil_keycenter](fil_keycenter)                                  |                                      |                                                           |   ✓   |      ✓       |
| [fil_veltrack](fil_veltrack)                                    |                                      |                                                           |   ✓   |      ✓       |
| [fil_random](fil_random)                                        |                                      |                                                           |   ✓   |      X       |
|  ***Filter EG***                                          | ***[Modulation](/categories/modulation)*** | ***[Envelope Generators](/categories/envelope_generators)***
| [fileg_delay](/categories/envelope_generators/sfz-1-egs)        |                                      |                                                           |   ✓   |      ✓       |
| [fileg_start](/categories/envelope_generators/sfz-1-egs)        |                                      |                                                           |   ✓   |      ✓       |
| [fileg_attack](/categories/envelope_generators/sfz-1-egs)       |                                      |                                                           |   ✓   |      ✓       |
| [fileg_hold](/categories/envelope_generators/sfz-1-egs)         |                                      |                                                           |   ✓   |      ✓       |
| [fileg_decay](/categories/envelope_generators/sfz-1-egs)        |                                      |                                                           |   ✓   |      ✓       |
| [fileg_sustain](/categories/envelope_generators/sfz-1-egs)      |                                      |                                                           |   ✓   |      ✓       |
| [fileg_release](/categories/envelope_generators/sfz-1-egs)      |                                      |                                                           |   ✓   |      ✓       |
| [fileg_depth](/categories/envelope_generators/sfz-1-egs)        |                                      |                                                           |   ✓   |      ✓       |
| [fileg_vel2delay](/categories/envelope_generators/sfz-1-egs)    |                                      |                                                           |   ✓   |      ✓       |
| [fileg_vel2attack](/categories/envelope_generators/sfz-1-egs)   |                                      |                                                           |   ✓   |      ✓       |
| [fileg_vel2hold](/categories/envelope_generators/sfz-1-egs)     |                                      |                                                           |   ✓   |      ✓       |
| [fileg_vel2decay](/categories/envelope_generators/sfz-1-egs)    |                                      |                                                           |   ✓   |      ✓       |
| [fileg_vel2sustain](/categories/envelope_generators/sfz-1-egs)  |                                      |                                                           |   ✓   |      ✓       |
| [fileg_vel2release](/categories/envelope_generators/sfz-1-egs)  |                                      |                                                           |   ✓   |      ✓       |
| [fileg_vel2depth](/categories/envelope_generators/sfz-1-egs)    |                                      |                                                           |   ✓   |      X       |
|  ***Filter LFO***                                         | ***[Modulation](/categories/modulation)*** | ***[LFO](/categories/lfo)***
| [fillfo_delay](/categories/lfo#sfz-1-lfos)                      |                                      |                                                           |   ✓   |      ✓       |
| [fillfo_fade](/categories/lfo#sfz-1-lfos)                       |                                      |                                                           |   ✓   |      ✓       |
| [fillfo_freq](/categories/lfo#sfz-1-lfos)                       |                                      |                                                           |   ✓   |      ✓       |
| [fillfo_depth](/categories/lfo#sfz-1-lfos)                      |                                      |                                                           |   ✓   |      ✓       |
| [fillfo_depthccN](/categories/lfo#sfz-1-lfos)                   |                                      |                                                           |   ✓   |      ✓       |
| [fillfo_depthchanaft](/categories/lfo#sfz-1-lfos)               |                                      |                                                           |   ✓   |      ✓       |
| [fillfo_depthpolyaft](/categories/lfo#sfz-1-lfos)               |                                      |                                                           |   X   |      X       |
| [fillfo_freqccN](/categories/lfo#sfz-1-lfos)                    |                                      |                                                           |   ✓   |      ✓       |
| [fillfo_freqchanaft](/categories/lfo#sfz-1-lfos)                |                                      |                                                           |   ✓   |      ✓       |
| [fillfo_freqpolyaft](/categories/lfo#sfz-1-lfos)                |                                      |                                                           |   X   |      X       |
|  ***Per-Voice EQ***               | ***[Performance parameters](/categories/performance_parameters)*** | ***[EQ](/categories/eq)***
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
