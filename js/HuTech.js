$(function(){
    imagePreload = function() {
        // variables
        var image_cache_array = new Array(),
            i = 0;
    
        // termination condition
        if (!document.images) {
            return false;
        }
    
        for (key in arguments) {
            image_cache_array[i] = new Image();
            image_cache_array[i].src = arguments[key];
            i++;
        }
    
        return i;
        }
        window.onload = function() {
            imagePreload( '/image/intro3_1.jpg' );
    }
    // $('#fullpage').fullpage({
    //     css3 : true,
    //     easingcss3 : 'ease-out',
    //     loopTop : false,
    //     loopBottom : false,
    //     scrollBar : false,
    //     onLeave: function(origin, destination, direction){
    //         var leavingSection = this;  
    //         if(origin.index == 0 && direction =="down"){
    //             introani1();
    //             }
    //         else if(origin.index == 1 && direction == "up"){
    //             introani1_1();
    //             }
    //         else if(origin.index == 1 && direction == "down"){
    //             introani2();
    //             }
    //         else if(origin.index == 2 && direction == "up"){
    //             introani2_1();
    //             }
    //         else if(origin.index == 2 && direction == "down"){
    //             introani3();
    //             }
    //         else if(origin.index == 3 && direction == "up"){
    //             introani3_1();
    //             }
    //         else if(origin.index == 3 && direction == "down"){
    //             introani4();
    //             }
    //         else if(origin.index == 4 && direction == "up"){
    //             introani4_1();
    //             }    
    //         else if(origin.index == 4 && direction == "down"){
    //             introani5();
    //             section2_ani();
    //             }
    //         else if(origin.index == 5 && direction == "up"){
    //             introani5_1();
    //             }    
    //         else if(origin.index == 5 && direction == "down"){
    //             section3_ani();
    //             }
    //         else if(origin.index == 6 && direction == "down"){
    //             section4_ani();
    //             }
    //         else if(origin.index == 7 && direction == "down"){
    //             section5_ani();
    //             }
    //         else if(origin.index == 8 && direction == "down"){
    //             section6_ani();
    //             }
    //         else if(origin.index == 9 && direction == "down"){
    //             section7_ani();
    //             }
    //         else if(origin.index == 10 && direction == "down"){
    //             section8_ani();
    //             }
    //         else if(origin.index == 11 && direction == "down"){
    //             section9_ani();
    //             }
    //         else if(origin.index == 12 && direction == "down"){
    //             section10_ani();
    //             }
    //         else if(origin.index == 13 && direction == "down"){
    //             section11_ani();
    //             }
    //         else if(origin.index == 14 && direction == "down"){
    //             section12_ani();
    //             }
    //         }
    // });

    var controller = new ScrollMagic.Controller();
    var scene1 = new ScrollMagic.Scene({
        triggerElement: "#trigger1",
        duration: 4000,
        triggerHook: 0,
        offset: 0
    })
    .setPin("#pin1")
    .addIndicators({name: "1 (duration: 700)"}) 
    .addTo(controller);

    var tween = TweenMax.to('#title01', 100, {
        opacity: 0,
    });

    var scene2 = new ScrollMagic.Scene({
        triggerElement: "#trigger1",
        duration: 500,
        triggerHook: 0,
        offset: 0,
    })
    .setTween(tween)
    .setClassToggle(".indi01", "active")
    .addTo(controller)
    .addIndicators({name: "2 (duration: 700)"});

    var tween2 = TweenMax.fromTo('#title02', 100, {
        delay: 700,
        opacity: 0,
    }, {
        opacity: 1,
        repeat: 1,
        yoyo: true
    });
    var scene3 = new ScrollMagic.Scene({
        triggerElement: "#trigger1",
        duration: 1000, 
        triggerHook: 0,
        offset: 500,
    })
    .setTween(tween2)
    .setClassToggle(".indi02", "active")
    .addTo(controller)
    .addIndicators({name: "3 (duration: 700)"});

    var tween3 = TweenMax.fromTo('#title03', 100, {
        opacity: 0,
    }, {
        opacity: 1,
        repeat: 1,
        yoyo: true
    });

    var scene4 = new ScrollMagic.Scene({
        triggerElement: "#trigger1",
        duration: 1000, 
        triggerHook: 0,
        offset: 1500,
    })
    .setTween(tween3)
    .setClassToggle(".indi03", "active")
    .addTo(controller)
    .addIndicators({name: "3 (duration: 700)"});
    
    
    
    var tween4 = TweenMax.fromTo('#title04', 100, {
        opacity: 0,
    }, {
        opacity: 1,
        repeat: 1,
        yoyo: true
    });
    
    var scene5 = new ScrollMagic.Scene({
        triggerElement: "#trigger1",
        duration: 1000, 
        triggerHook: 0,
        offset: 2500,
    })
    .setTween(tween4)
    .setClassToggle(".indi04", "active")
    .addTo(controller)
    .addIndicators({name: "3 (duration: 700)"});
    
    
    
    var tween5 = TweenMax.to('#title05', 100, {
        opacity: 1,
    })
    
    var scene6 = new ScrollMagic.Scene({
        triggerElement: "#trigger1",
        duration: 500, 
        triggerHook: 0,
        offset: 3500,
    })
    .setTween(tween5)
    .setClassToggle(".indi05", "active")
    .addTo(controller)
    .addIndicators({name: "3 (duration: 700)"});


    function effectHandler(ele){
        $(ele).each(function (i) {
            var bottom_of_element = $(this).offset().top + 100;
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            if (bottom_of_window > bottom_of_element) {
            $(this).addClass('effect');
            }else{
                $(this).removeClass('effect');
            }
        });
    }

    effectHandler(".fade-effect");
    effectHandler(".bottom-to-top");
    effectHandler(".top-to-bottom");
    effectHandler(".left-to-right");
    effectHandler(".right-to-left");

    $(window).scroll(function () {
        
        effectHandler(".fade-effect");
        effectHandler(".bottom-to-top");
        effectHandler(".top-to-bottom");
        effectHandler(".left-to-right");
        effectHandler(".right-to-left");
    //
    });

    var controller2 = new ScrollMagic.Controller();
    var section2 = new ScrollMagic.Scene({
        triggerElement: "#section2",
        duration: 1000,
        triggerHook: 0,
        offset: 0
    }).on("start", function (e){
        console.log(e);
        section2_ani();
    })
    .setPin("#section2")
    .addIndicators({name: "1 (duration: 700)"}) 
    .addTo(controller2)
    

    $(".pop-action").click(function(){
        $(this).toggleClass("on");
        $(".link-wrap").fadeToggle("on");
    })
    
    $(".pop-top").click(function(){
        $('html, body').animate({
            scrollTop : 0
        }, 400);
    })

    // function introani_reset(){
    //     $('#intro1').animate({'opacity':'1'},500,'easeOutExpo');
    //     $('#intro2').animate({'opacity':'0'});
    //     $('#intro3').animate({'opacity':'0'});
    //     $('#intro4').animate({'opacity':'0'});
    //     $('#intro5').animate({'opacity':'0'});
    //     $('#lastintro').animate({'opacity':'0'},500,'easeOutExpo');
    // }
    // function introani1(){
    //     $('#intro1').animate({'opacity':'0'},1000,'easeOutExpo');
    //     $('#intro2').animate({'opacity':'1'},1000,'easeOutExpo');
    // }
    // function introani1_1(){
    //     $('#intro1').animate({'opacity':'1'},1000,'easeOutExpo');
    //     $('#intro2').animate({'opacity':'0'},1000,'easeOutExpo');
    // }
    // function introani2(){
    //     $('#intro3').animate({'opacity':'1'},1000,'easeOutExpo');
    //     $('#intro2').animate({'opacity':'0'},1000,'easeOutExpo');
    // }
    // function introani2_1(){
    //     $('#intro2').animate({'opacity':'1'},1000,'easeOutExpo');
    //     $('#intro3').animate({'opacity':'0'},1000,'easeOutExpo');
    // }
    // function introani3(){
    //     $('#intro4').animate({'opacity':'1'},1000,'easeOutExpo');
    //     $('#intro3').animate({'opacity':'0'},1000,'easeOutExpo');
    // }
    // function introani3_1(){
    //     $('#intro3').animate({'opacity':'1'},1000,'easeOutExpo');
    //     $('#intro4').animate({'opacity':'0'},1000,'easeOutExpo');
    // }
    // function introani4(){
    //     $('#intro5').animate({'opacity':'1'},1000,'easeOutExpo');
    //     $('#intro4').animate({'opacity':'0'},1000,'easeOutExpo');
    //     $('#lastintro').animate({'opacity':'1'},1000,'easeOutExpo');
    // }
    // function introani4_1(){
    //     $('#intro4').animate({'opacity':'1'},1000,'easeOutExpo');
    //     $('#intro5').animate({'opacity':'0'},1000,'easeOutExpo');
    //     $('#lastintro').animate({'opacity':'0'},1000,'easeOutExpo');
    // }
    // function introani5(){
    //     $('#intro5').animate({'opacity':'0'},1000,'easeOutExpo');
    // }
    // function introani5_1(){
    //     $('#intro5').animate({'opacity':'1'},1000,'easeOutExpo');
    // }

    function section2_ani(){
        $('#section2 h1').delay(500).animate({'top':'0','opacity':'1'},1000,'easeOutExpo');
        $('#section2 p:nth-child(2)').delay(1000).animate({'top':'0','opacity':'1'},1000,'easeOutExpo');
        $('#section2 p:nth-child(3)').delay(1500).animate({'top':'0','opacity':'1'},1000,'easeOutExpo');
        $('#section2 p:nth-child(4)').delay(2000).animate({'top':'0','opacity':'1'},1000,'easeOutExpo');
    }

    function section3_ani(){
        $('#section3 .titbox p').delay(500).animate({'top':'0','opacity':'1'},1000);
        $('#section3 .titbox h1').delay(1000).animate({'top':'0','opacity':'1'},1000,'easeOutExpo');
        $('#section3 .txtbox p').delay(1500).animate({'top':'0','opacity':'1'},1000,'easeOutExpo');
        $('#section3 .drawingBox .drawing p').delay(2000).animate({'opacity':'1'},1000,'easeOutExpo');
        $('#section3 .drawingBox .drawing span:nth-child(8)').delay(2000).animate({'width':'29vw'},3000,'easeOutExpo');
        $('#section3 .drawingBox .drawing span:nth-child(9)').delay(2000).animate({'width':'29vw'},3000,'easeOutExpo');
        $('#section3 .drawingBox .drawing span').not('.drawing span:nth-child(8),.drawing span:nth-child(9)').delay(2000).animate({'width':'51.5vw'},3000,'easeOutExpo');
        $('#section3 .contentboxs>p').delay(2500).animate({'top':'0','opacity':'1'},1000);
        $('#section3 .contentboxs .contentbox .cont1 h1,#section3 .contentboxs .contentbox .cont1 p').delay(3000).animate({'top':'0','opacity':'1'},1000,'easeOutExpo');
        $('#section3 .contentboxs .contentbox .cont2 h1,#section3 .contentboxs .contentbox .cont2 p').delay(3500).animate({'top':'0','opacity':'1'},1000,'easeOutExpo');
        $('#section3 .contentboxs .contentbox .cont3 h1,#section3 .contentboxs .contentbox .cont3 p').delay(4000).animate({'top':'0','opacity':'1'},1000,'easeOutExpo');
    }

    function section5_ani(){
        $('#section5 .txtbox p').delay(500).animate({'top':'0','opacity':'1'},1000,'easeOutExpo');
        $('#section5 .txtbox h1').delay(1000).animate({'top':'0','opacity':'1'},1000,'easeOutExpo');
    }

    function section6_ani(){
        $('#section6 .sub-label,#section6 .sub-op-title').delay(500).animate({'top':'0','opacity':'1'},1000,'easeOutExpo');
        $('#section6 .sub-op-des').delay(1000).animate({'top':'0','opacity':'1'},1000,'easeOutExpo');
    }

    function section7_ani(){
        $('#section7 .txtbox h1,#section7 .txtbox p:nth-child(1)').delay(500).animate({'top':'0','opacity':'1'},1000,'easeOutExpo');
        $('#section7 .txtbox p:nth-child(3)').delay(1000).animate({'top':'0','opacity':'1'},1000,'easeOutExpo');
        $('#section7 .contentbox1 h1,#section7 .contentbox1>p,#section7 .contentbox1 .btn').delay(1500).animate({'top':'0','opacity':'1'},1000,'easeOutExpo');
        $('#section7 .contentbox1 .keyword').delay(1500).animate({'top':'15px','opacity':'1'},1000,'easeOutExpo');
        $('#section7 .contentbox2 h1,#section7 .contentbox2>p,#section7 .contentbox2 .btn').delay(2000).animate({'top':'0','opacity':'1'},1000,'easeOutExpo');
        $('#section7 .contentbox2 .keyword').delay(2000).animate({'top':'15px','opacity':'1'},1000,'easeOutExpo');
        $('#section7 .contentbox3 h1,#section7 .contentbox3>p,#section7 .contentbox3 .btn').delay(2500).animate({'top':'0','opacity':'1'},1000,'easeOutExpo');
        $('#section7 .contentbox3 .keyword').delay(2500).animate({'top':'15px','opacity':'1'},1000,'easeOutExpo');
        $('#section7 .contentbox4 h1,#section7 .contentbox4>p,#section7 .contentbox4 .btn').delay(3000).animate({'top':'0','opacity':'1'},1000,'easeOutExpo');
        $('#section7 .contentbox4 .keyword').delay(3000).animate({'top':'15px','opacity':'1'},1000,'easeOutExpo');
    }

    function section8_ani(){
        $('#section8 .txtbox1 p:nth-child(1),#section8 .txtbox1 h1').delay(500).animate({'top':'0','opacity':'1'},1000,'easeOutExpo');
        $('#section8 .txtbox1 div,#section8 .txtbox1 p:nth-child(4)').delay(1000).animate({'top':'0','opacity':'1'},1000,'easeOutExpo');
    }

    function section9_ani(){
        $('#section9 .txtbox2 div,#section9 .txtbox2 p').delay(500).animate({'top':'0','opacity':'1'},1000,'easeOutExpo');
    }

    function section10_ani(){
        $('#section10 .txtbox p:nth-child(1),#section10 .txtbox h1').delay(500).animate({'top':'0','opacity':'1'},1000,'easeOutExpo');
        $('#section10 .txtbox p:nth-child(3)').delay(1000).animate({'top':'0','opacity':'1'},1000,'easeOutExpo');
    }

    function section11_ani(){
        $('#section11 .txtbox p:nth-child(1),#section11 .txtbox h1').delay(500).animate({'top':'0','opacity':'1'},1000,'easeOutExpo');
        $('#section11 .txtbox p:nth-child(3)').delay(1000).animate({'top':'0','opacity':'1'},1000,'easeOutExpo');
    }

    function section12_ani(){
        $('#section12 .sub-label,#section12 .sub-op-title').delay(500).animate({'top':'0','opacity':'1'},1000,'easeOutExpo');
        $('#section12 .sub-op-des').delay(1000).animate({'top':'-10px','opacity':'1'},1000,'easeOutExpo');
    }
    // section2_ani();
    // section3_ani();
    // section5_ani();
    // section6_ani();
    // section7_ani();
    // section8_ani();
    // section9_ani();
    // section10_ani();
    // section11_ani();
    // section12_ani();

    const swiper4 = new Swiper(".mySwiper4", {
        loop: true,
        autoplay: {
        delay: 1,
        disableOnInteraction: false
        },
        slidesPerView: 3,
        speed: 2000
        });

    const swiper = new Swiper("#section5 .mySwiper", {
        // slidesPerView: 1,
        // spaceBetween: 40,
        // slidesPerGroup: 1,
        // effect: 'coverflow',
        // coverflowEffect: {
        //     rotate: 50,
        //     stretch: 0,
        //     depth: 100,
        //     modifier: 1,
        //     slideShadows: true,
        // },
        centeredSlides: true,
        slidesPerView: 'auto',
        slideToClickedSlide: true,
        effect: 'coverflow',
        // spaceBetween: -200,
        coverflowEffect: {
            rotate: 0,
            slideShadows: false,
            stretch: 150,
        },
        loop: false,
        pagination: {
            el: "#section5 .swiper-pagination",
            clickable: true,
        }
    });

    let bgCount = 0;
    let count = 0;
    const prevButton = document.querySelector("#section6 .swiper-button-prev-02");
    const nextButton = document.querySelector("#section6 .swiper-button-next-02");
    const slideAll = document.querySelectorAll("#section6 .mySwiper02 .swiper-slide");

    const subTitle = document.querySelectorAll("#section6 .sub-op-title");
    const subDes = document.querySelectorAll("#section6 .sub-op-des");
    
    const mainBG = document.querySelector("#section6");
    mainBG.style.backgroundRepeat = "no-repeat";
    mainBG.style.backgroundImage = "url('./js/sub-bg-0.png')";
    mainBG.style.backgroundSize = "cover";
    const swiper2 = new Swiper("#section6 .amin-05-slide .mySwiper02", {
        loop: false,
        navigation: {
        nextEl: "#section6 .amin-05-slide .swiper-button-next-02",
        prevEl: "#section6 .amin-05-slide .swiper-button-prev-02",
        },
        pagination: {
            el: "#section6 .swiper-pagination",
            clickable: true,
        },
        on: {
            slideChange: function(){
                console.log('index1');
                count++;
                bgCount = ((count % slideAll.length) + slideAll.length) % slideAll.length;

                if(bgCount < 0){
                    bgCount = 1;
                }
                mainBG.style.backgroundImage = `url('./js/sub-bg-${bgCount}.png')`;

                for(let i = 0; i < subDes.length; i++){
                    if(i == bgCount){
                        subDes[i].classList.add("activate");
                        subTitle[i].classList.add("activate");
                    } else {
                        subDes[i].classList.remove("activate");
                        subTitle[i].classList.remove("activate");
                    }
                }
            }
        },
        
    });

    

    subTitle[0].classList.add("activate");
    subDes[0].classList.add("activate");
    
    prevButton.addEventListener("click", function(){
        count--;
        bgCount = ((count % slideAll.length) + slideAll.length) % slideAll.length;

        if(bgCount < 0){
            bgCount = 1;
        }
        mainBG.style.backgroundImage = `url('./js/sub-bg-${bgCount}.png')`;

        for(let i = 0; i < subDes.length; i++){
            if(i == bgCount){
                subDes[i].classList.add("activate");
                subTitle[i].classList.add("activate");
            } else {
                subDes[i].classList.remove("activate");
                subTitle[i].classList.remove("activate");
            }
        }
    
    
    });

    nextButton.addEventListener("click", function(){
        count++;
        bgCount = count % slideAll.length;
        mainBG.style.backgroundImage = `url('./js/sub-bg-${bgCount}.png')`;

        for(let i = 0; i < subDes.length; i++){
            if(i == bgCount){
                subDes[i].classList.add("activate");
                subTitle[i].classList.add("activate");
            } else {
                subDes[i].classList.remove("activate");
                subTitle[i].classList.remove("activate");
            }
        }
    
    });

    const swiper8 = new Swiper("#section8 .mySwiper", {
        slidesPerView: 1,
        spaceBetween: -65,
        slidesPerGroup: 1,
        loop: true,
        loopFillGroupWithBlank: true,
        pagination: {
            el: "#section8 .swiper-pagination",
            clickable: true,
        },
        breakpoints: {
            375: {
                spaceBetween: -65
            },
            320: {
                spaceBetween: -45
            },
            280: {
                spaceBetween: -35
            },
            250: {
                spaceBetween: -25
            }
        }
    });

    const swiper9 = new Swiper("#section9 .mySwiper", {
        slidesPerView: 1,
        spaceBetween: -65,
        slidesPerGroup: 1,
        loop: true,
        loopFillGroupWithBlank: true,
        pagination: {
            el: "#section9 .swiper-pagination",
            clickable: true,
        },
        breakpoints: {
            375: {
                spaceBetween: -65
            },
            320: {
                spaceBetween: -45
            },
            280: {
                spaceBetween: -35
            },
            250: {
                spaceBetween: -25
            }
        }
    });

    const swiper10 = new Swiper("#section10 .mySwiper", {
        // slidesPerView: 1,
        // spaceBetween: 40,
        // slidesPerGroup: 1,
        // loop: true,
        // loopFillGroupWithBlank: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        slideToClickedSlide: true,
        effect: 'coverflow',
        // spaceBetween: -200,
        coverflowEffect: {
            rotate: 0,
            slideShadows: false,
            stretch: 70,
        },
        loop: false,
        pagination: {
            el: "#section10 .swiper-pagination",
            clickable: true,
        }
    });

    let bgCount1 = 0;
    let count1 = 0;
    const prevButton1 = document.querySelector("#section12 .swiper-button-prev-02");
    const nextButton1 = document.querySelector("#section12 .swiper-button-next-02");
    const slideAll1 = document.querySelectorAll("#section12 .mySwiper02 .swiper-slide");

    const subTitle1 = document.querySelectorAll("#section12 .sub-op-title");
    const subDes1 = document.querySelectorAll("#section12 .sub-op-des");
    
    const mainBG1 = document.querySelector("#section12");
    
    const swiper12 = new Swiper("#section12 .amin-05-slide .mySwiper02", {
        loop: false,
        navigation: {
        nextEl: "#section12 .amin-05-slide .swiper-button-next-02",
        prevEl: "#section12 .amin-05-slide .swiper-button-prev-02",
        },
        pagination: {
            el: "#section12 .swiper-pagination",
            clickable: true,
        },
        on: {
            slideChange: function(){
                console.log('index1');
                count1++;
                bgCount1 = ((count1 % slideAll1.length) + slideAll1.length) % slideAll1.length;

                if(bgCount1 < 0){
                    bgCount1 = 1;
                }
                mainBG1.style.backgroundImage = `url('./js/sub10-bg-${bgCount1}.png')`;

                for(let i = 0; i < subDes1.length; i++){
                    if(i == bgCount1){
                        subDes1[i].classList.add("activate");
                        subTitle1[i].classList.add("activate");
                    } else {
                        subDes1[i].classList.remove("activate");
                        subTitle1[i].classList.remove("activate");
                    }
                }
            }
        },
    });

    mainBG1.style.backgroundRepeat = "no-repeat";
    mainBG1.style.backgroundImage = "url('./js/sub10-bg-0.png')";
    mainBG1.style.backgroundSize = "cover";

    subTitle1[0].classList.add("activate");
    subDes1[0].classList.add("activate");
    
    prevButton1.addEventListener("click", function(){
        count1--;
        bgCount1 = ((count1 % slideAll1.length) + slideAll1.length) % slideAll1.length;

        if(bgCount1 < 0){
            bgCount1 = 1;
        }
        mainBG1.style.backgroundImage = `url('./js/sub10-bg-${bgCount1}.png')`;

        for(let i = 0; i < subDes1.length; i++){
            if(i == bgCount1){
                subDes1[i].classList.add("activate");
                subTitle1[i].classList.add("activate");
            } else {
                subDes1[i].classList.remove("activate");
                subTitle1[i].classList.remove("activate");
            }
        }
    });
    nextButton1.addEventListener("click", function(){
        count1++;
        bgCount1 = count1 % slideAll1.length;

        if(bgCount1 < 0){
            bgCount1 = 1;
        }

        mainBG1.style.backgroundImage = `url('./js/sub10-bg-${bgCount1}.png')`;

        for(let i = 0; i < subDes1.length; i++){
            if(i == bgCount1){
                subDes1[i].classList.add("activate");
                subTitle1[i].classList.add("activate");
            } else {
                subDes1[i].classList.remove("activate");
                subTitle1[i].classList.remove("activate");
            }
        }
    
    });

});