$(document).ready(function() {

  $(".clickable").click(function() {
    $("#walrus-showing p").toggle();
    $("#walrus-showing img").fadeToggle();
    $("#walrus-hidden p").toggle();
    $(".trivia").toggle();
  });

  $(".clickableTrivia").click(function() {
    $("#triviaOne").toggle();
  });
  $(".answer").click(function(){
    $(".showAnswer").fadeToggle();
  });

  $("button").click(function(){
    $("body").toggleClass("dark");
    // Not necessary because we are using toggleCLass   $("body").removeClass("dark");
});


});
