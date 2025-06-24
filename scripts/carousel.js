const swiper = new Swiper('.swiper', {
    slidesPerView: 3,
    spaceBetween: 30,
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      // мобильные
      0: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      // планшеты
      600: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      // десктоп
      992: {
        slidesPerView: 3,
        spaceBetween: 30,
      }
    }
  });