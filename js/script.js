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

// Табы

const tabNavItems = document.querySelectorAll('.tabs-deals__button');
const tabItems = document.querySelectorAll('.item-tabs');
document.addEventListener('click', function (e) {
  const targetElement = e.target;
  let currentActiveIndex = null;
  let newActiveIndex = null;
  if (targetElement.closest('.tabs-deals__button')) {
    tabNavItems.forEach((tabNavItems, index) => {
      if (tabNavItems.classList.contains('active')) {
        currentActiveIndex = index;
        tabNavItems.classList.remove('active');
      }
      if (tabNavItems === targetElement) {
        newActiveIndex = index;
      }
    });
    targetElement.classList.add('active');
    tabItems[currentActiveIndex].classList.remove('active');
    tabItems[newActiveIndex].classList.add('active');
  }
});
