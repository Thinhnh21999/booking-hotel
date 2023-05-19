import star from "../../assets/svgs/star.svg";
import size from "../../assets/svgs/size.svg";
import bed from "../../assets/svgs/bed.svg";
import adults from "../../assets/svgs/adults.svg";
import child from "../../assets/svgs/child.svg";
import share from "../../assets/svgs/share.svg";
import airport from "../../assets/svgs/airport.svg";
import fitness from "../../assets/svgs/fitness.svg";
import heater from "../../assets/svgs/heater.svg";
import wifi from "../../assets/svgs/wifi.svg";
import restaurant from "../../assets/svgs/restaurant.svg";
import spa from "../../assets/svgs/spa.svg";
import washer from "../../assets/svgs/Washer&Dryer.svg";
import location from "../../assets/svgs/location.svg";

import { Contact, Heading, NavBar, Content } from "./style";
import { Col, DatePicker, Row } from "antd";
import "antd/dist/antd";
import { Title } from "../hotelDetail/style";
import ButtonShare from "../buttonShare";
const { RangePicker } = DatePicker;
export default function Zoom_Detail() {
  return (
    <div>
      <Title className="border-y-[1px] border-gray border-slate-100">
        <ul className="list-none flex py-5">
          <li className="text-primary cursor-pointer font-semibold">Home</li>
          <li className="px-5 text-primary cursor-pointer font-semibold">
            United States
          </li>
          <li className="px-5 text-primary cursor-pointer font-semibold">
            Redac Gateway Hotel
          </li>
          <li className="text-gray px-5">Standard Room</li>
        </ul>
      </Title>

      <Heading className="flex justify-between mt-10 mb-6">
        <div>
          <h1 className="font-bold text-4xl">Standard Room</h1>
          <div className="flex mt-4">
            <img className="w-4 mr-2" src={location} alt="" />
            <span className="text-gray">Wilmington</span>
          </div>
        </div>
        <ButtonShare />
        
      </Heading>
      <div className="flex">
        <Col className="w-1/3 my-2" md={8} xs={24}>
          <img
            className="w-full h-full rounded-2xl"
            src="https://modtel.travelerwp.com/wp-content/uploads/2022/04/Premier-Inn-Dubai-Barsha-Heights.png"
            alt=""
          />
        </Col>
        <Col className="w-1/3" md={8} xs={0}>
          <Row className="m-2">
            <img
              className="rounded-2xl"
              src="https://modtel.travelerwp.com/wp-content/uploads/2022/04/Premier-Inn-Dubai-Barsha-Heights-5.png"
              alt=""
            />
          </Row>
          <Row className="m-2 ">
            <img
              className="rounded-2xl"
              src="https://modtel.travelerwp.com/wp-content/uploads/2022/04/Premier-Inn-Dubai-Barsha-Heights-4.png"
              alt=""
            />
          </Row>
        </Col>
        <Col className="w-1/3" md={8} xs={0}>
          <Row className="m-2">
            <img
              className="rounded-2xl"
              src="https://modtel.travelerwp.com/wp-content/uploads/2022/04/Premier-Inn-Dubai-Barsha-Heights-3.png"
              alt=""
            />
          </Row>
          <Row className="m-2">
            <img
              className="rounded-2xl"
              src="https://modtel.travelerwp.com/wp-content/uploads/2022/04/Premier-Inn-Dubai-Barsha-Heights-2.png"
              alt=""
            />
          </Row>
        </Col>
      </div>
      <div className="flex pt-14">
        <Content className="w-2/3 px-3">
          <div className="flex">
            <div className="flex mx-2">
              <div className="border-[1px] border-solid rounded-xl border-gray-300 shadow-xl shadow-grey w-11 h-11 p-2 flex item-center ">
                <img className="" src={size} alt="" />
              </div>
              <p className="ml-3 items-center flex">S: 170m²</p>
            </div>
            <div className="flex mx-2">
              <div className="border-[1px] border-solid rounded-xl border-gray-300 shadow-xl shadow-grey w-11 h-11 p-2 flex item-center ">
                <img className="" src={bed} alt="" />
              </div>
              <p className="ml-3 items-center flex">Bed: 2</p>
            </div>
            <div className="flex mx-2">
              <div className="border-[1px] border-solid rounded-xl border-gray-300 shadow-xl shadow-grey w-11 h-11 p-2 flex item-center ">
                <img className="" src={adults} alt="" />
              </div>
              <p className="ml-3 items-center flex">Adults: 3</p>
            </div>
            <div className="flex mx-2">
              <div className="border-[1px] border-solid rounded-xl border-gray-300 shadow-xl shadow-grey w-11 h-11 p-2 flex item-center ">
                <img className="" src={child} alt="" />
              </div>
              <p className="ml-3 items-center flex">Children: 1</p>
            </div>
          </div>
          <hr className="my-10 text-slate-200"></hr>
          <div>
            <h2 className="text-3xl font-semibold mb-10">About this zoom</h2>
            <p className="text-base text-[#5e6d77]">
              Standard Room comprises of 1 Double Bed or 2 Twin Beds, 2 Bedside
              Tables, a Desk & Chair. The room is furnished with wall to wall
              carpeting, trendy furnishings and a balcony.
            </p>
            <p className="text-base text-[#5e6d77] my-5">
              Our ultramodern glass bathroom is equipped with hairdryer,
              magnifying shaving and make up mirror as well as all the amenities
              you could possible need during your stay.
            </p>
            <p className="text-base text-[#5e6d77]">
              A Complimentary Bottle of Wine, Fresh Fruit and Mineral Water, are
              provided on arrival. Electric current: 220 Volts. Smoking rooms &
              inter-connecting rooms are also available.
            </p>
          </div>
          <hr className="my-10 text-slate-200"></hr>
          <div>
            <h2 className="text-2xl font-bold mb-10">Zoom Facilities</h2>
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
            <h2 className="text-2xl font-bold mb-10">Rates & availability</h2>
            <div>
              <RangePicker className="w-full" size="large"></RangePicker>
            </div>
            
          </div>
          <hr className="my-10 text-slate-200"></hr>
          <Contact className="mb-10">
            <div className="border-[1px] border-solid border-slate-300 rounded-2xl py-10 mt-10">
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
          </Contact>
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
                From: <span className="font-bold text-black">$136.00</span> /
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
                  <h2 className="font-medium">Check In</h2>
                  <p className="text-gray">05/14/2023</p>
                </div>
                <div className="border-l-[1px] border-solid border-slate-300 pl-5 py-5 w-1/2">
                  <h2 className="font-medium">Check Out</h2>
                  <p className="text-gray">05/15/2023</p>
                </div>
              </div>
              <div className="border-t-[1px] border-solid border-slate-300 rounded-b-2xl w-full p-5">
                <h2 className="font-medium">Guests</h2>
                <p className="text-gray">Add guests and rooms</p>
              </div>
              <div>
                <p className="text-gray">Guest Name *</p>
              </div>
            </div>
            <div className="bg-primary text-white px-9 py-5 rounded-[30px] w-full mr-2 text-center font-bold mt-8">
              Check availability
            </div>
          </div>

          <div className="border-[1px] border-solid border-slate-300 rounded-2xl py-10 mt-10">
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
        </NavBar>
      </div>
    </div>
  );
}
