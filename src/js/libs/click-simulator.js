/*
To use simulator, open console and execute:
ClickSimulator.start()

You can set a custom interval passing a parameter.
For example, simulate a click each second:
ClickSimulator.start(1000)

To stop simulator, open console and execute:
ClickSimulator.stop()
*/

;var ClickSimulator = (function() {

  var timerId;

  function simulateClick() {
    var x = window.innerWidth * Math.random();
    var y = window.innerHeight * Math.random();
    var element = document.elementFromPoint(x, y);
    if (element) {
      element.click();
    }
  }

  function start(interval) {
    stop();
    timerId = setInterval(simulateClick, interval);
  }

  function stop() {
    clearInterval(timerId);
  }

  return {
    start: start,
    stop: stop,
  }
})();
