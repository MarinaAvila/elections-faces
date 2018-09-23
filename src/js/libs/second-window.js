;var SecondWindow = function( url, callback ) {
  if (!ENV_NW) {
    window.nwSend = function( message ) {
      console.log('Method nwSend() called but it\'s not a NW enviroment. Message:', message);
    };
    return;
  }

  nw.Screen.Init();

  var screens = nw.Screen.screens;
  var windows = [];

  windows[0] = nw.Window.get();
  setupWindow( 0 );

  nw.Window.open( url, { id: url }, function( newWindow ) {
    windows[1] = newWindow;
    setupWindow( 1 );

    $( newWindow.window ).load( function() {
      if ( callback != undefined ) {
        callback.call( newWindow.window );
      }
    });
  });

  function setupWindow( index ) {
    windows[index].window.nwReceive = function( message ) {
      windows[index].window.console.log('Method nwReceive() is not defined. Message:', message);
    };

    windows[index].window.nwSend = function( message ) {
      for (var i = 0; i < windows.length; i++) {
        if (i != index) {
          var receiver = windows[i].window;
          receiver.nwReceive.call( receiver, message );
        }
      }
    };

    windows[index].on('close', function() {
      nw.App.quit();
    });
  };

};
