//= ../../node_modules/jquery/dist/jquery.min.js
//=../../node_modules/jquery-validation/dist/jquery.validate.min.js


//= ./revolution/jquery.themepunch.tools.min.js
//= ./revolution/jquery.themepunch.revolution.min.js
//= ./revolution/revolution.extension.layeranimation.min.js
//= ./revolution/revolution.extension.navigation.min.js
//= ./revolution/revolution.extension.parallax.min.js
//= ./revolution/revolution.extension.slideanims.min.js
//= ./revolution/revolution.extension.video.min.js

//= ../../node_modules/slick-carousel/slick/slick.min.js
//= ../../node_modules/magnific-popup/dist/jquery.magnific-popup.min.js
//= ../../node_modules/wowjs/dist/wow.min.js

$(function() {

  // Revolution Slider Start
  function photography_slider()   {
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


        viewPort: {
          enable: true,
          outof: 'wait',
          visible_area: '80%',
          presize: true,
        },


      });
    }
  }

  photography_slider();
  // Revolution Slider End

// Mobile Menu Start

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

  $('.menu__link').on('click', function(e) {
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

  // Mobile Menu End


// === Sliders Start ===

//  FLAT SLIDER START
  $('.flat-slider').slick({
    arrows: true,
    dots: true,
    dotsClass: 'flat-slider-dots',
    appendDots: $('.flat-dots-container'),
    appendArrows: $('.flat-slider-arrows'),
    slidesToShow: 1,
    slidesToScroll: 1,

    nextArrow: '<button type="button" class="slider-control flat-arrow-right"></button>',

    prevArrow:
      '<button type="button" class="slider-control flat-arrow-left"></button>',
  });
//  FLAT SLIDER END

//  GALLERY SLIDER START
  $('.gallery-slider').slick({
    arrows: true,
    dots: true,
    dotsClass: 'gallery-slider-dots',
    appendDots: $('.gallery-dots-container'),
    appendArrows: $('.gallery-slider-arrows'),


    centerMode: true,
    variableWidth: true,

    slidesToShow: 1,
    slidesToScroll: 1,


    // nextArrow: $('.gallery-arrow-right'),
    nextArrow: '<button type="button" class="slider-control gallery-arrow-right"></button>',

    // prevArrow: $('.gallery-arrow-left'),
    prevArrow:
      '<button type="button" class="slider-control gallery-arrow-left"></button>',

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
//  GALLERY SLIDER END

// PLANS SLIDER START
  $('.plans-slider').slick({
    arrows: true,
    dots: true,
    dotsClass: 'plan-slider-dots',
    appendDots: $('.plan-dots-container'),
    appendArrows: $('.plan-slider-arrows'),

    // nextArrow: $('.plan-arrow-right'),
    nextArrow: '<button type="button" class="slider-control plan-arrow-right"></button>',

    // prevArrow: $('.plan-arrow-left'),
    prevArrow:
      '<button type="button" class="slider-control plan-arrow-left"></button>',

    slidesToShow: 5,
    slidesToScroll: 3,

    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 992,
        settings: {
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
// PLANS SLIDER END

//  PROGRESS SLIDER START
  $('.progress-slider').slick({
    arrows: true,
    dots: true,
    dotsClass: 'flat-slider-dots',
    appendDots: $('.progress-dots-container'),
    appendArrows: $('.progress-slider-arrows'),
    slidesToShow: 1,
    slidesToScroll: 1,

    nextArrow: '<button type="button" class="slider-control progress-arrow-right"></button>',

    prevArrow:
      '<button type="button" class="slider-control progress-arrow-left"></button>',
  });
//  PROGRESS SLIDER END

// === Sliders End ===

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

  $('.progress-slider__img-lg').magnificPopup({
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

    '1a': {
      image: '/images/plans/1@2x.png',
      title: 'Однокімнатна 1A',
      square: '26.39',
      floor: '1 - 5',
      flat: '1',
      price: '17 150$',
    },

    '1b': {
      image: '/images/plans/2@2x.png',
      title: 'Однокімнатна 1B',
      square: '21.75',
      floor: '1 - 5',
      flat: '1',
      price: '14 140$',
    },

    '1c': {
      image: '/images/plans/3@2x.png',
      title: 'Однокімнатна 1C',
      square: '21.71',
      floor: '1 - 5',
      flat: '1',
      price: '14 110$',
    },

    '1d': {
      image: '/images/plans/4@2x.png',
      title: 'Однокімнатна 1D',
      square: '28.38',
      floor: '1 - 5',
      flat: '1',
      price: '18 450$',
    },

    '1e': {
      image: '/images/plans/5@2x.png',
      title: 'Однокімнатна 1E',
      square: '31.37',
      floor: '1 - 5',
      flat: '1',
      price: '20 390$',
    },

    '1f': {
      image: '/images/plans/6@2x.png',
      title: 'Однокімнатна 1F',
      square: '19.4',
      floor: '1 - 5',
      flat: '1',
      price: '12 610$',
    },

    '1g': {
      image: '/images/plans/7@2x.png',
      title: 'Однокімнатна 1G',
      square: '26.67',
      floor: '1 - 5',
      flat: '1',
      price: '17 075$',
    },

    '2a': {
      image: '/images/plans/2a@2x.png',
      title: 'Однокімнатна 2A',
      square: '28.4',
      floor: '1 - 5',
      flat: '1',
      price: '17 750$',
    },

    '2b': {
      image: '/images/plans/2b@2x.png',
      title: 'Однокімнатна 2B',
      square: '20',
      floor: '1 - 5',
      flat: '1',
      price: '12 500$',
    },

    '2c': {
      image: '/images/plans/2c@2x.png',
      title: 'Однокімнатна 2C',
      square: '22,58',
      floor: '1 - 5',
      flat: '1',
      price: '14 112$',
    },

    '2d': {
      image: '/images/plans/2d@2x.png',
      title: 'Однокімнатна 2D',
      square: '25,25',
      floor: '1 - 5',
      flat: '1',
      price: '15 780$',
    },

    '2e': {
      image: '/images/plans/2e@2x.png',
      title: 'Однокімнатна 2E',
      square: '23,05',
      floor: '1 - 5',
      flat: '1',
      price: '14 410$',
    },

    '2f': {
      image: '/images/plans/2f@2x.png',
      title: 'Однокімнатна 2F',
      square: '23, 8',
      floor: '1 - 5',
      flat: '1',
      price: '14 875$',
    },

  };
// === Plans Objects End ===

// === Modal Start ===
  function setModalContent(sId, oData) {
    $('.modal-dialog__plan-drawing').attr('src', oData[sId].image);
    $('.plans-info__title').html(oData[sId].title);
    $('.plans-info__square').html(oData[sId].square);
    $('.plans-info__floor').html(oData[sId].floor);
    $('.plans-info__flat').html(oData[sId].flat);
    $('.plans-info__price').html(oData[sId].price);
  }

  $('.plans-slider__item').on('click', function(e) {
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

  $('.modal').on('click', function(e) {
    if (
      !$(e.target).is('.modal-dialog') &&
      !$(e.target).closest('.modal-dialog').length
    ) {
      hideModal();
    }
  });

  $('.modal-dialog__close').on('click', function() {
    hideModal();
  });
// === Modal End ===

// WOW Library Start
  let wow = new WOW(
    {
      boxClass: 'wow',      // animated element css class (default is wow)
      animateClass: 'animated', // animation css class (default is animated)
      offset: 0,          // distance to the element when triggering the animation (default is 0)
      mobile: true,       // trigger animations on mobile devices (default is true)
      live: true,      // act on asynchronously loaded content (default is true)
      //   callback:     function(box) {
      //     // the callback is fired every time an animation is started
      //     // the argument that is passed in is the DOM node being animated
      //   },
      //   scrollContainer: null // optional scroll container selector, otherwise use window
    },
  );
  wow.init();
// WOW Library End

// Modal Infrastructure Start
  $('.js-infrastructure__link').on('click', function() {
    $(this).data('infrastructure');
    $(`#${$(this).data('infrastructure')}`).fadeIn().addClass('modal-open');
    $('body').addClass('body--fixed');


  });

  $('.js-close').on('click', function() {
    $('.modal-infrastructure').fadeOut().removeClass('modal-open');
    $('body').removeClass('body--fixed');
  });
// Modal Infrastructure End


  // === Forms Settings Start ===

  //Form Action Start

  function createModal() {
    $('body').prepend(
      '' +
      '<div class="modal modal-apply">\n' +
      '    <div class="modal__dialog">\n' +
      '        <div class="modal__body">\n' +
      '        <div class="btn-close"></div>\n' +
      '        <div class="js-modal-content">\n' +
      '        <h3 class="form__title">Заповніть форму нижче! <br> Ми зв\'яжемося з Вами, відповімо на всі питання та підберемо зручний час перегляду.</h3>' +
      '        <form class="form modal__form" id="view">        \n' +
      '            <input class="input modal__input" type="text" name="name" placeholder="Ваше ім\'я..." required><br>\n' +
      '            <input class="input modal__input" type="tel" name="phone" placeholder="Ваш телефон..."><br>\n' +
      '<input type="text" hidden name="form_id" value="просмотр" />\n' +
      '            <button type="submit"  class="action-btn form__action-btn"> Хочу на перегляд</button>\n' +
      '        </form>\n' +
      '        </div>\n' +
      '        </div>\n' +
      '        <div class="modal__footer">\n' +
      '        <p class="modal__footnote main-text_white">Ваші дані в цілковитій безпеці і ніколи НЕ будуть передані 3-м особам.</p>\n' +
      '        </div>\n' +
      '    </div>\n' +
      '</div>',
    );
  }


  $('.js-action__btn').on('click', function(e) {

    createModal();


    $('.modal-apply').fadeIn();
    $('body').addClass('body_fixed');
    $('.modal-apply').on('click', function(e) {
      if (
        !$(e.target).closest('.modal__dialog').length &&
        !$(e.target).is('.modal__dialog')
      ) {
        $('.modal-apply').fadeOut();
        $('.overlay').remove();
        $('.modal-apply').remove();
        $('body').removeClass('body_fixed');
      }
    });

    $('.btn-close').on('click', function() {
      $('.modal-apply').fadeOut();
      $('.overlay').remove();
      $('.modal-apply').remove();
      $('body').removeClass('body_fixed');
    });

    validateForm('#view');

  });

  //Form Action End

  // = Forms Validation Start =

  function validateForm(form) {
    $(form).validate({
      rules: {
        name: {
          required: true,
        },
        phone: {
          required: true,
        },
      },

      messages: {
        name: 'Будь ласка, введіть Ваше ім\'я',
        phone: 'Будь ласка, введіть Ваш номер телефону',
      },
      submitHandler: function(form) {
        $.ajax({
          type: 'POST',
          url: '/php-mailer/mail.php',
          data: $(form).serialize(),
          success: function() {
            window.location.href = '/thanks.html';
          },
          error: function(err) {
            console.log('Error: ', err);
          },
        });
      },
    });
  }

  // = Forms Validation End =

  // = More Details Form Start =

  $('.js-plan-info__btn').on('click', function() {
    $('.details-form').toggleClass('details-form--visible');
    validateForm('#details');

  });

  $('.js-details-close').on('click', function() {
    $('.details-form').removeClass('details-form--visible');
  });

  // = More Details Form End =

  // === Forms Settings End ===
});
