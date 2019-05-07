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
			[PR['PR_PUNCTUATION'], /^[=]/, null, '='],
			// Highlight strings not supported
			[PR['PR_STRING'], /^\"(?:[^\"\\]|\\[\s\S])*(?:\"|$)/, null, '"']
		],
		[
			// Opcodes and directives
			[PR['PR_KEYWORD'],
			/^(?:amp_keycenter|amp_keytrack|amp_random|amp_velcurve_|amp_veltrack|ampeg_attack|ampeg_attack_oncc([0-9]*)|ampeg_decay|ampeg_decay_oncc([0-9]*)|ampeg_delay|ampeg_delay_oncc([0-9]*)|ampeg_hold|ampeg_hold_oncc([0-9]*)|ampeg_release|ampeg_release_oncc([0-9]*)|ampeg_start|ampeg_sustain|ampeg_sustain_oncc([0-9]*)|ampeg_vel2attack|ampeg_vel2decay|ampeg_vel2delay|ampeg_vel2hold|ampeg_vel2release|ampeg_vel2sustain|amplfo_delay|amplfo_depth|amplfo_depthcc([0-9]*)|amplfo_depthchanaft|amplfo_depthpolyaft|amplfo_fade|amplfo_freq|amplfo_freqcc([0-9]*)|amplfo_freqchanaft|amplfo_freqpolyaft|bend_down|bend_step|bend_up|benddown|bendstep|bendup|count|cutoff|cutoff_oncc([0-9]*)|cutoff_chanaft|cutoff_polyaft|delay|delay_cc([0-9]*)|delay_random|effect1|effect2|end|eq1_bw|eq1_bwcc([0-9]*)|eq1_freq|eq1_freqcc([0-9]*)|eq1_gain|eq1_gaincc([0-9]*)|eq1_vel2freq|eq1_vel2gain|eq2_bw|eq2_bwcc([0-9]*)|eq2_freq|eq2_freqcc([0-9]*)|eq2_gain|eq2_gaincc([0-9]*)|eq2_vel2freq|eq2_vel2gain|eq3_bw|eq3_bwcc([0-9]*)|eq3_freq|eq3_freqcc([0-9]*)|eq3_gain|eq3_gaincc([0-9]*)|eq3_vel2freq|eq3_vel2gain|fil_keycenter|fil_keytrack|fil_random|fil_type|fil_veltrack|fileg_attack|fileg_decay|fileg_delay|fileg_depth|fileg_hold|fileg_release|fileg_start|fileg_sustain|fileg_vel2attack|fileg_vel2decay|fileg_vel2delay|fileg_vel2depth|fileg_vel2hold|fileg_vel2release|fileg_vel2sustain|fillfo_delay|fillfo_depth|fillfo_depthcc([0-9]*)|fillfo_depthchanaft|fillfo_depthpolyaft|fillfo_fade|fillfo_freq|fillfo_freqcc([0-9]*)|fillfo_freqchanaft|fillfo_freqpolyaft|filtype|gain_cc([0-9]*)|group|hibend|hibpm|hicc([0-9]*)|hichan|hichanaft|hikey|hipolyaft|hirand|hivel|key|lobend|lobpm|locc([0-9]*)|lochan|lochanaft|lokey|loop_end|loop_mode|loop_start|loopend|loopmode|loopstart|lopolyaft|lorand|lovel|off_by|off_mode|offset|offset_cc([0-9]*)|offset_random|on_hicc([0-9]*)|on_locc([0-9]*)|output|pan|pitch_keycenter|pitch_keytrack|pitch_random|pitch_veltrack|pitcheg_attack|pitcheg_decay|pitcheg_delay|pitcheg_depth|pitcheg_hold|pitcheg_release|pitcheg_start|pitcheg_sustain|pitcheg_vel2attack|pitcheg_vel2decay|pitcheg_vel2delay|pitcheg_vel2depth|pitcheg_vel2hold|pitcheg_vel2release|pitchlfo_delay|pitchlfo_depth|pitchlfo_depthcc([0-9]*)|pitchlfo_depthchanaft|pitchlfo_depthpolyaft|pitchlfo_fade|pitchlfo_freq|pitchlfo_freqcc([0-9]*)|pitchlfo_freqchanaft|pitchlfo_freqpolyaft|position|resonance|rt_decay|sample|seq_length|seq_position|sw_down|sw_hikey|sw_last|sw_lokey|sw_previous|sw_up|sw_vel|sync_beats|sync_offset|transpose|trigger|tune|volume|width|xf_cccurve|xf_keycurve|xf_velcurve|xfin_hicc([0-9]*)|xfin_hikey|xfin_hivel|xfin_locc([0-9]*)|xfin_lokey|xfin_lovel|xfout_hicc([0-9]*)|xfout_hikey|xfout_hivel|xfout_locc([0-9]*)|xfout_lokey|xfout_lovel|#define|bend_smooth|bend_stepdown|bend_stepup|cutoff2|cutoff2_oncc([0-9]*)|default_path|delay_beats|direction|fil2_type|hiprog|hitimer|label_cc([0-9]*)|loop_count|loop_crossfade|loop_type|loprog|lotimer|md5|note_offset|note_polyphony|note_selfmask|octave_offset|phase|polyphony|resonance|resonance2|resonance2_oncc([0-9]*)|resonance_oncc([0-9]*)|reverse_hicc([0-9]*)|reverse_locc([0-9]*)|rt_dead|set_cc([0-9]*)|sostenuto_sw|start_hicc([0-9]*)|start_locc([0-9]*)|stop_beats|stop_hicc([0-9]*)|stop_locc([0-9]*)|sustain_sw|volume|volume_oncc([0-9]*)|waveguide|width|width_oncc([0-9]*)|#include|ampeg_attack_shape|ampeg_decay_shape|ampeg_decay_zero|ampeg_release_shape|ampeg_release_zero|amplitude|amplitude_curvecc([0-9]*)|amplitude_oncc([0-9]*)|amplitude_smoothcc([0-9]*)|curve_index|directives|global_amplitude|global_volume|group_amplitude|group_volume|hihdcc([0-9]*)|hint_|lo_hihdcc([0-9]*)|lohdcc([0-9]*)|master_amplitude|master_volume|off_curve|off_mode|off_shape|off_time|pan_law|param_offset|polyphony_group|set_hdcc([0-9]*)|sostenuto_cc|sostenuto_lo|sustain_cc|sustain_lo|sw_default|sw_label|sw_hilast|sw_label|sw_lolast|sw_note_offset|sw_octave_offset|vendor_specific|volume_oncc([0-9]*))\b/, null],
			[PR['PR_LITERAL'], /^[+\-]?(?:[0#]x[0-9a-f]+|\d+\/\d+|(?:\.\d+|\d+(?:\.\d*)?)(?:[ed][+\-]?\d+)?)/i],
			// Block comments are delimited by /* and */.
			// Single-line comments begin with // and extend to the end of a line.
			[PR['PR_COMMENT'], /^(?:\/\/[^\r\n]*|\/\*[\s\S]*?\*\/)/],
			// Header tags
			[PR['PR_TAG'], /\<[a-z]*\>/]
		]),
['sfz']);
