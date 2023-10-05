import { useSelector } from "react-redux";
import ButtonShare from "../../component/buttonShare";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination, FreeMode, Thumbs } from "swiper";
import { Rate } from "antd";
import { Link, useHistory } from "react-router-dom/cjs/react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { setLoadingSg } from "../../redux/slice/loadingSlice";
import { getHotelSaga } from "../../redux/slice/hotelSlice";
import Card from "../../component/card";

import SizeSvg from "../../assets/svgs/size.svg";
import AdultsSvg from "../../assets/svgs/adults.svg";
import ChildSvg from "../../assets/svgs/child.svg";
import BedSvg from "../../assets/svgs/bed.svg";
import TrashSvg from "../../assets/svgs/trash.svg";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import * as styled from "./style";
import { setLocalBookRoom } from "../../until/local/local";
import { deleteBookRoomSg } from "../../redux/slice/bookRoomSlice";

export default function Cart(props) {
  const { bookRoom } = useSelector((state) => state.BookRoom);
  const { hotels } = useSelector((state) => state.Hotels);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [isLoader, setIsLoader] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();
  useEffect(() => {
    async function fetchData() {
      dispatch(setLoadingSg(true));
      await dispatch(
        getHotelSaga({
          _limit: 24,
        })
      );
      const timeOut = setTimeout(() => {
        dispatch(setLoadingSg(false));
      }, 1500);
      return () => {
        clearTimeout(timeOut);
      };
    }
    fetchData();
  }, [dispatch]);

  return (
    <div className="mb-10">
      <div className="py-5 border-bottom md:block hidden">
        <div className="lg:container lg:mx-auto px-5">
          <ul className="flex items-center justify-start">
            <li className="relative pr-5">
              <Link to="/" className="text-primary ">
                Home
              </Link>
              <div className="absolute top-[50%] right-0 w-1 h-1 bg-[#EAEEF3] z-10"></div>
            </li>

            <li className="ml-5">
              <span className="text-gray">Your Cart</span>
            </li>
          </ul>
        </div>
      </div>

      {bookRoom?.length > 0 ? (
        bookRoom?.map((room, index) => {
          const findHotels = hotels?.find(
            (item) => item.nameHotel === room.nameHotel
          );
          const findRooms = findHotels?.rooms?.find(
            (item) => item.nameRoom === room.nameRoom
          );
          const { star, location, nameHotel, review } = findHotels || {};
          const { detail, nameRoom } = findRooms || {};

          const handleBookRoom = async () => {
            setIsLoader(true);
            setLocalBookRoom(room);
            const timeOut = setTimeout(() => {
              history.push("/checkout");
              setIsLoader(false);
            }, 1000);

            return () => {
              clearTimeout(timeOut);
            };
          };

          return (
            <div key={index} className="px-5 lg:mx-auto lg:container my-10">
              <h1 className="text-3xl font-bold mb-3">Your Cart</h1>
              <div className="w-full flex flex-wrap bg-white rounded-2xl shadow-custom p-4">
                <div className="w-full lg:w-2/5">
                  <Swiper
                    style={{
                      "--swiper-navigation-color": "#fff",
                      "--swiper-pagination-color": "#fff",
                      maxHeight: "300px",
                    }}
                    loop={true}
                    spaceBetween={10}
                    navigation={true}
                    thumbs={{ swiper: thumbsSwiper }}
                    modules={[FreeMode, Navigation, Thumbs]}
                    className="mySwiper2"
                  >
                    {findRooms?.images.map((item, index) => (
                      <SwiperSlide key={index}>
                        <img src={item} />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                  <Swiper
                    onSwiper={setThumbsSwiper}
                    loop={true}
                    spaceBetween={10}
                    slidesPerView={4}
                    freeMode={true}
                    watchSlidesProgress={true}
                    modules={[FreeMode, Navigation, Thumbs]}
                    className="mySwiper"
                    style={{
                      height: "80px",
                    }}
                  >
                    {findRooms?.images.map((item, index) => (
                      <SwiperSlide key={index}>
                        <img src={item} />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
                <div className="w-full lg:w-3/5">
                  <div className="lg:pl-8">
                    <div className="flex mt-5 lg:mt-0">
                      <div className="">
                        <div className="flex items-center flex-wrap">
                          <h2 className="text-xl font-bold relative pr-4">
                            {room.nameRoom}
                            <div className="absolute top-[50%] right-0 w-1 h-1 bg-[#EAEEF3] z-10"></div>
                          </h2>
                          <h3 className="text-lg font-semibold lg:pl-4">
                            {room.nameHotel}
                          </h3>
                        </div>

                        <div className="flex items-center lg:px-3">
                          <div className="mr-4">
                            <styled.RateCustom
                              disabled
                              defaultValue={star}
                              count={star}
                            />
                          </div>
                          <span className="text-gray text-base pt-1">
                            {location}
                          </span>
                        </div>

                        <div className="flex flex-wrap my-2">
                          <div className="text-primary font-bold border-solid border-[1px] border-primary pg-[#F9FBFF] rounded-md px-2 py-[1px]">
                            {star} <span>/</span> 5
                          </div>
                          <span className="font-bold text-base px-4">
                            {review}
                          </span>
                          <p className="text-primary text-base pr-5">
                            (3 Reviews)
                          </p>
                        </div>
                      </div>
                      <div className="ml-auto">
                        <div className="flex">
                          <Rate
                            character={
                              <span
                                role="img"
                                aria-label="heart"
                                style={{
                                  fontSize: "24px",
                                  padding: "15px",
                                  borderRadius: "100%",
                                }}
                              >
                                ❤️
                              </span>
                            }
                            count={1}
                            className="center w-12 h-12 mr-2 border-line rounded-full shadow-custom hover:bg-[#d9303066]"
                          />
                          <ButtonShare />
                        </div>
                        <button
                          onClick={() => dispatch(deleteBookRoomSg(room.id))}
                          className="w-12 h-12 mt-2 ml-auto border-line rounded-full shadow-custom center"
                        >
                          <img className="w-[50%]" src={TrashSvg} alt="trash" />
                        </button>
                      </div>
                    </div>

                    <div className="my-3 flex flex-wrap">
                      <div className="w-full lg:w-3/5">
                        <div className="shadow-custom rounded-2xl p-4  lg:mr-5">
                          <div className="grid grid-cols-2 grid-rows-2 gap-4">
                            <div className="flex">
                              <div className="border-line rounded-xl shadow-custom w-11 h-11 p-2 flex item-center ">
                                <img className="" src={SizeSvg} alt="" />
                              </div>
                              <p className="ml-2.5 items-center text-gray text-sm flex">
                                S: {detail?.S}
                              </p>
                            </div>
                            <div className="flex">
                              <div className="border-line rounded-xl shadow-custom w-11 h-11 p-2 flex item-center ">
                                <img className="" src={BedSvg} alt="" />
                              </div>
                              <p className="ml-2.5 items-center text-gray text-sm flex">
                                Beds: {detail?.Beds}
                              </p>
                            </div>
                            <div className="flex">
                              <div className="border-line rounded-xl shadow-custom w-11 h-11 p-2 flex item-center ">
                                <img className="" src={AdultsSvg} alt="" />
                              </div>
                              <p className="ml-2.5 items-center text-gray text-sm flex">
                                Adults: {detail?.Adults}
                              </p>
                            </div>
                            <div className="flex">
                              <div className="border-line rounded-xl shadow-custom w-11 h-11 p-2 flex item-center ">
                                <img className="" src={ChildSvg} alt="" />
                              </div>
                              <p className="ml-2.5 items-center text-gray text-sm flex">
                                Children: {detail?.Children}
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="flex justify-between lg:mr-5">
                          <div className="mr-4">
                            <div className="text-gray my-3">
                              Check-In:{" "}
                              <span className="text-primary">
                                {room.checkIn}
                              </span>
                            </div>
                            <div className="text-gray my-3">
                              Check-Out:{" "}
                              <span className="text-primary">
                                {room.checkOut}
                              </span>
                            </div>
                            <div className="text-gray my-3">
                              OffNight:{" "}
                              <span className="text-primary">
                                {room.numberOffNight}
                              </span>
                            </div>
                          </div>
                          <div>
                            <div className="text-gray my-3 flex mr-2.5">
                              Room:{" "}
                              <span className="text-primary ml-2.5">
                                {room.numberRooms}
                              </span>
                            </div>
                            <div className="text-gray my-3 flex mr-2.5">
                              Adults:{" "}
                              <span className="text-primary ml-2.5">
                                {room.numberAdults}
                              </span>
                            </div>
                            <div className="text-gray my-3 flex mr-2.5">
                              Children:{" "}
                              <span className="text-primary ml-2.5">
                                {room.numberChildren}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="w-full lg:w-2/5">
                        <div className="shadow-custom rounded-2xl p-4 w-full">
                          <div className="text-gray flex">
                            SubTotal:{" "}
                            <span className="ml-auto">${room.totalPrice}</span>
                          </div>
                          <div className="border-bottom my-2.5"></div>
                          <div className="text-gray flex">
                            Discount: <span className="ml-auto">0</span>
                          </div>
                          <div className="text-gray flex">
                            Environment Tax: <span className="ml-auto">0</span>
                          </div>
                          <div className="border-bottom my-2.5"></div>
                          <div className="text-gray text-xl flex">
                            Total:{" "}
                            <span className="ml-auto text-primary text-xl">
                              ${room.totalPrice}
                            </span>
                          </div>
                          <div className="border-bottom my-2.5"></div>
                          <button
                            onClick={() => handleBookRoom()}
                            className="center bg-primary w-full p-2.5 text-white rounded-2xl my-3 hover:opacity-70"
                          >
                            Checkout
                            {isLoader ? (
                              <styled.LoaderButton>
                                <div className="loader-small"></div>
                                <div className="loader-large"></div>
                              </styled.LoaderButton>
                            ) : null}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })
      ) : (
        <div className="px-5 lg:mx-auto lg:container my-10">
          <div className="bg-[#fff3cd] text-[#664d03] border-[#ffecb5] text-2xl border border-collapse p-5 shadow-custom">
            There are no options!
          </div>
        </div>
      )}

      <div className="lg:container lg:mx-auto px-5">
        <div className="flex">
          <div className="lg:w-3/5 w-full shadow-custom rounded-2xl bg-white">
            <div className="p-5 overflow-hidden">
              <h2 className="text-2xl font-semibold pb-5">Another Choice</h2>
              <styled.SwiperCustom
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
                  300: {
                    slidesPerView: 1,
                    spaceBetween: 24,
                  },
                  640: {
                    slidesPerView: 2,
                    spaceBetween: 24,
                  },
                }}
              >
                {hotels?.slice(0, 8).map((item, index) => (
                  <SwiperSlide key={index}>
                    <Card item={item} />
                  </SwiperSlide>
                ))}
              </styled.SwiperCustom>
            </div>
          </div>
          <div className="lg:w-2/5 w-full lg:mx-5">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387625.9023692689!2d-74.36563460807385!3d40.62149124937595!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2zVGjDoG5oIHBo4buRIE5ldyBZb3JrLCBUaeG7g3UgYmFuZyBOZXcgWW9yaywgSG9hIEvhu7M!5e0!3m2!1svi!2s!4v1696335883699!5m2!1svi!2s"
              frameBorder="0"
              className="w-full h-full border-0 shadow-custom rounded-2xl bg-white"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
