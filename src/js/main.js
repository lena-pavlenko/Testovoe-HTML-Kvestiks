window.onload = function() {
  const slider = document.querySelector('.review-slider')

  if (slider) {
    const swiper = new Swiper(slider, {
      slidesPerView: 3,
      spaceBetween: 24,
      pagination: {
        el: '.review-slider .swiper-pagination',
      },
      scrollbar: {
        el: '.review-slider .swiper-scrollbar',
        draggable: true,
      },
      breakpoints: {
        576: {
          slidesPerView: 2,
        },
        1199: {
          slidesPerView: 3,
        }
      }
    });
  }
  
}