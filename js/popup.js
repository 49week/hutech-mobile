$(function(){
    //--------------------------#life-technician-popup-------------------------------------
    $('#slide1 img').next().click(function(){
        $('#bg_scroll').show();
        $('#bg_scroll').animate({opacity:'1'},1000,'easeOutExpo');
        $('#bg_scroll').click(function(){
            $('#bg_scroll').hide();
        });
        $('.bg_area1').show();
        $('.bg_area1').animate({opacity:'1'},1000,'easeOutExpo');
        $('#life-technician_popup_soungdon').show();
        $('body').on('scroll touchmove mousewheel', function(event) {
            event.preventDefault();
            event.stopPropagation();
            return false;
            });
    });
    $('#life-technician_popup_soungdon .header img').click(function(){
        $('.bg_area1').animate({opacity:'0'},1000,'easeOutExpo');
        $('.bg_area1').hide();
        $('#life-technician_popup_soungdon').hide();
        $('body').off('scroll touchmove mousewheel');
    });

    $('#slide2 img').next().click(function(){
        $('#bg_scroll').click(function(){
            $('#bg_scroll').hide();
        });
        $('#bg_scroll').show();
        $('#bg_scroll').animate({opacity:'1'},1000,'easeOutExpo');
        $('.bg_area2').show();
        $('.bg_area2').animate({opacity:'1'},1000,'easeOutExpo');
        $('#life-technician_popup_hong').show();
        $('body').on('scroll touchmove mousewheel', function(event) {
            event.preventDefault();
            event.stopPropagation();
            return false;
            });
    });
    $('#life-technician_popup_hong .header img').click(function(){
        $('.bg_area2').animate({opacity:'0'},1000,'easeOutExpo');
        $('.bg_area2').hide();
        $('#life-technician_popup_hong').hide();
        $('body').off('scroll touchmove mousewheel');
    });

    $('#life-technician_popup_soungdon .arrow .prev').click(function(){
        $('#life-technician_popup_soungdon').hide();
        $('.bg_area1').hide();
        $('.bg_area2').show();
        $('.bg_area2').animate({opacity:'1'},1000,'easeOutExpo');
        $('#life-technician_popup_hong').show();
        $('body').on('scroll touchmove mousewheel', function(event) {
            event.preventDefault();
            event.stopPropagation();
            return false;
            });
    });
    $('#life-technician_popup_soungdon .arrow .next').click(function(){
        $('#life-technician_popup_soungdon').hide();
        $('.bg_area1').hide();
        $('.bg_area2').show();
        $('.bg_area2').animate({opacity:'1'},1000,'easeOutExpo');
        $('#life-technician_popup_hong').show();
        $('body').on('scroll touchmove mousewheel', function(event) {
            event.preventDefault();
            event.stopPropagation();
            return false;
            });
    });

    $('#life-technician_popup_hong .arrow .prev').click(function(){
        $('#life-technician_popup_hong').hide();
        $('.bg_area2').hide();
        $('.bg_area1').show();
        $('.bg_area1').animate({opacity:'1'},1000,'easeOutExpo');
        $('#life-technician_popup_soungdon').show();
        $('body').on('scroll touchmove mousewheel', function(event) {
            event.preventDefault();
            event.stopPropagation();
            return false;
            });
    });
    $('#life-technician_popup_hong .arrow .next').click(function(){
        $('#life-technician_popup_hong').hide();
        $('.bg_area2').hide();
        $('.bg_area1').show();
        $('.bg_area1').animate({opacity:'1'},1000,'easeOutExpo');
        $('#life-technician_popup_soungdon').show();
        $('body').on('scroll touchmove mousewheel', function(event) {
            event.preventDefault();
            event.stopPropagation();
            return false;
            });
    });
    //--------------------------#moment_popup-------------------------------------
        
    $('#slide3 img').next().click(function(){
        $('#bg_scroll').show();
        $('#bg_scroll').animate({opacity:'1'},1000,'easeOutExpo');
        $('#bg_scroll').click(function(){
            $('#bg_scroll').hide();
        });
        $('.bg_area3').show();
        $('.bg_area3').animate({opacity:'1'},1000,'easeOutExpo');
        $('#moment_popup_park').show();
        $('body').on('scroll touchmove mousewheel', function(event) {
            event.preventDefault();
            event.stopPropagation();
            return false;
            });
    });
    $('#moment_popup_park .header img').click(function(){
        $('.bg_area3').animate({opacity:'0'},1000,'easeOutExpo');
        $('.bg_area3').hide();
        $('#moment_popup_park').hide();
        $('body').off('scroll touchmove mousewheel');
    });

    $('#slide4 img').next().click(function(){
        $('#bg_scroll').show();
        $('#bg_scroll').animate({opacity:'1'},1000,'easeOutExpo');
        $('#bg_scroll').click(function(){
            $('#bg_scroll').hide();
        });
        $('.bg_area4').show();
        $('.bg_area4').animate({opacity:'1'},1000,'easeOutExpo');
        $('#moment_popup_kim').show();
        $('body').on('scroll touchmove mousewheel', function(event) {
            event.preventDefault();
            event.stopPropagation();
            return false;
            });
    });
    $('#moment_popup_kim .header img').click(function(){
        $('.bg_area4').animate({opacity:'0'},1000,'easeOutExpo');
        $('.bg_area4').hide();
        $('#moment_popup_kim').hide();
        $('body').off('scroll touchmove mousewheel');
    });

    $('#moment_popup_park .arrow .prev').click(function(){
        $('#moment_popup_park').hide();
        $('.bg_area3').hide();
        $('.bg_area4').show();
        $('.bg_area4').animate({opacity:'1'},1000,'easeOutExpo');
        $('#moment_popup_kim').show();
        $('body').on('scroll touchmove mousewheel', function(event) {
            event.preventDefault();
            event.stopPropagation();
            return false;
            });
    });
    $('#moment_popup_park .arrow .next').click(function(){
        $('#moment_popup_park').hide();
        $('.bg_area3').hide();
        $('.bg_area4').show();
        $('.bg_area4').animate({opacity:'1'},1000,'easeOutExpo');
        $('#moment_popup_kim').show();
        $('body').on('scroll touchmove mousewheel', function(event) {
            event.preventDefault();
            event.stopPropagation();
            return false;
            });
    });
    $('#moment_popup_kim .arrow .prev').click(function(){
        $('#moment_popup_kim').hide();
        $('.bg_area4').hide();
        $('.bg_area3').show();
        $('.bg_area3').animate({opacity:'1'},1000,'easeOutExpo');
        $('#moment_popup_park').show();
        $('body').on('scroll touchmove mousewheel', function(event) {
            event.preventDefault();
            event.stopPropagation();
            return false;
            });
    });
    $('#moment_popup_kim .arrow .next').click(function(){
        $('#moment_popup_kim').hide();
        $('.bg_area4').hide();
        $('.bg_area3').show();
        $('.bg_area3').animate({opacity:'1'},1000,'easeOutExpo');
        $('#moment_popup_park').show();
        $('body').on('scroll touchmove mousewheel', function(event) {
            event.preventDefault();
            event.stopPropagation();
            return false;
            });
    });
    //--------------------------#keyword_popup-------------------------------------

    $('#btn1').click(function(){
        $('#bg_scroll').show();
        $('#bg_scroll').animate({opacity:'1'},1000,'easeOutExpo');
        $('#bg_scroll').click(function(){
            $('#bg_scroll').hide();
        });
        $('.bg_area5').show();
        $('.bg_area5').animate({opacity:'1'},1000,'easeOutExpo');
        $('#keyword_popup_1').show();
        $('body').on('scroll touchmove mousewheel', function(event) {
            event.preventDefault();
            event.stopPropagation();
            return false;
            });
    });
    $('#keyword_popup_1 .header img').click(function(){
        $('.bg_area5').animate({opacity:'0'},1000,'easeOutExpo');
        $('.bg_area5').hide();
        $('#keyword_popup_1').hide();
        $('body').off('scroll touchmove mousewheel');
    });

    $('#btn2').click(function(){
        $('#bg_scroll').show();
        $('#bg_scroll').animate({opacity:'1'},1000,'easeOutExpo');
        $('#bg_scroll').click(function(){
            $('#bg_scroll').hide();
        });
        $('.bg_area6').show();
        $('.bg_area6').animate({opacity:'1'},1000,'easeOutExpo');
        $('#keyword_popup_2').show();
        $('body').on('scroll touchmove mousewheel', function(event) {
            event.preventDefault();
            event.stopPropagation();
            return false;
            });
    });
    $('#keyword_popup_2 .header img').click(function(){
        $('.bg_area6').animate({opacity:'0'},1000,'easeOutExpo');
        $('.bg_area6').hide();
        $('#keyword_popup_2').hide();
        $('body').off('scroll touchmove mousewheel');
    });

    $('#btn3').click(function(){
        $('#bg_scroll').show();
        $('#bg_scroll').animate({opacity:'1'},1000,'easeOutExpo');
        $('#bg_scroll').click(function(){
            $('#bg_scroll').hide();
        });
        $('.bg_area7').show();
        $('.bg_area7').animate({opacity:'1'},1000,'easeOutExpo');
        $('#keyword_popup_3').show();
        $('body').on('scroll touchmove mousewheel', function(event) {
            event.preventDefault();
            event.stopPropagation();
            return false;
            });
    });
    $('#keyword_popup_3 .header img').click(function(){
        $('.bg_area7').animate({opacity:'0'},1000,'easeOutExpo');
        $('.bg_area7').hide();
        $('#keyword_popup_3').hide();
        $('body').off('scroll touchmove mousewheel');
    });

    $('#btn4').click(function(){
        $('#bg_scroll').show();
        $('#bg_scroll').animate({opacity:'1'},1000,'easeOutExpo');
        $('#bg_scroll').click(function(){
            $('#bg_scroll').hide();
        });
        $('.bg_area8').show();
        $('.bg_area8').animate({opacity:'1'},1000,'easeOutExpo');
        $('#keyword_popup_4').show();
        $('body').on('scroll touchmove mousewheel', function(event) {
            event.preventDefault();
            event.stopPropagation();
            return false;
            });
    });
    $('#keyword_popup_4 .header img').click(function(){
        $('.bg_area8').animate({opacity:'0'},1000,'easeOutExpo');
        $('.bg_area8').hide();
        $('#keyword_popup_4').hide();
        $('body').off('scroll touchmove mousewheel');
    });

    $('#keyword_popup_1 .arrow .prev').click(function(){
        $('#keyword_popup_1').hide();
        $('.bg_area5').hide();
        $('.bg_area8').show();
        $('.bg_area8').animate({opacity:'1'},1000,'easeOutExpo');
        $('#keyword_popup_4').show();
        $('body').on('scroll touchmove mousewheel', function(event) {
            event.preventDefault();
            event.stopPropagation();
            return false;
            });
    });
    $('#keyword_popup_1 .arrow .next').click(function(){
        $('#keyword_popup_1').hide();
        $('.bg_area5').hide();
        $('.bg_area6').show();
        $('.bg_area6').animate({opacity:'1'},1000,'easeOutExpo');
        $('#keyword_popup_2').show();
        $('body').on('scroll touchmove mousewheel', function(event) {
            event.preventDefault();
            event.stopPropagation();
            return false;
            });
    });

    $('#keyword_popup_2 .arrow .prev').click(function(){
        $('#keyword_popup_2').hide();
        $('.bg_area6').hide();
        $('.bg_area5').show();
        $('.bg_area5').animate({opacity:'1'},1000,'easeOutExpo');
        $('#keyword_popup_1').show();
        $('body').on('scroll touchmove mousewheel', function(event) {
            event.preventDefault();
            event.stopPropagation();
            return false;
            });
    });
    $('#keyword_popup_2 .arrow .next').click(function(){
        $('#keyword_popup_2').hide();
        $('.bg_area6').hide();
        $('.bg_area7').show();
        $('.bg_area7').animate({opacity:'1'},1000,'easeOutExpo');
        $('#keyword_popup_3').show();
        $('body').on('scroll touchmove mousewheel', function(event) {
            event.preventDefault();
            event.stopPropagation();
            return false;
            });
    });

    $('#keyword_popup_3 .arrow .prev').click(function(){
        $('#keyword_popup_3').hide();
        $('.bg_area7').hide();
        $('.bg_area6').show();
        $('.bg_area6').animate({opacity:'1'},1000,'easeOutExpo');
        $('#keyword_popup_2').show();
        $('body').on('scroll touchmove mousewheel', function(event) {
            event.preventDefault();
            event.stopPropagation();
            return false;
            });
    });
    $('#keyword_popup_3 .arrow .next').click(function(){
        $('#keyword_popup_3').hide();
        $('.bg_area7').hide();
        $('.bg_area8').show();
        $('.bg_area8').animate({opacity:'1'},1000,'easeOutExpo');
        $('#keyword_popup_4').show();
        $('body').on('scroll touchmove mousewheel', function(event) {
            event.preventDefault();
            event.stopPropagation();
            return false;
            });
    });

    $('#keyword_popup_4 .arrow .prev').click(function(){
        $('#keyword_popup_4').hide();
        $('.bg_area8').hide();
        $('.bg_area7').show();
        $('.bg_area7').animate({opacity:'1'},1000,'easeOutExpo');
        $('#keyword_popup_3').show();
        $('body').on('scroll touchmove mousewheel', function(event) {
            event.preventDefault();
            event.stopPropagation();
            return false;
            });
    });
    $('#keyword_popup_4 .arrow .next').click(function(){
        $('#keyword_popup_4').hide();
        $('.bg_area8').hide();
        $('.bg_area5').show();
        $('.bg_area5').animate({opacity:'1'},1000,'easeOutExpo');
        $('#keyword_popup_1').show();
        $('body').on('scroll touchmove mousewheel', function(event) {
            event.preventDefault();
            event.stopPropagation();
            return false;
            });
    });
});

