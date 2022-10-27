// ==================================================
// * Project Name   :  Ally
// * File           :  JS Base
// * Version        :  1.0.0
// * Last change    :  16 March 2022
// * Author         :  ----------
// * Developer      :  WebRock - https://www.fiverr.com/webrok?up_rollout=true
// ==================================================

(function($) {
	"use strict";

  // Back To Top - Start
  // --------------------------------------------------
  $(window).scroll(function() {
    if ($(this).scrollTop() > 200) {
      $('.backtotop:hidden').stop(true, true).fadeIn();
    } else {
      $('.backtotop').stop(true, true).fadeOut();
    }
  });
  $(function() {
    $(".scroll").on('click', function() {
      $("html,body").animate({scrollTop: 0}, "slow");
      return false
    });
  });
  // Back To Top - End
  // --------------------------------------------------

  // Preloader - Start
  // --------------------------------------------------
  // $(window).on('load', function(){
  //   $('#preloader').fadeOut('slow',function(){$(this).remove();});
  // });
  // Preloader - End
  // --------------------------------------------------

  // Background - Start
  // --------------------------------------------------
  $("[data-background-color]").each(function () {
    $(this).css("background-color", $(this).attr("data-background-color"))
  });
  // Background - End
  // --------------------------------------------------

  // Header Sticky - Start
  // --------------------------------------------------
  $(window).on('scroll', function () {
  	if ($(this).scrollTop() > 120) {
  		$('.header_section').addClass("sticky")
  	} else {
  		$('.header_section').removeClass("sticky")
  	}
  });
  // Header Sticky - End
  // --------------------------------------------------

  // Video Player - Start
  // --------------------------------------------------
  // Video Player - End
  // --------------------------------------------------

  // Carousel 3 Col - Start
  // --------------------------------------------------
  $('.carousel_3_col').slick({
    dots: true,
    speed: 1000,
    arrows: true,
    autoplay: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    pauseOnHover: true,
    autoplaySpeed: 3000,
    prevArrow: ".c3c_arrow_left",
    nextArrow: ".c3c_arrow_right",
    responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    ]
  });
  // Carousel 3 Col - End
  // --------------------------------------------------

})(jQuery);