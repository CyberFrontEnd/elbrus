$(document).ready(function () {
  $('.multiple-items').slick({
    infinite: false,
    dots: true,
    slidesToShow: 4,
    slidesToScroll: 4,

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
  var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    // autoplay: {
    //   delay: 5500,
    //   disableOnInteraction: false
    // },
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
});