var leapYear = function(year) {
  if (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0) ) {
    return true;
  } else {
    return false;
  }
};

$(document).ready(function() {
  $("form#leap-year").submit(function(event) {
    var year = parseInt($("input#year").val());

    $(".year").text(year);

    if(!leapYear(year)) {
      $(".not").text("not");
    } else {
      $(".not").text("");
    }

    $("#result").show();

    event.preventDefault();

  });
});
