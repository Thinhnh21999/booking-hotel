import { useState, useRef, useEffect } from "react";
import { Rate, Form, Input } from "antd";
import moment from "moment/moment";

import * as styled from "./styled.js";
import { useClickOutside } from "../../until/clickOutside";

export default function Booking(props) {
  const {
    dates,
    setDates,
    checkIn,
    checkOut,
    totalPrice,
    numberRooms,
    formBookRoom,
    numberAdults,
    numberOffNight,
    setNumberRooms,
    setNumberAdults,
    numberChildren,
    setNumberChildren,
  } = props;
  const [openTwo, setOpenTwo] = useState(false);
  const [openGuests, setOpenGuests] = useState(false);
  const refGuests = useRef();
  const refCalendar = useRef();

  const handleGuestsClickOutside = () => {
    setOpenGuests(false);
  };

  const handleCalendarClickOutside = () => {
    setOpenTwo(false);
  };

  useClickOutside(refGuests, handleGuestsClickOutside);
  useClickOutside(refCalendar, handleCalendarClickOutside);

  useEffect(() => {
    formBookRoom?.setFieldsValue({
      checkIn: checkIn,
      checkOut: checkOut,
      numberRooms: numberRooms,
      numberAdults: numberAdults,
      numberChildren: numberChildren,
      totalPrice: totalPrice,
      numberOffNight: numberOffNight,
    });
  }, [
    checkIn,
    checkOut,
    numberAdults,
    numberChildren,
    numberRooms,
    totalPrice,
    numberOffNight,
  ]);

  return (
    <div className="border-[1px] border-solid border-[#dedede] rounded-2xl mt-2 ">
      <div ref={refCalendar} className="relative">
        <div
          onClick={() => setOpenTwo(!openTwo)}
          className="flex cursor-pointer"
        >
          <div className="pl-5 py-5 w-1/2">
            <h2 className="font-medium">Check In</h2>
            <Form.Item style={{ margin: "0" }} name="checkIn">
              <p className="text-gray">
                {checkIn ? moment(checkIn).format("DD/MM/YYYY") : "Add date"}
              </p>
            </Form.Item>
          </div>
          <div className="border-l-[1px] border-solid border-[#dedede] pl-5 py-5 w-1/2">
            <h2 className="font-medium">Check Out</h2>
            <Form.Item style={{ margin: "0" }} name="checkOut">
              <p className="text-gray">
                {checkOut ? moment(checkOut).format("DD/MM/YYYY") : "Add date"}
              </p>
            </Form.Item>
          </div>
        </div>
        {openTwo && (
          <styled.DateRangePickerCustom
            onChange={(item) => setDates([item.selection])}
            showSelectionPreview={true}
            moveRangeOnFirstSelection={false}
            months={2}
            minDate={moment().toDate()}
            ranges={dates}
            direction="horizontal"
          />
        )}
      </div>

      <div ref={refGuests} className="relative">
        <div
          onClick={() => setOpenGuests(!openGuests)}
          className="border-t-[1px] border-solid border-[#dedede] rounded-b-2xl w-full p-5 cursor-pointer"
        >
          <h2 className="font-medium">Guests</h2>
          <div className="flex items-center">
            <Form.Item style={{ margin: "0" }} name="numberRooms">
              <span className="text-gray">{numberRooms} room,</span>
            </Form.Item>
            <Form.Item
              style={{ margin: "0", display: "none" }}
              name="numberAdults"
            >
              <span>{numberAdults}</span>
            </Form.Item>
            <Form.Item
              style={{ margin: "0", display: "none" }}
              name="numberChildren"
            >
              <span>{numberChildren}</span>
            </Form.Item>
            <span className="text-gray ml-1">
              {numberAdults + numberChildren} guest
            </span>
          </div>
        </div>

        {openGuests && (
          <div className="absolute bg-white top-0 left-0 translate-y-[82px] z-[999] w-full p-[30px] mt-5 border-line shadow-custom rounded-2xl">
            <ul className="text-left max-h-[333px] scroll-smooth overflow-auto">
              <li className="flex justify-between pe-[30px] ps-[20px] mb-5 pb-5 border-bottom">
                <span className="block font-medium hover">Rooms</span>
                <div className="center">
                  <span
                    onClick={() => {
                      if (numberRooms > 1) {
                        setNumberRooms(numberRooms - 1);
                      }
                    }}
                    className="w-[32px] h-[32px] cursor-pointer text-xl text-center border border-solid border-[#5E6D77] rounded-[50%]"
                  >
                    -
                  </span>
                  <p className="mx-2">{numberRooms}</p>
                  <span
                    onClick={() => {
                      setNumberRooms(numberRooms + 1);
                    }}
                    className="w-[32px] h-[32px] cursor-pointer text-xl text-center border border-solid border-[#5E6D77] rounded-[50%]"
                  >
                    +
                  </span>
                </div>
              </li>
              <li className="flex justify-between pe-[30px] ps-[20px] mb-5 pb-5 border-bottom">
                <span className="block font-medium hover">Adults</span>
                <div className="center">
                  <span
                    onClick={() => {
                      numberAdults > 1 && setNumberAdults(numberAdults - 1);
                    }}
                    className="w-[32px] h-[32px] cursor-pointer text-xl text-center border border-solid border-[#5E6D77] rounded-[50%]"
                  >
                    -
                  </span>
                  <p className="mx-2">{numberAdults}</p>
                  <span
                    onClick={() => {
                      setNumberAdults(numberAdults + 1);
                    }}
                    className="w-[32px] h-[32px] cursor-pointer text-xl text-center border border-solid border-[#5E6D77] rounded-[50%]"
                  >
                    +
                  </span>
                </div>
              </li>
              <li className="flex justify-between pe-[30px] ps-[20px]">
                <span className="block font-medium hover">Children</span>
                <div className="center">
                  <span
                    onClick={() => {
                      numberChildren > 0 &&
                        setNumberChildren(numberChildren - 1);
                    }}
                    className="w-[32px] h-[32px] cursor-pointer text-xl text-center border border-solid border-[#5E6D77] rounded-[50%]"
                  >
                    -
                  </span>

                  <p className="mx-2">{numberChildren}</p>
                  <span
                    onClick={() => {
                      setNumberChildren(numberChildren + 1);
                    }}
                    className="w-[32px] h-[32px] cursor-pointer text-xl text-center border border-solid border-[#5E6D77] rounded-[50%]"
                  >
                    +
                  </span>
                </div>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
