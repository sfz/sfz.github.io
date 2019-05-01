---
---
# ARIA Extensions Opcodes (SFZ 3 hopefuls)

ARIA also adds some [extended MIDI CCs](/extensions/aria/midi_cc) in addition
to those already added by [SFZ 2](/opcodes/sfz2),
and [XML instrument banks](/extensions/aria/xml_instrument_bank) as a way of
organizing multiple SFZ instruments and configuring graphical user interfaces.

[curve_index](/opcodes/curve_index)

## [Instrument settings](/opcodes/categories#instrument-settings)

| Opcode                                                     |  Aria   | LinuxSampler |
| ---                                                        |  :---:  |    :---:     |
| [hint_*](/opcodes/hint_)                                   |    ✓    |      X       |
| [set_hdccN](/opcodes/set_hdccN)                            |    ✓    |      X       |

<br>

## [Instrument settings](/opcodes/categories#instrument-settings): Voice Lifecycle

| Opcode                                                     |  Aria   | LinuxSampler |
| ---                                                        |  :---:  |    :---:     |
| [off_curve](/opcodes/off_curve)                            |    ✓    |      X       |
| [off_mode](/opcodes/off_mode)=time                         |    ✓    |      X       |
| [off_shape](/opcodes/off_shape)                            |    ✓    |      X       |
| [off_time](/opcodes/off_time)                              |    ✓    |      X       |
| [polyphony_group](/opcodes/polyphony_group)                |    ✓    |      X       |

<br>

## [Region Logic](/opcodes/categories#region-logic): MIDI Conditions

| Opcode                                                     |  Aria   | LinuxSampler |
| ---                                                        |  :---:  |    :---:     |
| [lohdccN](/opcodes/lo_hihdccN)                             |    ✓    |      X       |
| [hihdccN](/opcodes/lo_hihdccN)                             |    ✓    |      X       |
| [sustain_cc](/opcodes/sustain_cc)                          |    ✓    |      X       |
| [sostenuto_cc](/opcodes/sostenuto_cc)                      |    ✓    |      X       |
| [sustain_lo](/opcodes/sustain_lo)                          |    ✓    |      X       |
| [sostenuto_lo](/opcodes/sostenuto_lo)                      |    ✓    |      X       |
| [sw_default](/opcodes/sw_default_label)                    |    ✓    |      X       |
| [sw_label](/opcodes/sw_default_label)                      |    ✓    |      X       |
| [sw_lolast](/opcodes/sw_lo_hilast)                         |    ✓    |      X       |
| [sw_hilast](/opcodes/sw_lo_hilast)                         |    ✓    |      X       |
| [varNN_curveccX](/opcodes/varNN_curveccX)                  |    ✓    |      X       |
| [varNN_mod](/opcodes/varNN_mod)                            |    ✓    |      X       |
| [varNN_onccX](/opcodes/varNN_onccX)                        |    ✓    |      X       |
| [varNN_target](/opcodes/varNN_target)                      |    ✓    |      X       |

<br>

## [Performance parameters](/opcodes/categories#performance-parameters): [Amplifier](/types/amplifier)

| Opcode                                                     |  Aria   | LinuxSampler |
| ---                                                        |  :---:  |    :---:     |
| [amplitude](/opcodes/amplitude)                            |    ✓    |      ✓       |
| [amplitude_curveccN](/opcodes/amplitude_curveccN)          |    ✓    |      X       |
| [amplitude_onccN](/opcodes/amplitude_onccN)                |    ✓    |      X       |
| [amplitude_smoothccN](/opcodes/amplitude_smoothccN)        |    ✓    |      X       |
| [global_amplitude](/opcodes/global_amplitude)              |    ✓    |      X       |
| [master_amplitude](/opcodes/master_amplitude)              |    ✓    |      X       |
| [group_amplitude](/opcodes/group_amplitude)                |    ✓    |      X       |
| [pan_law](/opcodes/pan_law)                                |    ✓    |      X       |
| [volume_onccN](/opcodes/volume_onccN)                      |    ✓    |      X       |

<br>

## [Modulation](/opcodes/categories#modulation): [Envelope Generators](/types/envelope_generators)

| Opcode                                                     |  Aria   | LinuxSampler |
| ---                                                        |  :---:  |    :---:     |
| [ampeg_attack_shape](/opcodes/ampeg_attack_shape)          |    ✓    |      X       |
| [ampeg_decay_shape](/opcodes/ampeg_decay_shape)            |    ✓    |      X       |
| [ampeg_decay_zero](/opcodes/ampeg_decay_zero)              |    ✓    |      X       |
| [ampeg_release_shape](/opcodes/ampeg_release_shape)        |    ✓    |      X       |
| [ampeg_release_zero](/opcodes/ampeg_release_zero)          |    ✓    |      X       |
| [egN_shapeX](/opcodes/egN_shapeX)                          |    ✓    |      X       |

<br>

## [Modulation](/opcodes/categories#modulation): [LFO](/types/lfo)

| Opcode                                                     |  Aria   | LinuxSampler |
| ---                                                        |  :---:  |    :---:     |
| [lfoN_offset/lfoN_offset2](/opcodes/lfoN_offset)           |    ✓    |      X       |
| [lfoN_ratio/lfoN_ratio2](/opcodes/lfoN_ratio)              |    ✓    |      X       |
| [lfoN_scale/lfoN_scale2](/opcodes/lfoN_scale)              |    ✓    |      X       |
| [lfoN_wave2](/opcodes/lfoN_wave2)                          |    ✓    |      X       |

<br>

## Effects

| Opcode                                                     | Aria  | LinuxSampler |
| ---                                                        | :---: |    :---:     |
| [param_offset](/opcodes/param_offset)                      |   ✓   |      X       |
| [vendor_specific](/opcodes/vendor_specific)                |   ✓   |      X       |

<br>

Source: [ARIA Engine](https://www.plogue.com/plgfrms/viewtopic.php?f=14&t=4389&sid=1499dd5d481dc9c02a51c57da3b11364)
