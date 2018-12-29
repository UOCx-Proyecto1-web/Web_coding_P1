(function($) {

	'use strict';

  // countdown
  $('#date-countdown').countdown('2019/01/15', function(event) {
  var $this = $(this).html(event.strftime(''
    + '<span class="countdown-block"><span class="label">%w</span> weeks </span>'
    + '<span class="countdown-block"><span class="label">%d</span> days </span>'
    + '<span class="countdown-block"><span class="label">%H</span> hr </span>'
    + '<span class="countdown-block"><span class="label">%M</span> min </span>'
    + '<span class="countdown-block"><span class="label">%S</span> sec</span>'));
});

	// home slider
	$('.home-slider').owlCarousel({
    loop:true,
    autoplay: true,
    margin:10,
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    nav:true,
    autoplayHoverPause: false,
    items: 1,
    navText : ["<span class='ion-chevron-left'></span>","<span class='ion-chevron-right'></span>"],
    responsive:{
      0:{
        items:1,
        nav:false
      },
      600:{
        items:1,
        nav:false
      },
      1000:{
        items:1,
        nav:true
      }
    }
	});

})(jQuery);