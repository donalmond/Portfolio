$(document).ready(function() {

  var p = $("#potion").click(function() {
    $('.potion').addClass('shrink');
    $(".bubbles").fadeOut(2000);
    $(".castle").addClass('hide');

    $(".whitesidediv").addClass('hideme');

    // Reveals
    $(".hidden").css("display", "block")


    // Adds delay so castle can slowly appear before floating starts
    $(".castle").delay(1000).queue(function(next){
    $(this).addClass("float");
    next();
});
  });
  });

//  Jack movement
// chuck this in the css for a smooth ride
//
//    -webkit-transition: left 0.1s linear, top 0.1s linear;
    // -moz-transition: left 0.1s linear, top 0.1s linear;
    // -ms-transition: left 0.1s linear, top 0.1s linear;
    // -o-transition: left 0.1s linear, top 0.1s linear;
    // transition: left 0.1s linear, top 0.1s linear;

// $(document).mousemove(function (e) {
//   var xCoord = event.pageX;
//   var yCoord = event.pageY;
//
//   var halfWidth = $(window).width() / 4;
//   var halfHeight = $(window).height() / 4;
//
//   var differenceX = xCoord - halfWidth;
//   var differenceY = yCoord - halfHeight;
//
//   var scaledDifferenceX = differenceX / 6;
//   var scaledDifferenceY = differenceY / 6;
//
//   $(".castle").css({
//     left: scaledDifferenceX + "px",
//     top: scaledDifferenceY + "px"
//   });
//
//   console.log( differenceX, differenceY, scaledDifferenceX, scaledDifferenceY );
// });
//
// var leftIndex = 0;
// var rightIndex = 0;


/////////////////////// Kane Below



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
// // if(mousePos.y >= y ){
// //   $('.castle').css("top", leftIndex+'px' )
// // leftIndex --;
// // };
// //
// // if(mousePos.y <= y ){
// //   $('.castle').css("top", leftIndex+'px' )
// //   leftIndex ++;
// // };
//
// })
