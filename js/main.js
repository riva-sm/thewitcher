var mySwiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    navigation: {
        nextEl: '.arrow',
    },
    loop: true,
    breakpoints: {
        540: {
          slidesPerView: 2,
        }
      }
});

var menuButton = document.querySelector('.menu-btn');
var menu = document.querySelector('.header');

menuButton.addEventListener('click', function () {
    menuButton.classList.toggle('menu-btn-active');
    menu.classList.toggle('header-active');
});