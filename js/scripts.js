// Wouldn't add listener based on how it was typed in?????
// $(document).ready(function() {
//   $("p").click(function() {
//     $(".walrus-showing").show();
//     $(".walrus-hidden".hide();
//   });
// });

// Would add listener... typed in by adding brackets as functions were written

// $(document).ready(function(){
//   $("p").click(function(){
//     $(".walrus-showing").show();
//     $(".walrus-hidden").hide();
//   });
// });


$(document).ready(function(){
  $(".clickable").click(function(){
    $(".walrus-showing").toggle();
    $(".walrus-hidden").toggle();
  });
});
