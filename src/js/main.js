// Custom scripts


// Мобильное меню бургер
function burgerMenu() {
    const burger = document.querySelector('.burger')
    const menu = document.querySelector('.menu')
    const over = document.querySelector('.overlay')
    const body = document.querySelector('body')
    burger.addEventListener('click', () => {
      if (!menu.classList.contains('active')) {
        menu.classList.add('active')
        burger.classList.add('active-burger')
        body.classList.add('locked')
        over.classList.add('overlay-open')
      } else {
        menu.classList.remove('active')
        burger.classList.remove('active-burger')
        body.classList.remove('locked')
        over.classList.remove('overlay-open')
      }
    })
    // Вот тут мы ставим брейкпоинт навбара
    window.addEventListener('resize', () => {
      if (window.innerWidth > 1199.98) {
        menu.classList.remove('active')
        burger.classList.remove('active-burger')
        body.classList.remove('locked')
        over.classList.remove('overlay-open')

      }
    })
  }
  burgerMenu()


  const element = document.querySelector('.consul__item-form-tel')
  const maskOptions = {
    mask: '+{7}(000)000-00-00'
  }
  const mask = IMask(element, maskOptions)



  const swiper = new Swiper('.content__swiper', {
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.content__swiper-btn2',
      prevEl: '.content__swiper-btn1',
    },

    loop: true,


  //   // Responsive breakpoints
  //   breakpoints: {
  //   // when window width is >= 320px
  //   320: {
  //     slidesPerView: 3,
  //     spaceBetween: 20
  //   },
  //   // when window width is >= 480px
  //   480: {
  //     slidesPerView: 3,
  //     spaceBetween: 30
  //   },
  // }
  });


  const swiper3 = new Swiper('.doctors__swiper', {
  
    // Navigation arrows
    navigation: {
      nextEl: '.content__swiper-btn6',
      prevEl: '.content__swiper-btn5',
    },

    slidesPerView: 5,
    spaceBetween: 30,
    loop: true,
    centeredSlides: true,

 
    breakpoints: {
  
    320: {
      slidesPerView: 1,
      spaceBetween: 60,
    },
  
    400: {
      slidesPerView: 1,
      spaceBetween: 50,
    },

    480: {
      slidesPerView: 1,
      spaceBetween: 50,
    },

    768: {
      slidesPerView: 1,
      spaceBetween: 60,
    },

    1200: {
      slidesPerView: 1,
      spaceBetween: 30,
    },

    1450: {
      slidesPerView: 1,
      spaceBetween: 100,
    },

    1650: {
      slidesPerView: 3,
      spaceBetween: 820,
    },

  }
  });

  const swiper4 = new Swiper('.foto__swiper', {
  
    // Navigation arrows
    navigation: {
      nextEl: '.content__swiper-btn8',
      prevEl: '.content__swiper-btn7',
    },

    loop: true,

    slidesPerView: 4,
      centeredSlides: true,
      spaceBetween: 30,
      grabCursor: true,


  //   // Responsive breakpoints
    breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 60,
    },
  
    400: {
      slidesPerView: 1.2,
      spaceBetween: 50,
    },

    480: {
      slidesPerView: 1.3,
      spaceBetween: 50,
    },

    768: {
      slidesPerView: 1.5,
      spaceBetween: 60,
    },

    1200: {
      slidesPerView: 3,
      spaceBetween: 30,
    },

    1450: {
      slidesPerView: 4,
      spaceBetween: 130,
    },

  }
  });