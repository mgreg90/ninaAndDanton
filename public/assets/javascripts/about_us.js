function ready() {
  // Hide stuff
  $('div.body-container').hide();
  $('div#image-carousel').hide();
  $('div#about-us-text').hide();
  $('div.vert-separator').hide();
  $('h2').hide();

  // Show stuff
  $('h2').show('fade', 1200, function() {
    $('div.body-container').show('fade', 1200, function() {
      $('div#image-carousel').show('fade', 1200);
      $('div#about-us-text').show('fade', 1200);
      $('div.vert-separator').show('fade', 1200);
    });
  });
};

$(document).on('ready load', ready());
