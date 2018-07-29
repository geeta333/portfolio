/*global $*/
/*global window*/

'use strict';

$(function () {
    
//    スクロールした時にメニューを表示
    $('header').hide();
    $(window).scroll(function () {
        if ($(this).scrollTop() > 500) {
            $('header').fadeIn();
        } else {
            $('header').fadeOut();
        }
    });
    
    
//    リンク先にアニメーションで移動
    $('a.internal-link').click(function () {
        var id = $(this).attr('href');
        var position = $(id).offset().top;
        $('html,body').animate({
          'scrollTop': position
    }, 500);
  });
    
    
//    ハンバーガーメニュー
    $('#open-menu').click(function () {
        $('#open-menu').addClass('hide');
        $('#menu').addClass('shown');
    });
    $('#close-menu').click(function () {
        $('#open-menu').removeClass('hide');
        $('#menu').removeClass('shown');
    });
    
//    Works表示
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
    hideShow('.portfolio4', '.p4');
    
    
});