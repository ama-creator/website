let prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  const header = document.querySelector(".header");

  let currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    if (header.classList.contains('header--active')) header.classList.remove('header--active');
  } else {
    header.classList.add('header--active')
  }
  prevScrollpos = currentScrollPos;
};

// slick slider
$('.slider').slick({
    infinite: true,
    prevArrow: false,
    nextArrow: false,
    autoplay: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true
  }); 

// slider gallery 
const sliderNav = document.querySelectorAll('.gallery-btns__item');

sliderNav.forEach(item => {
  item.addEventListener('click', e => {
    document.querySelector('.gallery-btns__item--acitve').classList.remove('gallery-btns__item--acitve');
    if (e.target) {
      item.classList.add('gallery-btns__item--acitve');
    }
  })
})

$('.gallery-inner').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  draggable: false,
  arrows: false,
  fade: true,
  asNavFor: '.gallery-btns'
});
$('.gallery-btns').slick({
  slidesToShow: 2,
  slidesToScroll: 1,
  asNavFor: '.gallery-inner',
  dots: false,
  // centerMode: true,
  focusOnSelect: true
});

// mobile menu 
const menuBtn = document.querySelector('.hamburger');

menuBtn.addEventListener('click', e => {
  if (e.target) {
    menuBtn.classList.toggle('is-active')
    document.querySelector('.header-bottom__nav').classList.toggle('menu--active')
    document.querySelector('html').classList.toggle('hidden')
  }
})