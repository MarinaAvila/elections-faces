;(function() {

  changePage(1);

  $('#page1 .next').on('click', function() {
    changePage(2);
  })

  $('#page2 .close').on('click', function() {
    changePage(1);
  })

  function changePage(id) {
    $('.page').hide();
    $(`#page${id}`).show();
  }

})();
