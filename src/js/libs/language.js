;Language = function(startLanguage) {

  changeLanguage(startLanguage);

  $('[language]').on('click', onClick);

  function onClick(e) {
    var language = $(e.currentTarget).attr('language');
    changeLanguage(language);
  }

  function changeLanguage(language) {
    //change body class
    $('body').removeClass('pt en es').addClass(language);

    //active current button
    $('[language]').removeClass('active');
    $('[language='+language+']').addClass('active');

    //global
    Language.current = language;

    //dispacth language event to prepare next page to enter
    var event = new CustomEvent('language', { 'detail': language });
    window.dispatchEvent(event);

  }
};
