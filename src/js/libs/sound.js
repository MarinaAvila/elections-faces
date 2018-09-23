;var Sound = function() {

  function play( type ) {
    $( '#sounds .' + type )[0].play();
  }

  this.play = play;

};
