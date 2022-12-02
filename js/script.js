const swiper = new Swiper('.swiper', {
  loop: true,
  noSwiping: false,
  autoplay: {
    delay: 3000,
  },
  navigation: {
    nextEl: '.body-main-block__arrow.swiper-button-next',
    prevEl: '.body-main-block__arrow.swiper-button-prev',
  },
});
