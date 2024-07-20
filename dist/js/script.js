$(document).ready(function () {
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
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
    ]
  });


  // Start multiple-itemsNew
  $('.multiple-itemsNew').slick({
    infinite: false,
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  });


  // Start intlTelInput
  function phoneMask() {
    $('.phone_mask').intlTelInput({
      utilsScript: "js/utils.js",
      preferredCountries: ["ru", "by", "ua", "kz"]
    });
  }

  phoneMask();

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
  const productionsRightSlider = new Swiper(".productionsRightSlider", {
    slidesPerView: 3,
    spaceBetween: 20,
    pagination: {
      el: ".swiper-pagination3",
      type: "fraction",
    },
    navigation: {
      nextEl: ".swiper-button-next3",
      prevEl: ".swiper-button-prev3",
    },
  });

  // Start mobil menu btn
  $('.mobilBtn').on('click', function () {
    $(this).toggleClass("active");
    $('.mobilMenu').slideToggle();
  });

  $('.mobilMenuListIn > a').on('click', function (event) {
    event.preventDefault();
    $('.mobilMenuListInSub').slideToggle();
    $(this).toggleClass('active');
  });
});