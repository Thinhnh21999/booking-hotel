import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Autoplay, Pagination } from "swiper";

import React from "react";
import { Rate } from "antd";

import Hotel_Detail from "../../component/hotelDetail/index";
import Card from "../../component/card/index.jsx";
import { Wrapper, Price } from "./style";

import { useEffect, useState } from "react";
import RestClient from "../../Service/restClient";

export default function Hotel() {
  const [data, setData] = useState([]);
  useEffect(() => {
    RestClient("get", "/location").then((res) => setData(res));
  }, []);
  console.log(data);

  const [numberItem, setNumberItem] = useState(4);
  return (
    <div className="overflow-hidden relative">
      <div>
        <Hotel_Detail />
        <Wrapper>
          <div className="lg:container lg:mx-auto px-5 pt-[65px] pb-[30px]">
            <h2 className="title text-left">Recommended for you</h2>
            <div>
              <Swiper
                slidesPerView={1}
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
                breakpoints={{}}
              >
                <SwiperSlide>
                  <div className=" grid xl:grid-cols-4 md:grid-cols-2 xs:grid-cols-1 gap-6">
                    {data.slice(0, numberItem).map((item) => (
                      <Card key={item.id} item={item} />
                    ))}
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </Wrapper>
      </div>
      <Price>
        <div className="flex justify-between w-full p-3">
          <div>
            {data.slice(0, numberItem).map((item) => (
              <div key={item.id}>
                <p className="text-gray">
                  From:{" "}
                  <span className="font-bold text-black">${item.price}.00</span>{" "}
                  / night
                </p>
                <div className="flex">
                  <div>
                    <Rate disabled defaultValue={item.rate.star} />
                  </div>
                  <span className="font-bold mx-2">5</span>
                  <p className="text-gray">(3 reviews)</p>
                </div>
              </div>
            ))}
          </div>
          <div className="bg-primary text-white w-[8%] font-bold text-center rounded-3xl py-2">
            Check
          </div>
        </div>
      </Price>
    </div>
  );
}
