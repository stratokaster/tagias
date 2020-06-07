"use strict";



$(document).ready(function() { 

	$('#hamburger').on('click', function (){
		if($(this).parent().hasClass('opened')){
			$(this).parent().removeClass('opened');
		}else{
			$(this).parent().addClass('opened')
		}
	})

	$('.anatiations-nav--item').on('click', function () {
		var target = $(this).data('href');
		$('#nothing-selected').removeClass('active').slideUp(200);
		$('.anatiations-nav--item').removeClass('active')
		$('.anatiations--block').removeClass('active').slideUp(300);
		if (!$(this).hasClass('active')) {
			$(this).addClass('active');
			$('#'+target+'').addClass('active').slideDown(300);
		}
	})

	if ($(window).width() < 1200) {
		$(".service-galery--container").owlCarousel({
			items: 4,
			loop: true,
			responsive: {
				0: {
					items: 1
				},
				768: {
					items: 3
				},
				1024: {
					items: 4
				}
			}
		});
		$(".anatiations-carousel").owlCarousel({
			items: 1,
			loop: true,
		});
	}


	$('.accordion-link').on('click', function(){
		if(!$(this).parent().hasClass('active')){
			$(this).parent().addClass('active');
			$(this).parent().find('.accordion-location').slideDown(300);
		}else{
			$(this).parent().removeClass('active');
			$(this).parent().find('.accordion-location').slideUp(300);
		}
	})


});

$(window).on('scroll', function(){
	if($(this).scrollTop() > 500){
		$('header').addClass('fixed');
	}else{
		$('header').removeClass('fixed');
	}
})

