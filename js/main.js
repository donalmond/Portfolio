$(document).ready(function() {

  var p = $("#potion").click(function() {
    // shrinks potion until scale is 0
    $('.potion').addClass('shrink');
    // fades out bubbles
    $(".bubbles").fadeOut(2000);
    // shows castle
    $(".castle").addClass('reveal');
    // reveals side div
     $(".sidediv").addClass('revealsidediv');
     // allows bio links/ hover to be visible/ useable
     $(".sidediv").addClass('sidedivzswap');
    // hides nav from initial screen
    $(".iconav").css("display", "inline-block")
    // Adds delay so castle can slowly appear before floating starts
    $(".castle").delay(1000).queue(function(next){
    $(this).addClass("float");
    next();
});
  });
  });

//  This code below is to create a parralax effect on the clouds on mouse move
// chuck this in the css for a smooth ride:
//============================================================
    //-webkit-transition: left 0.1s linear, top 0.1s linear;
    // -moz-transition: left 0.1s linear, top 0.1s linear;
    // -ms-transition: left 0.1s linear, top 0.1s linear;
    // -o-transition: left 0.1s linear, top 0.1s linear;
    // transition: left 0.1s linear, top 0.1s linear;
//============================================================
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
