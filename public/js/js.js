

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

 var timeRotate = setInterval(function(){

     $('.carousel').carousel('next');


 }, 5000);




 
     $('.collapsible').collapsible();

    $('.indicator-item').eq(0).attr('loc_slide', '/catalogue/0');
    $('.indicator-item').eq(1).attr('loc_slide', '/catalogue/2');
    $('.indicator-item').eq(2).attr('loc_slide', '/catalogue/3');
    $('.indicator-item').eq(3).attr('loc_slide', '/catalogue/5');

 });

$(function () {
    $('.waves-effect').on('click',function(){
        if($('.indicator-item').hasClass('active')){
            window.location.href = $('.indicators>li.active').attr('loc_slide');
        }

    })
});

/*-------contact section------*/

$('#press').on('click', function(){
    var dannix = {};
    dannix.name = $('#name').val().trim();
    dannix.surname = $('#surname').val().trim();
    dannix.num = $('#num').val().trim();
    dannix.comments = $('#comments').val().trim();
   $.post('/form', dannix, function (responsive) {

       console.log(responsive);
       $("#warning").html(responsive);


   })
});




