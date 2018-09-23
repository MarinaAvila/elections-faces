var Keyboard = (function() {
  
  var keyboard = $('#keyboard');
  var input = null;

  keyboard.find('.key').on('click', onKeyPress);

  function show(inputSelector) {
    input = $(inputSelector)[0]; // only one focus each time
    keyboard.addClass('show');
  }

  function hide() {
    input = null;
    keyboard.removeClass('show');
  }

  function onKeyPress(e) {
    e.preventDefault();

    if (!input) {
      return;
    }

    var text = $(input).val();

    var button = $(e.currentTarget);
    var key = button.attr('key-value');
    var isDelete = key == 'delete';

    var selectionStart = input.selectionStart;
    var selectionEnd = input.selectionEnd;

    if (isDelete) {
      if (!text.length) {
        return;
      }

      key = '';
      if (text.length && selectionStart == selectionEnd) {
        selectionStart = selectionStart - 1;
      }
    }

    // set input value
    var textStart = text.substring(0, selectionStart);
    var textEnd = text.substring(selectionEnd);
    $(input).val(textStart + key + textEnd);
    $(input).trigger('input');

    // set cursor position
    if (!isDelete) {
      selectionStart = selectionStart + key.length;
    }

    // keep focus on input
    $(input).focus();
    input.setSelectionRange(selectionStart, selectionStart);
  }

  return {
    show: show,
    hide: hide,
  }

})();
  