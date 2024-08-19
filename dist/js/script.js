$(document).ready(function () {
  new WOW().init();

  $('#tab-container').easytabs({
    animationSpeed: 'fast',
    updateHash: false
  });

  $('.multiple-items').slick({
    infinite: false,
    dots: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1224,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 870,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 775,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
    ]
  });

  // Start select
   $('.select').multipleSelect({});

  // Start multiple-itemsNew
  $('.multiple-itemsNew').slick({
    infinite: false,
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  });

  $('.multiple-itemsNew .slick-slide').hover(
    function() {
      $(this).closest('.multiple-itemsNew').slick('slickNext');
    },
    function() {
      $(this).closest('.multiple-itemsNew').slick('slickPrev');
    }
  );


  $('.qualityMobilSlider').slick({
    infinite: true,
    dots: true,
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 1,
  });


  // Start intlTelInput
  // function phoneMask() {
  //   $('.phone_mask').intlTelInput({
  //     utilsScript: "js/utils.js",
  //     preferredCountries: ["ru", "by", "ua", "kz"]
  //   });
  // }
  //
  // phoneMask();

  $(".phone_mask").inputmask("+7 (999) 999-99-99");

  // Start mySwiper
  const progressCircle = document.querySelector(".autoplay-progress svg");
  const progressContent = document.querySelector(".autoplay-progress span");
  let swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 10000,
      disableOnInteraction: false
    },
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
    on: {
      autoplayTimeLeft(s, time, progress) {
        progressCircle.style.setProperty("--progress", 1 - progress);
        progressContent.textContent = `${Math.ceil(time / 1000)}s`;
      }
    }
  });


  // Start swipe slider our
  const swiperOur = new Swiper(".swiperOur", {
    pagination: {
      el: ".swiper-pagination2",
      type: "fraction",
    },
    navigation: {
      nextEl: ".swiper-button-next2",
      prevEl: ".swiper-button-prev2",
    },
  });



// Start productionsRightSlider
  const productionsRightAnimation = $('.productionsRightAnimation');
  const productionsRightBlockAnimate = $('.productionsRightBlockAnimate');
  const productionsRightAnimationText = $('.productionsRightAnimationText');
  const productionsNavCountAnimate = $('.js-productionsNavCountAnimate');

  function createPaginateCount(slidesLength) {
    const items = [];

    for (let i = 0; i < slidesLength; i++) {
      if (i === 0) {
        items.push(`<span class='active'>${i + 1}</span>`)
      } else {
        items.push(`<span>${i + 1}</span>`)
      }
    }

    return items.join('');
  }

  const productionsRightSlider = new Swiper(".productionsRightSlider", {
    slidesPerView: 3,
    spaceBetween: 20,
    loop: true,
    allowTouchMove: true,
    speed: 1100,
    pagination: {
      el: ".swiper-pagination3",
      type: "fraction",
    },
    navigation: {
      nextEl: ".swiper-button-next3",
      prevEl: ".swiper-button-prev3",
    },
    on: {
      init: (swiper) => {
        const { slides } = swiper;
        if (slides && slides.length) {
          productionsNavCountAnimate.find('.swiper-pagination-current').before(`<span class="swiper-pagination-current-custom">${createPaginateCount(slides.length)}</span>`);
        }
      },
    },
    breakpoints: {
      768: {
        allowTouchMove: false,
      },
    },
  });

  productionsRightSlider.on('slideChangeTransitionStart', (event) => {
    productionsRightBlockAnimate.addClass('is-disabled');

    productionsRightAnimationText.find('.active').removeClass('active');
    productionsRightAnimationText.find('.productionsRightSliderContent').eq(event.realIndex).addClass('active');

    productionsNavCountAnimate.find('.swiper-pagination-current-custom .active').removeClass('active');
    productionsNavCountAnimate.find('.swiper-pagination-current-custom span').eq(event.realIndex).addClass('active');
  });

  productionsRightSlider.on('slideChangeTransitionEnd', () => {
    productionsRightBlockAnimate.removeClass('is-disabled');
  });

  productionsRightSlider.on('slideNextTransitionStart', () => {
    productionsRightAnimation.addClass('is-animate-next');
  });

  productionsRightSlider.on('slideNextTransitionEnd', (event) => {
    productionsRightAnimation.find('.productionsRightSliderBlock.active').removeClass('active');
    productionsRightAnimation.find('.productionsRightSliderBlock').eq(event.realIndex).addClass('active');
    productionsRightAnimation.removeClass('is-animate-next');
  });

  productionsRightSlider.on('slidePrevTransitionStart', (event) => {
    productionsRightAnimation.addClass('is-animate-prev');
    productionsRightAnimation.find('.productionsRightSliderBlock.active').removeClass('active');
    productionsRightAnimation.find('.productionsRightSliderBlock').eq(event.realIndex).addClass('active');
  });

  productionsRightSlider.on('slidePrevTransitionEnd', () => {
    productionsRightAnimation.removeClass('is-animate-prev');
  });

  $('.js-swiperButtonAnimate').on('click', (event) => {
    const elem = $(event.currentTarget);
    elem.addClass('is-animate-hide');
    elem.addClass('is-animate-hide-svg');

    setTimeout(() => {
      elem.removeClass('is-animate-hide');
    }, 400);

    setTimeout(() => {
      elem.removeClass('is-animate-hide-svg');
    }, 700)
  });


  // Start ourProductSlider
  const ourProductSlider = new Swiper(".ourProductSlider", {
    slidesPerView: 1,
    spaceBetween: 0,
    pagination: {
      el: ".swiper-pagination4",
      type: "fraction",
    },
    navigation: {
      nextEl: ".swiper-button-next4",
      prevEl: ".swiper-button-prev4",
    },
  });

  // Start mobil menu btn
  $('.mobilBtn').on('click', function () {
    $(this).toggleClass("active");
    $('.mobilMenu').slideToggle();
    $('body').toggleClass('hide');
  });

  $('.mobilMenuListIn > a').on('click', function (event) {
    event.preventDefault();
    $('.mobilMenuListInSub').slideToggle();
    $(this).toggleClass('active');
  });



  $('.multiple-items2').slick({
    infinite: true,
    dots: true,
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 1,
  });



  $('.articleSlider').slick({
    infinite: true,
    dots: true,
    arrows: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  });


  // Start metis menu
  $("#menu1").metisMenu();
  $("#menu2").metisMenu();

  // Start filter btn scroll
  $(window).on('scroll', function() {
    const scrollPosition = $(window).scrollTop();

    if (scrollPosition > 5) {
      $('.filterMobilFilter').addClass('active');
    } else {
      $('.filterMobilFilter').removeClass('active');
    }
  });

  $('.filterMobilFilter').on('click', function () {
    $('.filterMobil').addClass('active');
    $('body').addClass('hide');
  });

  $('.filterMobil__btn').on('click', function () {
    $('.filterMobil').removeClass('active');
    $('body').removeClass('hide');
  });


  const SwiperVertical = new Swiper(".SwiperVertical", {
    slidesPerView: 1,
    spaceBetween: 0,
    mousewheel: false,
    navigation: {
      nextEl: ".swiper-button-next5",
      prevEl: ".swiper-button-prev5",
    },
    pagination: {
      el: ".swiper-pagination5",
      type: "fraction",
    },
    breakpoints: {
      1370: {
        slidesPerView: 1,
        direction: "vertical",
      },
      1024: {
        slidesPerView: 1,
        direction: "horizontal",
      },
    },
  });

  $('.itemBtnPopup').on('click', ()=> {
    $('.itemBtnPopupContent').addClass('active');
    setTimeout(function() {
      $('body').addClass('hide');
    }, 100);
  });

  $('.itemBtnPopup__closed').on('click', ()=> {
    $('.itemBtnPopupContent').removeClass('active');
    $('body').removeClass('hide');
  });


  const itemPopUpSlider2 = new Swiper(".itemPopUpSlider2", {
    loop: true,
    spaceBetween: 0,
    slidesPerView: 3,
    freeMode: true,
    watchSlidesProgress: true,
  });


  const itemPopUpSlider = new Swiper(".itemPopUpSlider", {
    loop: true,
    spaceBetween: 0,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    thumbs: {
      swiper: itemPopUpSlider2,
    },
  });


  $('.itemRightDesc__mobilBtn').on('click', (e) => {
    e.preventDefault();
    const $button = $(e.currentTarget);
    const $list = $('.itemRightDescList:last-of-type');

    $list.slideToggle(() => {
      if ($button.data('state') === 'collapsed') {
        $button.text('Свернуть');
        $button.data('state', 'expanded');
      } else {
        $button.text('Смотреть больше');
        $button.data('state', 'collapsed');
      }
    });
  });


  var historySlider = new Swiper(".historySlider", {
    effect: "fade",
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });


  $('.sertificateRight-tabs .tab').click(function () {
    const tabNumber = $(this).data('tab');

    // Remove active class from all content
    $('.sertificateRight-contents .content').removeClass('active');

    // Add active class to the clicked tab's corresponding content
    $('.sertificateRight-contents .content[data-tab="' + tabNumber + '"]').addClass('active');

    // Remove active class from all tabs
    $('.sertificateRight-tabs .tab').removeClass('active');

    // Add active class to the clicked tab
    $(this).addClass('active');
  });

  const sertificateSliderNavCountAnimate = $('.js-sertificateSliderNavCountAnimate');
  const sertificateSliderBlockAnimation = $('.js-sertificateSliderBlockAnimation');
  const sertificateRightContentsSection = $('.js-sertificateRightContentsSection');

  const sertificateSlider = new Swiper(".sertificateSlider", {
    slidesPerView: 3,
    spaceBetween: 0,
    allowTouchMove: true,
    speed: 1100,
    pagination: {
      el: ".swiper-pagination6",
      type: "fraction",
    },
    navigation: {
      nextEl: ".swiper-button-next6",
      prevEl: ".swiper-button-prev6",
    },
    on: {
      init: (swiper) => {
        const { slides } = swiper;
        if (slides && slides.length) {
          sertificateSliderNavCountAnimate.find('.swiper-pagination-current').before(`<span class="swiper-pagination-current-custom">${createPaginateCount(slides.length)}</span>`);
        }
      },
    },
    breakpoints: {
      768: {
        allowTouchMove: false,
      },
    },
  });

  sertificateSlider.on('slideChangeTransitionStart', (event) => {
    sertificateRightContentsSection.addClass('is-disabled');

    sertificateSliderNavCountAnimate.find('.swiper-pagination-current-custom .active').removeClass('active');
    sertificateSliderNavCountAnimate.find('.swiper-pagination-current-custom span').eq(event.realIndex).addClass('active');
  });

  sertificateSlider.on('slideChangeTransitionEnd', () => {
    sertificateRightContentsSection.removeClass('is-disabled');
  });

  sertificateSlider.on('slideNextTransitionStart', () => {
    sertificateSliderBlockAnimation.addClass('is-animate-next');
  });

  sertificateSlider.on('slideNextTransitionEnd', (event) => {
    sertificateSliderBlockAnimation.find('.sertificateSliderBlockAnimationItem.active').removeClass('active');
    sertificateSliderBlockAnimation.find('.sertificateSliderBlockAnimationItem').eq(event.realIndex).addClass('active');
    sertificateSliderBlockAnimation.removeClass('is-animate-next');
  });

  sertificateSlider.on('slidePrevTransitionStart', (event) => {
    sertificateSliderBlockAnimation.addClass('is-animate-prev');
    sertificateRightContentsSection.addClass('is-animate-prev');
    sertificateSliderBlockAnimation.find('.sertificateSliderBlockAnimationItem.active').removeClass('active');
    sertificateSliderBlockAnimation.find('.sertificateSliderBlockAnimationItem').eq(event.realIndex).addClass('active');
  });

  sertificateSlider.on('slidePrevTransitionEnd', () => {
    sertificateSliderBlockAnimation.removeClass('is-animate-prev');
    sertificateRightContentsSection.removeClass('is-animate-prev');
  });



  const sertificateSliderNavCountAnimate2 = $('.js-sertificateSliderNavCountAnimate-2');
  const sertificateSliderBlockAnimation2 = $('.js-sertificateSliderBlockAnimation-2');
  const sertificateRightContentsSection2 = $('.js-sertificateRightContentsSection-2');

  const sertificateSlider2 = new Swiper(".sertificateSlider2", {
    slidesPerView: 3,
    spaceBetween: 0,
    allowTouchMove: true,
    speed: 1100,
    pagination: {
      el: ".swiper-pagination7",
      type: "fraction",
    },
    navigation: {
      nextEl: ".swiper-button-next7",
      prevEl: ".swiper-button-prev7",
    },
    on: {
      init: (swiper) => {
        const { slides } = swiper;
        if (slides && slides.length) {
          sertificateSliderNavCountAnimate2.find('.swiper-pagination-current').before(`<span class="swiper-pagination-current-custom">${createPaginateCount(slides.length)}</span>`);
        }
      },
    },
    breakpoints: {
      768: {
        allowTouchMove: false,
      },
    },
  });

  sertificateSlider2.on('slideChangeTransitionStart', (event) => {
    sertificateRightContentsSection2.addClass('is-disabled');

    sertificateSliderNavCountAnimate2.find('.swiper-pagination-current-custom .active').removeClass('active');
    sertificateSliderNavCountAnimate2.find('.swiper-pagination-current-custom span').eq(event.realIndex).addClass('active');
  });

  sertificateSlider2.on('slideChangeTransitionEnd', () => {
    sertificateRightContentsSection2.removeClass('is-disabled');
  });

  sertificateSlider2.on('slideNextTransitionStart', () => {
    sertificateSliderBlockAnimation2.addClass('is-animate-next');
  });

  sertificateSlider2.on('slideNextTransitionEnd', (event) => {
    sertificateSliderBlockAnimation2.find('.sertificateSliderBlockAnimationItem.active').removeClass('active');
    sertificateSliderBlockAnimation2.find('.sertificateSliderBlockAnimationItem').eq(event.realIndex).addClass('active');
    sertificateSliderBlockAnimation2.removeClass('is-animate-next');
  });

  sertificateSlider2.on('slidePrevTransitionStart', (event) => {
    sertificateSliderBlockAnimation2.addClass('is-animate-prev');
    sertificateRightContentsSection2.addClass('is-animate-prev');
    sertificateSliderBlockAnimation2.find('.sertificateSliderBlockAnimationItem.active').removeClass('active');
    sertificateSliderBlockAnimation2.find('.sertificateSliderBlockAnimationItem').eq(event.realIndex).addClass('active');
  });

  sertificateSlider2.on('slidePrevTransitionEnd', () => {
    sertificateSliderBlockAnimation2.removeClass('is-animate-prev');
    sertificateRightContentsSection2.removeClass('is-animate-prev');
  });


  const sertificateSliderNavCountAnimate3 = $('.js-sertificateSliderNavCountAnimate-3');
  const sertificateSliderBlockAnimation3 = $('.js-sertificateSliderBlockAnimation-3');
  const sertificateRightContentsSection3 = $('.js-sertificateRightContentsSection-3');

  const sertificateSlider3 = new Swiper(".sertificateSlider3", {
    slidesPerView: 3,
    spaceBetween: 0,
    allowTouchMove: true,
    speed: 1100,
    pagination: {
      el: ".swiper-pagination8",
      type: "fraction",
    },
    navigation: {
      nextEl: ".swiper-button-next8",
      prevEl: ".swiper-button-prev8",
    },
    on: {
      init: (swiper) => {
        const { slides } = swiper;
        if (slides && slides.length) {
          sertificateSliderNavCountAnimate3.find('.swiper-pagination-current').before(`<span class="swiper-pagination-current-custom">${createPaginateCount(slides.length)}</span>`);
        }
      },
    },
    breakpoints: {
      768: {
        allowTouchMove: false,
      },
    },
  });

  sertificateSlider3.on('slideChangeTransitionStart', (event) => {
    sertificateRightContentsSection3.addClass('is-disabled');

    sertificateSliderNavCountAnimate3.find('.swiper-pagination-current-custom .active').removeClass('active');
    sertificateSliderNavCountAnimate3.find('.swiper-pagination-current-custom span').eq(event.realIndex).addClass('active');
  });

  sertificateSlider3.on('slideChangeTransitionEnd', () => {
    sertificateRightContentsSection3.removeClass('is-disabled');
  });

  sertificateSlider3.on('slideNextTransitionStart', () => {
    sertificateSliderBlockAnimation3.addClass('is-animate-next');
  });

  sertificateSlider3.on('slideNextTransitionEnd', (event) => {
    sertificateSliderBlockAnimation3.find('.sertificateSliderBlockAnimationItem.active').removeClass('active');
    sertificateSliderBlockAnimation3.find('.sertificateSliderBlockAnimationItem').eq(event.realIndex).addClass('active');
    sertificateSliderBlockAnimation3.removeClass('is-animate-next');
  });

  sertificateSlider3.on('slidePrevTransitionStart', (event) => {
    sertificateSliderBlockAnimation3.addClass('is-animate-prev');
    sertificateRightContentsSection3.addClass('is-animate-prev');
    sertificateSliderBlockAnimation3.find('.sertificateSliderBlockAnimationItem.active').removeClass('active');
    sertificateSliderBlockAnimation3.find('.sertificateSliderBlockAnimationItem').eq(event.realIndex).addClass('active');
  });

  sertificateSlider3.on('slidePrevTransitionEnd', () => {
    sertificateSliderBlockAnimation3.removeClass('is-animate-prev');
    sertificateRightContentsSection3.removeClass('is-animate-prev');
  });

  const sertificateSliderNavCountAnimate4 = $('.js-sertificateSliderNavCountAnimate-4');
  const sertificateSliderBlockAnimation4 = $('.js-sertificateSliderBlockAnimation-4');
  const sertificateRightContentsSection4 = $('.js-sertificateRightContentsSection-4');

  const sertificateSlider4 = new Swiper(".sertificateSlider4", {
    slidesPerView: 3,
    spaceBetween: 0,
    allowTouchMove: true,
    speed: 1100,
    pagination: {
      el: ".swiper-pagination9",
      type: "fraction",
    },
    navigation: {
      nextEl: ".swiper-button-next9",
      prevEl: ".swiper-button-prev9",
    },
    on: {
      init: (swiper) => {
        const { slides } = swiper;
        if (slides && slides.length) {
          sertificateSliderNavCountAnimate4.find('.swiper-pagination-current').before(`<span class="swiper-pagination-current-custom">${createPaginateCount(slides.length)}</span>`);
        }
      },
    },
    breakpoints: {
      768: {
        allowTouchMove: false,
      },
    },
  });

  sertificateSlider4.on('slideChangeTransitionStart', (event) => {
    sertificateRightContentsSection4.addClass('is-disabled');

    sertificateSliderNavCountAnimate4.find('.swiper-pagination-current-custom .active').removeClass('active');
    sertificateSliderNavCountAnimate4.find('.swiper-pagination-current-custom span').eq(event.realIndex).addClass('active');
  });

  sertificateSlider4.on('slideChangeTransitionEnd', () => {
    sertificateRightContentsSection4.removeClass('is-disabled');
  });

  sertificateSlider4.on('slideNextTransitionStart', () => {
    sertificateSliderBlockAnimation4.addClass('is-animate-next');
  });

  sertificateSlider4.on('slideNextTransitionEnd', (event) => {
    sertificateSliderBlockAnimation4.find('.sertificateSliderBlockAnimationItem.active').removeClass('active');
    sertificateSliderBlockAnimation4.find('.sertificateSliderBlockAnimationItem').eq(event.realIndex).addClass('active');
    sertificateSliderBlockAnimation4.removeClass('is-animate-next');
  });

  sertificateSlider4.on('slidePrevTransitionStart', (event) => {
    sertificateSliderBlockAnimation4.addClass('is-animate-prev');
    sertificateRightContentsSection4.addClass('is-animate-prev');
    sertificateSliderBlockAnimation4.find('.sertificateSliderBlockAnimationItem.active').removeClass('active');
    sertificateSliderBlockAnimation4.find('.sertificateSliderBlockAnimationItem').eq(event.realIndex).addClass('active');
  });

  sertificateSlider4.on('slidePrevTransitionEnd', () => {
    sertificateSliderBlockAnimation4.removeClass('is-animate-prev');
    sertificateRightContentsSection4.removeClass('is-animate-prev');
  });


  $('[data-fancybox]').fancybox({
        autoFocus: false,
   });



  // Start brand
   const $ul = $('.flexic');
   const wrapperHeight = $('.wrapper').height();


  $ul.children().clone().appendTo($ul);


  function checkScrollDirection() {
    const wrapperOffsetTop = $('.wrapper').offset().top;
    const windowHeight = $(window).height();
    const scrollPosition = $(window).scrollTop();


    if (scrollPosition > (wrapperOffsetTop + wrapperHeight - windowHeight / 2)) {
      $ul.css('animation', 'scroll-reverse 20s linear infinite');
    } else {
      $ul.css('animation', 'scroll 20s linear infinite');
    }
  }

  checkScrollDirection();
  $(window).on('scroll', checkScrollDirection);
});