window.onload = function() {
  const slider = document.querySelector('.review-slider')

  if (slider) {
    const swiper = new Swiper(slider, {
      loop: true,
      slidesPerView: 1.15,
      spaceBetween: 10,
      pagination: {
        el: '.review-slider .swiper-pagination',
      },
      scrollbar: {
        el: '.review-slider .swiper-scrollbar',
        draggable: true,
      },
      breakpoints: {
        576: {
          loop: false,
          slidesPerView: 2,
          spaceBetween: 24,
        },
        1199: {
          slidesPerView: 3,
        }
      }
    });
  }
  
}