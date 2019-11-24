/**
	@license
	Copyright (C) 2019 RedTide <redtid3@gmail.com>

	Licensed under the Apache License, Version 2.0 (the "License");
	you may not use this file except in compliance with the License.
	You may obtain a copy of the License at

	http://www.apache.org/licenses/LICENSE-2.0

	Unless required by applicable law or agreed to in writing, software
	distributed under the License is distributed on an "AS IS" BASIS,
	WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	See the License for the specific language governing permissions and
	limitations under the License.
*/
/**
	@fileoverview
	Registers a language handler for SFZ format.

	To use, include prettify.js and this file in your HTML page.
	Then put your code in an HTML tag like
	<pre class="prettyprint lang-sfz">...</pre>

	@author redtid3@gmail.com
*/
PR['registerLangHandler'](
	PR['createSimpleLexer'](
		[
			// Whitespace is made up of spaces, tabs and newline characters.
			[PR['PR_PLAIN'], /^[\t\n\r \xA0]+/, null, '\t\n\r \xA0'],

			// TODO: ?
			//[PR['PR_PUNCTUATION'], /^[=]/, null, '='],

			// Highlight strings not supported
			[PR['PR_STRING'], /^\"(?:[^\"\\]|\\[\s\S])*(?:\"|$)/, null, '"']
		],
		[
			// Opcodes and directives
			[PR['PR_KEYWORD'],
			/^(?:#define|#include|amp_keycenter|amp_keytrack|amp_random|amp_velcurve_([0-9]*)|amp_veltrack|ampeg_attack|ampeg_attack_oncc([0-9]*)|ampeg_attack_shape|ampeg_attackcc([0-9]*)|ampeg_decay|ampeg_decay_oncc([0-9]*)|ampeg_decay_shape|ampeg_decay_zero|ampeg_decaycc([0-9]*)|ampeg_delay|ampeg_delay_oncc([0-9]*)|ampeg_delaycc([0-9]*)|ampeg_hold|ampeg_hold_oncc([0-9]*)|ampeg_holdcc([0-9]*)|ampeg_release|ampeg_release_oncc([0-9]*)|ampeg_release_shape|ampeg_release_zero|ampeg_releasecc([0-9]*)|ampeg_start|ampeg_start_onccN([0-9]*)|ampeg_startccN([0-9]*)|ampeg_sustain|ampeg_sustain_oncc([0-9]*)|ampeg_sustaincc([0-9]*)|ampeg_vel2attack|ampeg_vel2decay|ampeg_vel2delay|ampeg_vel2hold|ampeg_vel2release|ampeg_vel2sustain|amplfo_delay|amplfo_depth|amplfo_depthcc([0-9]*)|amplfo_depthchanaft|amplfo_depthpolyaft|amplfo_fade|amplfo_freq|amplfo_freqcc([0-9]*)|amplfo_freqchanaft|amplfo_freqpolyaft|amplitude|amplitude_cc([0-9]*)|amplitude_curvecc([0-9]*)|amplitude_oncc([0-9]*)|amplitude_smoothcc([0-9]*)|bend_down|bend_smooth|bend_step|bend_stepdown|bend_stepup|bend_up|benddown|bendstep|bendup|count|curve_index|cutoff|cutoff2|cutoff2_curvecc([0-9]*)|cutoff2_oncc([0-9]*)|cutoff2_smoothcc([0-9]*)|cutoff2_stepcc([0-9]*)|cutoff_cc([0-9]*)|cutoff_chanaft|cutoff_curvecc([0-9]*)|cutoff_oncc([0-9]*)|cutoff_polyaft|cutoff_smoothcc([0-9]*)|cutoff_stepcc([0-9]*)|default_path|delay|delay_beats|delay_cc([0-9]*)|delay_random|delay_samples|delay_samples_oncc([0-9]*)|direction|directives|effect1|effect2|eg([0-9]*)_amplitude([0-9]*)|eg([0-9]*)_amplitude([0-9]*)_oncc([0-9]*)|eg([0-9]*)_curve([0-9]*)|eg([0-9]*)_cutoff|eg([0-9]*)_cutoff2|eg([0-9]*)_cutoff2_oncc([0-9]*)|eg([0-9]*)_cutoff_oncc([0-9]*)|eg([0-9]*)_depth_lfo([0-9]*)|eg([0-9]*)_depthadd_lfo([0-9]*)|eg([0-9]*)_eq([0-9]*)bw|eg([0-9]*)_eq([0-9]*)bw_oncc([0-9]*)|eg([0-9]*)_eq([0-9]*)freq|eg([0-9]*)_eq([0-9]*)freq_oncc([0-9]*)|eg([0-9]*)_eq([0-9]*)gain|eg([0-9]*)_eq([0-9]*)gain_oncc([0-9]*)|eg([0-9]*)_freq_lfo([0-9]*)|eg([0-9]*)_level([0-9]*)|eg([0-9]*)_level([0-9]*)_oncc([0-9]*)|eg([0-9]*)_loop|eg([0-9]*)_loop_count|eg([0-9]*)_pan([0-9]*)|eg([0-9]*)_pan([0-9]*)_oncc([0-9]*)|eg([0-9]*)_pan_curve|eg([0-9]*)_pan_curvecc([0-9]*)|eg([0-9]*)_pitch|eg([0-9]*)_pitch_oncc([0-9]*)|eg([0-9]*)_pitch_oncc([0-9]*)|eg([0-9]*)_points|eg([0-9]*)_resonance|eg([0-9]*)_resonance2|eg([0-9]*)_resonance2_oncc([0-9]*)|eg([0-9]*)_resonance_oncc([0-9]*)|eg([0-9]*)_shape|eg([0-9]*)_shape([0-9]*)|eg([0-9]*)_sustain([0-9]*)|eg([0-9]*)_time([0-9]*)|eg([0-9]*)_time([0-9]*)_oncc([0-9]*)|eg([0-9]*)_volume([0-9]*)|eg([0-9]*)_volume([0-9]*)_oncc([0-9]*)|eg([0-9]*)_width([0-9]*)|eg([0-9]*)_width([0-9]*)_oncc([0-9]*)|end|eq1_bw|eq1_bwcc([0-9]*)|eq1_freq|eq1_freqcc([0-9]*)|eq1_gain|eq1_gaincc([0-9]*)|eq1_vel2freq|eq1_vel2gain|eq2_bw|eq2_bwcc([0-9]*)|eq2_freq|eq2_freqcc([0-9]*)|eq2_gain|eq2_gaincc([0-9]*)|eq2_vel2freq|eq2_vel2gain|eq3_bw|eq3_bwcc([0-9]*)|eq3_freq|eq3_freqcc([0-9]*)|eq3_gain|eq3_gaincc([0-9]*)|eq3_vel2freq|eq3_vel2gain|fil2_type|fil_keycenter|fil_keytrack|fil_random|fil_type|fil_veltrack|fileg_attack|fileg_decay|fileg_delay|fileg_depth|fileg_hold|fileg_release|fileg_start|fileg_sustain|fileg_vel2attack|fileg_vel2decay|fileg_vel2delay|fileg_vel2depth|fileg_vel2hold|fileg_vel2release|fileg_vel2sustain|fillfo_delay|fillfo_depth|fillfo_depthcc([0-9]*)|fillfo_depthchanaft|fillfo_depthpolyaft|fillfo_fade|fillfo_freq|fillfo_freqcc([0-9]*)|fillfo_freqchanaft|fillfo_freqpolyaft|filtype|gain_cc([0-9]*)|gain_oncc([0-9]*)|global_amplitude|global_volume|group|group_amplitude|group_volume|hibend|hibpm|hicc([0-9]*)|hichan|hichanaft|hihdcc([0-9]*)|hikey|hint_([a-z]*)|hipolyaft|hiprog|hirand|hitimer|hivel|key|label_cc([0-9]*)|lfo([0-9]*)_amplitude|lfo([0-9]*)_amplitude_oncc([0-9]*)|lfo([0-9]*)_amplitude_smoothcc([0-9]*)|lfo([0-9]*)_amplitude_stepcc([0-9]*)|lfo([0-9]*)_count|lfo([0-9]*)_cutoff|lfo([0-9]*)_cutoff2|lfo([0-9]*)_cutoff2_oncc([0-9]*)|lfo([0-9]*)_cutoff2_smoothcc([0-9]*)|lfo([0-9]*)_cutoff2_stepcc([0-9]*)|lfo([0-9]*)_cutoff_oncc([0-9]*)|lfo([0-9]*)_cutoff_smoothcc([0-9]*)|lfo([0-9]*)_cutoff_stepcc([0-9]*)|lfo([0-9]*)_delay|lfo([0-9]*)_delay_oncc([0-9]*)|lfo([0-9]*)_depth_lfo([0-9]*)|lfo([0-9]*)_depthadd_lfo([0-9]*)|lfo([0-9]*)_eq([0-9]*)bw|lfo([0-9]*)_eq([0-9]*)bw_oncc([0-9]*)|lfo([0-9]*)_eq([0-9]*)bw_smoothcc([0-9]*)|lfo([0-9]*)_eq([0-9]*)bw_stepcc([0-9]*)|lfo([0-9]*)_eq([0-9]*)freq|lfo([0-9]*)_eq([0-9]*)freq_oncc([0-9]*)|lfo([0-9]*)_eq([0-9]*)freq_smoothcc([0-9]*)|lfo([0-9]*)_eq([0-9]*)freq_stepcc([0-9]*)|lfo([0-9]*)_eq([0-9]*)gain|lfo([0-9]*)_eq([0-9]*)gain_oncc([0-9]*)|lfo([0-9]*)_eq([0-9]*)gain_smoothcc([0-9]*)|lfo([0-9]*)_eq([0-9]*)gain_stepcc([0-9]*)|lfo([0-9]*)_fade|lfo([0-9]*)_fade_oncc([0-9]*)|lfo([0-9]*)_freq|lfo([0-9]*)_freq_lfo([0-9]*)|lfo([0-9]*)_freq_lfo([0-9]*)_oncc([0-9]*)|lfo([0-9]*)_freq_oncc([0-9]*)|lfo([0-9]*)_freq_smoothcc([0-9]*)|lfo([0-9]*)_freq_stepcc([0-9]*)|lfo([0-9]*)_offset([0-9]*)|lfo([0-9]*)_pan|lfo([0-9]*)_pan_oncc([0-9]*)|lfo([0-9]*)_pan_smoothcc([0-9]*)|lfo([0-9]*)_pan_stepcc([0-9]*)|lfo([0-9]*)_phase|lfo([0-9]*)_phase_oncc([0-9]*)|lfo([0-9]*)_pitch|lfo([0-9]*)_pitch_oncc([0-9]*)|lfo([0-9]*)_pitch_smoothcc([0-9]*)|lfo([0-9]*)_pitch_stepcc([0-9]*)|lfo([0-9]*)_ratio|lfo([0-9]*)_resonance|lfo([0-9]*)_resonance2|lfo([0-9]*)_resonance2_oncc([0-9]*)|lfo([0-9]*)_resonance2_smoothcc([0-9]*)|lfo([0-9]*)_resonance2_stepcc([0-9]*)|lfo([0-9]*)_resonance_oncc([0-9]*)|lfo([0-9]*)_resonance_smoothcc([0-9]*)|lfo([0-9]*)_resonance_stepcc([0-9]*)|lfo([0-9]*)_scale|lfo([0-9]*)_smooth|lfo([0-9]*)_smooth_oncc([0-9]*)|lfo([0-9]*)_step([0-9]*)|lfo([0-9]*)_steps|lfo([0-9]*)_volume|lfo([0-9]*)_volume_oncc([0-9]*)|lfo([0-9]*)_volume_smoothcc([0-9]*)|lfo([0-9]*)_volume_stepcc([0-9]*)|lfo([0-9]*)_wave|lfo([0-9]*)_wave2|lfo([0-9]*)_wave_oncc([0-9]*)|lfo([0-9]*)_width|lfo([0-9]*)_width_oncc([0-9]*)|lfo([0-9]*)_width_smoothcc([0-9]*)|lfo([0-9]*)_width_stepcc([0-9]*)|lobend|lobpm|locc([0-9]*)|lochan|lochanaft|lohdcc([0-9]*)|lokey|loop_count|loop_crossfade|loop_end|loop_mode|loop_start|loop_type|loopend|loopmode|loopstart|lopolyaft|loprog|lorand|lotimer|lovel|master_amplitude|master_volume|md5|note_offset|note_polyphony|note_selfmask|octave_offset|off_by|off_curve|off_mode|off_shape|off_time|offset|offset_cc([0-9]*)|offset_random|on_hicc([0-9]*)|on_locc([0-9]*)|output|pan|pan_cc([0-9]*)|pan_curvecc([0-9]*)|pan_law|pan_oncc([0-9]*)|pan_smoothcc([0-9]*)|pan_stepcc([0-9]*)|param_offset|phase|pitch_curvecc([0-9]*)|pitch_keycenter|pitch_keytrack|pitch_oncc([0-9]*)|pitch_random|pitch_smoothcc([0-9]*)|pitch_stepcc([0-9]*)|pitch_veltrack|pitcheg_attack|pitcheg_decay|pitcheg_delay|pitcheg_delay_oncc([0-9]*)|pitcheg_depth|pitcheg_depth_oncc([0-9]*)|pitcheg_hold|pitcheg_release|pitcheg_start|pitcheg_sustain|pitcheg_vel2attack|pitcheg_vel2decay|pitcheg_vel2delay|pitcheg_vel2depth|pitcheg_vel2hold|pitcheg_vel2release|pitchlfo_delay|pitchlfo_depth|pitchlfo_depth_oncc([0-9]*)|pitchlfo_depthcc([0-9]*)|pitchlfo_depthchanaft|pitchlfo_depthpolyaft|pitchlfo_fade|pitchlfo_freq|pitchlfo_freqcc([0-9]*)|pitchlfo_freqchanaft|pitchlfo_freqpolyaft|polyphony|polyphony_group|position|resonance|resonance2|resonance2_cc([0-9]*)|resonance2_curvecc([0-9]*)|resonance2_oncc([0-9]*)|resonance2_smoothcc([0-9]*)|resonance2_stepcc([0-9]*)|resonance_cc([0-9]*)|resonance_curvecc([0-9]*)|resonance_oncc([0-9]*)|resonance_smoothcc([0-9]*)|resonance_stepcc([0-9]*)|reverse_hicc([0-9]*)|reverse_locc([0-9]*)|rt_dead|rt_decay|sample|seq_length|seq_position|set_cc([0-9]*)|set_hdcc([0-9]*)|sostenuto_cc|sostenuto_lo|sostenuto_sw|start_hicc([0-9]*)|start_locc([0-9]*)|stop_beats|stop_hicc([0-9]*)|stop_locc([0-9]*)|sustain_cc|sustain_lo|sustain_sw|sw_default|sw_down|sw_hikey|sw_hilast|sw_label|sw_last|sw_lokey|sw_lolast|sw_note_offset|sw_octave_offset|sw_previous|sw_up|sw_vel|sync_beats|sync_offset|transpose|trigger|tune|v([0-9]*)|vendor_specific|volume|volume_curvecc([0-9]*)|volume_oncc([0-9]*)|volume_smoothcc([0-9]*)|volume_stepcc([0-9]*)|waveguide|width|width_oncc([0-9]*)|xf_cccurve|xf_keycurve|xf_velcurve|xfin_hicc([0-9]*)|xfin_hikey|xfin_hivel|xfin_locc([0-9]*)|xfin_lokey|xfin_lovel|xfout_hicc([0-9]*)|xfout_hikey|xfout_hivel|xfout_locc([0-9]*)|xfout_lokey|xfout_lovel)\b/, null],

			// TODO: Values: anything between '=' and a space or the end of line,
			// excluding single line and block comments (see basic_sfz_file tutorial)
			//[PR['PR_LITERAL'], /(=)(.*?)( |$|\n)/],

			// Block comments are delimited by /* and */.
			// Single-line comments begin with // and extend to the end of a line.
			[PR['PR_COMMENT'], /^(?:\/\/[^\r\n]*|\/\*[\s\S]*?\*\/)/],

			// Header tags
			[PR['PR_TAG'], /\<[a-z]*\>/]
		]),
['sfz']);
