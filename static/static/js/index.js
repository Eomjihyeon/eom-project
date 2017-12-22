/*===============================================================
           wow
==================================================================*/

$(function() {
new WOW().init();

});

/*===============================================================
        Maginfic popUp(http://dimsemenov.com/plugins/magnific-popup/documentation.html)
==================================================================*/
$(function() {
$('#work').magnificPopup({
  delegate: 'a', // child items selector, by clicking on it popup will open
  type: 'image',
  // other options
  gallery: {
  enabled:true
  }
});

});

/*
$('.gallery').each(function() { //뉴스처럼됨
    $(this).magnificPopup({
    delegate: 'a',
    type: 'image',
    gallery: {
    enabled:true
    }
});
});*/

/*===============================================================
        owl car
==================================================================*/
$(function() {
  $("#team-members").owlCarousel({
  items : 3,
  autoplay:true,
  smartSpeed:700,
  loop:true,
  autoplayHoverPause:true
 });
});


/*===============================================================
      test
==================================================================*/
$(function() {
  $("#customers-testimonials").owlCarousel({
  items : 1,
  autoplay:true,
  smartSpeed:700,
  loop:true,
  autoplayHoverPause:true
 });
});

/*===============================================================
        counterup
   https://github.com/ciromattia/jquery.counterup
==================================================================*/
$(function() {
  $('.counter').counterUp({
    delay :10,
    time: 2000
  });

});

/*===============================================================
        counterup
   https://github.com/ciromattia/jquery.counterup
==================================================================*/
$(function() {
  $("#clients-list").owlCarousel({
  items : 3,
  autoplay:true,
  smartSpeed:700,
  loop:true,
  autoplayHoverPause:true
 });
});