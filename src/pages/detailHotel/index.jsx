import { Swiper, SwiperSlide } from "swiper/react";
import { useEffect, useState, useMemo, useRef } from "react";
import { useDispatch } from "react-redux";
import { getHotelSaga, setParams } from "../../redux/slice/hotelSlice";
import { Rate, Col, Row, message } from "antd";
import Card from "../../component/card/index.jsx";
import CardRoom from "../../component/cardRoom";
import ButtonShare from "../../component/buttonShare";
import { Form, Input, Button } from "antd";
import { Link, useParams } from "react-router-dom/cjs/react-router-dom.min";
import moment from "moment";
import {
  postReviewSaga,
  getReviewSaga,
  setParamsReviews,
} from "../../redux/slice/reviewSlice";
import BookRoom from "../../component/bookRoom";
import LoadingItem from "../../component/loadingItem";

import { Navigation, Autoplay, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import star from "../../assets/svgs/star.svg";
import UpArrow from "../../assets/svgs/upArrow.svg";
import airport from "../../assets/svgs/airport.svg";
import fitness from "../../assets/svgs/fitness.svg";
import heater from "../../assets/svgs/heater.svg";
import wifi from "../../assets/svgs/wifi.svg";
import restaurant from "../../assets/svgs/restaurant.svg";
import spa from "../../assets/svgs/spa.svg";
import washer from "../../assets/svgs/Washer&Dryer.svg";
import userSvg from "../../assets/svgs/user.svg";
import LikeSvg from "../../assets/svgs/like.svg";

import * as styled from "./style";
import { getLocalCheckIn, setLocalCheckIn } from "../../until/local/local.js";

export default function DetailHotel(props) {
  const hotels = props.hotels;
  const paramsReviews = props.paramsReviews;
  const reviews = props.reviews;
  const localCheckIn = getLocalCheckIn();
  const [isLoading, setIsLoading] = useState(false);
  const [isOpenReview, setIsOpenReview] = useState(false);
  const [showPriceRoom, setShowPriceRoom] = useState(false);
  const [isBookRoom, setIsBookRoom] = useState(true);
  const [rateValues, setRateValues] = useState({});
  const [current, setCurrent] = useState(1);
  const [dates, setDates] = useState({
    // checkin: moment().toDate(), // Set ngày hôm nay

    // checkout: moment().add(1, "days").toDate(), // Set ngày mai
    checkin: new Date(localCheckIn?.checkIn),

    checkout: new Date(localCheckIn?.checkOut),
  });
  const checkIn = dates.checkin;
  const checkOut = dates.checkout;
  const [numberRooms, setNumberRooms] = useState(() =>
    localCheckIn?.numberRooms > 0 ? localCheckIn?.numberRooms : 1
  );
  const [numberAdults, setNumberAdults] = useState(() =>
    localCheckIn?.numberAdults > 0 ? localCheckIn?.numberAdults : 1
  );
  const [numberChildren, setNumberChildren] = useState(() =>
    localCheckIn?.numberChildren > 0 ? localCheckIn?.numberChildren : 0
  );
  const [form] = Form.useForm();
  const [formMessages] = Form.useForm();
  const dispatch = useDispatch();
  const { nameHotel } = useParams();
  const formattedTime = moment().format("HH:mm DD/MM/YYYY");
  const ref = useRef();

  useEffect(() => {
    dispatch(
      getHotelSaga({
        _limit: 24,
      })
    );

    dispatch(getReviewSaga(paramsReviews));
    window.scrollTo(0, 0);
  }, []);

  const hotelItem = hotels?.find((hotel) => hotel.nameHotel === nameHotel);

  const handleReviewComment = (values) => {
    const reviewData = {
      ...values,
      time: formattedTime,
      // chuyển object sang mảng
      rate: Object.entries(rateValues).map(([name, value]) => ({
        name,
        value,
      })),
    };

    dispatch(postReviewSaga(reviewData));
    dispatch(getReviewSaga(paramsReviews));
  };

  const handleChangePage = (page) => {
    setCurrent(page);
    dispatch(
      setParamsReviews({
        ...paramsReviews,
        _page: page,
        _limit: 3,
      })
    );

    dispatch(
      getReviewSaga({
        ...paramsReviews,
        _page: page,
        _limit: 3,
      })
    );
  };

  const rateItems = [
    { name: "cleanliness", label: "Cleanliness" },
    { name: "communication", label: "Communication" },
    { name: "checkin", label: "Check-in" },
    { name: "accuracy", label: "Accuracy" },
    { name: "location", label: "Location" },
    { name: "value", label: "Value" },
  ];

  const numberOffNight = moment(checkOut).diff(moment(checkIn), "days");

  useEffect(() => {
    setLocalCheckIn({
      checkIn,
      checkOut,
      numberAdults,
      numberChildren,
      numberRooms,
    });
  }, [checkIn, checkOut, numberAdults, numberChildren, numberRooms]);

  const handleCheckRoom = () => {
    const timeoutId = setTimeout(() => {
      setIsLoading(false);
    }, 3000);
    setIsLoading(true);
    setShowPriceRoom(true);
    ref.current.scrollIntoView({ behavior: "smooth" });

    return () => {
      clearTimeout(timeoutId);
    };
  };

  const onFinishMessages = (value) => {
    message.success("Thank you for your message. It has been sent.");

    setTimeout(() => {
      formMessages.resetFields();
    }, 100);
  };

  return (
    <>
      <div className="relative">
        <div className="py-5 border-bottom">
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

              <li className="ml-5">
                <span>{nameHotel}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="block px-5 h-[630px] mt-10">
          <Link
            className="md:w-1/3 w-full h-full md:inline-block block float-left md:pe-[5px]"
            to=""
          >
            <img
              className="w-full h-full md:rounded-bl-2xl md:rounded-tl-2xl md:rounded-br-none md:rounded-tr-none rounded-2xl object-cover"
              src={hotelItem?.images[0]}
              alt="image hotel"
            />
          </Link>

          <Link
            className="w-1/3 h-[50%] px-[5px] pb-[5px] md:inline-block hidden float-left"
            to=""
          >
            <img
              className="w-full h-full"
              src={hotelItem?.images[1]}
              alt="image hotel 2"
            />
          </Link>

          <Link
            className="w-1/3 px-[5px] h-[50%] pb-[5px] md:inline-block hidden float-left"
            to=""
          >
            <img
              className="w-full h-full rounded-tr-2xl"
              src={hotelItem?.images[2]}
              alt="image hotel 3"
            />
          </Link>

          <Link
            to=""
            className="w-1/3 h-[50%] px-[5px] pt-[5px] md:inline-block hidden float-left"
          >
            <img
              className="w-full h-full "
              src={hotelItem?.images[3]}
              alt="image hotel 4"
            />
          </Link>

          <Link
            className="w-1/3 h-[50%] px-[5px] pt-[5px] md:inline-block hidden float-left"
            to=""
          >
            <img
              className="w-full h-full rounded-br-2xl"
              src={hotelItem?.images[4]}
              alt="image hotel 4"
            />
          </Link>
        </div>

        <div className="mt-12 lg:container lg:mx-auto px-5">
          <div className="flex mx-[-12px]">
            <div className="lg:w-2/3 w-full px-3">
              <div className="flex justify-between flex-wrap">
                <div>
                  <div>
                    <styled.RateCustom
                      disabled
                      defaultValue={hotelItem?.star}
                      count={hotelItem?.star}
                    />
                  </div>
                  <h1 className="text-4xl font-bold">{hotelItem?.nameHotel}</h1>
                  <div className="flex my-2">
                    <div className="text-primary font-bold border-solid border-[1px] border-primary pg-[#F9FBFF] rounded-md px-2 py-[1px]">
                      {hotelItem?.star} <span>/</span> 5
                    </div>
                    <span className="font-bold px-4">{hotelItem?.review}</span>
                    <p className="text-primary">(3 Reviews)</p>
                    <span className="text-gray pl-5">
                      {hotelItem?.location}
                    </span>
                  </div>
                </div>
                <div className="flex items-center">
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

              <hr className="my-10 text-slate-200"></hr>

              <div>
                <h2 className="text-3xl font-semibold mb-10">
                  About this hotel
                </h2>
                {hotelItem?.description.map((item, index) => (
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
              <div className="">
                <h2 className="text-3xl font-bold my-5">Rules</h2>

                <ul className="flex">
                  <li className="text-gray py-[10px] w-1/3">Check In</li>
                  <li className="text-gray py-[10px]">12:00 pm</li>
                </ul>
                <ul className="flex">
                  <li className="text-gray py-[10px] w-1/3">Check Out</li>
                  <li className="text-gray py-[10px]">12:00 pm</li>
                </ul>
              </div>

              <hr className="my-10 text-slate-200"></hr>

              <div ref={ref}>
                <h2 className="text-3xl font-bold mb-7">Availability</h2>
                <div className="relative flex lg:flex-col flex-wrap mx-[-15px]">
                  {isLoading ? <LoadingItem /> : null}

                  {hotelItem?.rooms.map((room, index) => (
                    <div
                      key={index}
                      className="flex flex-row lg:flex-col flex-wrap md:w-1/2 w-full lg:w-full px-[15px]"
                    >
                      <CardRoom
                        room={room}
                        showPriceRoom={showPriceRoom}
                        numberRooms={numberRooms}
                        numberOffNight={numberOffNight}
                      />
                    </div>
                  ))}
                </div>
              </div>

              <hr className="my-10 text-slate-200"></hr>

              <div className="bg-[#FCFCFC]">
                <h2 className="text-3xl font-bold mb-7">Reviews</h2>
                <div className="border-[1px] border-solid border-[#dedede] rounded-3xl px-5 py-[30px]">
                  <div className="flex my-2 px-2.5">
                    <img className="w-4" src={star} alt="" />
                    <div className="ml-3 font-bold text-lg">
                      5 <span>/</span> 5
                    </div>
                    <span className="font-bold px-4 text-lg">
                      {hotelItem?.review}
                    </span>
                    <p className="text-primary">({reviews?.length} Reviews)</p>
                  </div>

                  <div className="my-4 flex flex-wrap">
                    <div className="w-full md:w-1/2 mt-[15px]">
                      <div className="flex px-2.5">
                        <h2 className="w-[42%]">Cleanliness</h2>
                        <span className="w-[42%] flex items-center">
                          <div className="w-full h-[20%] bg-[#4CBB7F] rounded-md"></div>
                        </span>
                        <span className="w-[16%] flex justify-end font-semibold">
                          5/5
                        </span>
                      </div>
                    </div>
                    <div className="w-full md:w-1/2 mt-[15px]">
                      <div className="flex px-2.5">
                        <h2 className="w-[42%]">Accuracy</h2>
                        <span className="w-[42%] flex items-center">
                          <div className="w-full h-[20%] bg-[#4CBB7F] rounded-md"></div>
                        </span>
                        <span className="w-[16%] flex justify-end font-semibold">
                          5/5
                        </span>
                      </div>
                    </div>
                    <div className="w-full md:w-1/2 mt-[15px]">
                      <div className="flex px-2.5">
                        <h2 className="w-[42%]">Communication</h2>
                        <span className="w-[42%] flex items-center">
                          <div className="w-full h-[20%] bg-[#4CBB7F] rounded-md"></div>
                        </span>
                        <span className="w-[16%] flex justify-end font-semibold">
                          5/5
                        </span>
                      </div>
                    </div>
                    <div className="w-full md:w-1/2 mt-[15px]">
                      <div className="flex px-2.5">
                        <h2 className="w-[42%]">Location</h2>
                        <span className="w-[42%] flex items-center">
                          <div className="w-full h-[20%] bg-[#4CBB7F] rounded-md"></div>
                        </span>
                        <span className="w-[16%] flex justify-end font-semibold">
                          5/5
                        </span>
                      </div>
                    </div>
                    <div className="w-full md:w-1/2 mt-[15px]">
                      <div className="flex px-2.5">
                        <h2 className="w-[42%]">Check-in</h2>
                        <span className="w-[42%] flex items-center">
                          <div className="w-full h-[20%] bg-[#4CBB7F] rounded-md"></div>
                        </span>
                        <span className="w-[16%] flex justify-end font-semibold">
                          5/5
                        </span>
                      </div>
                    </div>
                    <div className="w-full md:w-1/2 mt-[15px]">
                      <div className="flex px-2.5">
                        <h2 className="w-[42%]">Value</h2>
                        <span className="w-[42%] flex items-center">
                          <div className="w-full h-[20%] bg-[#4CBB7F] rounded-md"></div>
                        </span>
                        <span className="w-[16%] flex justify-end font-semibold">
                          5/5
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <p className="my-10 text-base text-center bg-[#fff3cd] text-[#664d03] border-[#ffecb5] border border-collapse p-5 shadow-custom rounded-xl">
                {reviews.length} reviews on this Hotel - Showing 1 to{" "}
                {reviews.length}
              </p>

              <div>
                {[...reviews].map((item, index) => {
                  let sum = 0;
                  item.rate?.forEach((evaluation) => {
                    sum += evaluation.value;
                  });
                  const average = sum / item.rate?.length;

                  return (
                    <div
                      key={index}
                      className="py-[30px] border-t border-[#dedede] border-solid"
                    >
                      <div className="flex justify-between">
                        <div className="flex">
                          <div className="mr-5">
                            <img
                              className="w-10 rounded-full bg-gray-100"
                              src={userSvg}
                              alt="user"
                            />
                          </div>
                          <div>
                            <h2 className="font-semibold">{item.name}</h2>
                            <p className="text-gray">{item.time}</p>
                          </div>
                        </div>
                        <div className="center float-right">
                          <img src={LikeSvg} alt="like" className="w-4 mr-1" />
                          <span>1</span>
                        </div>
                      </div>
                      <styled.RateCustom disabled count={Math.round(average)} />
                      <p className="text-gray mt-3">{item.content}</p>
                    </div>
                  );
                })}
                <styled.PaginationCustom
                  onChange={handleChangePage}
                  current={current}
                  total={paramsReviews._totalRows}
                  pageSize={paramsReviews._limit}
                ></styled.PaginationCustom>
              </div>

              <div className="">
                <button
                  onClick={() => {
                    setIsOpenReview(!isOpenReview);
                  }}
                  className="flex bg-primary mt-5 text-white text-xl px-5 py-[15px] rounded-[30px] items-center"
                >
                  <span className="font-bold text-base">Write a review</span>
                  <img
                    className={`w-3 ml-2 ${isOpenReview ? "rotate-180" : ""}`}
                    src={UpArrow}
                    alt="..."
                  />
                </button>

                {isOpenReview && (
                  <div className="mt-6">
                    <h3 className="text-3xl font-bold">Leave a reply</h3>
                    <p className="text-gray mt-[10px] mb-[30px]">
                      Your email address will not be published. Required fields
                      are marked *
                    </p>

                    <Form form={form} onFinish={handleReviewComment}>
                      <Row className="mx-[-12px]">
                        <Col span={12} className="px-3">
                          <Form.Item
                            name="name"
                            rules={[
                              {
                                type: "name",
                                message: "The input is not valid E-mail!",
                              },
                              {
                                required: true,
                                message: "Please input your Name",
                              },
                            ]}
                          >
                            <Input placeholder="Name" />
                          </Form.Item>
                        </Col>
                        <Col span={12} className="px-3">
                          <Form.Item
                            name="email"
                            rules={[
                              {
                                type: "email",
                                message: "The input is not valid E-mail!",
                              },
                              {
                                required: true,
                                message: "Please input your E-mail!",
                              },
                            ]}
                          >
                            <Input placeholder="Email" />
                          </Form.Item>
                        </Col>
                        <Col span={24} className="px-3">
                          <Form.Item
                            name="title"
                            rules={[
                              {
                                type: "title",
                                message: "The input is not valid Title",
                              },
                              {
                                required: true,
                                message: "Please input your Title",
                              },
                            ]}
                          >
                            <Input placeholder="Title" />
                          </Form.Item>
                        </Col>
                      </Row>

                      <Row>
                        <Col
                          span={24}
                          className="flex flex-wrap border-line px-[15px] pt-4 pb-[10px] mb-[24px] rounded-lg"
                        >
                          {rateItems.map((item) => (
                            <styled.FormItemCustoms
                              key={item.name}
                              label={item.label}
                            >
                              <Rate
                                onChange={(value) =>
                                  setRateValues((prevValues) => ({
                                    ...prevValues,
                                    [item.name]: value,
                                  }))
                                }
                              />
                            </styled.FormItemCustoms>
                          ))}
                        </Col>

                        <Col span={24}>
                          <Form.Item
                            name="content"
                            rules={[
                              {
                                type: "content",
                                message: "The input is not valid Content",
                              },
                              {
                                required: true,
                                message: "Please input your Content",
                              },
                            ]}
                          >
                            <Input.TextArea placeholder="Content" rows={7} />
                          </Form.Item>
                        </Col>
                      </Row>

                      <Form.Item>
                        <styled.ButtonCustoms type="primary" htmlType="submit">
                          POST COMMENT
                        </styled.ButtonCustoms>
                      </Form.Item>
                    </Form>
                  </div>
                )}
              </div>
            </div>

            <div className="relative w-1/3 px-3 hidden lg:block">
              <div className="sticky top-0">
                <div className="border-[1px] border-solid border-[#dedede] rounded-3xl p-8 shadow-xl drop-shadow-xl	">
                  {isLoading ? <LoadingItem /> : null}
                  <div className="flex justify-between items-center pt-2 group">
                    <button
                      onClick={() => setIsBookRoom(true)}
                      className={`${
                        isBookRoom ? "bg-primary text-white" : null
                      } bg-[#f7f8fa] hover:opacity-80 px-9 py-4 rounded-[30px] w-1/2 mr-2 text-center font-bold`}
                    >
                      Book
                    </button>
                    <button
                      onClick={() => setIsBookRoom(false)}
                      className={`${
                        !isBookRoom ? "bg-primary text-white" : null
                      } bg-[#f7f8fa] hover:opacity-80 px-9 py-4 rounded-[30px] w-1/2 ml-2 text-center font-bold`}
                    >
                      Inquiry
                    </button>
                  </div>

                  {isBookRoom ? (
                    <>
                      <div className="flex justify-between">
                        <p className="text-gray py-4">
                          From:
                          <span className="font-bold text-black">
                            ${hotelItem?.price},00
                          </span>
                          / night
                        </p>
                        <div className="flex py-4">
                          <img className="w-4" src={star} alt="" />
                          <span className="font-bold mx-2">
                            {hotelItem?.star}
                          </span>
                          <p className="text-gray">(3 reviews)</p>
                        </div>
                      </div>

                      <BookRoom
                        numberAdults={numberAdults}
                        numberChildren={numberChildren}
                        numberRooms={numberRooms}
                        setNumberAdults={setNumberAdults}
                        setNumberChildren={setNumberChildren}
                        setNumberRooms={setNumberRooms}
                        dates={dates}
                        setDates={setDates}
                        checkIn={checkIn}
                        checkOut={checkOut}
                      />

                      <button
                        onClick={() => handleCheckRoom()}
                        className="bg-primary hover:opacity-75 text-white p-[15px] rounded-[30px] w-full mr-2 text-center font-bold mt-8"
                      >
                        Check availability
                      </button>
                    </>
                  ) : (
                    <Form
                      className="pt-[25px]"
                      form={formMessages}
                      onFinish={onFinishMessages}
                    >
                      <styled.FormItemMessages
                        name="name"
                        label="Name (*)"
                        rules={[
                          {
                            required: true,
                            message: "Name is required",
                          },
                        ]}
                      >
                        <Input
                          style={{
                            width: "100%",
                            padding: "10px 15px",
                          }}
                          placeholder="Name"
                        />
                      </styled.FormItemMessages>
                      <styled.FormItemMessages
                        name="email"
                        label="E-mail (*)"
                        rules={[
                          {
                            type: "email",
                            message: "The input is not valid E-mail!",
                          },
                          {
                            required: true,
                            message: "Please input your E-mail!",
                          },
                        ]}
                      >
                        <Input
                          style={{
                            width: "100%",
                            padding: "10px 15px",
                          }}
                          placeholder="email@domain.com"
                        />
                      </styled.FormItemMessages>

                      <styled.FormItemMessages
                        name="phone"
                        label="Phone"
                        rules={[
                          {
                            required: true,
                            message: "Please input your phone number!",
                          },
                        ]}
                      >
                        <Input
                          style={{
                            width: "100%",
                            padding: "10px 15px",
                          }}
                          placeholder="Your Phone"
                        />
                      </styled.FormItemMessages>

                      <styled.FormItemMessages name="content" label="Note">
                        <Input.TextArea placeholder="...." rows={4} />
                      </styled.FormItemMessages>

                      <styled.FormItemMessages>
                        <Button
                          style={{
                            width: "100%",
                            height: "unset",
                            padding: "15px",
                            color: "#fff",
                            backgroundColor: "#3B71FE",
                            borderRadius: "50px",
                            fontWeight: "700",
                          }}
                          htmlType="submit"
                        >
                          Send Messages
                        </Button>
                      </styled.FormItemMessages>
                    </Form>
                  )}
                </div>

                <div className="mt-[30px]">
                  <img
                    className="rounded-2xl"
                    src={hotelItem?.images[4]}
                    alt="hotel image"
                  />
                </div>

                <div className="mt-[30px] relative rounded-2xl">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d251637.95196238213!2d105.6189045!3d9.779349!3m2!1i1024!2i768!4f13.1!5e0!3m2!1svi!2s!4v1683879382654!5m2!1svi!2s"
                    frameBorder="0"
                    className="w-full h-[300px] border-0 rounded-2xl"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                  <p className="absolute bottom-2 cursor-pointer bg-white text-primary m-3 border-2 border-solid border-stone-300 ml-[40%] py-3 px-4 font-semibold rounded-3xl">
                    View in a map
                  </p>
                </div>

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

                <div className="mt-[30px] border-[1px] border-solid border-[#dedede] rounded-2xl p-10">
                  <h2 className="text-3xl font-bold mb-7">
                    Information Contact
                  </h2>
                  <h3 className="text-semibold py-2">Email</h3>
                  <p className="text-gray ">contact@travelerwp.com</p>

                  <h3 className="text-semibold py-2">Website</h3>
                  <p className="text-gray ">ctravelerwp.com</p>

                  <h3 className="text-semibold py-2">Phone</h3>
                  <p className="text-gray ">+6580009999</p>

                  <h3 className="text-semibold py-2">Fax</h3>
                  <p className="text-gray ">+123456789</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:container lg:mx-auto px-5 pt-[65px] pb-[30px] overflow-hidden">
          <div className="border-t border-solid border-[#dedede] mb-10"></div>
          <h2 className="title text-left">Recommended for you</h2>
          <styled.SwiperCustom
            slidesPerView={4}
            slidesPerGroup={4}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
            breakpoints={{
              430: {
                slidesPerView: 1,
                slidesPerGroup: 1,
                spaceBetween: 24,
              },
              640: {
                slidesPerView: 1,
                slidesPerGroup: 1,
                spaceBetween: 24,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 24,
                slidesPerGroup: 2,
              },
              992: {
                slidesPerView: 4,
                spaceBetween: 24,
              },
              1366: {
                slidesPerView: 4,
                spaceBetween: 24,
              },
            }}
          >
            {hotels.slice(0, 8).map((item) => (
              <SwiperSlide key={item.id}>
                <Card item={item} />
              </SwiperSlide>
            ))}
          </styled.SwiperCustom>
        </div>
      </div>
    </>
  );
}
