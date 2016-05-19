$(document).ready(function() {

  var p = $("#potion").click(function() {
    console.log("I work");
    $('.potion').addClass('shrink');
    $(".bubbles").fadeOut(2000);
    $(".castle").addClass('hide');

    $(".test").addClass('hideme');


    $(".hidden").css("display", "block")

    var p = $("body").mousemove(function() {

      $(".castle").addClass('float');
    });
  });



// "https://www.youtube.com/watch?v=DVg2EJvvlF8"
  $(".dream").click(function(){
    var link = $(this);
      var target = link.attr("target");

      if($.trim(target).length > 0)
      {
        window.open(link.attr("href"), target);
      }
      else
      {
         window.location = link.attr("href");
      }

      event.preventDefault();  });
});





// var leftIndex = 0;
// var rightIndex = 0;
//
// $( document ).mousemove(  function( event ) {
//
//
//   mousePos = {
//              x: event.pageX,
//              y: event.pageY
//          };
//
//   var x = $( window ).width() / 2;
//   var y = $( window ).height() / 2;
//
//
// if(mousePos.x >= x ){
//   $('.castle').css("left", leftIndex+'px' )
// leftIndex --;
// };
//
// if(mousePos.x <= x ){
//   $('.castle').css("left", leftIndex+'px' )
//   leftIndex ++;
// };
//
// if(mousePos.y >= y ){
//   $('.castle').css("top", leftIndex+'px' )
// leftIndex --;
// };
//
// if(mousePos.y <= y ){
//   $('.castle').css("top", leftIndex+'px' )
//   leftIndex ++;
// };
//
// })
