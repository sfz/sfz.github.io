$(function() {
/*
	Reads a search parameter from URL if any, e.g.:
	https://sfzformat.com/aria/?q=ampeg_decay

	c (category):  see _data/sfz/syntax.yml categories ids
	q (query):     any string contained in the opcode name
	s (supported): y, n , w (yes/no/wip)
	v (version):   1, 2, aria, cakewalk, linuxsampler
*/
const urlParams = new URLSearchParams(window.location.search);
var   hasParams = false;

urlParams.forEach(function(value, key) {
	if (key === 'q') {
		if (value === '') return;
		hasParams = true;
		$('#search-opcodes').val(value);
	}
	else if (key === 'c' || key === 's' || key === 'v') {
		if (value === '') return;
		hasParams = true;
		var values = value.split(',');
		$.each(values, function(_, v) {
			$(`#chk-${v}`).prop('checked', true);
		});
	}
});
var $opcodeTable = $('#aria-opcodes');
var $opcodeSearch = $('#search-opcodes');
var $versionFilters = $('.versions-checkbox');
var $categoryFilters = $('.categories-checkbox');
var $supportFilters = $('.support-checkbox');

var categoryColumnNumber = 0;
var opcodeColumnNumber = 1;
var versionColumnNumber = 2;
var supportColumnNumber = 3;

var updateTable = function() {
	var searchText = $opcodeSearch.val();
	var activeVersionFilters = $versionFilters.filter(':checked')
			.map(function() { return $(this).val(); }).toArray();
	var activeCategoryFilters = $categoryFilters.filter(':checked')
			.map(function() { return $(this).val(); }).toArray();
	var activeSupportFilters = $supportFilters.filter(':checked')
			.map(function() { return $(this).val(); }).toArray();

	var acceptRow = function($row) {
		if (searchText !== "") {
			var text = $row.find('td').eq(opcodeColumnNumber).text();
			if (!text.includes(searchText))
				return false;
		}
		if (activeVersionFilters.length > 0) {
			var text = $row.find('td').eq(versionColumnNumber).text();
			if (!activeVersionFilters.includes(text))
				return false;
		}
		if (activeCategoryFilters.length > 0) {
			var text = $row.find('td').eq(categoryColumnNumber).text();
			if (!activeCategoryFilters.includes(text))
				return false;
		}
		if (activeSupportFilters.length > 0) {
			var text = $row.find('td').eq(supportColumnNumber).text();
			if (!activeSupportFilters.includes(text))
				return false;
		}
		return true;
	};
	// go over all rows and apply the filter function
	$('tbody tr', self.$table).each(function() {
		var $row = $(this);
		if (acceptRow($row))
			$row.show();
		else
			$row.hide();
	});
};
// update the rows on checkbox toggled, or search box edited
$opcodeSearch.on('input', null, updateTable);
$versionFilters.on('change', null, updateTable);
$categoryFilters.on('change', null, updateTable);
$supportFilters.on('change', null, updateTable);

// update after the table was sorted
$opcodeTable.on('reset-view.bs.table', updateTable);

if (hasParams) updateTable();
});
