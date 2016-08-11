function ready() {
  // Hide stuff
  $('div.body-container').hide();
  $('div#wedding-party-image').hide();
  $('div#wedding-party-text').hide();
  $('div.vert-separator').hide();
  $('h2').hide();

  // Show stuff
  $('h2').show('fade', 1200, function() {
    $('div.body-container').show('fade', 1200, function() {
      $('div#wedding-party-image').show('fade', 1200);
      $('div#wedding-party-text').show('fade', 1200);
      $('div.vert-separator').show('fade', 1200);
    });
  });
};

$(document).on('ready load', ready());
