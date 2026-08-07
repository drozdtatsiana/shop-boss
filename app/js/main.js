const swiper = new Swiper('.look__slider', {

  loop: true,
  slidesPerView: 3,
        spaceBetween: 40,
  navigation: {
    nextEl: '.look__button-next',
    prevEl: '.look__button-prev',
  },

});


const reviewsSwiper = new Swiper('.reviews__slider', {
 
  loop: true,
    slidesPerView: 9,
        spaceBetween: 16,

  
 pagination: {
          el: '.reviews__pagination',
          type: 'fraction',
        },
 
  navigation: {
    nextEl: '.reviews__button-next',
    prevEl: '.reviews__button-prev',
  },
});


