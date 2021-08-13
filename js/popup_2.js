$(function(){
    const body = document.querySelector('body');
    let scrollPosition = 0;
    //--------------------------#life-technician-popup-------------------------------------
    function enable(){
        scrollPosition = window.pageYOffset;
        body.style.overflow = 'hidden';
        body.style.position = 'fixed';
        body.style.top = `-${scrollPosition}px`;
        body.style.width = '100%';
    }
    function disable(){
        $(".popbox").scrollTop(0);
        body.style.removeProperty('overflow');
        body.style.removeProperty('position');
        body.style.removeProperty('top');
        body.style.removeProperty('width');
        window.scrollTo(0, scrollPosition);
    }
    $('#slide1 img').next().click(function(){
        enable();
        $('#bg_scroll').show();
        $('#bg_scroll').animate({opacity:'1'},1000);
        $('#bg_scroll').click(function(){
            $('#bg_scroll').hide();
        });
        $('.bg_area1').show();
        $('.bg_area1').animate({opacity:'1'},1000);
        $('#life-technician_popup_soungdon').show();
    });
    $('#life-technician_popup_soungdon .header img').click(function(){
        disable();
        $('.bg_area1').animate({opacity:'0'},1000);
        $('.bg_area1').hide();
        $('#life-technician_popup_soungdon').hide();
    });

    $('#slide2 img').next().click(function(){
        enable();
        $('#bg_scroll').click(function(){
            $('#bg_scroll').hide();
        });
        $('#bg_scroll').show();
        $('#bg_scroll').animate({opacity:'1'},1000);
        $('.bg_area2').show();
        $('.bg_area2').animate({opacity:'1'},1000);
        $('#life-technician_popup_hong').show();
        $('body').on('scroll touchmove mousewheel', function(event) {
            event.preventDefault();
            event.stopPropagation();
            return false;
            });
    });
    $('#life-technician_popup_hong .header img').click(function(){
        disable();
        $('.bg_area2').animate({opacity:'0'},1000);
        $('.bg_area2').hide();
        $('#life-technician_popup_hong').hide();
        $('body').off('scroll touchmove mousewheel');
    });

    // $('#life-technician_popup_soungdon .arrow .prev').click(function(){
    //     $('#life-technician_popup_soungdon').hide();
    //     $('.bg_area1').hide();
    //     $('.bg_area2').show();
    //     $('.bg_area2').animate({opacity:'1'},1000);
    //     $('#life-technician_popup_hong').show();
    //     $('body').on('scroll touchmove mousewheel', function(event) {
    //         event.preventDefault();
    //         event.stopPropagation();
    //         return false;
    //         });
    // });
    // $('#life-technician_popup_soungdon .arrow .next').click(function(){
    //     $('#life-technician_popup_soungdon').hide();
    //     $('.bg_area1').hide();
    //     $('.bg_area2').show();
    //     $('.bg_area2').animate({opacity:'1'},1000);
    //     $('#life-technician_popup_hong').show();
    // });

    // $('#life-technician_popup_hong .arrow .prev').click(function(){
    //     $('#life-technician_popup_hong').hide();
    //     $('.bg_area2').hide();
    //     $('.bg_area1').show();
    //     $('.bg_area1').animate({opacity:'1'},1000);
    //     $('#life-technician_popup_soungdon').show();
    // });
    // $('#life-technician_popup_hong .arrow .next').click(function(){
    //     $('#life-technician_popup_hong').hide();
    //     $('.bg_area2').hide();
    //     $('.bg_area1').show();
    //     $('.bg_area1').animate({opacity:'1'},1000);
    //     $('#life-technician_popup_soungdon').show();
    // });
    //--------------------------#moment_popup-------------------------------------
        
    $('#slide3 img').next().click(function(){
        enable();
        $('#bg_scroll').show();
        $('#bg_scroll').animate({opacity:'1'},1000);
        $('#bg_scroll').click(function(){
            $('#bg_scroll').hide();
        });
        $('.bg_area3').show();
        $('.bg_area3').animate({opacity:'1'},1000);
        $('#moment_popup_park').show();
    });
    $('#moment_popup_park .header img').click(function(){
        disable();
        $('.bg_area3').animate({opacity:'0'},1000);
        $('.bg_area3').hide();
        $('#moment_popup_park').hide();
    });

    $('#slide4 img').next().click(function(){
        enable();
        $('#bg_scroll').show();
        $('#bg_scroll').animate({opacity:'1'},1000);
        $('#bg_scroll').click(function(){
            $('#bg_scroll').hide();
        });
        $('.bg_area4').show();
        $('.bg_area4').animate({opacity:'1'},1000);
        $('#moment_popup_kim').show();
    });
    $('#moment_popup_kim .header img').click(function(){
        disable();
        $('.bg_area4').animate({opacity:'0'},1000);
        $('.bg_area4').hide();
        $('#moment_popup_kim').hide();
    });

    // $('#moment_popup_park .arrow .prev').click(function(){
    //     $('#moment_popup_park').hide();
    //     $('.bg_area3').hide();
    //     $('.bg_area4').show();
    //     $('.bg_area4').animate({opacity:'1'},1000);
    //     $('#moment_popup_kim').show();
    // });
    // $('#moment_popup_park .arrow .next').click(function(){
    //     $('#moment_popup_park').hide();
    //     $('.bg_area3').hide();
    //     $('.bg_area4').show();
    //     $('.bg_area4').animate({opacity:'1'},1000);
    //     $('#moment_popup_kim').show();
    // });
    // $('#moment_popup_kim .arrow .prev').click(function(){
    //     $('#moment_popup_kim').hide();
    //     $('.bg_area4').hide();
    //     $('.bg_area3').show();
    //     $('.bg_area3').animate({opacity:'1'},1000);
    //     $('#moment_popup_park').show();
    // });
    // $('#moment_popup_kim .arrow .next').click(function(){
    //     $('#moment_popup_kim').hide();
    //     $('.bg_area4').hide();
    //     $('.bg_area3').show();
    //     $('.bg_area3').animate({opacity:'1'},1000);
    //     $('#moment_popup_park').show();
    // });
    //--------------------------#keyword_popup-------------------------------------

    $('#btn1').click(function(){
        enable();
        $('#bg_scroll').show();
        $('#bg_scroll').animate({opacity:'1'},1000);
        $('#bg_scroll').click(function(){
            $('#bg_scroll').hide();
        });
        $('.bg_area5').show();
        $('.bg_area5').animate({opacity:'1'},1000);
        $('#keyword_popup_1').show();
    });
    $('#keyword_popup_1 .header img').click(function(){
        disable();
        $('.bg_area5').animate({opacity:'0'},1000);
        $('.bg_area5').hide();
        $('#keyword_popup_1').hide();
    });

    $('#btn2').click(function(){
        enable();
        $('#bg_scroll').show();
        $('#bg_scroll').animate({opacity:'1'},1000);
        $('#bg_scroll').click(function(){
            $('#bg_scroll').hide();
        });
        $('.bg_area6').show();
        $('.bg_area6').animate({opacity:'1'},1000);
        $('#keyword_popup_2').show();
    });
    $('#keyword_popup_2 .header img').click(function(){
        disable();
        $('.bg_area6').animate({opacity:'0'},1000);
        $('.bg_area6').hide();
        $('#keyword_popup_2').hide();
        $('body').off('scroll touchmove mousewheel');
    });

    $('#btn3').click(function(){
        enable();
        $('#bg_scroll').show();
        $('#bg_scroll').animate({opacity:'1'},1000);
        $('#bg_scroll').click(function(){
            $('#bg_scroll').hide();
        });
        $('.bg_area7').show();
        $('.bg_area7').animate({opacity:'1'},1000);
        $('#keyword_popup_3').show();
    });
    $('#keyword_popup_3 .header img').click(function(){
        disable();
        $('.bg_area7').animate({opacity:'0'},1000);
        $('.bg_area7').hide();
        $('#keyword_popup_3').hide();
    });

    $('#btn4').click(function(){
        enable();
        $('#bg_scroll').show();
        $('#bg_scroll').animate({opacity:'1'},1000);
        $('#bg_scroll').click(function(){
            $('#bg_scroll').hide();
        });
        $('.bg_area8').show();
        $('.bg_area8').animate({opacity:'1'},1000);
        $('#keyword_popup_4').show();
    });
    $('#keyword_popup_4 .header img').click(function(){
        disable();
        $('.bg_area8').animate({opacity:'0'},1000);
        $('.bg_area8').hide();
        $('#keyword_popup_4').hide();
    });

    // $('#keyword_popup_1 .arrow .prev').click(function(){
    //     $('#keyword_popup_1').hide();
    //     $('.bg_area5').hide();
    //     $('.bg_area8').show();
    //     $('.bg_area8').animate({opacity:'1'},1000);
    //     $('#keyword_popup_4').show();
    // });
    // $('#keyword_popup_1 .arrow .next').click(function(){
    //     $('#keyword_popup_1').hide();
    //     $('.bg_area5').hide();
    //     $('.bg_area6').show();
    //     $('.bg_area6').animate({opacity:'1'},1000);
    //     $('#keyword_popup_2').show();
    // });

    // $('#keyword_popup_2 .arrow .prev').click(function(){
    //     $('#keyword_popup_2').hide();
    //     $('.bg_area6').hide();
    //     $('.bg_area5').show();
    //     $('.bg_area5').animate({opacity:'1'},1000);
    //     $('#keyword_popup_1').show();
    // });
    // $('#keyword_popup_2 .arrow .next').click(function(){
    //     $('#keyword_popup_2').hide();
    //     $('.bg_area6').hide();
    //     $('.bg_area7').show();
    //     $('.bg_area7').animate({opacity:'1'},1000);
    //     $('#keyword_popup_3').show();
    // });

    // $('#keyword_popup_3 .arrow .prev').click(function(){
    //     $('#keyword_popup_3').hide();
    //     $('.bg_area7').hide();
    //     $('.bg_area6').show();
    //     $('.bg_area6').animate({opacity:'1'},1000);
    //     $('#keyword_popup_2').show();
    // });
    // $('#keyword_popup_3 .arrow .next').click(function(){
    //     $('#keyword_popup_3').hide();
    //     $('.bg_area7').hide();
    //     $('.bg_area8').show();
    //     $('.bg_area8').animate({opacity:'1'},1000);
    //     $('#keyword_popup_4').show();
    // });

    // $('#keyword_popup_4 .arrow .prev').click(function(){
    //     $('#keyword_popup_4').hide();
    //     $('.bg_area8').hide();
    //     $('.bg_area7').show();
    //     $('.bg_area7').animate({opacity:'1'},1000);
    //     $('#keyword_popup_3').show();
    // });
    // $('#keyword_popup_4 .arrow .next').click(function(){
    //     $('#keyword_popup_4').hide();
    //     $('.bg_area8').hide();
    //     $('.bg_area5').show();
    //     $('.bg_area5').animate({opacity:'1'},1000);
    //     $('#keyword_popup_1').show();
    // });
});

