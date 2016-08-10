function ready() {
  $('h1').hide();
  $('h3').hide();
  $('li').hide();
  $('h1').show("fade", 1200, function() {
    $('h3').show("fade", 1200, function() {
      $('li').show("slide", {direction: "up", easing: "easeOutBack"}, 600)
    })
  });
  // alert("working");
};

$(document).on('ready', ready());
