;(function($){
	"use strict";
	$(function($) {
		$('.ba-slider').slick({
			arrows: true,
			infinite: true,
			slidesToShow: 4,
			slidesToScroll: 1,
			prevArrow: '.slider__arrow--left',
			nextArrow: '.slider__arrow--right',
			slide: '.ba-slide'
		});
	})
})(jQuery);
