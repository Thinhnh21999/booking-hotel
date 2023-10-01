import Destinations from "../../component/destinations";
import Card from "../../component/card/index.jsx";
import Search from "../../component/search/index.jsx";

import { Form, Input, Button } from "antd";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Autoplay, Pagination } from "swiper";
import * as styled from "./style.js";

import { useEffect } from "react";
import { getLocationSaga } from "../../redux/slice/locationSlice";
import { useDispatch } from "react-redux";

export default function Home(props) {
  const hotels = props.hotels;
  const locationHotel = props.locationHotel;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getLocationSaga());

    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="bg-home_tour h-[460px] lg:h-full  bg-no-repeat bg-cover">
        <div className="py-[130px] text-center">
          <h2 className="lg:text-[64px] lg:leading-74px text-[42px] leading-[52px] mb-3.5 font-bold text-white">
            Find your next stay
          </h2>
          <p className="text-lg font-normal text-white leading-[30px]">
            Get the best prices on 2,000,000+ properties, worldwide
          </p>
        </div>
      </div>
      <div className="lg:container lg:mx-auto px-5 relative top-[-150px] lg:top-[-40px] xl:px-[90px]">
        <Search />
      </div>

      <div>
        <div className="lg:container lg:mt-[70px] lg:mx-auto px-2.5">
          <div className="flex flex-wrap ">
            <div className="w-1/2 p-2.5 ">
              <div className="overflow-hidden rounded-[20px]">
                <img
                  className="hover:scale-110 transition-all duration-300 ease-in-out"
                  src="https://modtel.travelerwp.com/wp-content/uploads/2022/04/Frame-3151-min.png"
                  alt="..."
                />
              </div>
            </div>
            <div className="w-1/2 p-2.5 rounded-[20px] overflow-hidden">
              <div className="overflow-hidden rounded-[20px]">
                <img
                  className="hover:scale-110 transition-all duration-300 ease-in-out"
                  src="https://modtel.travelerwp.com/wp-content/uploads/2022/04/Frame-3150-min.png"
                  alt="..."
                />
              </div>
            </div>
          </div>
        </div>
        <div className="lg:container lg:mx-auto mt-[80px] px-5 pb-[45px]">
          <h2 className="title">Top destinations</h2>
          <div className="center">
            <styled.SwiperCustomTwo
              navigation={true}
              pagination={{
                clickable: true,
              }}
              slidesPerView={6}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              modules={[Navigation, Autoplay]}
              className="mySwiper"
              breakpoints={{
                430: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                640: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 4,
                  spaceBetween: 20,
                },
                992: {
                  slidesPerView: 4,
                  spaceBetween: 20,
                },
                1366: {
                  slidesPerView: 6,
                  spaceBetween: 40,
                },
              }}
            >
              {locationHotel.map((item) => {
                return (
                  <SwiperSlide key={item.id}>
                    <Destinations item={item} />
                  </SwiperSlide>
                );
              })}
            </styled.SwiperCustomTwo>
          </div>
        </div>

        <div className=" bg-grey py-[45px]">
          <div className="lg:container lg:mx-auto px-5">
            <h2 className="title">Plan your next staycation</h2>
            <div className=" grid xl:grid-cols-4 md:grid-cols-2 xs:grid-cols-1 gap-6">
              {hotels?.slice(0, 4).map((item) => (
                <Card key={item.id} item={item} />
              ))}
            </div>
          </div>
        </div>

        <div className="lg:container lg:mx-auto px-5 pt-[65px] pb-[30px] overflow-hidden">
          <h2 className="title !text-left">Recommended for you</h2>
          <div>
            <styled.SwiperCustom
              slidesPerView={1}
              autoplay={{
                delay: 2500,
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
              {hotels?.slice(0, 8).map((item) => (
                <SwiperSlide key={item.id}>
                  <Card item={item} />
                </SwiperSlide>
              ))}
            </styled.SwiperCustom>
          </div>
        </div>

        <div className="lg:container lg:mx-auto pt-[70px] px-5 pb-[90px]">
          <div className="flex flex-wrap">
            <div className="md:w-1/2 w-full">
              <img
                className="w-full h-full rounded-t-[20px] md:rounded-tr-[0px] md:rounded-bl-[20px] sm:rounded-b-[0] rounded-bl-[20px]"
                src="https://icdn.dantri.com.vn/thumb_w/1280/2021/04/13/gioi-sieu-giau-va-nhung-thu-vui-nghi-duong-it-ai-bietdocx-1618273214390.jpeg"
                alt="..."
              />
            </div>
            <div className="md:w-1/2 w-full rounded-t-[20px] md:rounded-tr-[20px] rounded-b-[20px] md:rounded-bl-[0px] sm:rounded-t-[0] bg-[#fcfcfc] md:px-4 md:py-[50px] 2xl:py-[80px] 2xl:px-[120px] lg:p-[50px] sm:px-[10px] sm:py-[50px] border-solid border-b border-t border-r text-center">
              <h2 className="font-bold text-center text-4xl leading-[46px] mb-0">
                Get special offers, and more from Traveler
              </h2>
              <p className="text-base text-[#727272] px-[50px] text-center mb-[30px]">
                Subscribe to see secret deals prices drop the moment you sign
                up!
              </p>
              <Form>
                <styled.FormItem
                  name="name"
                  rules={[{ required: true, message: "Please Email Address" }]}
                >
                  <div className="flex">
                    <Input
                      className="text-[#83929d] text-lg py-4 px-[30px] rounded-[80px]"
                      placeholder="Email Address"
                    />
                    <Button className="absolute center right-1.5 top-1.5 py-6 px-5 text-white bg-primary rounded-[50px]">
                      Subscribe
                    </Button>
                  </div>
                </styled.FormItem>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
