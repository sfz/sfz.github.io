# SFZ v1 Opcodes

| Opcode                                        | Type                                                   | Category                                                  | Aria  | LinuxSampler |
| :---                                          | :---                                                   | :---                                                      | :---: |    :---:     |
| ***Main***
| [sample](sample)                              | [Sound source](/categories/sound_source)               | [Sample Playback](/categories/sample_playback)            |   ✓   |      ✓       |
| ***Input Controls***
| [lochan](lo_hichan)                           | [Region Logic](/categories/region_logic)               | [MIDI Conditions](/categories/midi_conditions)            |   ✓   |      ✓       |
| [hichan](lo_hichan)                           |                                                        |                                                           |   ✓   |      ✓       |
| [lokey](lo_hikey)                             |                                                        | [Key Mapping](/categories/key_mapping)                    |   ✓   |      ✓       |
| [hikey](lo_hikey)                             |                                                        |                                                           |   ✓   |      ✓       |
| [lovel](lo_hivel)                             |                                                        |                                                           |   ✓   |      ✓       |
| [hivel](lo_hivel)                             |                                                        |                                                           |   ✓   |      ✓       |
| [loccN](lo_hiccN)                             |                                                        | [MIDI Conditions](/categories/midi_conditions)            |   ✓   |      ✓       |
| [hiccN](lo_hiccN)                             |                                                        |                                                           |   ✓   |      ✓       |
| [lobend](lo_hibend)                           |                                                        |                                                           |   ✓   |      ✓       |
| [hibend](lo_hibend)                           |                                                        |                                                           |   ✓   |      ✓       |
| [lobpm](lo_hibpm)                             |                                                        | [Internal Conditions](/categories/internal_conditions)    |   ✓   |      X       |
| [hibpm](lo_hibpm)                             |                                                        |                                                           |   ✓   |      X       |
| [lochanaft](lo_hichanaft)                     |                                                        |                                                           |   ✓   |      ✓       |
| [hichanaft](lo_hichanaft)                     |                                                        |                                                           |   ✓   |      ✓       |
| [lopolyaft](lo_hipolyaft)                     |                                                        |                                                           |   X   |      X       |
| [hipolyaft](lo_hipolyaft)                     |                                                        |                                                           |   X   |      X       |
| [lorand](lo_hirand)                           |                                                        |                                                           |   ✓   |      ✓       |
| [hirand](lo_hirand)                           |                                                        |                                                           |   ✓   |      ✓       |
| [seq_length](seq_length)                      |                                                        |                                                           |   ✓   |      ✓       |
| [seq_position](seq_position)                  |                                                        |                                                           |   ✓   |      ✓       |
| [sw_lokey](sw_lo_hikey)                       |                                                        | [MIDI Conditions](/categories/midi_conditions)            |   ✓   |      ✓       |
| [sw_hikey](sw_lo_hikey)                       |                                                        |                                                           |   ✓   |      ✓       |
| [sw_last](sw_last)                            |                                                        |                                                           |   ✓   |      ✓       |
| [sw_down](sw_down)                            |                                                        |                                                           |   ✓   |      ✓       |
| [sw_up](sw_up)                                |                                                        |                                                           |   ✓   |      ✓       |
| [sw_previous](sw_previous)                    |                                                        |                                                           |   ✓   |      ✓       |
| [sw_vel](sw_vel)                              |                                                        |                                                           |   ✓   |      ✓       |
| [trigger](trigger)                            |                                                        | [Triggers](/categories/triggers)                          |   ✓   |      ✓       |
| [group](group)                                |                                                        | [Header??](/categories/header)                            |   ✓   |      ✓       |
| [off_by](off_by)                              | [Instrument settings](/categories/instrument_settings) | [Voice Lifecycle](/categories/voice_lifecycle)            |   ✓   |      ✓       |
| [off_mode](off_mode)                          |                                                        |                                                           |   ✓   |      ✓       |
| [on_loccN](on_lo_hiccN)                       | [Region Logic](/categories/region_logic)               | [Triggers](/categories/triggers)                          |   ✓   |      ✓       |
| [on_hiccN](on_lo_hiccN)                       |                                                        |                                                           |   ✓   |      ✓       |
| ***Performance Parameters***
| ***Sample Player***
| [delay](delay)
| [delay_random](delay_random)
| [delay_ccN](delay_ccN)
| [offset](offset)
| [offset_random](offset_random)
| [offset_cc](offset_cc)
| [end](end)
| [count](count)
| [loopmode](loop_mode)
| [loop_mode](loop_mode)
| [loopstart](loop_start)
| [loop_start](loop_start)
| [loop_end](loop_end)
| [loopend](loop_end)
| [sync_beats](sync_beats)
| [sync_offset](sync_offset)
| ***Amplifier***
| [volume](volume)
| [pan](pan)
| [width](width)
| [position](position)
| [amp_keytrack](amp_keytrack)
| [amp_keycenter](amp_keycenter)
| [amp_veltrack](amp_veltrack)
| [amp_velcurve_N](amp_velcurve_N)
| [amp_random](amp_random)
| [rt_decay](rt_decay)
| [output](output)
| [gain_ccN](gain_ccN)
| [xfin_lokey](xfin_lokey)
| [xfin_hikey](xfin_hikey)
| [xfout_lokey](xfout_lokey)
| [xfout_hikey](xfout_hikey)
| [xf_keycurve](xf_keycurve)
| [xfin_lovel](xfin_lovel)
| [xfin_hivel](xfin_hivel)
| [xfout_lovel](xfout_lovel)
| [xfout_hivel](xfout_hivel)
| [xf_velcurve](xf_velcurve)
| [xfin_loccN](xfin_loccN)
| [xfin_hiccN](xfin_hiccN)
| [xfout_loccN](xfout_loccN)
| [xfout_hiccN](xfout_hiccN)
| [xf_cccurve](xf_cccurve)
|  ***Amplifier EG***
| [ampeg_delay](ampeg_delay)
| [ampeg_delay_oncc](ampeg_delay_oncc)
| [ampeg_start](ampeg_start)
| [ampeg_attack](ampeg_attack)
| [ampeg_attack_oncc](ampeg_attack_oncc)
| [ampeg_hold](ampeg_hold)
| [ampeg_hold_oncc](ampeg_hold_oncc)
| [ampeg_decay](ampeg_decay)
| [ampeg_decay_oncc](ampeg_decay_oncc)
| [ampeg_sustain](ampeg_sustain)
| [ampeg_sustain_oncc](ampeg_sustain_oncc)
| [ampeg_release](ampeg_release)
| [ampeg_release_oncc](ampeg_release_oncc)
| [ampeg_vel2delay](ampeg_vel2delay)
| [ampeg_vel2attack](ampeg_vel2attack)
| [ampeg_vel2hold](ampeg_vel2hold)
| [ampeg_vel2decay](ampeg_vel2decay)
| [ampeg_vel2sustain](ampeg_vel2sustain)
| [ampeg_vel2release](ampeg_vel2release)
| ***Amplifier LFO***
| [amplfo_delay](amplfo_delay)
| [amplfo_fade](amplfo_fade)
| [amplfo_freq](amplfo_freq)
| [amplfo_depth](amplfo_depth)
| [amplfo_depthccN](amplfo_depthccN)
| [amplfo_depthchanaft](amplfo_depthchanaft)
| [amplfo_depthpolyaft](amplfo_depthpolyaft)
| [amplfo_freqccN](amplfo_freqccN)
| [amplfo_freqchanaft](amplfo_freqchanaft)
| [amplfo_freqpolyaft](amplfo_freqpolyaft)
|  ***Pitch***
| [transpose](transpose)
| [tune](tune)
| [pitch_keycenter](pitch_keycenter)
| [pitch_keytrack](pitch_keytrack)
| [pitch_veltrack](pitch_veltrack)
| [pitch_random](pitch_random)
| [bendup](bendup)
| [bend_up](bend_up)
| [benddown](benddown)
| [bend_down](bend_down)
| [bendstep](bendstep)
| [bend_step](bend_step)
|  ***Pitch EG***
| [pitcheg_delay](pitcheg_delay)
| [pitcheg_start](pitcheg_start)
| [pitcheg_attack](pitcheg_attack)
| [pitcheg_hold](pitcheg_hold)
| [pitcheg_decay](pitcheg_decay)
| [pitcheg_sustain](pitcheg_sustain)
| [pitcheg_release](pitcheg_release)
| [pitcheg_depth](pitcheg_depth)
| [pitcheg_vel2delay](pitcheg_vel2delay)
| [pitcheg_vel2attack](pitcheg_vel2attack)
| [pitcheg_vel2hold](pitcheg_vel2hold)
| [pitcheg_vel2decay](pitcheg_vel2decay)
| [pitcheg_vel2release](pitcheg_vel2release)
| [pitcheg_vel2depth](pitcheg_vel2depth)
|  ***Pitch LFO***
| [pitchlfo_delay](pitchlfo_delay)
| [pitchlfo_fade](pitchlfo_fade)
| [pitchlfo_freq](pitchlfo_freq)
| [pitchlfo_depth](pitchlfo_depth)
| [pitchlfo_depthccN](pitchlfo_depthccN)
| [pitchlfo_depthchanaft](pitchlfo_depthchanaft)
| [pitchlfo_depthpolyaft](pitchlfo_depthpolyaft)
| [pitchlfo_freqccN](pitchlfo_freqccN)
| [pitchlfo_freqchanaft](pitchlfo_freqchanaft)
| [pitchlfo_freqpolyaft](pitchlfo_freqpolyaft)
|  ***Filters***
| [fil_type](fil_type)
| [filtype](fil_type)
| [cutoff](cutoff)
| [cutoff_ccN](cutoff_ccN)
| [cutoff_chanaft](cutoff_chanaft)
| [cutoff_polyaft](cutoff_polyaft)
| [resonance](resonance)
| [fil_keytrack](fil_keytrack)
| [fil_keycenter](fil_keycenter)
| [fil_veltrack](fil_veltrack)
| [fil_random](fil_random)
|  ***Filter EG***
| [fileg_delay](fileg_delay)
| [fileg_start](fileg_start)
| [fileg_attack](fileg_attack)
| [fileg_hold](fileg_hold)
| [fileg_decay](fileg_decay)
| [fileg_sustain](fileg_sustain)
| [fileg_release](fileg_release)
| [fileg_depth](fileg_depth)
| [fileg_vel2delay](fileg_vel2delay)
| [fileg_vel2attack](fileg_vel2attack)
| [fileg_vel2hold](fileg_vel2hold)
| [fileg_vel2decay](fileg_vel2decay)
| [fileg_vel2sustain](fileg_vel2sustain)
| [fileg_vel2release](fileg_vel2release)
| [fileg_vel2depth](fileg_vel2depth)
|  ***Filter LFO***
| [fillfo_delay](fillfo_delay)
| [fillfo_fade](fillfo_fade)
| [fillfo_freq](fillfo_freq)
| [fillfo_depth](fillfo_depth)
| [fillfo_depthccN](fillfo_depthccN)
| [fillfo_depthchanaft](fillfo_depthchanaft)
| [fillfo_depthpolyaft](fillfo_depthpolyaft)
| [fillfo_freqccN](fillfo_freqccN)
| [fillfo_freqchanaft](fillfo_freqchanaft)
| [fillfo_freqpolyaft](fillfo_freqpolyaft)
|  ***Per-Voice EQ***
| [eq1_freq](eqN_freq)
| [eq2_freq](eqN_freq)
| [eq3_freq](eqN_freq)
| [eq1_freqcc](eqN_freq)
| [eq2_freqcc](eqN_freq)
| [eq3_freqcc](eqN_freq)
| [eq1_vel2freq](eqN_vel2freq)
| [eq2_vel2freq](eqN_vel2freq)
| [eq3_vel2freq](eqN_vel2freq)
| [eq1_bw](eqN_bw)
| [eq2_bw](eqN_bw)
| [eq3_bw](eqN_bw)
| [eq1_bwcc](eqN_bw)
| [eq2_bwcc](eqN_bw)
| [eq3_bwcc](eqN_bw)
| [eq1_gain](eqN_gain)
| [eq2_gain](eqN_gain)
| [eq3_gain](eqN_gain)
| [eq1_gaincc](eqN_gain)
| [eq2_gaincc](eqN_gain)
| [eq3_gaincc](eqN_gain)
| [eq1_vel2gain](eqN_vel2gain)
| [eq2_vel2gain](eqN_vel2gain)
| [eq3_vel2gain](eqN_vel2gain)
|  ***Effects***
| [effect1](effect1)
| [effect2](effect2)
