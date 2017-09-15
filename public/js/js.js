

$( function() {
    // run the currently selected effect
    function runEffect() {
 
      // Most effect types need no options passed by default
      var options = {};
      // some effects have required parameters
 
      // Run the effect
      $( ".effect" ).show( "fold", options, 500 );
    };
 
    // Set effect from select menu value
    $( document ).on( "scroll", function(e) {
        console.log(document.body.scrollTop)

        if(document.body.scrollTop>150){

            runEffect()
        }

    });
 
    $( ".effect" ).hide();

  } );

 $(document).ready(function(){
 $('.carousel.carousel-slider').carousel({fullWidth: true});
 
     $('.collapsible').collapsible();




 });
$(function () {
    $('.waves-effect').on('click',function(){
        if($('.carousel-item').hasClass('active')){
            alert('gff')
        }

    })
});
