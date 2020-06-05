$(document).ready(function() { 

$(function(){
	$(document).click(function(event) {
		if (($(event.target).closest("header .phone_hidden").length) || ($(event.target).closest("header .phone_btn").length)) return;
			$("header .phone_btn").removeClass('open')
			$('.phone_hidden').stop(false, true).slideUp(100);
		event.stopPropagation();
	});
});



});