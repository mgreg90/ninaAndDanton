function ready() {
  // Hide stuff
  $('div.body-container').hide();
  $('div#registry-image').hide();
  $('div#registry-text').hide();
  $('div.vert-separator').hide();
  $('h2').hide();

  // Show stuff
  $('h2').show('fade', 1200, function() {
    $('div.body-container').show('fade', 1200, function() {
      $('div#registry-image').show('fade', 1200);
      $('div#registry-text').show('fade', 1200);
      $('div.vert-separator').show('fade', 1200);
    });
  });
};

$(document).on('ready load', ready());
