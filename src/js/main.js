//= ../../node_modules/jquery/dist/jquery.min.js
//= ../../node_modules/slick-carousel/slick/slick.min.js

//= ./revolution/jquery.themepunch.tools.min.js
//= ./revolution/jquery.themepunch.revolution.min.js
//= ./revolution/revolution.extension.layeranimation.min.js
//= ./revolution/revolution.extension.navigation.min.js
//= ./revolution/revolution.extension.parallax.min.js
//= ./revolution/revolution.extension.slideanims.min.js
//= ./revolution/revolution.extension.video.min.js

$(function() {

  // $('#home_full_slider').show().revolution();

  function photography_slider(){
    if ( $('#home_full_slider').length ){
      $("#home_full_slider").revolution({
        sliderType:"standard",
        sliderLayout:"fullscreen",
        dottedOverlay:"none",
        delay:7000,
        autoHeight: 'on',
        minHeight:480,
        navigation: {
          keyboardNavigation:"off",
          keyboard_direction: "horizontal",
          onHoverStop:"off",
          mouseScrollNavigation:"off",
          mouseScrollReverse:"default",
          touch:{
            touchenabled:"on",
            swipe_threshold: 75,
            swipe_min_touches: 1,
            swipe_direction: "horizontal",
            drag_block_vertical: false
          },
          bullets: {
            enable: true,
            hide_onmobile: true,

            direction: "vertical",
            h_align: "right",
            v_align: "center",
            h_offset: 80,
            v_offset: 0,
            space: 27
          }
        },
        responsiveLevels:[1920,1199,991,768,480],
        visibilityLevels:[1920,960,991,768,480],
        gridwidth:[1170,1024,991,768,480],
        gridheight:[950,768,600,600,480],
        lazyType:"none",
        shadow:0,
        spinner:"off",
        stopLoop:"on",
        stopAfterLoops:0,
        stopAtSlide:1,
        shuffle:"off",
        autoHeight:"off",
        fullScreenAutoWidth:"off",
        fullScreenAlignForce:"off",
        fullScreenOffsetContainer: "",
        fullScreenOffset: "",
        disableProgressBar:"on",
        hideThumbsOnMobile:"off",
        hideSliderAtLimit:0,
        hideCaptionAtLimit:0,
        hideAllCaptionAtLilmit:0,
        debugMode:false,
        fallbacks: {
          simplifyAll:"off",
          nextSlideOnWindowFocus:"off",
          disableFocusListener:false,
        },
        parallax: {
          type:"mouse",
          origo:"slidercenter",
          speed:2000,
          levels:[2,3,4,5,6,7,12,16,10,50],
        },
      })
    }
  }
  photography_slider();

// Mobile Menu

  $('.js-menu-btn--open').on('click', function () {
    $('.menu').addClass('menu--visible');
    $('body').addClass('body--fixed');
  });


  function hideMenu() {
    $('.menu').removeClass('menu--visible');
    $('body').removeClass('body--fixed');
  }

  $('.js-menu-btn--close').on('click', function () {
    hideMenu();
  });

  $('.navigation__link').on('click', function (e) {
    if ($(this.hash).length) {
      e.preventDefault();
      hideMenu();
      $('html, body').animate(
        {
          scrollTop: $(this.hash).offset().top,
        },
        1500,
      );
    }
  });

  //==

  function addHeaderBackground() {

    const _height = $('.js-header-animate').height();
    if ($(window).scrollTop() > _height) {
      $('.js-header-animate').addClass('header--dark');
    } else {
      $('.js-header-animate').removeClass('header--dark');
    }

  }

  addHeaderBackground();

  $(window).on('scroll', function() {
    addHeaderBackground();
  })

  //==
  // Mobile Menu End
});

// Sliders Start
$('.classic-slider').slick({
  arrows: true,
  dots: true,
  dotsClass: 'dots-style',

  prevArrow:
    '<button type="button" class="slider-control slider-prev"></button>',
  nextArrow:
    '<button type="button" class="slider-control slider-next"></button>',

  responsive: [
    {
      breakpoint: 10000,
      settings: 'unslick',
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
})

$('.gallery-slider').slick({
  arrows: true,
  dots: true,
  dotsClass: 'dots-style',


  // dotsClass: 'card-slider__dots view-slider__dots',

  centerMode: true,
  variableWidth: true,

  slidesToShow: 1,
  slidesToScroll: 1,

  prevArrow:
    '<button type="button" class="slider-control slider-prev"></button>',

  nextArrow:
    '<button type="button" class="slider-control slider-next"></button>',

  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: false,
        variableWidth: false,
      },
    },
  ],
});
// Sliders End
