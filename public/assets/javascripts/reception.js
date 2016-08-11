function ready() {
  // Hide stuff
  $('div.body-container').hide();
  $('div#reception-image').hide();
  $('div#reception-text').hide();
  $('div.vert-separator').hide();
  $('h2').hide();

  // Show stuff
  $('h2').show('fade', 1200, function() {
    $('div.body-container').show('fade', 1200, function() {
      $('div#reception-image').show('fade', 1200);
      $('div#reception-text').show('fade', 1200);
      $('div.vert-separator').show('fade', 1200);
    });
  });
};

$(document).on('ready load', ready());
