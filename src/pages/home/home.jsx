import Footer from "../../component/footer";
import Destinations from "../../component/destinations";
import Header from "../../component/header";
import Card from "../../component/card/index.jsx";
import Search from "../../component/search/index.jsx";
import { Form, Input, Button } from "antd";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Autoplay, Pagination } from "swiper";

export default function home() {
  return (
    <div className="">
      <Header />
      <div className="bg-home_tour bg-no-repeat bg-cover">
        <div className="py-[130px] text-center">
          <h2 className="text-[64px] font-bold text-white leading-74px">
            Find your next stay
          </h2>
          <p className="text-lg font-normal text-white leading-[30px]">
            Get the best prices on 2,000,000+ properties, worldwide
          </p>
        </div>
      </div>

      <div className="container mx-auto relative top-[-40px]">
        <Search />
      </div>

      <div>
        <div className="container mt-[70px] mx-auto ">
          <div className="flex flex-wrap ">
            <div className="md:w-[50%] p-2.5 rounded-[20px]">
              <img
                src="https://modtel.travelerwp.com/wp-content/uploads/2022/04/Frame-3151-min.png"
                alt="..."
              />
            </div>
            <div className="md:w-[50%] p-2.5 rounded-[20px]">
              <img
                src="https://modtel.travelerwp.com/wp-content/uploads/2022/04/Frame-3150-min.png"
                alt="..."
              />
            </div>
          </div>
        </div>
        <div className="container mx-auto mt-[80px] px-2.5 pb-[45px]">
          <h2 className="title">Top destinations</h2>
          <div className="">
            <div className="center">
              <Swiper
                loop={true}
                navigation={true}
                modules={[Navigation]}
                slidesPerView={6}
                spaceBetween={40}
                className="mySwiper"
              >
                <SwiperSlide>
                  <Destinations />
                </SwiperSlide>
                <SwiperSlide>
                  <Destinations />
                </SwiperSlide>
                <SwiperSlide>
                  <Destinations />
                </SwiperSlide>
                <SwiperSlide>
                  <Destinations />
                </SwiperSlide>
                <SwiperSlide>
                  <Destinations />
                </SwiperSlide>
                <SwiperSlide>
                  <Destinations />
                </SwiperSlide>
                <SwiperSlide>
                  <Destinations />
                </SwiperSlide>
                <SwiperSlide>
                  <Destinations />
                </SwiperSlide>
                <SwiperSlide>
                  <Destinations />
                </SwiperSlide>
                <SwiperSlide>
                  <Destinations />
                </SwiperSlide>
                <SwiperSlide>
                  <Destinations />
                </SwiperSlide>
                <SwiperSlide>
                  <Destinations />
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>

        <div className=" bg-grey py-[45px]">
          <div className="container mx-auto">
            <h2 className="title">Plan your next staycation</h2>
            <div className="grid gap grid-cols-4">
              <Card />
              <Card />
              <Card />
              <Card />
            </div>
          </div>
        </div>

        <div className="container mx-auto pt-[65px] pb-[30px]">
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

        <div className="container mx-auto pt-[70px] px-2.5 pb-[90px]">
          <div className="flex flex-wrap">
            <div className="md:w-1/2 sm:w-full">
              <img
                className="w-full rounded-tl-[20px] rounded-bl-[20px]"
                src="https://icdn.dantri.com.vn/thumb_w/1280/2021/04/13/gioi-sieu-giau-va-nhung-thu-vui-nghi-duong-it-ai-bietdocx-1618273214390.jpeg"
                alt="..."
              />
            </div>
            <div className="md:w-1/2 sm:w-full rounded-tr-[20px] rounded-br-[20px] bg-[#fcfcfc] py-[80px] 2xl:px-[120px] md:px-[50px] sm:px-[10px] border-solid border-b border-t border-r text-center">
              <h2 className="font-bold text-center text-4xl leading-[46px] mb-0">
                Get special offers, and more from Traveler
              </h2>
              <p className="text-base text-[#727272] px-[50px] text-center mb-[30px]">
                Subscribe to see secret deals prices drop the moment you sign
                up!
              </p>
              <Form>
                <Form.Item
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
                </Form.Item>
              </Form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
