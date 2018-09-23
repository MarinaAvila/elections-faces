;var Screensaver = function( restart ) {

  var timeout = null;

  reset();

  $('html, body').on( 'click mousedown mouseup', function() {
    reset();
  });

  function reset() {
    if ( timeout ) {
      clearTimeout( timeout );
    }

    timeout = setTimeout( restart, 3 * 60 * 1000 );
  }
};
