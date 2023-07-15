import { Swiper, SwiperSlide } from "swiper/react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductSaga } from "../../redux/slice/productSlice";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Autoplay, Pagination } from "swiper";

import Star from "../../assets/svgs/star.svg";

import Hotel from "../../component/hotel/index";
import Card from "../../component/card/index.jsx";
import { Wrapper, Price } from "./style";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";

export default function DetailHotel() {
  const products = useSelector((state) => state.Products.products);
  const dispatch = useDispatch();
  const id = useParams();

  console.log(products);

  useEffect(() => {
    dispatch(
      getProductSaga({
        _page: 1,
        _limit: 8,
      })
    );
  }, []);
  return (
    <div className="overflow-hidden relative">
      <div>
        <Hotel products={products} id={id} />
        <Wrapper>
          <div className="lg:container lg:mx-auto px-5 pt-[65px] pb-[30px]">
            <h2 className="title text-left">Recommended for you</h2>
            <Swiper
              slidesPerView={1}
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
              {products.map((item) => (
                <SwiperSlide key={item.id}>
                  <Card item={item} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </Wrapper>
      </div>
      <Price>
        <div className="flex justify-between w-full p-3">
          <div>
            <p className="text-gray">
              From: <span className="font-bold text-black">$136.00</span> /
              night
            </p>
            <div className="flex">
              <img className="w-4" src={Star} alt="" />
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
