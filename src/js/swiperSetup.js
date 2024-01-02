import Swiper from "swiper";
import "swiper/swiper-bundle.css";

const initializeSwiper = () => {
  const clientsEl = document.querySelectorAll(".clients-carousel");
  if (clientsEl.length > 0) {
    const clients = new Swiper(".clients-carousel", {
      slidesPerView: "4",
      spaceBetween: 64,
      centeredSlides: true,
      loop: true,
      speed: 5000,
      noSwiping: true,
      noSwipingClass: "swiper-slide",
      autoplay: {
        delay: 0,
        disableOnInteraction: true,
      },
    });
  }
};

export default initializeSwiper;
