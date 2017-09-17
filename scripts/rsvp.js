'use strict';

var $          = document.querySelector.bind(document);
var partyCount = $('[id="party_count"]');
var attendees  = $('[id="attendees[]"]');

function onResponseChange() {
  if (this.value === "true") {
    partyCount.classList.remove("d-none");
  } else {
    partyCount.classList.add("d-none");
  }
}

function onPartyCountChange() {
  while (attendees.childNodes.length > 2) {
    attendees.removeChild(attendees.lastChild);
  }

  if (+this.value > 1) {
    attendees.classList.remove("d-none");
  } else {
    attendees.classList.add("d-none");
  }

  for (var i = 0; i < +this.value - 1; i++) {
    var name         = document.createElement('input');
    name.name        = "attendees[]"
    name.placeholder = "Full name";
    name.required    = true;
    attendees.appendChild(name);
  }
}

function onSubmit() {
  return false;
}
