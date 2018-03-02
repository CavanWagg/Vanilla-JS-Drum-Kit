'use strict';

function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if(!audio) return; //stop function from running
    audio.currentTime = 0; //rewind to the start
    audio.play();
    key.classList.add('playing');  //add the class 'playing' to introduce animation effect
}



  function removeTransition(e) {
    if (e.propertyName !== 'transform') return; //skip it if it's not a transform
    this.classList.remove('playing');
  }

  const keys = document.querySelectorAll('.key');
  //add an event listener to each key, and when a transition is ending we remove it
  keys.forEach(key => key.addEventListener('transitionend', removeTransition));
  window.addEventListener('keydown', playSound);
