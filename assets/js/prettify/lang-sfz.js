---
layout: null
---
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
			/^(?:{%-include sfz/prettify-opcodes-generator.liquid-%})\b/, null],

			// Values: valid characters between '=' and a space or the end of line,
			// excluding single line and block comments (see basic_sfz_file tutorial)
			// FIXME: Can't use slash because 'PR_COMMENTs' are not excluded here,
			//        so sample=/path/to/file.wav value will not be parsed.
			[PR['PR_LITERAL'], /(=([A-Za-z_\-\\0-9#*.]+?)( |$|\n))/],

			// Block comments are delimited by /* and */.
			// Single-line comments begin with // and extend to the end of a line.
			[PR['PR_COMMENT'], /(?:\/\/[^\r\n]*|\/\*[\s\S]*?\*\/)/],

			// Header tags
			[PR['PR_TAG'], /\<[a-z]*\>/]
		]),
['sfz']);
