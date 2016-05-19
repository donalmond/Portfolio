$( document ).ready(function() {

  var p = $("#potion").click(function() {
    console.log("I work");
     $('.potion').addClass('shrink');
     $( ".bubbles" ).fadeOut( 2000);
     $( ".castle" ).addClass('hide');
  });

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
