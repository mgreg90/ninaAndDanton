function ready() {
  // Hide stuff
  $('div.body-container').hide();
  $('div#image-carousel').hide();
  $('div#about-us-text').hide();
  $('div.vert-separator').hide();

  // Show stuff
  $('div.body-container').show('fade', 1500, function() {
    $('div#image-carousel').show('fade', 1500);
    $('div#about-us-text').show('fade', 1500);
    $('div.vert-separator').show('fade', 1500);
  });
};

$(document).on('ready load', ready());
