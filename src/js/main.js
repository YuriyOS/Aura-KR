//= ../../node_modules/jquery/dist/jquery.min.js

//= ./revolution/jquery.themepunch.tools.min.js
//= ./revolution/jquery.themepunch.revolution.min.js
//= ./revolution/revolution.extension.layeranimation.min.js
//= ./revolution/revolution.extension.navigation.min.js
//= ./revolution/revolution.extension.parallax.min.js
//= ./revolution/revolution.extension.slideanims.min.js
//= ./revolution/revolution.extension.video.min.js

//= ../../node_modules/slick-carousel/slick/slick.min.js
//= ../../node_modules/magnific-popup/dist/jquery.magnific-popup.min.js


$(function() {

  // $('#home_full_slider').show().revolution();

  function photography_slider() {
    if ($('#home_full_slider').length) {
      $('#home_full_slider').revolution({
        sliderType: 'standard',
        sliderLayout: 'fullscreen',
        dottedOverlay: 'none',
        delay: 7000,
        autoHeight: 'on',
        minHeight: 480,
        navigation: {
          keyboardNavigation: 'off',
          keyboard_direction: 'horizontal',
          onHoverStop: 'off',
          mouseScrollNavigation: 'off',
          mouseScrollReverse: 'default',
          touch: {
            touchenabled: 'on',
            swipe_threshold: 75,
            swipe_min_touches: 1,
            swipe_direction: 'horizontal',
            drag_block_vertical: false,
          },
          // bullets: {
          //   enable: ,
          //
          //   hide_onmobile: true,
          //
          //   direction: "vertical",
          //   h_align: "right",
          //   v_align: "center",
          //   h_offset: 80,
          //   v_offset: 0,
          //   space: 27
          // },


          //  Arrows Settings Start
          arrows: {

            enable: true,
            style: 'persephone',
            // tmp: '',
            rtl: false,
            hide_onleave: false,
            hide_onmobile: true,
            hide_under: 0,
            hide_over: 9999,
            hide_delay: 200,
            hide_delay_mobile: 1200,

            left: {
              container: 'slider',
              h_align: 'left',
              v_align: 'center',
              h_offset: 20,
              v_offset: 0,
            },

            right: {
              container: 'slider',
              h_align: 'right',
              v_align: 'center',
              h_offset: 20,
              v_offset: 0,
            },

          },
          //  Arrows Settings End


        },
        responsiveLevels: [1920, 1199, 991, 768, 480],
        visibilityLevels: [1920, 960, 991, 768, 480],
        gridwidth: [1170, 1024, 991, 768, 480],
        gridheight: [950, 768, 600, 600, 480],
        lazyType: 'none',
        shadow: 0,
        spinner: 'off',
        stopLoop: 'on',
        stopAfterLoops: 0,
        stopAtSlide: 1,
        shuffle: 'off',
        autoHeight: 'off',
        fullScreenAutoWidth: 'off',
        fullScreenAlignForce: 'off',
        fullScreenOffsetContainer: '',
        fullScreenOffset: '',
        disableProgressBar: 'on',
        hideThumbsOnMobile: 'off',
        hideSliderAtLimit: 0,
        hideCaptionAtLimit: 0,
        hideAllCaptionAtLilmit: 0,
        debugMode: false,
        fallbacks: {
          simplifyAll: 'off',
          nextSlideOnWindowFocus: 'off',
          disableFocusListener: false,
        },
        parallax: {
          type: 'mouse',
          origo: 'slidercenter',
          speed: 2000,
          levels: [2, 3, 4, 5, 6, 7, 12, 16, 10, 50],
        },
      });
    }
  }

  photography_slider();

// Mobile Menu

  $('.js-menu-btn--open').on('click', function() {
    $('.menu').addClass('menu--visible');
    $('body').addClass('body--fixed');
  });


  function hideMenu() {
    $('.menu').removeClass('menu--visible');
    $('body').removeClass('body--fixed');
  }

  $('.js-menu-btn--close').on('click', function() {
    hideMenu();
  });

  $('.navigation__link').on('click', function(e) {
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
  });

  //==
  // Mobile Menu End
});

// Sliders Start
$('.classic-slider').slick({
  arrows: true,
  dots: true,
  dotsClass: 'dots-style',
  slidesToShow: 1,
  slidesToScroll: 1,

  prevArrow:
    '<button type="button" class="slider-control slider-prev"></button>',
  nextArrow:
    '<button type="button" class="slider-control slider-next"></button>',

  // responsive: [
  //   {
  //     breakpoint: 992,
  //     settings: {
  //       slidesToShow: 1,
  //       slidesToScroll: 1,
  //     },
  //   },
  // ],
});

$('.gallery-slider').slick({
  arrows: true,
  dots: true,
  dotsClass: 'dots-style-general',
  appendDots: $('.dots-style-general'),
  appendArrows: $('.gallery-slider__arrows'),


  // dotsClass: 'card-slider__dots view-slider__dots',

  centerMode: true,
  variableWidth: true,

  slidesToShow: 1,
  slidesToScroll: 1,

  prevArrow:
  // '<button type="button" class="slider-control slider-prev gallery-slider__prev"></button>',
    '<button type="button" class="slider-control arrow-prev-general"></button>',

  nextArrow:
  // '<button type="button" class="slider-control slider-next gallery-slider__next"></button>',
    '<button type="button" class="slider-control arrow-next-general"></button>',

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

// = Plans Slider Start =
$('.long-slider').slick({
  arrows: true,
  dots: true,
  dotsClass: 'long-slider__dots',
  appendDots: $('.long-slider__dots'),
  appendArrows: $('.long-slider__arrows'),
  // dotsClass: 'dots-style',
  // appendArrows: $('.long-slider__arrows'),

  prevArrow:
    '<button type="button" class="slider-control slider-prev"></button>',

  nextArrow:
    '<button type="button" class="slider-control slider-next"></button>',

  slidesToShow: 5,
  slidesToScroll: 3,

  responsive: [
    {
      breakpoint: 1200,
      settings: {
        // appendArrows: $('.long-slider__arrows'),
        slidesToShow: 3,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 992,
      settings: {
        // appendArrows: $('.long-slider__arrows'),

        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});

// = Plans Slider End =

// Sliders End

// === Magnific Popup Settings Start
$('.gallery-slider__img-lg').magnificPopup({
  type: 'image',
  gallery: {
    enabled: true,
  },
  fixedBgPos: true,
  fixedContentPos: true,
});

$('.classic-slider__img-lg').magnificPopup({
  type: 'image',
  gallery: {
    enabled: true,
  },
  fixedBgPos: true,
  fixedContentPos: true,
});
// === Magnific Popup Settings End


// === Plans Objects Start ===

let layoutData = {
  // 0 Floor
  // '0e': {
  //   image: '/images/plans/0/0E@2x.jpg',
  //   title: 'Однокімнатна 0E',
  //   square: '23.06',
  //   floor: '0',
  //   flat: '1',
  // },
  '0d': {
    image: '/images/plans/1@2x.png',
    title: 'Однокімнатна 0D',
    square: '27.29',
    floor: '1',
    flat: '1',
  },
  '0f': {
    image: '/images/plans/1@2x.png',
    title: 'Однокімнатна 0F',
    square: '27.58',
    floor: '1',
    flat: '1',
  },
  '0a': {
    image: '/images/plans/1@2x.png',
    title: 'Однокімнатна 0A',
    square: '33.5',
    floor: '1',
    flat: '1',
  },
  '0g': {
    image: '/images/plans/1@2x.png',
    title: 'Однокімнатна 0G',
    square: '37.97',
    floor: '1',
    flat: '1',
  },
  '0j': {
    image: '/images/plans/1@2x.png',
    title: 'Однокімнатна 0J',
    square: '44.53',
    floor: '1',
    flat: '1',
  },
  '0k': {
    image: '/images/plans/1@2x.png',
    title: 'Двокімнатна 0K',
    square: '49.79',
    floor: '1',
    flat: '2',
  },

  // 1 Floor
  '1j': {
    image: '/images/plans/1@2x.png',
    title: 'Двокімнатна 1J',
    square: '56.23',
    floor: '1',
    flat: '2',
  },
  '1i': {
    image: '/images/plans/1@2x.png',
    title: 'Двокімнатна 1I',
    square: '56.35',
    floor: '1',
    flat: '2',
  },
  '1c': {
    image: '/images/plans/1@2x.png',
    title: 'Двокімнатна 1C',
    square: '61.71',
    floor: '1',
    flat: '2',
  },
  '1d': {
    image: '/images/plans/1@2x.png',
    title: 'Двокімнатна 1D',
    square: '62.54',
    floor: '1',
    flat: '2',
  },
  '1m': {
    image: '/images/plans/1@2x.png',
    title: 'Двокімнатна 1M',
    square: '76.64',
    floor: '1',
    flat: '3',
  },
  '1k': {
    image: '/images/plans/1@2x.png',
    title: 'Дворівнева 1K',
    square: '95.50',
    floor: '1',
    flat: '3',
  },
  '1l': {
    image: '/images/plans/1@2x.png',
    title: 'Дворівнева 1L',
    square: '108.94',
    floor: '1',
    flat: '4',
  },

  // 2 Floor

  '2p': {
    image: '/images/plans/2/2P@2x.jpg',
    title: 'Студія 2P',
    square: '30.12',
    floor: '2',
    flat: '1',
  },
  '2f': {
    image: '/images/plans/2/2F@2x.jpg',
    title: 'Студія 2F',
    square: '37.26',
    floor: '2',
    flat: '1',
  },
  '2j': {
    image: '/images/plans/2/2J@2x.jpg',
    title: 'Однокімнатна 2J',
    square: '34.87',
    floor: '2',
    flat: '1',
  },
  '2k': {
    image: '/images/plans/2/2K@2x.jpg',
    title: 'Однокімнатна 2K',
    square: '60.5',
    floor: '2',
    flat: '1',
  },
  '2l': {
    image: '/images/plans/2/2L@2x.jpg',
    title: 'Двокімнатна 2L',
    square: '63.33',
    floor: '2',
    flat: '2',
  },
  // 3 Floor
  '3n': {
    image: '/images/plans/3/3N@2x.jpg',
    title: 'Студія 3N',
    square: '26.33',
    floor: '3',
    flat: '1',
  },
  // 3 Floor End

  // === House 3 - 2 Floor Start ===
  'h3-2a': {
    image: '/images/plans/house-3/2/2a@2x.jpg',
    title: 'Студія 2A | 3A',
    square: '34.09',
    floor: '2 | 3',
    flat: '1',
  },

  'h3-2b': {
    image: '/images/plans/house-3/2/2b@2x.jpg',
    title: 'Однокімнатна 2B | 3B',
    square: '34.09 м2',
    floor: '2 | 3',
    flat: '1',
  },

  'h3-2c': {
    image: '/images/plans/house-3/2/2c@2x.jpg',
    title: 'Однокімнатна 2C | 3C',
    square: '34.57 м2',
    floor: '2 | 3',
    flat: '1',
  },

  'h3-2d': {
    image: '/images/plans/house-3/2/2d@2x.jpg',
    title: 'Однокімнатна 2D | 3D',
    square: '38.86 м2',
    floor: '2 | 3',
    flat: '1',
  },

  'h3-2e': {
    image: '/images/plans/house-3/2/2e@2x.jpg',
    title: 'Однокімнатна 2E | 3E',
    square: '34.09 м2',
    floor: '2 | 3',
    flat: '1',
  },

  'h3-2f': {
    image: '/images/plans/house-3/2/2f@2x.jpg',
    title: 'Однокімнатна 2F | 3F',
    square: '32.62 м2',
    floor: '2 | 3',
    flat: '1',
  },

  'h3-2g': {
    image: '/images/plans/house-3/2/2g@2x.jpg',
    title: 'Однокімнатна 2G | 3G',
    square: '32.02 м2',
    floor: '2 | 3',
    flat: '1',
  },

  'h3-2h': {
    image: '/images/plans/house-3/2/2h@2x.jpg',
    title: 'Однокімнатна 2H | 3H',
    square: '29.93 м2',
    floor: '2 | 3',
    flat: '1',
  },

  'h3-2i': {
    image: '/images/plans/house-3/2/2i@2x.jpg',
    title: 'Однокімнатна 2I | 3I',
    square: '32.62 м2',
    floor: '2 | 3',
    flat: '1',
  },

  'h3-2j': {
    image: '/images/plans/house-3/2/2j@2x.jpg',
    title: 'Однокімнатна 2J | 3J',
    square: '38.86 м2',
    floor: '2 | 3',
    flat: '1',
  },

  'h3-2k': {
    image: '/images/plans/house-3/2/2k@2x.jpg',
    title: 'Однокімнатна 2K | 3K',
    square: '54.77 м2',
    floor: '2 | 3',
    flat: '1',
  },

  'h3-2l': {
    image: '/images/plans/house-3/2/2l@2x.jpg',
    title: 'Студія 2L | 3L',
    square: '29.93 м2',
    floor: '2 | 3',
    flat: '1',
  }

  // H3 - 2 Floor End
};
// === Plans Objects End ===

// === Modal Start ===
function setModalContent(sId, oData) {
  $('.modal-dialog__plan-drawing').attr('src', oData[sId].image);
  $('.plans-info__title').html(oData[sId].title);
  $('.plans-info__square').html(oData[sId].square);
  $('.plans-info__floor').html(oData[sId].floor);
  $('.plans-info__flat').html(oData[sId].flat);
}

$('.plans-slider__item').on('click', function (e) {
  $('body').addClass('body--fixed');
  $('.modal').fadeIn();
  setModalContent($(this).data('planId'), layoutData);
  $('.overlay').fadeIn();
});

function hideModal() {
  $('body').removeClass('body--fixed');
  $('.modal').fadeOut();
  $('.overlay').fadeOut();
}

$('.modal').on('click', function (e) {
  if (
    !$(e.target).is('.modal-dialog') &&
    !$(e.target).closest('.modal-dialog').length
  ) {
    hideModal();
  }
});

$('.modal-dialog__close').on('click', function () {
  hideModal();
});
// === Modal End ===
