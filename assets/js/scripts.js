var appMaster = {

        smoothScroll: function () {
                // Smooth Scrolling
                $('a[href*=#]:not([href=#carousel-example-generic])').click(function () {
                        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {

                                var target = $(this.hash);
                                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                                if (target.length) {
                                        $('html,body').animate({
                                                scrollTop: target.offset().top
                                        }, 500);
                                        return false;
                                }
                        }
                });
        },
        reviewsCarousel: function () {
                // Reviews Carousel
                $('.review-filtering').slick({
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        dots: true,
                        arrows: false,
                        autoplay: true,
                        autoplaySpeed: 5000
                });
        },
        screensCarousel: function () {
                // Screens Carousel
                $('.filtering').slick({
                        slidesToShow: 0,
                        slidesToScroll: 0,
                        dots: false,
                        responsive: [{
                                breakpoint: 1024,
                                settings: {
                                        slidesToShow: 0,
                                        slidesToScroll: 0,
                                        infinite: false,
                                        dots: false
                                }
                        }, {
                                breakpoint: 600,
                                settings: {
                                        slidesToShow: 0,
                                        slidesToScroll: 0
                                }
                        }, {
                                breakpoint: 480,
                                settings: {
                                        slidesToShow: 0,
                                        slidesToScroll: 0
                                }
                        }]
                });
                $('.js-filter-one').on('click', function () {
                        $('.filtering').slickFilter('.one');
                        $('#hideform').toggle();
                        $('.filter a').removeClass('active');
                        $(this).addClass('active');
                });
                $('.js-filter-two').on('click', function () {
                        $('.filtering').slickFilter('.two');
                        $('#hideform').toggle();
                        $('.filter a').removeClass('active');
                        $(this).addClass('active');
                });
                $('.js-filter-three').on('click', function () {
                        $('.filtering').slickFilter('.three');
                        $('#hideform').toggle();
                        $('.filter a').removeClass('active');
                        $(this).addClass('active');
                });
        },
        animateScript: function () {
                $('.scrollpoint.sp-effect1').waypoint(function () { $(this).toggleClass('active'); $(this).toggleClass('animated fadeInLeft'); }, { offset: '100%' });
                $('.scrollpoint.sp-effect2').waypoint(function () { $(this).toggleClass('active'); $(this).toggleClass('animated fadeInRight'); }, { offset: '100%' });
                $('.scrollpoint.sp-effect3').waypoint(function () { $(this).toggleClass('active'); $(this).toggleClass('animated fadeInDown'); }, { offset: '100%' });
                $('.scrollpoint.sp-effect4').waypoint(function () { $(this).toggleClass('active'); $(this).toggleClass('animated fadeIn'); }, { offset: '100%' });
                $('.scrollpoint.sp-effect5').waypoint(function () { $(this).toggleClass('active'); $(this).toggleClass('animated fadeInUp'); }, { offset: '100%' });
        },
        scrollMenu: function () {
                var num = 50; //number of pixels before modifying styles
                if ($(window).scrollTop() > num) {
                        $('nav').addClass('scrolled');
                }
                $(window).bind('scroll', function () {
                        if ($(window).scrollTop() > num) {
                                $('nav').addClass('scrolled');
                        } else {
                                $('nav').removeClass('scrolled');
                        }
                });
                $('ul.navbar-nav li a').bind('click', function () {
                        if ($(this).closest('.navbar-collapse').hasClass('in')) {
                                $(this).closest('.navbar-collapse').removeClass('in');
                        }
                });
        }

}; // AppMaster

$(document).ready(function () {

        appMaster.smoothScroll();
        appMaster.reviewsCarousel();
        appMaster.screensCarousel();
        appMaster.animateScript();
        appMaster.scrollMenu();
});
