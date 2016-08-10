function ready() {
  $('h1').hide();
  $('h3').hide();
  $('div.navbar').hide();
  $('h1').show("fade", 1200, function() {
    $('h3').show("fade", 1200, function() {
      $('div.navbar').show("slide", {direction: "up", easing: "easeOutBack"}, 600)
    })
  });
  // alert("working");
};

$(document).on('ready', ready());
