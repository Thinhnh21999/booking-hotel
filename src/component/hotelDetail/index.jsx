import star from "../../assets/svgs/star.svg";
import heart from "../../assets/svgs/heart.svg";
import arrow_down_white from "../../assets/svgs/arrowDownWhite.svg";

import airport from "../../assets/svgs/airport.svg";
import fitness from "../../assets/svgs/fitness.svg";
import heater from "../../assets/svgs/heater.svg";
import wifi from "../../assets/svgs/wifi.svg";
import restaurant from "../../assets/svgs/restaurant.svg";
import spa from "../../assets/svgs/spa.svg";
import washer from "../../assets/svgs/Washer&Dryer.svg";

import { Col, Row } from "antd";

import About from "../cardAbout";
import Feedback from "../feedback";
import { Content } from "antd/es/layout/layout";
import { NavBar, Title } from "./style.js";
import Button from "../buttonShare/index";

import React from "react";
import { Rate } from "antd";
import { useEffect, useState } from "react";
import RestClient from "../../services/restClientUser.js";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";

export default function Redac_Gateway_Hotel() {
  const params = useParams();
  const [data, setData] = useState([]);

  useEffect(() => {
    RestClient("get", `/hotel/${params.id}?`).then((res) => setData(res));
  }, []);
  return (
    <div>
      <Title className="border-y-[1px] border-gray border-slate-100 ">
        <ul className="list-none flex py-5">
          <li className="text-primary cursor-pointer font-semibold">Home</li>
          <li className="px-10 text-primary cursor-pointer font-semibold">
            United States
          </li>
          <li className="text-gray">{data.nameHotel}</li>
        </ul>
      </Title>
      <div className="flex mx-2">
        <Col className="w-1/3 my-2" md={8} xs={24}>
          <img
            className="w-full h-full rounded-2xl"
            src="https://modtel.travelerwp.com/wp-content/uploads/2022/04/Bar-on-property-1-1.png"
            alt=""
          />
        </Col>
        <Col className="w-1/3" md={8} xs={0}>
          <Row className="m-2">
            <img
              className="rounded-2xl"
              src="https://modtel.travelerwp.com/wp-content/uploads/2022/04/Bar-on-property-2-1.png"
              alt=""
            />
          </Row>
          <Row className="m-2 ">
            <img
              className="rounded-2xl"
              src="https://modtel.travelerwp.com/wp-content/uploads/2022/04/Fitness-facility-4.png"
              alt=""
            />
          </Row>
        </Col>
        <Col className="w-1/3" md={8} xs={0}>
          <Row className="m-2">
            <img
              className="rounded-2xl"
              src="https://modtel.travelerwp.com/wp-content/uploads/2022/04/Bar-on-property-4.png"
              alt=""
            />
          </Row>
          <Row className="m-2">
            <img
              className="rounded-2xl"
              src="https://modtel.travelerwp.com/wp-content/uploads/2022/04/Reception.png"
              alt=""
            />
          </Row>
        </Col>
      </div>
      <Title className="flex">
        <Content className="w-2/3 px-3">
          <div className="flex justify-between flex-wrap">
            <div>
              <div>
                <Rate disabled defaultValue={data.rate.star} />
              </div>
              <h1 className="text-4xl font-bold">{data.nameHotel}</h1>
              <div className="flex my-2">
                <div className="text-primary font-bold border-solid border-[1px] border-primary pg-[#F9FBFF] rounded-md px-2 py-[1px]">
                  5 <span>/</span> 5
                </div>
                <span className="font-bold px-4">{data.rate.text}</span>
                <p className="text-primary">(3 Reviews)</p>
                <span className="text-gray pl-5">{data.location}</span>
              </div>
            </div>
            <div className="flex items-center">
              <Button />
              <div className="w-10 h-10 ml-3 border-[1px] border-solid  border-slate-200 rounded-full shadow-lg shadow-slate-100 text-center">
                <img className="w-6 inline-block pt-2" src={heart} alt="" />
              </div>
            </div>
          </div>
          <hr className="my-10 text-slate-200"></hr>
          <div>
            <h2 className="text-4xl font-semibold mb-10">About this hotel</h2>
            <p className="text-base text-[#5e6d77]">
              Nestled in the heart of Torrance, Redac Gateway Hotel in Torrance
              is an ideal spot from which to discover Los Angeles (CA). From
              here, guests can enjoy easy access to all that the lively city has
              to offer. With its convenient location, the hotel offers easy
              access to the city’s must-see destinations.
            </p>
            <p className="text-base text-[#5e6d77] my-5">
              At Redac Gateway Hotel in Torrance, the excellent service and
              superior facilities make for an unforgettable stay. Guests of the
              hotel can enjoy on-site features like free Wi-Fi in all rooms,
              24-hour front desk, facilities for disabled guests, express
              check-in/check-out, luggage storage.
            </p>
            <p className="text-base text-[#5e6d77]">
              Experience high quality room facilities during your stay here.
              Some rooms include television LCD/plasma screen, carpeting,
              linens, mirror, sofa, provided to help guests recharge after a
              long day. Besides, the hotel’s host of recreational offerings
              ensures you have plenty to do during your stay. Redac Gateway
              Hotel in Torrance is an ideal place of stay for travelers seeking
              charm, comfort and convenience in Los Angeles (CA).
            </p>
          </div>
          <hr className="my-10 text-slate-200"></hr>
          <div>
            <h2 className="text-3xl font-bold mb-10">Hotel Facilities</h2>
            <Row>
              <Col className="text-gray pb-3 pl-3" md={8} sm={12} xs={24}>
                <div className="flex items-center">
                  <img className="w-7 mr-5" src={airport} alt="" />
                  <p>AirPort TransPort</p>
                </div>
              </Col>
              <Col className="text-gray pb-3 pl-3" md={8} sm={12} xs={24}>
                <div className="flex items-center">
                  <img className="w-7 mr-5" src={fitness} alt="" />
                  <p>Fitness Center</p>
                </div>
              </Col>
              <Col className="text-gray pb-3 pl-3" md={8} sm={12} xs={24}>
                <div className="flex items-center">
                  <img className="w-7 mr-5" src={heater} alt="" />
                  <p>Heater</p>
                </div>
              </Col>
              <Col className="text-gray pb-3 pl-3" md={8} sm={12} xs={24}>
                <div className="flex items-center">
                  <img className="w-7 mr-5" src={wifi} alt="" />
                  <p>Internet-Wifi</p>
                </div>
              </Col>
              <Col className="text-gray pb-3 pl-3" md={8} sm={12} xs={24}>
                <div className="flex items-center">
                  <img className="w-7 mr-5" src={restaurant} alt="" />
                  <p>Restaurant</p>
                </div>
              </Col>
              <Col className="text-gray pb-3 pl-3" md={8} sm={12} xs={24}>
                <div className="flex items-center">
                  <img className="w-7 mr-5" src={spa} alt="" />
                  <p>Spa & Sauna</p>
                </div>
              </Col>
              <Col className="text-gray pb-3 pl-3" md={8} sm={12} xs={24}>
                <div className="flex items-center">
                  <img className="w-7 mr-5" src={washer} alt="" />
                  <p>Washer & Dryer</p>
                </div>
              </Col>
            </Row>
          </div>
          <hr className="my-10 text-slate-200"></hr>
          <div>
            <h2 className="text-3xl font-bold mb-10">Rules</h2>
            <Row className="my-5">
              <Col className="text-gray" span={8}>
                Check In
              </Col>
              <Col className="text-gray" span={8}>
                12:00 pm
              </Col>
            </Row>
            <Row className="my-5">
              <Col className="text-gray" span={8}>
                Check Out
              </Col>
              <Col className="text-gray" span={8}>
                12:00 pm
              </Col>
            </Row>
          </div>
          <hr className="my-10 text-slate-200"></hr>
          <div>
            <h2 className="text-3xl font-bold mb-7">Availability</h2>
            <About />
          </div>
          <hr className="my-10 text-slate-200"></hr>
          <div className="bg-[#FCFCFC]">
            <h2 className="text-3xl font-bold mb-7">Reviews</h2>
            <div className="border-[1px] border-solid border-slate-400 rounded-3xl p-8">
              <div className="flex my-2">
                <img className="w-4" src={star} alt="" />
                <div className="ml-3 font-bold text-lg">
                  5 <span>/</span> 5
                </div>
                <span className="font-bold px-4 text-lg">Excellent</span>
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
          <p className="my-10 text-slate-400 text-base text-center">
            3 reviews on this Hotel - Showing 1 to 3
          </p>
          <hr className="my-10 text-slate-200"></hr>
          <Feedback />
          <hr className="my-10 text-slate-200"></hr>
          <Feedback />
          <hr className="my-10 text-slate-200"></hr>
          <Feedback />
          <div className="bg-primary mt-5 text-white px-5 py-3 rounded-[30px] w-[25%] text-center font-bold flex justify-between">
            Write a review
            <img className="w-4 ml-2" src={arrow_down_white} alt="" />
          </div>
          <hr className="my-10 text-slate-200"></hr>
          <div>
            <h2 className="text-3xl font-bold mb-8">Explore other options</h2>
          </div>
        </Content>
        <NavBar className="w-1/3 px-3">
          <div className="border-[1px] border-solid border-slate-400 rounded-3xl p-8 shadow-xl drop-shadow-xl	">
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
                From:{" "}
                <span className="font-bold text-black">${data.price}</span> /
                night
              </p>
              <div className="flex py-4">
                <img className="w-4 " src={star} alt="" />
                <span className="font-bold mx-2">5</span>
                <p className="text-gray">(3 reviews)</p>
              </div>
            </div>
            <div className="border-[1px] border-solid border-slate-300 rounded-2xl mt-2 ">
              <div className="flex ">
                <div className="border-r-[1px] border-solid border-slate-300 pl-5 py-5 w-1/2">
                  <h2 className="font-semibold">Check In</h2>
                  <p>05/14/2023</p>
                </div>
                <div className="border-l-[1px] border-solid border-slate-300 pl-5 py-5 w-1/2">
                  <h2 className="font-semibold">Check Out</h2>
                  <p>05/15/2023</p>
                </div>
              </div>
              <div className="border-t-[1px] border-solid border-slate-300 rounded-b-2xl w-full p-5">
                <h2 className="font-semibold">Guests</h2>
                <p>Add guests and rooms</p>
              </div>
            </div>
            <div className="bg-primary text-white px-9 py-5 rounded-[30px] w-full mr-2 text-center font-bold mt-8">
              Check availability
            </div>
          </div>
          <div className="">
            <img
              className="rounded-2xl my-10"
              src="https://modtel.travelerwp.com/wp-content/uploads/2022/04/feature-18.png"
              alt=""
            />
          </div>
          <div className="relative rounded-2xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d251637.95196238213!2d105.6189045!3d9.779349!3m2!1i1024!2i768!4f13.1!5e0!3m2!1svi!2s!4v1683879382654!5m2!1svi!2s"
              frameborder="0"
              className="w-full h-[300px] border-0 rounded-2xl"
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
            <p className="absolute bottom-2 cursor-pointer bg-white text-primary m-3 border-2 border-solid border-stone-300 ml-[40%] py-3 px-4 font-semibold rounded-3xl">
              View in a map
            </p>
          </div>
          <div className="border-[1px] border-solid border-slate-300 rounded-2xl py-10">
            <div className="flex justify-center items-center">
              <img
                className="rounded-full cursor-pointer "
                src="https://modtel.travelerwp.com/wp-content/uploads/2022/04/32.jpg"
                alt=""
              />
            </div>
            <p className="cursor-pointer text-bold text-center py-3">modtel</p>
            <p className="text-gray text-center ">Member Since 2022</p>
          </div>
          <div className="mt-10 border-[1px] border-solid border-slate-300 rounded-2xl p-10">
            <h2 className="text-3xl font-bold mb-7">Information Contact</h2>
            <h3 className="text-semibold py-2">Email</h3>
            <p className="text-gray ">contact@travelerwp.com</p>

            <h3 className="text-semibold py-2">Website</h3>
            <p className="text-gray ">ctravelerwp.com</p>

            <h3 className="text-semibold py-2">Phone</h3>
            <p className="text-gray ">+6580009999</p>

            <h3 className="text-semibold py-2">Fax</h3>
            <p className="text-gray ">+123456789</p>
          </div>
        </NavBar>
      </Title>
    </div>
  );
}
