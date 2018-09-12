"use strict";

jQuery(document).ready(function () {

    var $window = $(window);

    $window.on( 'load', function () {
        $("#status").fadeOut();
        $("#preloader").delay(350).fadeOut("slow");
        $("body").delay(350).css({ "overflow": "visible" });
        new WOW().init();

        $(".grid-masonry").masonry({
            // options...
            itemSelector: ".grid-item",
            columnWidth: ".grid-item",

        });
        
        $("#status").fadeOut();
        $("#preloader").delay(350).fadeOut("slow");

    });

    $window.on('scroll' , function () {

        if ($(".navbar-default").add(".navbar-inverse").offset().top > 50) {
            $(".reveal-menu-home").addClass("sticky-nav");
            $(".reveal-menu-blog").addClass("sticky-nav-white");
        } else {
            $(".reveal-menu-home").removeClass("sticky-nav");
            $(".reveal-menu-blog").removeClass("sticky-nav-white");
        }
    });

    var interleaveOffset = 0.5;
    var swiperOptions = {
        loop: true,
        speed: 1000,
        grabCursor: true,
        watchSlidesProgress: true,
        mousewheelControl: true,
        keyboardControl: true,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev"
        },
        on: {
            progress: function() {
              var swiper = this;
              for (var i = 0; i < swiper.slides.length; i++) {
                var slideProgress = swiper.slides[i].progress;
                var innerOffset = swiper.width * interleaveOffset;
                var innerTranslate = slideProgress * innerOffset;
                swiper.slides[i].querySelector(".slide-inner").style.transform =
                  "translate3d(" + innerTranslate + "px, 0, 0)";
              }
            },
            touchStart: function() {
              var swiper = this;
              for (var i = 0; i < swiper.slides.length; i++) {
                swiper.slides[i].style.transition = "";
              }
            },
            setTransition: function(speed) {
                var swiper = this;
                for (var i = 0; i < swiper.slides.length; i++) {
                    swiper.slides[i].style.transition = speed + "ms";
                    swiper.slides[i].querySelector(".slide-inner").style.transition =
                    speed + "ms";
                }
            }
        }
    };
    var swiper = new Swiper(".swiper-container", swiperOptions);

    $window.on( 'resize', function () {
        var bodyheight = $(this).height();
        $("#kc_banner").height(bodyheight);
    }).resize();

    try {
        $(".fun-facts_wrapper").appear(function () {
            $(".timer").countTo();
        });
    } catch (err) {

        console.log(err.message);
    }

    $("#kc_banner").parallax("50%", 0);

    $("#navigation").onePageNav({
        currentClass: "active",
        changeHash: true,
        scrollSpeed: 1000,
        scrollThreshold: 0.5,
        filter: "",
        easing: "swing",
        begin: function () {
        },
        end: function () {
        },
        scrollChange: function ($currentListItem) {
        }
    });

    var kc_personal = window.kc_personal || {},
        $win = $(window);

        kc_personal.Isotope = function () {

        // 4 column layout
        var isotopeContainer = $(".isotopeContainer");
        if (!isotopeContainer.length || !jQuery().isotope) return;
        $win.on('load' , function(){
            isotopeContainer.isotope({
                itemSelector: ".isotopeSelector"
            });
            $(".kc_filter").on("click", "a", function (e) {
                $(".kc_filter ul li").find(".active").removeClass("active");
                $(this).addClass("active");
                var filterValue = $(this).attr("data-filter");
                isotopeContainer.isotope({ filter: filterValue });
                e.preventDefault();
            });
        });

    };

    kc_personal.Isotope();

    $("#kc_testimonial .owl-carousel").owlCarousel({
        loop: false,
        margin: 24,
        autoplay: false,
        autoplayHoverPause: true,
        autoplaySpeed: 1000,
        dot: true,
        smartSpeed:850,
        responsive: {
            0: {
                items: 1,
                dots: true
            },
            600: {
                items: 1,
                dots: true
            },
            1000: {
                items: 3,
                dots: true
            },
            1201: {
                items: 3,
                dots: true
            }
        }
    });

    $("#kc_branding .owl-carousel").owlCarousel({
        loop: true,
        margin: 10,
        autoplay: true,
        autoplaySpeed: 1000,
        dot: true,
        smartSpeed:1000,
        responsive: {
            0: {
                items: 1,
                dots: true
            },
            600: {
                items: 2,
                dots: true
            },
            1000: {
                items: 4,
                dots: true
            },
            1201: {
                items: 4,
                dots: true
            }
        }
    });
    
    $("#bgndVideo").YTPlayer();
    
    $(".various").fancybox({
        maxWidth: 800,
        maxHeight: 600,
        fitToView: false,
        width: "70%",
        height: "70%",
        autoSize: false,
        closeClick: true,
        openEffect: "elastic",
        closeEffect: "none"
    });

    var FancYB = $('.fancybox');
    FancYB.fancybox({
        openEffect: 'fade',
        closeEffect: 'fade',
        padding : 0,
        closeBtn: true,
        helpers: {
            title: {
                type: 'inside'
            },
            overlay: {
              locked: false
            },
            buttons: {}
        }
    });
    FancYB.attr('rel','gallery');

    var ctx1 = $("#age");
    var ctx2 = $("#family");
    var ctx3 = $("#kids");
    var data1 = {
        labels: ["До 35", "35-55 лет", "55 лет и старше"],
        datasets: [
            {
                data: [39, 55, 6],
                backgroundColor: [
                    "#78B6D9",
                    "#60A69F",
                    "#6682BB"
                ],
                borderColor: [
                    "#78B6D9",
                    "#60A69F",
                    "#6682BB"
                ],
                borderWidth: [1, 1, 1]
            }
        ]
    };
    var data2 = {
        labels: ["Замужем", "Не замужем, но живем вместе", "Не замужем", "Разведены"],
        datasets: [
            {
                data: [75, 4, 5, 6],
                backgroundColor: [
                    "#78B6D9",
                    "#60A69F",
                    "#6682BB",
                    "#A37182"
                ],
                borderColor: [
                    "#78B6D9",
                    "#60A69F",
                    "#6682BB",
                    "#A37182"
                ],
                borderWidth: [1, 1, 1, 1]
            }
        ]
    };
    var data3 = {
        labels: ["Менее 3 лет", "3-5 лет", "6-8 лет", "9-11 лет", "12-14 лет", "15+", "Нет детей"],
        datasets: [
            {
                data: [75, 4, 5, 6, 4, 5, 6],
                backgroundColor: [
                    "#78B6D9",
                    "#60A69F",
                    "#6682BB",
                    "#A37182",
                    "#EEBA69",
                    "#E9967A",
                    "#90BA58"
                ],
                borderColor: [
                    "#78B6D9",
                    "#60A69F",
                    "#6682BB",
                    "#A37182",
                    "#EEBA69",
                    "#D88569",
                    "#90BA58"
                ],
                borderWidth: [1, 1, 1, 1, 1, 1, 1]
            }
        ]
    };

    var options = {
        responsive: true,
        legend: {
            display: true,
            position: "bottom",
            labels: {
                fontColor: "#333",
                fontSize: 16,
                usePointStyle: true,
            }
        },
      tooltips: {
        callbacks: {
          label: function(tooltipItems, data) {  
            return data.labels[tooltipItems.index];
          }
        }
      }
    }

    var chart1 = new Chart(ctx1, {
        type: "doughnut",
        data: data1,
        options: options
    });

    var chart2 = new Chart(ctx2, {
        type: "doughnut",
        data: data2,
        options: options
    });

    var chart3 = new Chart(ctx3, {
        type: "doughnut",
        data: data3,
        options: options
    });

    $("#pie").dxPieChart({
        type: "doughnut",
        palette: "Soft Pastel",
        dataSource: dataSource,
        tooltip: {
            enabled: true,
            format: "percent"
        },
        legend: {
            horizontalAlignment: "left",
            verticalAlignment: "top",
            margin: {
                left: 10,
                top: 50
            },
            markerSize: 20,
            family: '"Roboto"',
            fontSize: 17,
            color: "#626262"
        },
        series: [{        
            argumentField: "region",
            label: {
                visible: true,
                format: "percent",
                connector: {
                    visible: true
                }
            }
        }]
    });
});
var dataSource = [{
    region: "от 10 до 100 млн",
    val: 0.46
}, {
    region: "до 10 млн в год",
    val: 0.35
}, {
    region: "от 100 млн до 1 млрд",
    val: 0.11
}, {
    region: "более 5 млрд",
    val: 0.02
}, {
    region: "от 1 до 5 млрд",
    val: 0.03
}, {
    region: "нет данных",
    val: 0.03
}];