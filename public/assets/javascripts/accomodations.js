function ready() {
  // Hide stuff
  $('div.body-container').hide();
  $('div#accomodations-image').hide();
  $('div#accomodations-text').hide();
  $('div.vert-separator').hide();
  $('h2').hide();

  // Show stuff
  $('h2').show('fade', 1200, function() {
    $('div.body-container').show('fade', 1200, function() {
      $('div#accomodations-image').show('fade', 1200);
      $('div#accomodations-text').show('fade', 1200);
      $('div.vert-separator').show('fade', 1200);
    });
  });
};

$(document).on('ready load', ready());
