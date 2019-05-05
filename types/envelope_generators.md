---
title: Envelope Generators
---
Envelope Generator opcodes are part of the [Modulation](/opcodes/categories#modulation)
category of opcodes:

#### SFZ 1 EGs

The 3 EG destinations in the SFZ 1 standard are: ampeg (amplitude),
fileg (filter) and pitcheg (pitch).

The EG destinations are represented by (eg type) in the below list - so
`ampeg_attack` would be the amplitude envelope attack, `pitcheg_sustain` would be
the pitch envelope sustain level etc.

These are 6-points Delay-Attack-Hold-Decay-Sustain-Release.

- [(eg type)_attack](/opcodes/(eg_type)_attack)
- [(eg type)_attack_oncc](/opcodes/(eg_type)_attack)
- [(eg type)_decay](/opcodes/(eg_type)_decay)
- [(eg type)_decay_oncc](/opcodes/(eg_type)_decay)
- [(eg type)_delay](/opcodes/(eg_type)_delay)
- [(eg type)_delay_oncc](/opcodes/(eg_type)_delay)
- [(eg type)_depth](/opcodes/(eg_type)_depth)
- [(eg type)_hold](/opcodes/(eg_type)_hold)
- [(eg type)_hold_oncc](/opcodes/(eg_type)_hold)
- [(eg type)_release](/opcodes/(eg_type)_release)
- [(eg type)_release_oncc](/opcodes/(eg_type)_release)
- [(eg type)_start](/opcodes/(eg_type)_start)
- [(eg type)_start_oncc](/opcodes/(eg_type)_start)
- [(eg type)_sustain](/opcodes/(eg_type)_sustain)
- [(eg type)_sustain_oncc](/opcodes/(eg_type)_sustain)
- [(eg type)_vel2attack](/opcodes/(eg_type)_vel2attack)
- [(eg type)_vel2decay](/opcodes/(eg_type)_vel2decay)
- [(eg type)_vel2delay](/opcodes/(eg_type)_vel2delay)
- [(eg type)_vel2depth](/opcodes/(eg_type)_vel2depth)
- [(eg type)_vel2hold](/opcodes/(eg_type)_vel2hold)
- [(eg type)_vel2release](/opcodes/(eg_type)_vel2release)
- [(eg type)_vel2sustain](/opcodes/(eg_type)_vel2sustain)

#### Flex EGs (SFZ 2)

Flexible EG can have as many points as needed. level and time for each point is
set accordingly.

- [egN_curve](/opcodes/egN_curve)
- [egN_level](/opcodes/egN_level)
- [egN_level_onccX](/opcodes/egN_level)
- [egN_loop](/opcodes/egN_loop)
- [egN_points](/opcodes/egN_points)
- [egN_shapeX](/opcodes/egN_shapeX)
- [egN_sustain](/opcodes/egN_sustain)
- [egN_time](/opcodes/egN_time)
- [egN_time_onccX](/opcodes/egN_time)

#### Flex EGs destinations

These destinations are added as a suffix to 'egN_' - for example,
eg01_pitch=2400 would have envelope 01 modulate pitch,
with an envelope depth of 2400 cents.

- amplitude
- amplitude_oncc
- depth
- depth_lfo
- depth_oncc
- depthadd_lfo
- freq_lfo
- pitch
- pitch_oncc
- cutoff
- cutoff_oncc
- cutoff2
- cutoff2_oncc
- eqNbw
- eqNbw_oncc
- eqNfreq
- eqNfreq_oncc
- eqNgain
- eqNgain_oncc
- pan
- pan_oncc
- resonance
- resonance_oncc
- resonance2
- resonance2_oncc
- volume
- volume_oncc
- width
- width_oncc 
