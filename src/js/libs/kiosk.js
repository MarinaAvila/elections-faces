;var Kiosk = function( screenIndex ) {
  if (!ENV_NW) {
    return;
  }

  if (screenIndex == undefined) {
    screenIndex = 0;
  }

  var screens = nw.Screen.screens;
  var bounds;
  if (screens[screenIndex]) {
    bounds = screens[screenIndex].bounds;
  } else {
    bounds = screens[0].bounds;
  }

  var nativeWindow = nw.Window.get();
  nativeWindow.leaveKioskMode();
  nativeWindow.moveTo( bounds.x, bounds.y );
  nativeWindow.resizeTo( bounds.width, bounds.height );

  if (!ENV_DEV) {
    setTimeout(function() {
      nativeWindow.enterKioskMode();
      document.body.style.cursor = 'none';
    }, 500);
  }

  $(window).on('keypress', onKeyPress);

  function onKeyPress(e) {
    switch(e.keyCode) {
      //F or f 
      case 70:
      case 102:
        if (nativeWindow.isKioskMode) {
          nativeWindow.leaveKioskMode();
        } else {
          nativeWindow.enterKioskMode();
        }
        break;

      //Q or q 
      case 81:
      case 113:
        nw.App.quit();
        break;
    }
  }

};
