"use strict";



$(document).ready(function() { 

$(function(){
	$(document).click(function(event) {
		if (($(event.target).closest("header .phone_hidden").length) || ($(event.target).closest("header .phone_btn").length)) return;
			$("header .phone_btn").removeClass('open')
			$('.phone_hidden').stop(false, true).slideUp(100);
		event.stopPropagation();
	});
});


	// $('.scrollbar-macosx').scrollbar();

	$('#hamburger').on('click', function (){
		if($(this).parent().hasClass('opened')){
			$(this).parent().removeClass('opened');
		}else{
			$(this).parent().addClass('opened')
		}
	})
	$('.anatiations-nav--item').on('click', function () {
		var target = $(this).data('href');
		$('.anatiations-nav--item').removeClass('active')
		$('.anatiations--preview').removeClass('active');
		if (!$(this).hasClass('active')) {
			$(this).addClass('active');
			$('#'+target+'').addClass('active')
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

