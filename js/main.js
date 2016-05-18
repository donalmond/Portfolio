$( document ).ready(function() {

  var p = $("#potion").click(function() {
    console.log("I work");
     $('.potion').addClass('shrink');

     $( ".bubbles" ).fadeOut( 2000);
//      $( ".bubbles" ).fadeOut( "1500", function() {
//   // Animation complete.
// });

  });
});
