import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Autoplay, Pagination } from "swiper";

import star from "../../assets/svgs/star.svg";

import Header from "../../component/header/index";
import Redac_Gateway_Hotel from "../../component/hotelDetail/index";
import Card from "../../component/card/index.jsx";
import Footer from "../../component/footer/index";
import { Wrapper, Price } from "./style";

export default function Hotel() {
  return (
    <div className="overflow-hidden relative">
      <div>
        <Header />
        <Redac_Gateway_Hotel />
        <Wrapper>
          <div className="lg:container lg:mx-auto px-5 pt-[65px] pb-[30px]">
            <h2 className="title text-left">Recommended for you</h2>
            <div>
              <Swiper
                slidesPerView={4}
                autoplay={{
                  delay: 3500,
                  disableOnInteraction: false,
                }}
                pagination={{
                  clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
                breakpoints={{
                  430: {
                    slidesPerView: 1,
                    spaceBetween: 24,
                  },
                  640: {
                    slidesPerView: 1,
                    spaceBetween: 24,
                  },
                  768: {
                    slidesPerView: 2,
                    spaceBetween: 24,
                  },
                  992: {
                    slidesPerView: 2,
                    spaceBetween: 24,
                  },
                  1366: {
                    slidesPerView: 4,
                    spaceBetween: 24,
                  },
                }}
              >
                <SwiperSlide>
                  <Card></Card>
                </SwiperSlide>
                <SwiperSlide>
                  <Card></Card>
                </SwiperSlide>
                <SwiperSlide>
                  <Card></Card>
                </SwiperSlide>
                <SwiperSlide>
                  <Card></Card>
                </SwiperSlide>
                <SwiperSlide>
                  <Card></Card>
                </SwiperSlide>
                <SwiperSlide>
                  <Card></Card>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </Wrapper>
        <Footer />
      </div>
      <Price>
        <div className="flex justify-between w-full p-3">
          <div>
            <p className="text-gray">
              From: <span className="font-bold text-black">$136.00</span> /
              night
            </p>
            <div className="flex">
              <img className="w-4 " src={star} alt="" />
              <span className="font-bold mx-2">5</span>
              <p className="text-gray">(3 reviews)</p>
            </div>
          </div>

          <div className="bg-primary text-white w-[8%] font-bold text-center rounded-3xl py-2">
            Check
          </div>
        </div>
      </Price>
    </div>
  );
}
