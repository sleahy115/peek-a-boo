$(document).ready(function(){
  $(".clickable").click(function(){
    $("#walrus-showing").toggle();
    $("#walrus-hidden").toggle();
  });

  $( "button:first" ).click(function() {
    $( "p:first" ).fadeToggle( "slow", "linear" );
  });
  $( "button:last" ).click(function() {
    $( "p:last" ).fadeToggle( "fast", function() {
      $( "#log" ).append( "<div>finished</div>" );
    });
  });
  $("#click").click(function(){
    $("#whaleFade").fadeIn("slow");
  });
  $("#clickOut").click(function(){
    $("#whaleFade").fadeOut("slow");
  });
  $(".clickable-fade-toggle").click(function(){
    $("#toggle-walrus").fadeToggle();
    $("#toggle-walrus-out").fadeToggle();
  });
});
