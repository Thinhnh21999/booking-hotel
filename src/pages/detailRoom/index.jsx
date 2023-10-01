import { useEffect, useMemo, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { SwiperSlide } from "swiper/react";
import "antd/dist/antd";
import {
  Link,
  useHistory,
  useParams,
} from "react-router-dom/cjs/react-router-dom.min";
import ButtonShare from "../../component/buttonShare";
import CardRoom from "../../component/cardRoom";
import { getHotelSaga } from "../../redux/slice/hotelSlice";
import BookRoom from "../../component/bookRoom";
import { Rate, Form, Button } from "antd";
import { commonBookRoomSg } from "../../redux/slice/bookRoomSlice";
import { setIsOpenModal } from "../../redux/slice/userSlice";
import openNotification from "../../component/notification";
import {
  getLocalCheckIn,
  getLocalLogin,
  setLocalBookRoom,
} from "../../until/local/local.js";
import { addDays } from "date-fns";

import size from "../../assets/svgs/size.svg";
import adults from "../../assets/svgs/adults.svg";
import child from "../../assets/svgs/child.svg";
import star from "../../assets/svgs/star.svg";
import bed from "../../assets/svgs/bed.svg";
import airport from "../../assets/svgs/airport.svg";
import fitness from "../../assets/svgs/fitness.svg";
import heater from "../../assets/svgs/heater.svg";
import wifi from "../../assets/svgs/wifi.svg";
import restaurant from "../../assets/svgs/restaurant.svg";
import spa from "../../assets/svgs/spa.svg";
import washer from "../../assets/svgs/Washer&Dryer.svg";
import locationSvg from "../../assets/svgs/location.svg";

import { Navigation, Autoplay, Pagination } from "swiper";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import moment from "moment";
import * as styled from "./style.js";
import { setLoadingSg } from "../../redux/slice/loadingSlice";

export default function DetailRoom(props) {
  const { hotels } = props;
  const checkInLocal = getLocalCheckIn()?.checkIn;
  const checkOutLocal = getLocalCheckIn()?.checkOut;

  // custom ngày giờ để có thể tính được thời gian offNight
  const offNight = useMemo(() => {
    return moment(checkOutLocal).diff(moment(checkInLocal), "days");
  }, [checkOutLocal, checkInLocal]);

  // custom ngày giờ để tính thòi gian ngày hôm nay đến ngày checkIn
  const daysUntilCheckIn = useMemo(() => {
    const checkInMoment = moment(checkInLocal, "MM/DD/YYYY").startOf("day");
    const currentMoment = moment().startOf("day");
    return moment(checkInMoment).diff(currentMoment, "days");
  }, [checkInLocal]);
  const [dates, setDates] = useState([
    {
      startDate: checkInLocal ? new Date(checkInLocal) : new Date(),
      endDate: addDays(
        new Date(),
        offNight || daysUntilCheckIn > 0 ? offNight + daysUntilCheckIn : 1
      ),
      key: "selection",
    },
  ]);
  const objDates = Object.assign({}, ...dates);
  const checkIn = moment(objDates.startDate, "ddd MMM DD YYYY").format(
    "MM/DD/YYYY"
  );
  const checkOut = moment(objDates.endDate, "ddd MMM DD YYYY").format(
    "MM/DD/YYYY"
  );
  const [isLoader, setIsLoader] = useState(false);
  const [errors, setErrors] = useState([]);
  const [numberRooms, setNumberRooms] = useState(
    getLocalCheckIn()?.numberRooms
  );
  const [numberAdults, setNumberAdults] = useState(
    getLocalCheckIn()?.numberAdults
  );
  const [numberChildren, setNumberChildren] = useState(
    getLocalCheckIn()?.numberChildren
  );
  const [isShowNavigation, setShowIsNavigation] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();
  const { nameHotel, nameRoom } = useParams();
  const [formBookRoom] = Form.useForm();

  const token = getLocalLogin()?.access_token;

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(setLoadingSg(true));
    const timeoutId = setTimeout(() => {
      dispatch(setLoadingSg(false));
    }, 2000);
    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  const hotelItem = hotels?.find((hotel) => hotel.nameHotel === nameHotel);
  const roomItem = hotelItem?.rooms?.find((room) => room.nameRoom === nameRoom);
  const numberOffNight = moment(checkOut).diff(moment(checkIn), "days");

  const { location, image } = hotelItem || {};
  const { price, description, images } = roomItem || {};
  const { S, Adults, Children, Beds } = roomItem?.detail || {};

  const totalPrice = useMemo(() => {
    return (numberRooms * price * numberOffNight).toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
  }, [numberRooms, price, numberOffNight]);

  const handleBookRoom = async (value) => {
    setIsLoader(true);
    const timeOut = setTimeout(() => {
      setIsLoader(false);
    }, 2000);
    const obj = {
      image: image,
      images: images[0],
      location: location,
      nameRoom: nameRoom,
      nameHotel: nameHotel,
    };
    const values = { ...value, ...obj };
    const newErrors = [];

    if (numberAdults > Adults * numberRooms) {
      newErrors.push(`Max of adults is ${Adults * numberRooms} people`);
    }

    if (numberChildren > Children * numberRooms) {
      newErrors.push("Number of children in the room are incorrect");
    }

    if (!(checkIn && checkOut)) {
      newErrors.push("You cannot book a room without a date limit");
    }

    if (newErrors.length === 0) {
      setErrors([]);

      try {
        await dispatch(commonBookRoomSg(values));
        setLocalBookRoom(values);
        if (token) {
          const timeOut = setTimeout(() => {
            history.push("/checkout");
          }, 1000);
          return () => {
            clearTimeout(timeOut);
          };
        } else {
          dispatch(setIsOpenModal(true));
          openNotification("warning", "bạn cần đăng nhập để đặt phòng");
        }
      } catch (error) {
        console.error(error);
      }
    } else {
      setErrors(newErrors);
    }

    return () => {
      clearTimeout(timeOut);
    };
  };

  return (
    <div className="relative">
      <div className="py-5 border-bottom hidden sm:block">
        <div className="lg:container lg:mx-auto px-5">
          <ul className="flex items-center justify-start">
            <li className="relative pr-5">
              <Link to="/" className="text-primary ">
                Home
              </Link>
              <div className="absolute top-[50%] right-0 w-1 h-1 bg-[#EAEEF3] z-10"></div>
            </li>

            <li className="relative ml-5 pr-5">
              <span>United States</span>
              <div className="absolute top-[50%] right-0 w-1 h-1 bg-[#EAEEF3] z-10"></div>
            </li>

            <li className="relative ml-5 pr-5">
              <span>{nameHotel}</span>
              <div className="absolute top-[50%] right-0 w-1 h-1 bg-[#EAEEF3] z-10"></div>
            </li>

            <li className="ml-5">
              <span className="text-gray">{roomItem?.nameRoom}</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex justify-between mt-10 mb-6 lg:container lg:mx-auto px-5">
        <div>
          <h1 className="font-bold md:text-4xl text-3xl">
            {roomItem?.nameRoom}
          </h1>
          <div className="flex mt-4 ml-2.5">
            <img className="w-4 mr-2" src={locationSvg} alt=".." />
            <span className="text-gray">{location}</span>
          </div>
        </div>
        <div className="flex justify-between">
          <ButtonShare />
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
            className="center w-12 h-12 ml-3 border-line rounded-full shadow-custom hover:bg-[#d9303066]"
          />
        </div>
      </div>

      <div className="block px-5 h-[630px] mt-10">
        <Link
          className="md:w-1/3 w-full h-full md:inline-block block float-left md:pe-[5px]"
          to=""
        >
          <img
            className="w-full h-full md:rounded-bl-2xl md:rounded-tl-2xl md:rounded-br-none md:rounded-tr-none rounded-2xl object-cover"
            src={images?.[0]}
            alt="image room"
          />
        </Link>

        <Link
          className="w-1/3 h-[50%] px-[5px] pb-[5px] md:inline-block hidden float-left"
          to=""
        >
          <img className="w-full h-full" src={images?.[1]} alt="image room" />
        </Link>

        <Link
          className="w-1/3 px-[5px] h-[50%] pb-[5px] md:inline-block hidden float-left"
          to=""
        >
          <img
            className="w-full h-full rounded-tr-2xl"
            src={images?.[2]}
            alt="image room"
          />
        </Link>

        <Link
          to=""
          className="w-1/3 h-[50%] px-[5px] pt-[5px] md:inline-block hidden float-left"
        >
          <img className="w-full h-full " src={images?.[3]} alt="image room" />
        </Link>

        <Link
          className="w-1/3 h-[50%] px-[5px] pt-[5px] md:inline-block hidden float-left"
          to=""
        >
          <img
            className="w-full h-full rounded-br-2xl"
            src={images?.[4]}
            alt="image room"
          />
        </Link>
      </div>

      <div className="pt-14 lg:container lg:mx-auto px-5">
        <div className="flex mx-[-12px]">
          <div className="lg:w-2/3 w-full px-3">
            <div className="flex border-bottom mb-10 pb-[25px] flex-wrap">
              <div className="flex mb-[15px] lg:mb-0 w-1/2 sm:w-1/5">
                <div className="border-[1px] border-solid rounded-xl border-gray-300 shadow-xl shadow-grey w-11 h-11 p-2 flex item-center ">
                  <img className="" src={size} alt="" />
                </div>
                <p className="ml-2.5 items-center text-gray text-sm flex">
                  S: {S}
                </p>
              </div>
              <div className="flex mb-[15px] lg:mb-0 w-1/2 sm:w-1/5">
                <div className="border-[1px] border-solid rounded-xl border-gray-300 shadow-xl shadow-grey w-11 h-11 p-2 flex item-center ">
                  <img className="" src={bed} alt="" />
                </div>
                <p className="ml-2.5 items-center text-gray text-sm flex">
                  Beds: {Beds}
                </p>
              </div>
              <div className="flex mb-[15px] lg:mb-0 w-1/2 sm:w-1/5">
                <div className="border-[1px] border-solid rounded-xl border-gray-300 shadow-xl shadow-grey w-11 h-11 p-2 flex item-center ">
                  <img className="" src={adults} alt="" />
                </div>
                <p className="ml-2.5 items-center text-gray text-sm flex">
                  Adults: {Adults}
                </p>
              </div>
              <div className="flex mb-[15px] lg:mb-0 w-1/2 sm:w-1/5">
                <div className="border-[1px] border-solid rounded-xl border-gray-300 shadow-xl shadow-grey w-11 h-11 p-2 flex item-center ">
                  <img className="" src={child} alt="" />
                </div>
                <p className="ml-2.5 items-center text-gray text-sm flex">
                  Children: {Children}
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-semibold mb-10">About this room</h2>
              {description?.map((item, index) => (
                <p key={index} className="text-base mb-5">
                  {item}
                </p>
              ))}
            </div>

            <hr className="my-10 text-slate-200"></hr>

            <div>
              <h2 className="text-3xl font-bold my-5">Hotel Facilities</h2>
              <div className="flex flex-col sm:flex-row">
                <ul className="w-1/3">
                  <li className="text-gray">
                    <div className="flex items-center pb-5">
                      <img className="w-7 mr-5" src={airport} alt="" />
                      <p>AirPort TransPort</p>
                    </div>
                  </li>
                  <li className="text-gray">
                    <div className="flex items-center pb-5">
                      <img className="w-7 mr-5" src={fitness} alt="" />
                      <p>Fitness Center</p>
                    </div>
                  </li>
                  <li className="text-gray">
                    <div className="flex items-center pb-5">
                      <img className="w-7 mr-5" src={heater} alt="" />
                      <p>Heater</p>
                    </div>
                  </li>
                </ul>

                <ul className="w-1/3">
                  <li className="text-gray">
                    <div className="flex items-center pb-5">
                      <img className="w-7 mr-5" src={wifi} alt="" />
                      <p>Internet-Wifi</p>
                    </div>
                  </li>
                  <li className="text-gray">
                    <div className="flex pb-5 items-center">
                      <img className="w-7 mr-5" src={restaurant} alt="" />
                      <p>Restaurant</p>
                    </div>
                  </li>
                </ul>

                <ul className="w-1/3">
                  <li className="text-gray">
                    <div className="flex pb-5 items-center">
                      <img className="w-7 mr-5" src={washer} alt="" />
                      <p>Washer & Dryer</p>
                    </div>
                  </li>
                  <li className="text-gray">
                    <div className="flex pb-5 items-center">
                      <img className="w-7 mr-5" src={spa} alt="" />
                      <p>Spa & Sauna</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <hr className="my-10 text-slate-200"></hr>

            <div>
              <h2 className="text-2xl font-bold mb-10">Rates & availability</h2>
              <div className="w-full rounded-xl shadow-custom bg-white border-line">
                <styled.DateRangePickerCustom
                  onChange={(item) => setDates([item.selection])}
                  showSelectionPreview={true}
                  moveRangeOnFirstSelection={false}
                  months={2}
                  minDate={moment().toDate()}
                  ranges={dates}
                  direction="horizontal"
                />
              </div>
            </div>

            <div className="mb-10 lg:hidden block">
              <div className="border-line rounded-2xl py-10 mt-10">
                <div className="flex justify-center items-center">
                  <img
                    className="rounded-full cursor-pointer w-22"
                    src="https://modtel.travelerwp.com/wp-content/uploads/2022/04/32.jpg"
                    alt=""
                  />
                </div>
                <p className="cursor-pointer text-bold text-center py-3">
                  modtel
                </p>
                <p className="text-gray text-center ">Member Since 2022</p>
              </div>
            </div>
          </div>

          <div className="fixed flex lg:hidden justify-between items-center bottom-0 left-0 right-0 z-50 w-full bg-white px-[15px] py-2.5 border-t border-solid border-[#dedede] ">
            <div className="flex justify-between">
              <p className="text-gray py-4 mr-3">
                From:
                <span className="font-bold text-black">
                  ${hotelItem?.price},00
                </span>
                / night
              </p>
              <div className="flex py-4">
                <img className="w-4" src={star} alt="" />
                <span className="font-bold mx-2">{hotelItem?.star}</span>
                <p className="text-gray">(3 reviews)</p>
              </div>
            </div>
            <button
              onClick={() => setShowIsNavigation(!isShowNavigation)}
              className="bg-primary px-4 py-3 text-white rounded-3xl"
            >
              {isShowNavigation ? "Close Check" : "Check Room"}
            </button>
          </div>

          <div
            className={`${
              isShowNavigation
                ? "top-0 !h-auto opacity-100 overflow-scroll"
                : ""
            } lg:relative fixed opacity-0 h-0 lg:h-auto transition-all duration-300 lg:opacity-100 z-30 bottom-0 left-0 pt-5 lg:pt-0 bg-white w-full lg:w-1/3 lg:block px-3`}
          >
            <div className="sticky top-0">
              <Form
                onFinish={handleBookRoom}
                form={formBookRoom}
                className="border-[1px] border-solid border-[#dedede] rounded-3xl p-8 shadow-xl drop-shadow-xl"
              >
                <div className="center text-gray mb-5">
                  From:{" "}
                  <span className="font-bold text-xl text-[#232323] ml-1">
                    {" "}
                    ${price},00
                  </span>{" "}
                  /<span>night</span>
                </div>

                <BookRoom
                  numberAdults={numberAdults}
                  setNumberAdults={setNumberAdults}
                  setNumberChildren={setNumberChildren}
                  setNumberRooms={setNumberRooms}
                  dates={dates}
                  setDates={setDates}
                  checkIn={checkIn}
                  checkOut={checkOut}
                  numberChildren={numberChildren}
                  numberRooms={numberRooms}
                  formBookRoom={formBookRoom}
                  totalPrice={totalPrice}
                  numberOffNight={numberOffNight}
                />

                <div className="mt-[25px]">
                  <div className="flex justify-between">
                    <Form.Item style={{ margin: "0" }} name="numberOffNight">
                      <span className="text-gray">{numberOffNight} night</span>
                    </Form.Item>
                    <span>{totalPrice}</span>
                  </div>

                  <div className="flex justify-between pt-5 mt-5 border-t border-solid border-[#dedede]">
                    <span className="text-xl font-semibold">Total</span>
                    <Form.Item style={{ margin: "0" }} name="totalPrice">
                      <span className="text-xl font-semibold">
                        {totalPrice}
                      </span>
                    </Form.Item>
                  </div>
                </div>

                <Button
                  htmlType="submit"
                  className="center h-auto bg-primary uppercase font-medium text-lg text-white py-2.5 px-4 mt-8 rounded-[30px] w-full text-center"
                >
                  Reserve
                  {isLoader ? (
                    <styled.LoaderButton>
                      <div className="loader-small"></div>
                      <div className="loader-large"></div>
                    </styled.LoaderButton>
                  ) : null}
                </Button>

                {errors.length > 0 && (
                  <div>
                    {errors.map((error, index) => (
                      <p
                        key={index}
                        className="text-[#842029] font-medium mt-4 text-lg"
                      >
                        {error}
                      </p>
                    ))}
                  </div>
                )}
              </Form>

              <div className="mt-[30px] border-[1px] border-solid border-[#dedede] rounded-2xl py-10">
                <div className="flex justify-center items-center">
                  <img
                    className="rounded-full cursor-pointer "
                    src="https://modtel.travelerwp.com/wp-content/uploads/2022/04/32.jpg"
                    alt=""
                  />
                </div>
                <p className="cursor-pointer text-bold text-center py-3">
                  modtel
                </p>
                <p className="text-gray text-center ">Member Since 2022</p>
              </div>
            </div>
          </div>
        </div>
        <hr className="my-[70px]" />
      </div>

      <div className="lg:container lg:mx-auto px-5 overflow-hidden">
        <h3 className="text-3xl font-bold mb-[70px] mt-5">
          Explore other options
        </h3>
        <div className="flex flex-row flex-wrap">
          <styled.SwiperCustom
            slidesPerView={3}
            navigation={true}
            modules={[Autoplay, Navigation, Pagination]}
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
                slidesPerView: 3,
                spaceBetween: 24,
              },
              1366: {
                slidesPerView: 3,
                spaceBetween: 24,
              },
            }}
          >
            {hotelItem?.rooms.map((room) => (
              <SwiperSlide key={room.id}>
                <CardRoom room={room} />
              </SwiperSlide>
            ))}
          </styled.SwiperCustom>
        </div>
      </div>
    </div>
  );
}
