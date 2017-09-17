'use strict';

var $           = document.querySelector.bind(document);
var h1          = $('h1');
var bride       = $('.bride');
var and         = $('small');
var nullSpan    = $('.null');
var groom       = $('.groom');
var rsvp        = $('a[href="rsvp"]');
var header      = [ h1, bride, and, groom, rsvp ];

for (var i = 0; i < header.length; i++) {
  header[i].style.opacity = 0;
  header[i].style.top = '72px';
  header[i].style.filter = 'blur(36px)';
}

var nav    = $('nav');
var footer = $('footer');
var other  = [ nav, footer ];

for (var i = 0; i < other.length; i++) {
  other[i].style.opacity = 0;
}

var tl = new TimelineLite();
tl.staggerTo(header, 4, {
  opacity: 1,
  ease: Expo.easeOut
}, 0.2 );
tl.staggerTo([ h1, bride, nullSpan, groom, rsvp ], 1, {
  filter: 'blur(0px)',
  top: '0',
}, 0.2, '-=5');
tl.to(and, 1, {
  filter: 'blur(0px)',
  top: '0.17em'
}, '-=4.6');
tl.to(other, 4, {
  opacity: 1,
  ease: Expo.easeOut
}, '-=3');
tl.play();
