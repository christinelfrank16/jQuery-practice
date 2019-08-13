$(document).ready(function() {

  $(".clickable").click(function() {
    $("#walrus-showing p").toggle();
    $("#walrus-showing img").fadeToggle();
    $("#walrus-hidden p").toggle();
    // $("#walrus-hidden img").fadeToggle();
  });
});
