$(document).ready(function(){

$('.link_close').click(function(){ 
	$(this).parent().hide(); 
	$("p:has(.today-link)").removeClass("active");
});

$('.show_pages').click(function(){ 
	$(this).next().show(); 
	$(this).hide();
});


/*------------------------ Tooltip  -----------------------------*/

  			$(".int_link").ezpz_tooltip({
  				contentPosition: 'belowStatic',
  				offset: 0
				});
				
			$("#subscribe-target-1").ezpz_tooltip({
  				contentPosition: 'belowStaticLeft',
  				stayOnContent: true,
  				offset: 0
				});
				
			$("#subscribe-target-2").ezpz_tooltip({
  				contentPosition: 'belowStaticLeft',
  				offset: 0
				});

			$(".drop_link, .drop_control").ezpz_tooltip({
  				contentPosition: 'belowStaticLeft',
  				stayOnContent: true,
  				offset: 0
				});

			$(".bb_arrow").ezpz_tooltip({
  				contentPosition: 'belowStaticLeft',
  				stayOnContent: true,
  				offset: 1,
  				parentPosition: true
				});

			$(".dropdown_menu_link").ezpz_tooltip({
  				contentPosition: 'belowStaticLeft',
  				stayOnContent: true,
  				offset: 11
				});


/*------------------------ Font resize  -----------------------------*/
		
		textResize.init();



});




$(window).resize(function() {

		if ($(window).width() <= 480) { textResize.fontResize(textResize.fontdefault); };
		textResize.setWidthToFont();

});
