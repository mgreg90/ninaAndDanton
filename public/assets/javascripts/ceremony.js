function ready() {
  // Hide stuff
  $('div.body-container').hide();
  $('div#ceremony-image').hide();
  $('div#ceremony-text').hide();
  $('div.vert-separator').hide();
  $('h2').hide();

  // Show stuff
  $('h2').show('fade', 1500, function() {
    $('div.body-container').show('fade', 1500, function() {
      $('div#ceremony-image').show('fade', 1500);
      $('div#ceremony-text').show('fade', 1500);
      $('div.vert-separator').show('fade', 1500);
    });
  });
};

$(document).on('ready load', ready());
