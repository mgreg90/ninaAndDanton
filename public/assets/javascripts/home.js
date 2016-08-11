function remainingDays() {
  var today = new Date();
  var wedding = new Date('12/10/2016');
  var timeDiff = Math.abs(wedding.getTime() - today.getTime());
  var daysDiff = Math.ceil(timeDiff / (1000 * 3600 * 24));
  return daysDiff;
};

function ready() {

  // Hide stuff
  $('h1').hide();
  $('h3').hide();
  $('h4').hide();
  $('li').hide();

  // Set stuff
  $('h4#remaining-days').html(remainingDays() + " Days until the Big Day!");


  // Show stuff
  $('h1').show("fade", 1200, function() {
    $('h3').show("fade", 1200, function() {
      $('li').show("slide", {direction: "up", easing: "easeOutBack"}, 600)
      $('h4').show("fade", 1200);
    });
  });
  // alert("working");
};

$(document).on('ready load', ready());
