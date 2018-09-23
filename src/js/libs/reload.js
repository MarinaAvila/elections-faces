;(function() {

  $(window).on('keypress', onKeyPress);

  function onKeyPress(e) {
    switch(e.keyCode) {
      //R or r 
      case 82:
      case 114:
        if (location) {
          location.reload();
        }
        break;
    }
  }

})();
