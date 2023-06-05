import Swiper, {Pagination, Autoplay} from "swiper";
Swiper.use([Pagination, Autoplay]);


const swiper = new Swiper('.swiper', {
  slidesPerView: 1,
  spaceBetween: 24,
  autoplay: {
    delay: 1000,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  breakpoints: {
    576: {
      slidesPerView: 2,
      slidesPerGroup: 2,
    },
    992: {
      slidesPerView: 3,
      slidesPerGroup: 3,
    },
  },
});