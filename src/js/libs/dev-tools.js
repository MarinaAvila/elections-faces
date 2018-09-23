;(function() {

  if (ENV_NW && ENV_DEV) {
    nw.Window.get().showDevTools();
  }

})();
