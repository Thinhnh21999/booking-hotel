import { Swiper, SwiperSlide } from "swiper/react";
import { useEffect, useState, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductSaga, setParams } from "../../redux/slice/productSlice";
import { Rate, Col, Row } from "antd";
import Card from "../../component/card/index.jsx";
import About from "../../component/cardAbout";
import ButtonP from "../../component/buttonShare";
import { Form, Input, Button } from "antd";
import { Link, useParams } from "react-router-dom/cjs/react-router-dom.min";
import { isEqual } from "lodash";
import moment from "moment";
import {
  postReviewSaga,
  getReviewSaga,
  setParamsReviews,
} from "../../redux/slice/reviewSlice";

import { Navigation, Autoplay, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import star from "../../assets/svgs/star.svg";
import heart from "../../assets/svgs/heart.svg";
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

export default function DetailHotel() {
  const [isOpenReview, setIsOpenReview] = useState(false);
  const [rateValues, setRateValues] = useState({});
  const [current, setCurrent] = useState(1);
  // ss trước và sau return ra giá trị hiện tại để giảm bớt reload
  const products = useSelector(
    (state) => state.Products.products,
    (prevProducts, newProducts) => {
      return prevProducts.length === newProducts.length;
    }
  );
  const { params, reviews } = useSelector(
    (state) => state.Reviews,
    (prevReviews, newReviews) => {
      // isEqual là pt ss của thư viện lodash
      return (
        isEqual(prevReviews.params, newReviews.params) &&
        newReviews.reviews?.length === prevReviews.reviews?.length
      );
    }
  );
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const { nameHotel } = useParams();
  const formattedTime = moment().format("HH:mm DD/MM/YYYY");

  console.log(reviews);

  useEffect(() => {
    dispatch(
      getProductSaga({
        _limit: 24,
      })
    );

    dispatch(getReviewSaga(params));
  }, []);

  const hotelItem = useMemo(
    () => products.find((hotel) => hotel.nameHotel === nameHotel),
    [products, nameHotel]
  );

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
    dispatch(getReviewSaga(params));
  };

  const handleChangePage = (page) => {
    setCurrent(page);
    dispatch(
      setParamsReviews({
        ...params,
        _page: page,
        _limit: 3,
      })
    );

    dispatch(
      getReviewSaga({
        ...params,
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
          {hotelItem?.images.slice(0, 1).map((image, index) => (
            <Link
              className="md:w-1/3 w-full h-full md:inline-block block float-left"
              to=""
              key={index}
            >
              <img
                className="w-full h-full md:rounded-bl-2xl md:rounded-tl-2xl md:rounded-br-none md:rounded-tr-none rounded-br-2xl rounded-tr-2xl object-cover pe-[5px]"
                src={image}
                alt={`image ${index + 1}`}
              />
            </Link>
          ))}

          {hotelItem?.images.slice(1, 2).map((image, index) => (
            <Link
              className="w-1/3 h-[50%] px-[5px] pb-[5px] md:inline-block hidden float-left"
              to=""
              key={index}
            >
              <img
                className="w-full h-full"
                src={image}
                alt={`image ${index + 1}`}
              />
            </Link>
          ))}

          {hotelItem?.images.slice(2, 3).map((image, index) => (
            <Link
              className="w-1/3 px-[5px] h-[50%] pb-[5px] md:inline-block hidden float-left"
              to=""
              key={index}
            >
              <img
                className="w-full h-full rounded-tr-2xl"
                src={image}
                alt={`image ${index + 1}`}
              />
            </Link>
          ))}

          {hotelItem?.images.slice(3, 4).map((image, index) => (
            <Link
              to=""
              className="w-1/3 h-[50%] px-[5px] pt-[5px] md:inline-block hidden float-left"
              key={index}
            >
              <img
                className="w-full h-full "
                src={image}
                alt={`image ${index + 1}`}
              />
            </Link>
          ))}

          {hotelItem?.images.slice(4, 5).map((image, index) => (
            <Link
              className="w-1/3 h-[50%] px-[5px] pt-[5px] md:inline-block hidden float-left"
              to=""
              key={index}
            >
              <img
                className="w-full h-full rounded-br-2xl"
                src={image}
                alt={`image ${index + 1}`}
              />
            </Link>
          ))}
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
                      5 <span>/</span> 5
                    </div>
                    <span className="font-bold px-4">
                      {hotelItem?.location}
                    </span>
                    <p className="text-primary">(3 Reviews)</p>
                    <span className="text-gray pl-5">{hotelItem?.review}</span>
                  </div>
                </div>
                <div className="flex items-center">
                  <ButtonP />
                  <div className="w-10 h-10 ml-3 border-[1px] border-solid  border-slate-200 rounded-full shadow-lg shadow-slate-100 text-center">
                    <img className="w-6 inline-block pt-2" src={heart} alt="" />
                  </div>
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
                <div className="flex">
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

              <div>
                <h2 className="text-3xl font-bold mb-7">Availability</h2>
                <About />
              </div>

              <hr className="my-10 text-slate-200"></hr>

              <div className="bg-[#FCFCFC]">
                <h2 className="text-3xl font-bold mb-7">Reviews</h2>
                <div className="border-[1px] border-solid border-[#dedede] rounded-3xl p-8">
                  <div className="flex my-2">
                    <img className="w-4" src={star} alt="" />
                    <div className="ml-3 font-bold text-lg">
                      5 <span>/</span> 5
                    </div>
                    <span className="font-bold px-4 text-lg">
                      {hotelItem?.review}
                    </span>
                    <p className="text-primary">(3 Reviews)</p>
                  </div>

                  <Row className="my-4">
                    <Col span={12}>
                      <div className="flex pr-5 ">
                        <h2 className="w-[42%]">Cleanliness</h2>
                        <span className="w-[42%] flex items-center">
                          <div className="w-full h-[20%] bg-[#4CBB7F] rounded-md"></div>
                        </span>
                        <span className="w-[16%] flex justify-end font-semibold">
                          5/5
                        </span>
                      </div>
                    </Col>
                    <Col span={12}>
                      <div className="flex pl-5 ">
                        <h2 className="w-[42%]">Accuracy</h2>
                        <span className="w-[42%] flex items-center">
                          <div className="w-full h-[20%] bg-[#4CBB7F] rounded-md"></div>
                        </span>
                        <span className="w-[16%] flex justify-end font-semibold">
                          5/5
                        </span>
                      </div>
                    </Col>
                  </Row>

                  <Row className="my-4">
                    <Col span={12}>
                      <div className="flex pr-5 ">
                        <h2 className="w-[42%]">Communication</h2>
                        <span className="w-[42%] flex items-center">
                          <div className="w-full h-[20%] bg-[#4CBB7F] rounded-md"></div>
                        </span>
                        <span className="w-[16%] flex justify-end font-semibold">
                          5/5
                        </span>
                      </div>
                    </Col>
                    <Col span={12}>
                      <div className="flex pl-5 ">
                        <h2 className="w-[42%]">Location</h2>
                        <span className="w-[42%] flex items-center">
                          <div className="w-full h-[20%] bg-[#4CBB7F] rounded-md"></div>
                        </span>
                        <span className="w-[16%] flex justify-end font-semibold">
                          5/5
                        </span>
                      </div>
                    </Col>
                  </Row>

                  <Row className="my-4">
                    <Col span={12}>
                      <div className="flex pr-5 ">
                        <h2 className="w-[42%]">Check-in</h2>
                        <span className="w-[42%] flex items-center">
                          <div className="w-full h-[20%] bg-[#4CBB7F] rounded-md"></div>
                        </span>
                        <span className="w-[16%] flex justify-end font-semibold">
                          5/5
                        </span>
                      </div>
                    </Col>
                    <Col span={12}>
                      <div className="flex pl-5 ">
                        <h2 className="w-[42%]">Value</h2>
                        <span className="w-[42%] flex items-center">
                          <div className="w-full h-[20%] bg-[#4CBB7F] rounded-md"></div>
                        </span>
                        <span className="w-[16%] flex justify-end font-semibold">
                          5/5
                        </span>
                      </div>
                    </Col>
                  </Row>
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
                  total={params._totalRows}
                  pageSize={params._limit}
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

                    <styled.FormCustoms
                      form={form}
                      onFinish={handleReviewComment}
                    >
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
                    </styled.FormCustoms>
                  </div>
                )}
              </div>
            </div>

            <div className="relative w-1/3 px-3 hidden lg:block">
              <div className="sticky top-0">
                <div className="border-[1px] border-solid border-[#dedede] rounded-3xl p-8 shadow-xl drop-shadow-xl	">
                  <div className="flex justify-between items-center pt-2">
                    <div className="bg-primary text-white px-9 py-5 rounded-[30px] w-1/2 mr-2 text-center font-bold">
                      Book
                    </div>
                    <div className="bg-slate-200 px-9 py-5 rounded-[30px] w-1/2 ml-2 text-center font-bold">
                      Inquiry
                    </div>
                  </div>

                  <div className="flex justify-between">
                    <p className="text-gray py-4">
                      From:
                      <span className="font-bold text-black">
                        ${hotelItem?.price}
                      </span>
                      / night
                    </p>
                    <div className="flex py-4">
                      <img className="w-4" src={star} alt="" />
                      <span className="font-bold mx-2">{hotelItem?.star}</span>
                      <p className="text-gray">(3 reviews)</p>
                    </div>
                  </div>

                  <div className="border-[1px] border-solid border-[#dedede] rounded-2xl mt-2 ">
                    <div className="flex ">
                      <div className="pl-5 py-5 w-1/2">
                        <h2 className="font-medium">Check In</h2>
                        <p className="text-gray">05/14/2023</p>
                      </div>
                      <div className="border-l-[1px] border-solid border-[#dedede] pl-5 py-5 w-1/2">
                        <h2 className="font-medium">Check Out</h2>
                        <p className="text-gray">05/15/2023</p>
                      </div>
                    </div>
                    <div className="border-t-[1px] border-solid border-[#dedede] rounded-b-2xl w-full p-5">
                      <h2 className="font-medium">Guests</h2>
                      <p className="text-gray">Add guests and rooms</p>
                    </div>
                  </div>

                  <div className="bg-primary text-white px-9 py-5 rounded-[30px] w-full mr-2 text-center font-bold mt-8">
                    Check availability
                  </div>
                </div>

                <div className="mt-[30px]">
                  <img
                    className="rounded-2xl"
                    src={hotelItem?.images.slice(4, 5)}
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
                slidesPerView: 4,
                spaceBetween: 24,
              },
              1366: {
                slidesPerView: 4,
                spaceBetween: 24,
              },
            }}
          >
            {products.slice(0, 8).map((item) => (
              <SwiperSlide key={item.id}>
                <Card item={item} />
              </SwiperSlide>
            ))}
          </styled.SwiperCustom>
        </div>

        {/* <Price>
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
        </Price> */}
      </div>
    </>
  );
}
