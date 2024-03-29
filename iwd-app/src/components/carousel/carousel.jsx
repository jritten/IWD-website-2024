import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { IonIcon } from '@ionic/react';
import { arrowBackCircleOutline, arrowForwardCircleOutline } from 'ionicons/icons';

// import "swiper/css";
// import "swiper/css/effect-coverflow";
// import "swiper/css/pagination";
// import "swiper/css/navigation";
import "swiper/swiper.min.css";
import "swiper/swiper-bundle.min.css";

import { EffectCoverflow, Pagination, Navigation } from "swiper";
import "./carousel.css";

import slide_image_1 from "../../assets/carousel/img_1.jpg";
import slide_image_2 from "../../assets/carousel/img_2.jpg";
import slide_image_3 from "../../assets/carousel/img_3.jpg";
import { Fade } from "@mui/material";

// const data = [
//   {
//     title: "Slide 1",
//     name: "please",
//     img: slide_image_1,
//   },
//   {
//     title: "Slide 2",
//     name: "help",
//     img: slide_image_2,
//   },
//   {
//     title: "Slide 3",
//     name: "me",
//     img: slide_image_3,
//   },
//   {
//     title: "Slide 4",
//     name: "me",
//     img: slide_image_1,
//   },
//   {
//     title: "Slide 5",
//     name: "me",
//     img: slide_image_2,
//   },
//   {
//     title: "Slide 6",
//     name: "me",
//     img: slide_image_3,
//   },
// ];

function Carousel() {
  return (
    <div className="container">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: ".swiper-pagination", clickable: true }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container"
      >
        <SwiperSlide>
          <img src={slide_image_1} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_2} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_3} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_1} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_2} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_3} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_1} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_2} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_3} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_1} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_2} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_3} alt="slide_image" />
        </SwiperSlide>
        <div className="slider-controler">
          <div className="swiper-pagination-container">
            <div className="swiper-pagination" ></div>
          </div>
          <div className="swiper-button-prev slider-arrow">
            <div className="icon-container">
              <IonIcon icon={arrowBackCircleOutline} style={{ fontSize: '40px' }} />
            </div>
          </div>

          <div className="swiper-button-next slider-arrow">
            <div className="icon-container">
              <IonIcon icon={arrowForwardCircleOutline} style={{ fontSize: '40px' }} />
            </div>          
          </div>

        </div>
      </Swiper>
    </div>
  );
}

export default Carousel;
