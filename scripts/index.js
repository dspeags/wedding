'use strict';

var h1          = document.querySelector('h1');
var bride       = document.querySelector('.bride');
var and         = document.querySelector('small');
var groom       = document.querySelector('.groom');
var saveTheDate = document.querySelector('a[href="savethedate"]');
var header      = [ h1, bride, and, groom, saveTheDate ];
for (var i = 0; i < header.length; i++) {
  header[i].style.opacity = 0;
  header[i].style.top = '72px';
  header[i].style.filter = 'blur(36px)';
}

var nav      = document.querySelector('nav');
var footer   = document.querySelector('footer');
var other    = [ nav, footer ];
for (var i = 0; i < other.length; i++) {
  other[i].style.opacity = 0;
}

var tl = new TimelineLite();
tl.staggerTo(header, 4, {
  opacity: 1,
  ease: Expo.easeOut
}, 0.2 );
tl.staggerTo(header, 1, {
  filter: 'blur(0px)',
  top: 0
}, 0.2, '-=5' );
tl.to(other, 4, {
  opacity: 1,
  ease: Expo.easeOut
}, '-=3');
tl.play();
