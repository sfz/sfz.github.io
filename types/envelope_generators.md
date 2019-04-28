---
---
# Envelope Generators

Envelope Generator opcodes are part of the [Modulation](/categories/modulation)
category of opcodes:

#### SFZ 1 EGs

The 3 EG destinations in the SFZ 1 standard are: ampeg (amplitude),
fileg (filter) and pitcheg (pitch).

The EG destinations are represented by (eg type) in the below list - so
`ampeg_attack` would be the amplitude envelope attack, `pitcheg_sustain` would be
the pitch envelope sustain level etc.

These are 6-points Delay-Attack-Hold-Decay-Sustain-Release.

[(eg type)_start](/opcodes/(eg_type)_start)

[(eg type)_delay](/opcodes/(eg_type)_delay)

[(eg type)_attack](/opcodes/(eg_type)_attack)

[(eg type)_hold](/opcodes/(eg_type)_hold)

[(eg type)_decay](/opcodes/(eg_type)_decay)

[(eg type)_sustain](/opcodes/(eg_type)_sustain)

[(eg type)_release](/opcodes/(eg_type)_release)

[(eg type)_depth](/opcodes/(eg_type)_depth)
<br/><br/>

[(eg type)_start_oncc](/opcodes/(eg_type)_start_oncc)

[(eg type)_delay_oncc](/opcodes/(eg_type)_delay_oncc)

[(eg type)_attack_oncc](/opcodes/(eg_type)_attack_oncc)

[(eg type)_hold_oncc](/opcodes/(eg_type)_hold_oncc)

[(eg type)_decay_oncc](/opcodes/(eg_type)_decay_oncc)

[(eg type)_sustain_oncc](/opcodes/(eg_type)_sustain_oncc)

[(eg type)_release_oncc](/opcodes/(eg_type)_release_oncc)
<br/><br/>

[(eg type)_vel2delay](/opcodes/(eg_type)_vel2delay)

[(eg type)_vel2attack](/opcodes/(eg_type)_vel2attack)

[(eg type)_vel2hold](/opcodes/(eg_type)_vel2hold)

[(eg type)_vel2decay](/opcodes/(eg_type)_vel2decay)

[(eg type)_vel2sustain](/opcodes/(eg_type)_vel2sustain)

[(eg type)_vel2release](/opcodes/(eg_type)_vel2release)

[(eg type)_vel2depth](/opcodes/(eg_type)_vel2depth)

#### Flex EGs (SFZ 2)

Flexible EG can have as many points as needed. level and time for each point is
set accordingly.

[egN_points](/opcodes/(egN_points)

[egN_time](/opcodes/(egN_time)

[egN_level](/opcodes/(egN_level)

[egN_shape](/opcodes/(egN_shape)

[egN_curve](/opcodes/(egN_curve)

[egN_sustain](/opcodes/(egN_sustain)

[egN_loop](/opcodes/(egN_loop)

[egN_time_oncc](/opcodes/(egN_time_oncc)

[egN_level_oncc](/opcodes/(egN_level_oncc)

#### Flex EGs destinations

These destinations are added as a suffix to 'egN_' - for example,
eg01_pitch=2400 would have envelope 01 modulate pitch,
with an envelope depth of 2400 cents.

freq_lfo

depth_lfo

depthadd_lfo

pitch

pitch_oncc

depth

depth_oncc

cutoff

cutoff_oncc

resonance

resonance_oncc

cutoff2

cutoff2_oncc

resonance2

resonance2_oncc

eqNfreq

eqNfreq_oncc

eqNbw

eqNbw_oncc

eqNgain

eqNgain_oncc

volume

volume_oncc

amplitude

amplitude_oncc

pan

pan_oncc

width

width_oncc 
