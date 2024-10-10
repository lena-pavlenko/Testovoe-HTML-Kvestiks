window.onload = function() {
  const slider = document.querySelector('.review-slider')
  const counterSlider = document.querySelector('[data-counter="reviewsCounter"]')
  const counterReviewsSup = document.querySelector('.reviews__title-count')

  if (slider) {
    const swiper = new Swiper(slider, {
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
          slidesPerView: 2,
          spaceBetween: 24,
        },
        1199: {
          slidesPerView: 3,
        }
      },

      on: {
        init: function () {
          if (counterSlider && counterSlider.querySelector('.counter__length')) {
            counterSlider.querySelector('.counter__length').textContent = this.slides.length
          }

          if (counterReviewsSup) {
            counterReviewsSup.textContent = this.slides.length
          }
        },

        activeIndexChange: function () {
          if (counterSlider && counterSlider.querySelector('.counter__current')) {
            counterSlider.querySelector('.counter__current').textContent = this.activeIndex + 1
          }
        }
      },
    });
  }
}