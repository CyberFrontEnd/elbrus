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
});