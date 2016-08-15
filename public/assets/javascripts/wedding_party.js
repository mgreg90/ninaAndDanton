function ready() {
  // Hide stuff
  $('div.body-container').hide();
  $('div.wedding-party-carousel-content').hide();
  $('h2').hide();
  $('a.carousel-control').hide();
  $('ol.carousel-indicators').hide();

  // Show stuff
  $('h2').show('fade', 1200, function() {
    $('div.body-container').show('fade', 1200, function() {
      $('div.wedding-party-carousel-content').show('fade', 1200);
      $('a.carousel-control').show('fade', 1200);
      $('ol.carousel-indicators').show('fade', 1200);
    });
  });
};

$(document).on('ready load', ready());
