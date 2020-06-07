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


});
$(window).on('scroll', function(){
	if($(this).scrollTop() > 500){
		$('header').addClass('fixed');
	}else{
		$('header').removeClass('fixed');
	}
})

