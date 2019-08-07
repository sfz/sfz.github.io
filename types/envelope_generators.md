---
title: Envelope Generators
lang: en
---
Envelope Generator opcodes are part of the [Modulation](/misc/categories#modulation)
category of opcodes:

#### SFZ 1 EGs

The 3 EG destinations in the SFZ 1 standard are: ampeg (amplitude),
fileg (filter) and pitcheg (pitch).

The EG destinations are represented by (eg type) in the below list - so
`ampeg_attack` would be the amplitude envelope attack, `pitcheg_sustain` would be
the pitch envelope sustain level etc.

These are 6-points Delay-Attack-Hold-Decay-Sustain-Release.

- [(eg type)_attack](/opcodes/ampeg_attack)
- [(eg type)_attack_oncc](/opcodes/ampeg_attack)
- [(eg type)_decay](/opcodes/ampeg_decay)
- [(eg type)_decay_oncc](/opcodes/ampeg_decay)
- [(eg type)_delay](/opcodes/ampeg_delay)
- [(eg type)_delay_oncc](/opcodes/ampeg_delay)
- [(eg type)_depth](/opcodes/ampeg_depth)
- [(eg type)_hold](/opcodes/ampeg_hold)
- [(eg type)_hold_oncc](/opcodes/ampeg_hold)
- [(eg type)_release](/opcodes/ampeg_release)
- [(eg type)_release_oncc](/opcodes/ampeg_release)
- [(eg type)_start](/opcodes/ampeg_start)
- [(eg type)_start_oncc](/opcodes/ampeg_start)
- [(eg type)_sustain](/opcodes/ampeg_sustain)
- [(eg type)_sustain_oncc](/opcodes/ampeg_sustain)
- [(eg type)_vel2attack](/opcodes/ampeg_vel2attack)
- [(eg type)_vel2decay](/opcodes/ampeg_vel2decay)
- [(eg type)_vel2delay](/opcodes/ampeg_vel2delay)
- [(eg type)_vel2depth](/opcodes/ampeg_vel2depth)
- [(eg type)_vel2hold](/opcodes/ampeg_vel2hold)
- [(eg type)_vel2release](/opcodes/ampeg_vel2release)
- [(eg type)_vel2sustain](/opcodes/ampeg_vel2sustain)

#### Flex EGs (SFZ 2)

Flexible EG can have as many points as needed. level and time for each point is
set accordingly.

- [egN_curveX](/opcodes/egN_curveX)
- [egN_levelX](/opcodes/egN_levelX)
- [egN_levelX_onccY](/opcodes/egN_levelX)
- [egN_loop](/opcodes/egN_loop)
- [egN_points](/opcodes/egN_points)
- [egN_shapeX](/opcodes/egN_shapeX)
- [egN_sustain](/opcodes/egN_sustain)
- [egN_timeX](/opcodes/egN_timeX)
- [egN_timeX_onccY](/opcodes/egN_timeX)

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
