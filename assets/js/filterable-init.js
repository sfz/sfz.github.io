$(function(){
	$('#data').filterable();

	var realVersionCheckboxes = $('.versions-checkbox').toArray();
	var fakeVersionCheckboxes = $('.versions-pseudo-checkbox').toArray();
	var realCategoryCheckboxes = $('.categories-checkbox').toArray();
	var fakeCategoryCheckboxes = $('.categories-pseudo-checkbox').toArray();

	var updateVersionCheckboxes = function() {
			var someAreChecked = $(realVersionCheckboxes).filter(':checked').length > 0;
			if (!someAreChecked)
					$(fakeVersionCheckboxes).prop('checked', true).trigger('change');
			else {
					for (var i = 0, n = realVersionCheckboxes.length; i < n; ++i) {
							var $fake = $(fakeVersionCheckboxes[i]);
							var $real = $(realVersionCheckboxes[i]);
							$fake.prop('checked', $real.prop('checked')).trigger('change');
					}
			}
	};

	var updateCategoryCheckboxes = function() {
			var someAreChecked = $(realCategoryCheckboxes).filter(':checked').length > 0;
			if (!someAreChecked)
					$(fakeCategoryCheckboxes).prop('checked', true).trigger('change');
			else {
					for (var i = 0, n = realCategoryCheckboxes.length; i < n; ++i) {
							var $fake = $(fakeCategoryCheckboxes[i]);
							var $real = $(realCategoryCheckboxes[i]);
							$fake.prop('checked', $real.prop('checked')).trigger('change');
					}
			}
	};

	updateVersionCheckboxes();
	$(realVersionCheckboxes).on('change', null, updateVersionCheckboxes);

	updateCategoryCheckboxes();
	$(realCategoryCheckboxes).on('change', null, updateCategoryCheckboxes);
});
