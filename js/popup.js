jQuery2(function(){
    //--------------------------#life-technician-popup-------------------------------------
    jQuery2('#slide1 img').next().click(function(){
        jQuery2('#bg_scroll').show();
        jQuery2('#bg_scroll').animate({opacity:'1'},1000,'easeOutExpo');
        jQuery2('#bg_scroll').click(function(){
            jQuery2('#bg_scroll').hide();
        });
        jQuery2('.bg_area1').show();
        jQuery2('.bg_area1').animate({opacity:'1'},1000,'easeOutExpo');
        jQuery2('#life-technician_popup_soungdon').show();
        jQuery2('body').on('scroll touchmove mousewheel', function(event) {
            event.preventDefault();
            event.stopPropagation();
            return false;
            });
    });
    jQuery2('#life-technician_popup_soungdon .header img').click(function(){
        jQuery2('.bg_area1').animate({opacity:'0'},1000,'easeOutExpo');
        jQuery2('.bg_area1').hide();
        jQuery2('#life-technician_popup_soungdon').hide();
        jQuery2('body').off('scroll touchmove mousewheel');
    });

    jQuery2('#slide2 img').next().click(function(){
        jQuery2('#bg_scroll').click(function(){
            jQuery2('#bg_scroll').hide();
        });
        jQuery2('#bg_scroll').show();
        jQuery2('#bg_scroll').animate({opacity:'1'},1000,'easeOutExpo');
        jQuery2('.bg_area2').show();
        jQuery2('.bg_area2').animate({opacity:'1'},1000,'easeOutExpo');
        jQuery2('#life-technician_popup_hong').show();
        jQuery2('body').on('scroll touchmove mousewheel', function(event) {
            event.preventDefault();
            event.stopPropagation();
            return false;
            });
    });
    jQuery2('#life-technician_popup_hong .header img').click(function(){
        jQuery2('.bg_area2').animate({opacity:'0'},1000,'easeOutExpo');
        jQuery2('.bg_area2').hide();
        jQuery2('#life-technician_popup_hong').hide();
        jQuery2('body').off('scroll touchmove mousewheel');
    });

    jQuery2('#life-technician_popup_soungdon .arrow .prev').click(function(){
        jQuery2('#life-technician_popup_soungdon').hide();
        jQuery2('.bg_area1').hide();
        jQuery2('.bg_area2').show();
        jQuery2('.bg_area2').animate({opacity:'1'},1000,'easeOutExpo');
        jQuery2('#life-technician_popup_hong').show();
        jQuery2('body').on('scroll touchmove mousewheel', function(event) {
            event.preventDefault();
            event.stopPropagation();
            return false;
            });
    });
    jQuery2('#life-technician_popup_soungdon .arrow .next').click(function(){
        jQuery2('#life-technician_popup_soungdon').hide();
        jQuery2('.bg_area1').hide();
        jQuery2('.bg_area2').show();
        jQuery2('.bg_area2').animate({opacity:'1'},1000,'easeOutExpo');
        jQuery2('#life-technician_popup_hong').show();
        jQuery2('body').on('scroll touchmove mousewheel', function(event) {
            event.preventDefault();
            event.stopPropagation();
            return false;
            });
    });

    jQuery2('#life-technician_popup_hong .arrow .prev').click(function(){
        jQuery2('#life-technician_popup_hong').hide();
        jQuery2('.bg_area2').hide();
        jQuery2('.bg_area1').show();
        jQuery2('.bg_area1').animate({opacity:'1'},1000,'easeOutExpo');
        jQuery2('#life-technician_popup_soungdon').show();
        jQuery2('body').on('scroll touchmove mousewheel', function(event) {
            event.preventDefault();
            event.stopPropagation();
            return false;
            });
    });
    jQuery2('#life-technician_popup_hong .arrow .next').click(function(){
        jQuery2('#life-technician_popup_hong').hide();
        jQuery2('.bg_area2').hide();
        jQuery2('.bg_area1').show();
        jQuery2('.bg_area1').animate({opacity:'1'},1000,'easeOutExpo');
        jQuery2('#life-technician_popup_soungdon').show();
        jQuery2('body').on('scroll touchmove mousewheel', function(event) {
            event.preventDefault();
            event.stopPropagation();
            return false;
            });
    });
    //--------------------------#moment_popup-------------------------------------
        
    jQuery2('#slide3 img').next().click(function(){
        jQuery2('#bg_scroll').show();
        jQuery2('#bg_scroll').animate({opacity:'1'},1000,'easeOutExpo');
        jQuery2('#bg_scroll').click(function(){
            jQuery2('#bg_scroll').hide();
        });
        jQuery2('.bg_area3').show();
        jQuery2('.bg_area3').animate({opacity:'1'},1000,'easeOutExpo');
        jQuery2('#moment_popup_park').show();
        jQuery2('body').on('scroll touchmove mousewheel', function(event) {
            event.preventDefault();
            event.stopPropagation();
            return false;
            });
    });
    jQuery2('#moment_popup_park .header img').click(function(){
        jQuery2('.bg_area3').animate({opacity:'0'},1000,'easeOutExpo');
        jQuery2('.bg_area3').hide();
        jQuery2('#moment_popup_park').hide();
        jQuery2('body').off('scroll touchmove mousewheel');
    });

    jQuery2('#slide4 img').next().click(function(){
        jQuery2('#bg_scroll').show();
        jQuery2('#bg_scroll').animate({opacity:'1'},1000,'easeOutExpo');
        jQuery2('#bg_scroll').click(function(){
            jQuery2('#bg_scroll').hide();
        });
        jQuery2('.bg_area4').show();
        jQuery2('.bg_area4').animate({opacity:'1'},1000,'easeOutExpo');
        jQuery2('#moment_popup_kim').show();
        jQuery2('body').on('scroll touchmove mousewheel', function(event) {
            event.preventDefault();
            event.stopPropagation();
            return false;
            });
    });
    jQuery2('#moment_popup_kim .header img').click(function(){
        jQuery2('.bg_area4').animate({opacity:'0'},1000,'easeOutExpo');
        jQuery2('.bg_area4').hide();
        jQuery2('#moment_popup_kim').hide();
        jQuery2('body').off('scroll touchmove mousewheel');
    });

    jQuery2('#moment_popup_park .arrow .prev').click(function(){
        jQuery2('#moment_popup_park').hide();
        jQuery2('.bg_area3').hide();
        jQuery2('.bg_area4').show();
        jQuery2('.bg_area4').animate({opacity:'1'},1000,'easeOutExpo');
        jQuery2('#moment_popup_kim').show();
        jQuery2('body').on('scroll touchmove mousewheel', function(event) {
            event.preventDefault();
            event.stopPropagation();
            return false;
            });
    });
    jQuery2('#moment_popup_park .arrow .next').click(function(){
        jQuery2('#moment_popup_park').hide();
        jQuery2('.bg_area3').hide();
        jQuery2('.bg_area4').show();
        jQuery2('.bg_area4').animate({opacity:'1'},1000,'easeOutExpo');
        jQuery2('#moment_popup_kim').show();
        jQuery2('body').on('scroll touchmove mousewheel', function(event) {
            event.preventDefault();
            event.stopPropagation();
            return false;
            });
    });
    jQuery2('#moment_popup_kim .arrow .prev').click(function(){
        jQuery2('#moment_popup_kim').hide();
        jQuery2('.bg_area4').hide();
        jQuery2('.bg_area3').show();
        jQuery2('.bg_area3').animate({opacity:'1'},1000,'easeOutExpo');
        jQuery2('#moment_popup_park').show();
        jQuery2('body').on('scroll touchmove mousewheel', function(event) {
            event.preventDefault();
            event.stopPropagation();
            return false;
            });
    });
    jQuery2('#moment_popup_kim .arrow .next').click(function(){
        jQuery2('#moment_popup_kim').hide();
        jQuery2('.bg_area4').hide();
        jQuery2('.bg_area3').show();
        jQuery2('.bg_area3').animate({opacity:'1'},1000,'easeOutExpo');
        jQuery2('#moment_popup_park').show();
        jQuery2('body').on('scroll touchmove mousewheel', function(event) {
            event.preventDefault();
            event.stopPropagation();
            return false;
            });
    });
    //--------------------------#keyword_popup-------------------------------------

    jQuery2('#btn1').click(function(){
        jQuery2('#bg_scroll').show();
        jQuery2('#bg_scroll').animate({opacity:'1'},1000,'easeOutExpo');
        jQuery2('#bg_scroll').click(function(){
            jQuery2('#bg_scroll').hide();
        });
        jQuery2('.bg_area5').show();
        jQuery2('.bg_area5').animate({opacity:'1'},1000,'easeOutExpo');
        jQuery2('#keyword_popup_1').show();
        jQuery2('body').on('scroll touchmove mousewheel', function(event) {
            event.preventDefault();
            event.stopPropagation();
            return false;
            });
    });
    jQuery2('#keyword_popup_1 .header img').click(function(){
        jQuery2('.bg_area5').animate({opacity:'0'},1000,'easeOutExpo');
        jQuery2('.bg_area5').hide();
        jQuery2('#keyword_popup_1').hide();
        jQuery2('body').off('scroll touchmove mousewheel');
    });

    jQuery2('#btn2').click(function(){
        jQuery2('#bg_scroll').show();
        jQuery2('#bg_scroll').animate({opacity:'1'},1000,'easeOutExpo');
        jQuery2('#bg_scroll').click(function(){
            jQuery2('#bg_scroll').hide();
        });
        jQuery2('.bg_area6').show();
        jQuery2('.bg_area6').animate({opacity:'1'},1000,'easeOutExpo');
        jQuery2('#keyword_popup_2').show();
        jQuery2('body').on('scroll touchmove mousewheel', function(event) {
            event.preventDefault();
            event.stopPropagation();
            return false;
            });
    });
    jQuery2('#keyword_popup_2 .header img').click(function(){
        jQuery2('.bg_area6').animate({opacity:'0'},1000,'easeOutExpo');
        jQuery2('.bg_area6').hide();
        jQuery2('#keyword_popup_2').hide();
        jQuery2('body').off('scroll touchmove mousewheel');
    });

    jQuery2('#btn3').click(function(){
        jQuery2('#bg_scroll').show();
        jQuery2('#bg_scroll').animate({opacity:'1'},1000,'easeOutExpo');
        jQuery2('#bg_scroll').click(function(){
            jQuery2('#bg_scroll').hide();
        });
        jQuery2('.bg_area7').show();
        jQuery2('.bg_area7').animate({opacity:'1'},1000,'easeOutExpo');
        jQuery2('#keyword_popup_3').show();
        jQuery2('body').on('scroll touchmove mousewheel', function(event) {
            event.preventDefault();
            event.stopPropagation();
            return false;
            });
    });
    jQuery2('#keyword_popup_3 .header img').click(function(){
        jQuery2('.bg_area7').animate({opacity:'0'},1000,'easeOutExpo');
        jQuery2('.bg_area7').hide();
        jQuery2('#keyword_popup_3').hide();
        jQuery2('body').off('scroll touchmove mousewheel');
    });

    jQuery2('#btn4').click(function(){
        jQuery2('#bg_scroll').show();
        jQuery2('#bg_scroll').animate({opacity:'1'},1000,'easeOutExpo');
        jQuery2('#bg_scroll').click(function(){
            jQuery2('#bg_scroll').hide();
        });
        jQuery2('.bg_area8').show();
        jQuery2('.bg_area8').animate({opacity:'1'},1000,'easeOutExpo');
        jQuery2('#keyword_popup_4').show();
        jQuery2('body').on('scroll touchmove mousewheel', function(event) {
            event.preventDefault();
            event.stopPropagation();
            return false;
            });
    });
    jQuery2('#keyword_popup_4 .header img').click(function(){
        jQuery2('.bg_area8').animate({opacity:'0'},1000,'easeOutExpo');
        jQuery2('.bg_area8').hide();
        jQuery2('#keyword_popup_4').hide();
        jQuery2('body').off('scroll touchmove mousewheel');
    });

    jQuery2('#keyword_popup_1 .arrow .prev').click(function(){
        jQuery2('#keyword_popup_1').hide();
        jQuery2('.bg_area5').hide();
        jQuery2('.bg_area8').show();
        jQuery2('.bg_area8').animate({opacity:'1'},1000,'easeOutExpo');
        jQuery2('#keyword_popup_4').show();
        jQuery2('body').on('scroll touchmove mousewheel', function(event) {
            event.preventDefault();
            event.stopPropagation();
            return false;
            });
    });
    jQuery2('#keyword_popup_1 .arrow .next').click(function(){
        jQuery2('#keyword_popup_1').hide();
        jQuery2('.bg_area5').hide();
        jQuery2('.bg_area6').show();
        jQuery2('.bg_area6').animate({opacity:'1'},1000,'easeOutExpo');
        jQuery2('#keyword_popup_2').show();
        jQuery2('body').on('scroll touchmove mousewheel', function(event) {
            event.preventDefault();
            event.stopPropagation();
            return false;
            });
    });

    jQuery2('#keyword_popup_2 .arrow .prev').click(function(){
        jQuery2('#keyword_popup_2').hide();
        jQuery2('.bg_area6').hide();
        jQuery2('.bg_area5').show();
        jQuery2('.bg_area5').animate({opacity:'1'},1000,'easeOutExpo');
        jQuery2('#keyword_popup_1').show();
        jQuery2('body').on('scroll touchmove mousewheel', function(event) {
            event.preventDefault();
            event.stopPropagation();
            return false;
            });
    });
    jQuery2('#keyword_popup_2 .arrow .next').click(function(){
        jQuery2('#keyword_popup_2').hide();
        jQuery2('.bg_area6').hide();
        jQuery2('.bg_area7').show();
        jQuery2('.bg_area7').animate({opacity:'1'},1000,'easeOutExpo');
        jQuery2('#keyword_popup_3').show();
        jQuery2('body').on('scroll touchmove mousewheel', function(event) {
            event.preventDefault();
            event.stopPropagation();
            return false;
            });
    });

    jQuery2('#keyword_popup_3 .arrow .prev').click(function(){
        jQuery2('#keyword_popup_3').hide();
        jQuery2('.bg_area7').hide();
        jQuery2('.bg_area6').show();
        jQuery2('.bg_area6').animate({opacity:'1'},1000,'easeOutExpo');
        jQuery2('#keyword_popup_2').show();
        jQuery2('body').on('scroll touchmove mousewheel', function(event) {
            event.preventDefault();
            event.stopPropagation();
            return false;
            });
    });
    jQuery2('#keyword_popup_3 .arrow .next').click(function(){
        jQuery2('#keyword_popup_3').hide();
        jQuery2('.bg_area7').hide();
        jQuery2('.bg_area8').show();
        jQuery2('.bg_area8').animate({opacity:'1'},1000,'easeOutExpo');
        jQuery2('#keyword_popup_4').show();
        jQuery2('body').on('scroll touchmove mousewheel', function(event) {
            event.preventDefault();
            event.stopPropagation();
            return false;
            });
    });

    jQuery2('#keyword_popup_4 .arrow .prev').click(function(){
        jQuery2('#keyword_popup_4').hide();
        jQuery2('.bg_area8').hide();
        jQuery2('.bg_area7').show();
        jQuery2('.bg_area7').animate({opacity:'1'},1000,'easeOutExpo');
        jQuery2('#keyword_popup_3').show();
        jQuery2('body').on('scroll touchmove mousewheel', function(event) {
            event.preventDefault();
            event.stopPropagation();
            return false;
            });
    });
    jQuery2('#keyword_popup_4 .arrow .next').click(function(){
        jQuery2('#keyword_popup_4').hide();
        jQuery2('.bg_area8').hide();
        jQuery2('.bg_area5').show();
        jQuery2('.bg_area5').animate({opacity:'1'},1000,'easeOutExpo');
        jQuery2('#keyword_popup_1').show();
        jQuery2('body').on('scroll touchmove mousewheel', function(event) {
            event.preventDefault();
            event.stopPropagation();
            return false;
            });
    });
});

