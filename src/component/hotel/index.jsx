import React from "react";
import { Rate } from "antd";
import { Link, useParams } from "react-router-dom/cjs/react-router-dom.min";

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
import Button from "../buttonShare/index";

export default function Hotel(props) {
  const { products, id } = props;

  return (
    <>
      <div className="py-5 border-bottom">
        <div className="lg:container lg:mx-auto px-5">
          <ul className="flex items-center justify-start">
            <li className="relative pr-5">
              <Link to="/" className="text-primary ">
                Home
              </Link>
              <div className="absolute top-[50%] right-0 w-1 h-1 bg-[#EAEEF3] z-10"></div>
            </li>

            <li className="ml-5">
              <span>Checkout Modal</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="block px-5 h-[630px] mt-10">
        <Link
          className="md:w-1/3 w-full h-full md:inline-block block float-left"
          to="https://modtel.travelerwp.com/wp-content/uploads/2022/04/Bar-on-property-1-1.png"
        >
          <img
            className="w-full h-full md:rounded-bl-2xl md:rounded-tl-2xl md:rounded-br-none md:rounded-tr-none rounded-br-2xl rounded-tr-2xl object-cover pe-[5px]"
            src="https://modtel.travelerwp.com/wp-content/uploads/2022/04/Bar-on-property-1-1.png"
            alt=""
          />
        </Link>

        <Link
          className="w-1/3 h-[50%] px-[5px] pb-[5px] md:inline-block hidden float-left"
          to="https://modtel.travelerwp.com/wp-content/uploads/2022/04/Bar-on-property-2-1.png"
        >
          <img
            className="w-full h-full"
            src="https://modtel.travelerwp.com/wp-content/uploads/2022/04/Bar-on-property-2-1.png"
            alt=""
          />
        </Link>

        <Link
          className="w-1/3 px-[5px] h-[50%] pb-[5px] md:inline-block hidden float-left"
          to="https://modtel.travelerwp.com/wp-content/uploads/2022/04/Fitness-facility-4.png"
        >
          <img
            className="w-full h-full rounded-tr-2xl"
            src="https://modtel.travelerwp.com/wp-content/uploads/2022/04/Fitness-facility-4.png"
            alt=""
          />
        </Link>

        <Link
          to=""
          className="w-1/3 h-[50%] px-[5px] pt-[5px] md:inline-block hidden float-left"
        >
          <img
            className="w-full h-full "
            src="https://modtel.travelerwp.com/wp-content/uploads/2022/04/Bar-on-property-4.png"
            alt=""
          />
        </Link>

        <Link
          className="w-1/3 h-[50%] px-[5px] pt-[5px] md:inline-block hidden float-left"
          to=""
        >
          <img
            className="w-full h-full rounded-br-2xl"
            src="https://modtel.travelerwp.com/wp-content/uploads/2022/04/Reception.png"
            alt=""
          />
        </Link>
      </div>

      <div className="mt-12 lg:container lg:mx-auto px-5">
        <div className="flex mx-[-12px]">
          <div className="lg:w-2/3 w-full px-3">
            <div className="flex justify-between flex-wrap">
              <div>
                <div>
                  <Rate disabled defaultValue={products.star} />
                </div>
                <h1 className="text-4xl font-bold">{products.nameHotel}</h1>
                <div className="flex my-2">
                  <div className="text-primary font-bold border-solid border-[1px] border-primary pg-[#F9FBFF] rounded-md px-2 py-[1px]">
                    5 <span>/</span> 5
                  </div>
                  <span className="font-bold px-4">{products.text}</span>
                  <p className="text-primary">(3 Reviews)</p>
                  <span className="text-gray pl-5">{products.location}</span>
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
              <h2 className="text-3xl font-semibold mb-10">About this hotel</h2>
              <p className="text-base text-[#5e6d77]">
                Nestled in the heart of Torrance, Redac Gateway Hotel in
                Torrance is an ideal spot from which to discover Los Angeles
                (CA). From here, guests can enjoy easy access to all that the
                lively city has to offer. With its convenient location, the
                hotel offers easy access to the city’s must-see destinations.
              </p>
              <p className="text-base text-[#5e6d77] my-5">
                At Redac Gateway Hotel in Torrance, the excellent service and
                superior facilities make for an unforgettable stay. Guests of
                the hotel can enjoy on-site features like free Wi-Fi in all
                rooms, 24-hour front desk, facilities for disabled guests,
                express check-in/check-out, luggage storage.
              </p>
              <p className="text-base text-[#5e6d77]">
                Experience high quality room facilities during your stay here.
                Some rooms include television LCD/plasma screen, carpeting,
                linens, mirror, sofa, provided to help guests recharge after a
                long day. Besides, the hotel’s host of recreational offerings
                ensures you have plenty to do during your stay. Redac Gateway
                Hotel in Torrance is an ideal place of stay for travelers
                seeking charm, comfort and convenience in Los Angeles (CA).
              </p>
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
                      ${products.price}
                    </span>
                    / night
                  </p>
                  <div className="flex py-4">
                    <img className="w-4 " src={star} alt="" />
                    <span className="font-bold mx-2">5</span>
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
                  src="https://modtel.travelerwp.com/wp-content/uploads/2022/04/feature-18.png"
                  alt=""
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
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
