'use strict';

var $          = document.querySelector.bind(document);
var partyCount = $('[id="party_count"]');
var attendees  = $('[id="attendees[]"]');

function onResponseChange() {
  if (this.value === 'true') {
    partyCount.classList.remove('d-none');
  } else {
    partyCount.classList.add('d-none');
  }
}

function onPartyCountChange() {
  while (attendees.childNodes.length > 2) {
    attendees.removeChild(attendees.lastChild);
  }

  if (+this.value > 1) {
    attendees.classList.remove('d-none');
  } else {
    attendees.classList.add('d-none');
  }

  for (var i = 0; i < +this.value - 1; i++) {
    var name         = document.createElement('input');
    name.name        = 'attendees[]'
    name.placeholder = 'Full name';
    name.required    = true;
    name.classList.add('d-block');
    attendees.appendChild(name);
  }
}

function onSubmit(event) {
  var form       = this;
  var name       = form.elements['name'].value;
  var tel        = form.elements['tel'].value;
  var attending  = form.elements['response'].value;
  var partyCount = form.elements['party_count'].value;
  var attendees  = [];
  for (var name in form.elements) {
    if (form.elements.hasOwnProperty(name) &&
        form.elements[name].name === 'attendees[]') {
      attendees.push(form.elements[name].value);
    }
  }
  firebase.database().ref('guests/' + name).set({
    tel: tel,
    attending: attending,
    partyCount: partyCount,
    attendees: attendees
  });
  alert('Thank you for your response.');

  event.preventDefault();
  return false;
}
