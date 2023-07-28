/**
 * @name Banner Animation
 * @function handle canvas animation using vanta.js
 */

var vantaEl = document.getElementById('vanta_art');
$(function(){
  setTimeout(function() {
    if(vantaEl !== null) {
      window.VANTA.BIRDS({
        el: '#vanta_art',
        mouseControls: false,
        touchControls: true,
        gyroControls: false,
        minHeight: 500.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00
      })
    }
  }, 1000);
});

/******** END Banner Animation ********/