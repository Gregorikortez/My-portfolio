$(document).ready(function (){

 $('.menu-toggler').on('click', function (){
    $(this).toggleClass('open');
    $('.top-nav').toggleClass('open');
    });


 $('.top-nav .nav-link').on('click', function (){
    $('.menu-toggler').removeClass('open');
    $('.top-nav').removeClass('open');
   });

  $( 'nav a.nav-link' ).click(function() {
      event.preventDefault();
      $("html, body").animate({ scrollTop: $($(this).attr("href")).offset().top }, 500);
     
   });
  

  $("#up").click(function() {
       event.preventDefault();
       $("html, body").animate({ scrollTop: 0 }, "slow");
       return false;
   });

   AOS.init({
      easing: 'ease',
      duration: 1800
   });


});


