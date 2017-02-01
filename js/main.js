// Hello.
//
// This is The Scripts used for ___________ Theme
//
//

function main() {

(function () {
   'use strict';

   /*====================================
    Page a Link Smooth Scrolling
    ======================================*/
    $('a.page-scroll').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html,body').animate({
              scrollTop: target.offset().top
            }, 900);
            return false;
          }
        }
      });

    /*====================================
    Menu Active Calling Scroll Spy
    ======================================*/
    $(document).ready(function() {

      setTimeout(function(){
          $('body').addClass('loaded');
          $('h1').css('color','#222222');
      }, 2000);

  });

    /* ==============================================
	project Slider
	=============================================== */

	$(document).ready(function() {
    setTimeout(function(){
            $('body').addClass('loaded');
        }, 3000);

	  $("#project").owlCarousel({

	      navigation : false, // Show next and prev buttons
	      slideSpeed : 1400,
	      paginationSpeed : 1400,
	      singleItem:true,
	      autoHeight : true

	      // "singleItem:true" is a shortcut for:
	      // items : 1,
	      // itemsDesktop : false,
	      // itemsDesktopSmall : false,
	      // itemsTablet: false,
	      // itemsMobile : false

	  });
	});





}());


}
main();
