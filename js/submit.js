
var $form = $('form#test-form'),
    url = 'https://script.google.com/macros/s/AKfycby5ktnV2GHnihzQ0UDfMcawGsxvaT5v4PHDUy6lOM7ZgVS2xA/exec'

$('#submit-form').on('click', function(e) {
  e.preventDefault();
  var jqxhr = $.ajax({
    url: url,
    method: "GET",
    dataType: "json",
    data: $form.serializeObject()
  }).success(
    // do something
  );
})

