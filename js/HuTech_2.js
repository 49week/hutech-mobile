$(function(){
    imagePreload = function() {
        var image_cache_array = new Array(),
            i = 0;
    
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
            imagePreload( '/image/intro3_1.png' );
    }

    var controller = new ScrollMagic.Controller();
    var scene1 = new ScrollMagic.Scene({
        triggerElement: "#trigger1",
        duration: 4000,
        triggerHook: 0,
        offset: 0
    })
    .setPin("#pin1")
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

    var tween5 = TweenMax.fromTo('#pin1', 100, {
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        }, {
        backgroundImage: 'url("/image/intro3_1.png")',
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        });
        
        var scene6 = new ScrollMagic.Scene({
        triggerElement: "#trigger1",
        duration: 500, 
        triggerHook: 0,
        offset: 3000,
        })
        .setTween(tween5)
        .addTo(controller)
    


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
        duration: 0.1,
        triggerHook: 0.4,
        offset: 0
    }).on("start", function (e){
        console.log(e);
        section2_ani();
    })
    .setPin("#section2")
    .addTo(controller2)

    var controller3 = new ScrollMagic.Controller();
    var section3 = new ScrollMagic.Scene({
        triggerElement: "#section3",
        duration: 0.1,
        triggerHook: 0.4,
        offset: 0
    }).on("start", function (){
        section3_ani();
        section4_ani();
    })
    .setPin("#section3")
    .addTo(controller3)
    
    var controller5 = new ScrollMagic.Controller();
    var section5 = new ScrollMagic.Scene({
        triggerElement: "#section5",
        duration: 0.1,
        triggerHook: 0.4,
        offset: 0
    }).on("start", function (){
        section5_ani();
    })
    .setPin("#section5")
    .addTo(controller5)

    var controller6 = new ScrollMagic.Controller();
    var section6 = new ScrollMagic.Scene({
        triggerElement: "#section6",
        duration: 0.1,
        triggerHook: 0.4,
        offset: 0
    }).on("start", function (){
        section6_ani();
    })
    .setPin("#section6")
    .addTo(controller6)

    var controller7 = new ScrollMagic.Controller();
    var section7 = new ScrollMagic.Scene({
        triggerElement: "#section7",
        duration: 0.1,
        triggerHook: 0.4,
        offset: 0
    }).on("start", function (){
        section7_ani();
    })
    .setPin("#section7")
    .addTo(controller7)

    var controller8 = new ScrollMagic.Controller();
    var section8 = new ScrollMagic.Scene({
        triggerElement: "#section8",
        duration: 0.1,
        triggerHook: 0.4,
        offset: 0
    }).on("start", function (){
        section8_ani();
    })
    .setPin("#section8")
    .addTo(controller8)

    var controller9 = new ScrollMagic.Controller();
    var section9 = new ScrollMagic.Scene({
        triggerElement: "#section9",
        duration: 0.1,
        triggerHook: 0.4,
        offset: 0
    }).on("start", function (){
        section9_ani();
    })
    .setPin("#section9")
    .addTo(controller9)

    var controller10 = new ScrollMagic.Controller();
    var section10 = new ScrollMagic.Scene({
        triggerElement: "#section10",
        duration: 0.1,
        triggerHook: 0.4,
        offset: 0
    }).on("start", function (){
        section10_ani();
    })
    .setPin("#section10")
    .addTo(controller10)

    var controller11 = new ScrollMagic.Controller();
    var section11 = new ScrollMagic.Scene({
        triggerElement: "#section11",
        duration: 0.1,
        triggerHook: 0.4,
        offset: 0
    }).on("start", function (){
        section11_ani();
    })
    .setPin("#section11")
    .addTo(controller11)

    var controller12 = new ScrollMagic.Controller();
    var section12 = new ScrollMagic.Scene({
        triggerElement: "#section12",
        duration: 0.1,
        triggerHook: 0.4,
        offset: 0
    }).on("start", function (){
        section12_ani();
    })
    .setPin("#section12")
    .addTo(controller12)

    $(".pop-action").click(function(){
        $(this).toggleClass("on");
        $(".link-wrap").fadeToggle("on");
    })
    
    $(".pop-top").click(function(){
        $('html, body').animate({
            scrollTop : 0
        }, 400);
    })

    function section2_ani(){
        $('#section2 h1').animate({'top':'0','opacity':'1'},1000);
        $('#section2 p:nth-child(2)').delay(500).animate({'top':'0','opacity':'1'},1000);
        $('#section2 p:nth-child(3)').delay(1000).animate({'top':'0','opacity':'1'},1000);
        $('#section2 p:nth-child(4)').delay(1500).animate({'top':'0','opacity':'1'},1000);
    }

    function section3_ani(){
        $('#section3 .titbox p').animate({'top':'0','opacity':'1'},1000);
        $('#section3 .titbox h1').delay(500).animate({'top':'0','opacity':'1'},1000);
        $('#section3 .txtbox p').delay(1000).animate({'top':'0','opacity':'1'},1000);
        $('#section3 .drawingBox .drawing p').delay(1500).animate({'opacity':'1'},1000);
        $('#section3 .drawingBox .drawing span:nth-child(8)').delay(1500).animate({'width':'29vw'},2000);
        $('#section3 .drawingBox .drawing span:nth-child(9)').delay(1500).animate({'width':'29vw'},2000);
        $('#section3 .drawingBox .drawing span').not('.drawing span:nth-child(8),.drawing span:nth-child(9)').delay(1500).animate({'width':'51.5vw'},2000);
    }

    function section4_ani(){
        $('#section3 .contentboxs>p').delay(2000).animate({'top':'0','opacity':'1'},1000);
        $('#section3 .contentboxs .contentbox .cont1 h1,#section3 .contentboxs .contentbox .cont1 p').delay(2500).animate({'top':'0','opacity':'1'},1000);
        $('#section3 .contentboxs .contentbox .cont2 h1,#section3 .contentboxs .contentbox .cont2 p').delay(3000).animate({'top':'0','opacity':'1'},1000);
        $('#section3 .contentboxs .contentbox .cont3 h1,#section3 .contentboxs .contentbox .cont3 p').delay(3500).animate({'top':'0','opacity':'1'},1000);
    }

    function section5_ani(){
        $('#section5 .txtbox p').animate({'top':'0','opacity':'1'},1000);
        $('#section5 .txtbox h1').delay(500).animate({'top':'0','opacity':'1'},1000);
    }

    function section6_ani(){
        $('#section6 .sub-label,#section6 .sub-op-title').animate({'top':'0','opacity':'1'},1000);
        $('#section6 .sub-op-des').delay(500).animate({'top':'0','opacity':'1'},1000);
    }

    function section7_ani(){
        $('#section7 .txtbox h1,#section7 .txtbox p:nth-child(1)').animate({'top':'0','opacity':'1'},1000);
        $('#section7 .txtbox p:nth-child(3)').delay(500).animate({'top':'0','opacity':'1'},1000);
        $('#section7 .contentbox1 h1,#section7 .contentbox1>p,#section7 .contentbox1 .btn').delay(1000).animate({'top':'0','opacity':'1'},1000);
        $('#section7 .contentbox1 .keyword').delay(1000).animate({'top':'15px','opacity':'1'},1000);
        $('#section7 .contentbox2 h1,#section7 .contentbox2>p,#section7 .contentbox2 .btn').delay(1500).animate({'top':'0','opacity':'1'},1000);
        $('#section7 .contentbox2 .keyword').delay(1500).animate({'top':'15px','opacity':'1'},1000);
        $('#section7 .contentbox3 h1,#section7 .contentbox3>p,#section7 .contentbox3 .btn').delay(2000).animate({'top':'0','opacity':'1'},1000);
        $('#section7 .contentbox3 .keyword').delay(2000).animate({'top':'15px','opacity':'1'},1000);
        $('#section7 .contentbox4 h1,#section7 .contentbox4>p,#section7 .contentbox4 .btn').delay(2500).animate({'top':'0','opacity':'1'},1000);
        $('#section7 .contentbox4 .keyword').delay(2500).animate({'top':'15px','opacity':'1'},1000);
    }

    function section8_ani(){
        $('#section8 .txtbox1 p:nth-child(1),#section8 .txtbox1 h1').animate({'top':'0','opacity':'1'},1000);
        $('#section8 .txtbox1 div,#section8 .txtbox1 p:nth-child(4)').delay(500).animate({'top':'0','opacity':'1'},1000);
    }

    function section9_ani(){
        $('#section9 .txtbox2 div,#section9 .txtbox2 p').animate({'top':'0','opacity':'1'},1000);
    }

    function section10_ani(){
        $('#section10 .txtbox p:nth-child(1),#section10 .txtbox h1').animate({'top':'0','opacity':'1'},1000);
        $('#section10 .txtbox p:nth-child(3)').delay(500).animate({'top':'0','opacity':'1'},1000);
    }

    function section11_ani(){
        $('#section11 .txtbox p:nth-child(1),#section11 .txtbox h1').animate({'top':'0','opacity':'1'},1000);
        $('#section11 .txtbox p:nth-child(3)').delay(500).animate({'top':'0','opacity':'1'},1000);
    }

    function section12_ani(){
        $('#section12 .sub-label,#section12 .sub-op-title').animate({'top':'0','opacity':'1'},1000);
        $('#section12 .sub-op-des').delay(500).animate({'top':'-10px','opacity':'1'},1000);
    }

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
        centeredSlides: true,
        slidesPerView: 'auto',
        slideToClickedSlide: true,
        effect: 'coverflow',
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
        centeredSlides: true,
        slidesPerView: 'auto',
        slideToClickedSlide: true,
        effect: 'coverflow',
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