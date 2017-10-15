'use strict';

var $          = document.querySelector.bind(document);
var partyCount = $('[id="party_count"]');
var attendees  = $('[id="attendees[]"]');
var success    = $('[id="success"]');

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
  for (var i = 0; i < form.elements.length; i++) {
    if (form.elements[i].name === 'attendees[]') {
      attendees.push(form.elements[i].value);
    }
  }
  firebase.database().ref('guests/' + name).set({
    tel: tel,
    attending: attending,
    partyCount: partyCount,
    attendees: attendees
  });

  var fieldset = form.elements[0];
  fieldset.classList.add('d-none');
  success.classList.remove('d-none');

  event.preventDefault();
  return false;
}

var rsvp = document.forms['rsvp'];
rsvp.addEventListener('submit', onSubmit);
