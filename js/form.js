var total = 1; // Our default for how many raw materials we have

$(document).on("click", "#add-raw", function() {
  var addBlockId = (total = total + 1);

  var addBlock = document.createElement("div");
  $(addBlock).addClass("form-raw row");
  $(addBlock).attr("id", "form-raw-" + addBlockId);

  var inputDescription = document.createElement("textarea");
  $(inputDescription).addClass("form-control col-3");
  $(inputDescription).attr("type", "textbox");
  $(inputDescription).attr("name", "raw-description-" + addBlockId);
  $(inputDescription).attr("id", "raw-description-input-" + addBlockId);
  $(inputDescription).attr("placeholder", "Description");
  $(inputDescription).appendTo($(addBlock));

  var inputQty = document.createElement("input");
  $(inputQty).addClass("form-control col-1");
  $(inputQty).attr("type", "text");
  $(inputQty).attr("name", "raw-quantity-" + addBlockId);
  $(inputQty).attr("id", "raw-qty-" + addBlockId);
  $(inputQty).attr("placeholder", "Qty");
  $(inputQty).appendTo($(addBlock));

  var inputSupplier = document.createElement("input");
  $(inputSupplier).addClass("form-control col-2");
  $(inputSupplier).attr("type", "text");
  $(inputSupplier).attr("name", "raw-sup-" + addBlockId);
  $(inputSupplier).attr("id", "raw-supplier-" + addBlockId);
  $(inputSupplier).attr("placeholder", "Supplier");
  $(inputSupplier).appendTo($(addBlock));

  var inputLeadT = document.createElement("input");
  $(inputLeadT).addClass("form-control col-1");
  $(inputLeadT).attr("type", "text");
  $(inputLeadT).attr("name", "raw-lead-" + addBlockId);
  $(inputLeadT).attr("id", "raw-lead-" + addBlockId);
  $(inputLeadT).attr("placeholder", "Lead Time");
  $(inputLeadT).appendTo($(addBlock));

  var inputCost = document.createElement("input");
  $(inputCost).addClass("form-control col-1");
  $(inputCost).attr("type", "text");
  $(inputCost).attr("name", "raw-cost-" + addBlockId);
  $(inputCost).attr("id", "raw-cost-" + addBlockId);
  $(inputCost).attr("placeholder", "Cost");
  $(inputCost).appendTo($(addBlock));

  var inputNotes = document.createElement("textarea");
  $(inputNotes).addClass("form-control col-4");
  $(inputNotes).attr("type", "textbox");
  $(inputNotes).attr("name", "raw-notes-" + addBlockId);
  $(inputNotes).attr("id", "raw-notes-" + addBlockId);
  $(inputNotes).attr("placeholder", "Notes");
  $(inputNotes).appendTo($(addBlock));

  $(addBlock).appendTo($(".form-raw-container"));
  $("#raw-materials").val(total);
});

var packagingTotal = 1;

$(document).on("click", "#add-packaging", function() {
  var addBlockId = (packagingTotal = packagingTotal + 1);

  var addBlock = document.createElement("div");
  $(addBlock).addClass("form-packaging row");
  $(addBlock).attr("id", "form-packaging-" + addBlockId);

  var inputDescription = document.createElement("textarea");
  $(inputDescription).addClass("form-control col-3");
  $(inputDescription).attr("type", "textbox");
  $(inputDescription).attr("name", "packaging-description-" + addBlockId);
  $(inputDescription).attr("id", "packaging-description-input-" + addBlockId);
  $(inputDescription).attr("placeholder", "Description");
  $(inputDescription).appendTo($(addBlock));

  var inputQty = document.createElement("input");
  $(inputQty).addClass("form-control col-1");
  $(inputQty).attr("type", "text");
  $(inputQty).attr("name", "packaging-quantity-" + addBlockId);
  $(inputQty).attr("id", "packaging-qty-" + addBlockId);
  $(inputQty).attr("placeholder", "Qty");
  $(inputQty).appendTo($(addBlock));

  var inputSupplier = document.createElement("input");
  $(inputSupplier).addClass("form-control col-2");
  $(inputSupplier).attr("type", "text");
  $(inputSupplier).attr("name", "packaging-sup-" + addBlockId);
  $(inputSupplier).attr("id", "packaging-supplier-" + addBlockId);
  $(inputSupplier).attr("placeholder", "Supplier");
  $(inputSupplier).appendTo($(addBlock));

  var inputLeadT = document.createElement("input");
  $(inputLeadT).addClass("form-control col-1");
  $(inputLeadT).attr("type", "text");
  $(inputLeadT).attr("name", "packaging-lead-" + addBlockId);
  $(inputLeadT).attr("id", "packaging-lead-" + addBlockId);
  $(inputLeadT).attr("placeholder", "Lead Time");
  $(inputLeadT).appendTo($(addBlock));

  var inputCost = document.createElement("input");
  $(inputCost).addClass("form-control col-1");
  $(inputCost).attr("type", "text");
  $(inputCost).attr("name", "packaging-cost-" + addBlockId);
  $(inputCost).attr("id", "packaging-cost-" + addBlockId);
  $(inputCost).attr("placeholder", "Cost");
  $(inputCost).appendTo($(addBlock));

  var inputNotes = document.createElement("textarea");
  $(inputNotes).addClass("form-control col-4");
  $(inputNotes).attr("type", "textbox");
  $(inputNotes).attr("name", "packaging-notes-" + addBlockId);
  $(inputNotes).attr("id", "packaging-notes-" + addBlockId);
  $(inputNotes).attr("placeholder", "Notes");
  $(inputNotes).appendTo($(addBlock));

  $(addBlock).appendTo($(".form-packaging-container"));
  $("#packaging-materials").val(packagingTotal);
});


var productionTotal = 1;

$(document).on("click", "#add-production", function() {
  var addBlockId = (productionTotal = productionTotal + 1);

  var addBlock = document.createElement("div");
  $(addBlock).addClass("form-production row");
  $(addBlock).attr("id", "form-production-" + addBlockId);

  var inputType = document.createElement("select");
  $(inputType).addClass("custom-select form-control col-4");
  $(inputType).attr("name", "production-select-" + addBlockId);
  $(inputType).attr("id", "production-select" + addBlockId);
  $(inputType).append(new Option("Choose", ""));
  $(inputType).append(new Option("Mixing", "Mixing"));
  $(inputType).append(new Option("Encapsulation", "Encapsulation"));
  $(inputType).append(new Option("Polishing", "Polishing"));
  $(inputType).append(new Option("Bottling", "Bottling"));
  $(inputType).append(new Option("Labelling", "Labelling"));
  $(inputType).append(new Option("Packaging", "Packaging"));
  $(inputType).append(new Option("Other", "Other"));
  $(inputType).appendTo($(addBlock));


  var inputEstimate = document.createElement("input");
  $(inputEstimate).addClass("form-control col-2");
  $(inputEstimate).attr("type", "text");
  $(inputEstimate).attr("name", "production-estimated-hours-" + addBlockId);
  $(inputEstimate).attr("id", "production-estimated-hours-" + addBlockId);
  $(inputEstimate).attr("placeholder", "Estimated Hours");
  $(inputEstimate).appendTo($(addBlock));

  var inputActual = document.createElement("input");
  $(inputActual).addClass("form-control col-2");
  $(inputActual).attr("type", "text");
  $(inputActual).attr("name", "production-actual-hours-" + addBlockId);
  $(inputActual).attr("id", "production-actual-hours-" + addBlockId);
  $(inputActual).attr("placeholder", "Actual Hours");
  $(inputActual).appendTo($(addBlock));

  var inputStaff = document.createElement("input");
  $(inputStaff).addClass("form-control col-4");
  $(inputStaff).attr("type", "text");
  $(inputStaff).attr("name", "production-staff-" + addBlockId);
  $(inputStaff).attr("id", "production-staff-" + addBlockId);
  $(inputStaff).attr("placeholder", "Staff Name");
  $(inputStaff).appendTo($(addBlock));

  $(addBlock).appendTo($(".form-production-container"));
  $("#production-materials").val(productionTotal);
});