jQuery(document).ready(function($) {


    var header = $(".navigation-container");
  
    $(window).scroll(function() {    
        var scroll = $(window).scrollTop();
        if (scroll >= 50) {
            header.addClass("scrolled");
        } else {
            header.removeClass("scrolled");
        }
    });
  
   

    var lastScrollTop = 0;
  $(window).scroll(function(event){
   var st = $(this).scrollTop();
   if (st > lastScrollTop){
       //âíèç
	   $('.navigation-container').addClass('scrolling_down');
	   $('.navigation-container').removeClass('scrolling_up');
   } else {
      // ââåðõ 
	   $('.navigation-container').addClass('scrolling_up');
	   $('.navigation-container').removeClass('scrolling_down');
   }
   lastScrollTop = st;
});	

});

