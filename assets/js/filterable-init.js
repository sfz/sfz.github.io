$(function() {

var $opcodeTable = $('#table-opcodes');
var $opcodeSearch = $('#search-opcodes');
var $versionFilters = $('.versions-checkbox');
var $categoryFilters = $('.categories-checkbox');

var categoryColumnNumber = 0;
var opcodeColumnNumber = 1;
var versionColumnNumber = 6;

var updateTable = function() {
	var searchText = $opcodeSearch.val();
	var activeVersionFilters = $versionFilters.filter(':checked')
			.map(function() { return $(this).val(); }).toArray();
	var activeCategoryFilters = $categoryFilters.filter(':checked')
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

});
