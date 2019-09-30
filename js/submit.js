$.fn.serializeObject = function() {
	var o = {};
	var a = this.serializeArray();
	$.each(a, function() {
		if (o[this.name]) {
			if (!o[this.name].push) {
				o[this.name] = [o[this.name]];
			}
			o[this.name].push(this.value || '');
		} else {
			o[this.name] = this.value || '';
		}
	});
	return o;
};

var $form = $('form#manufacturing-form'),
	url = 'https://script.google.com/macros/s/AKfycby5ktnV2GHnihzQ0UDfMcawGsxvaT5v4PHDUy6lOM7ZgVS2xA/exec'

$('#submit-form').on('click', function(e) {
	e.preventDefault();
	var jqxhr = $.ajax({
		url: url,
		method: "GET",
		dataType: "json",
		data: $form.serializeObject()
	}).success(function(e){console.log(e);}
		// do something
	);
})