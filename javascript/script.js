/*global $*/
/*global window*/
'use strict';
$(function () {
    
    $('.menu').hide();
    $(window).scroll(function () {
        if ($(this).scrollTop() > 500) {
            $('.menu').fadeIn();
        } else {
            $('.menu').fadeOut();
        }
    });
    
//    $('.menu-active').hide();
    $('.header-bottom').hide();
    $('.menu-icon').click(function () {
        $('.header-bottom').fadeToggle();
        $('.menu-icon i').toggleClass('menu-inactive');
    });
    
    
    function hideShow(portfolioName, showPortfolio) {
        $(portfolioName).click(function () {
            if ($(showPortfolio).hasClass('text-active')) {
                $(showPortfolio).removeClass('text-active');
            } else {
                $('.product-info').removeClass('text-active');
                $(showPortfolio).addClass('text-active');
            }
        });
    }
    
    hideShow('.portfolio1', '.p1');
    hideShow('.portfolio2', '.p2');
    hideShow('.portfolio3', '.p3');
    
    $('a.internal-link').click(function () {
        var id = $(this).attr('href');
        var position = $(id).offset().top;
        $('html,body').animate({
          'scrollTop': position
    }, 500);
  });
    
    
    
});