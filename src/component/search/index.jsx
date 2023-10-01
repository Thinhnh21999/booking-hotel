import { useEffect, useMemo, useRef, useState } from "react";
import React, { Component } from "react";
import { Form, Input, Button } from "antd";
import { DateRangePicker } from "react-date-range";
import { addDays } from "date-fns";
import moment from "moment";
import { useClickOutside } from "../../until/clickOutside";
import {
  clearLocalCheckIn,
  clearLocalLogin,
  getLocalCheckIn,
  setLocalCheckIn,
} from "../../until/local/local";
import {
  useHistory,
  useLocation,
} from "react-router-dom/cjs/react-router-dom.min";

import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import "react-responsive-calendar-picker/dist/index.css";
import MapSvg from "../../assets/svgs/map.svg";
import ArrowSvg from "../../assets/svgs/arrowRight.svg";
import CalendarSvg from "../../assets/svgs/calendar.svg";
import UsersSvg from "../../assets/svgs/users.svg";
import { SearchOutlined } from "@ant-design/icons";
import * as styled from "./style.js";
import { useDispatch } from "react-redux";
import { setLoading } from "../../redux/slice/loadingSlice";
import { getHotelSaga } from "../../redux/slice/hotelSlice";

export default function Search(props) {
  const localCheckIn = getLocalCheckIn();
  const checkIn = getLocalCheckIn()?.checkIn;
  const checkOut = getLocalCheckIn()?.checkOut;

  // custom ngày giờ để có thể tính được thời gian offNight
  const numberOffNight = useMemo(() => {
    return moment(checkOut).diff(moment(checkIn), "days");
  }, [checkIn, checkOut]);

  // custom ngày giờ để tính thòi gian ngày hôm nay đến ngày checkIn
  const daysUntilCheckIn = useMemo(() => {
    const checkInMoment = moment(checkIn, "MM/DD/YYYY").startOf("day");
    const currentMoment = moment().startOf("day");
    return moment(checkInMoment).diff(currentMoment, "days");
  }, [checkIn]);

  const [dates, setDates] = useState([
    {
      startDate: checkIn ? new Date(checkIn) : new Date(),
      endDate: addDays(
        new Date(),
        numberOffNight || daysUntilCheckIn > 0
          ? numberOffNight + daysUntilCheckIn
          : 1
      ),
      key: "selection",
    },
  ]);
  const objDates = Object.assign({}, ...dates);
  const [isOpen, setIsOpen] = useState({
    isOpenSearch: false,
    isOpenGuests: false,
    isOpenCalendar: false,
  });
  const locationOption = [
    {
      name: "California",
    },
    {
      name: "Los Angeles",
    },
    {
      name: "Nevada",
    },
    {
      name: "New jersey",
      children: ["Delaware", "Philadelphia"],
    },
    {
      name: "New York City",
    },
    {
      name: "San Francisco",
      children: ["Wilmington"],
    },
    {
      name: "Virginia",
      children: ["Virginia Beach"],
    },
  ];
  const [isLocation, setIsLocation] = useState(locationOption);
  const [currentInput, setCurrentInput] = useState(() =>
    localCheckIn?.location ? localCheckIn?.location : ""
  );
  const [isNumberRooms, setIsNumberRooms] = useState(() =>
    localCheckIn?.numberRooms > 0 ? localCheckIn?.numberRooms : 1
  );
  const [isNumberAdults, setIsNumberAdults] = useState(() =>
    localCheckIn?.numberAdults > 0 ? localCheckIn?.numberAdults : 1
  );
  const [isNumberChildren, setIsNumberChildren] = useState(() =>
    localCheckIn?.numberChildren > 0 ? localCheckIn?.numberChildren : 0
  );
  const [form] = Form.useForm();
  const refSearch = useRef();
  const refGuests = useRef();
  const refCalendar = useRef();
  const history = useHistory();
  const location = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    // Kiểm tra nếu biến state đã thay đổi (ví dụ: sau khi nhận được dữ liệu từ nguồn khác),
    // thì mới cập nhật giá trị của các trường trong biểu mẫu.
    form.setFieldsValue({
      checkIn: moment(objDates.startDate, "ddd MMM DD YYYY").format(
        "MM/DD/YYYY"
      ),
      checkOut: moment(objDates.endDate, "ddd MMM DD YYYY").format(
        "MM/DD/YYYY"
      ),
      location: currentInput,
      numberRooms: isNumberRooms,
      numberAdults: isNumberAdults,
      numberChildren: isNumberChildren,
    });
  }, [objDates, currentInput, isNumberRooms, isNumberAdults, isNumberChildren]);

  const handleCalendarClickOutside = () => {
    setIsOpen((prevState) => ({
      ...prevState,
      isOpenCalendar: false,
    }));
    console.log(refCalendar);
  };

  // dùng ...prevState để đảm bảo isOpen ko bị ghi đè
  const handleSearchClickOutside = () => {
    setIsOpen((prevState) => ({
      ...prevState,
      isOpenSearch: false,
    }));
  };

  const handleGuestsClickOutside = () => {
    setIsOpen((prevState) => ({
      ...prevState,
      isOpenGuests: false,
    }));
  };

  useClickOutside(refSearch, handleSearchClickOutside);
  useClickOutside(refGuests, handleGuestsClickOutside);
  useClickOutside(refCalendar, handleCalendarClickOutside);

  const handleSearchInput = (e) => {
    const value = e.target.value.toLowerCase();

    const searchLocation = locationOption.filter((item) => {
      const nameLocation = item.name.toLowerCase();
      const childrenLocation = item.children?.map((child) =>
        child.toLowerCase()
      );
      return (
        nameLocation.includes(value) ||
        (childrenLocation && childrenLocation.includes(value))
      );
    });

    setIsLocation(searchLocation);
    setCurrentInput(value);
  };

  const handleValueInput = (value) => {
    setCurrentInput(value);
    setIsOpen({ ...isOpen, isOpenSearch: false });
  };

  const handleOnFinishSearch = async (e) => {
    try {
      setLocalCheckIn(e);
      if (location.pathname !== "/listing") {
        history.push("/listing");
        dispatch(setLoading(true));

        await dispatch(
          getHotelSaga({
            _page: 1,
            _limit: 12,
            q: getLocalCheckIn()?.location,
          })
        );

        setTimeout(() => {
          dispatch(setLoading(false));
        }, 2000);
      } else {
        dispatch(setLoading(true));
        setIsOpen((prevState) => ({
          ...prevState,
          isOpenCalendar: false,
        }));

        await dispatch(
          getHotelSaga({
            _page: 1,
            _limit: 12,
            q: getLocalCheckIn()?.location,
          })
        );
        setTimeout(() => {
          dispatch(setLoading(false));
        }, 2000);
      }
    } catch (error) {
      console.log(error);
      dispatch(setLoading(false));
    }
  };

  return (
    <Form
      form={form}
      name="form_item_path"
      onFinish={handleOnFinishSearch}
      className="w-full"
    >
      <div className="relative lg:flex items-center lg:h-[82px] min-h-[82px] bg-white  shadow-custom border border-solid border-[#dedede] z-40 rounded-[24px] lg:rounded-[70px]">
        <div ref={refSearch} className="center w-full h-full lg:w-1/4">
          <div
            onClick={() =>
              setIsOpen({ ...isOpen, isOpenSearch: !isOpen.isOpenSearch })
            }
            className={
              "search-item text-left lg:border-b-0 cursor-pointer" +
              (isOpen.isOpenSearch ? " lg:shadow-custom lg:rounded-full" : "")
            }
          >
            <img className="w-5 mr-4" src={MapSvg} alt=".." />
            <Form.Item className="mb-0" name="location">
              <div className="flex flex-col">
                <span className="font-semibold text-base">Location</span>
                <Input
                  onChange={handleSearchInput}
                  value={currentInput}
                  placeholder="Where are you going?"
                  className="text-p !outline-none !border-0 !shadow-none px-0"
                />
              </div>
            </Form.Item>
          </div>

          <div className="h-5 border-r border-solid border-gray-300 hidden lg:block"></div>

          {isOpen.isOpenSearch && (
            <div className="absolute bg-white top-0 left-0 translate-y-[82px] z-[999] w-full lg:max-w-[360px] py-[30px] px-[10px] mt-4 border-line shadow-custom rounded-2xl">
              <ul className="text-left max-h-[333px] scroll-smooth overflow-auto">
                <li className="pe-[30px] ps-[20px]">
                  <span
                    onClick={() => setCurrentInput("")}
                    className="block font-medium hover pb-5 mb-3 border-bottom"
                  >
                    Popular destinations
                  </span>
                </li>
                <li className="pe-[30px] ps-[20px] py-2">
                  <span
                    onClick={() => setCurrentInput("")}
                    className="block hover text-gray"
                  >
                    United States
                  </span>
                </li>
                {isLocation.map((item) => (
                  <li className="flex flex-col" key={item.name}>
                    <div className="flex pe-[30px] ps-[20px] py-2">
                      <img className="w-5 mr-2" src={MapSvg} alt="..." />
                      <span
                        onClick={() => handleValueInput(item.name)}
                        className="block hover text-gray"
                      >
                        {item.name}
                      </span>
                    </div>
                    {item.children && (
                      <div className="">
                        {item.children.map((child) => (
                          <div
                            className="flex pe-[30px] ps-[40px] py-2"
                            key={child}
                          >
                            <img className="w-5 mr-2" src={MapSvg} alt="..." />
                            <span
                              onClick={() => handleValueInput(child)}
                              className="block hover text-gray"
                            >
                              {child}
                            </span>
                          </div>
                        ))}
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <div ref={refCalendar} className="center relative h-full min-w-[32%]">
          <div
            onClick={() =>
              setIsOpen({ ...isOpen, isOpenCalendar: !isOpen.isOpenCalendar })
            }
            className={
              "search-item lg:border-b-0 items-center cursor-pointer" +
              (isOpen.isOpenCalendar ? " lg:shadow-custom lg:rounded-full" : "")
            }
          >
            <div className="flex lg:px-[30px] mr-auto">
              <img className="w-5 mr-4" src={CalendarSvg} alt=".." />
              <div className="flex flex-col">
                <span className="font-semibold text-base">Checkin</span>
                <span className="text-p">
                  {objDates.startDate
                    ? moment(
                        objDates.startDate.toDateString(),
                        "ddd MMM DD YYYY"
                      ).format("DD/MM/YYYY")
                    : "Add date"}
                </span>
              </div>
            </div>
            <Form.Item name="checkIn" className="hidden">
              <Input
                value={moment(objDates.startDate, "ddd MMM DD YYYY").format(
                  "MM/DD/YYYY"
                )}
              />
            </Form.Item>
            <img className="w-3 mx-7 lg:mx-0" src={ArrowSvg} alt="" />

            <div className="flex lg:px-[30px] mr-auto">
              <img className="w-5 mr-4" src={CalendarSvg} alt=".." />
              <div className="flex flex-col">
                <span className="font-semibold text-base">Checkout</span>
                <span className="text-p">
                  {objDates.endDate
                    ? moment(
                        objDates.endDate.toDateString(),
                        "ddd MMM DD YYYY"
                      ).format("DD/MM/YYYY")
                    : "Add date"}
                </span>
              </div>
            </div>
            <Form.Item name="checkOut" className="hidden">
              <Input
                value={moment(objDates.endDate, "ddd MMM DD YYYY").format(
                  "MM/DD/YYYY"
                )}
              />
            </Form.Item>
          </div>

          <div className="h-5 border-r border-solid border-gray-300 hidden lg:block"></div>

          {isOpen.isOpenCalendar && (
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

        <div ref={refGuests} className="relative w-full h-full lg:max-w-[25%]">
          <div
            onClick={() =>
              setIsOpen({ ...isOpen, isOpenGuests: !isOpen.isOpenGuests })
            }
            className={
              "search-item text-left cursor-pointer lg:border-b-0" +
              (isOpen.isOpenGuests ? " lg:shadow-custom lg:rounded-full" : "")
            }
          >
            <img className="w-5 mr-4" src={UsersSvg} alt=".." />
            <div className="flex flex-col">
              <span className="font-semibold text-base">Guests</span>
              <div>
                <span className="text-p">{isNumberRooms} room</span>,
                <Form.Item name="numberRooms" className="hidden">
                  <Input value={isNumberRooms} />
                </Form.Item>
                <span className="text-p ml-1">
                  {isNumberAdults + isNumberChildren} guest
                </span>
                <Form.Item name="numberAdults" className="hidden">
                  <Input value={isNumberAdults} />
                </Form.Item>
                <Form.Item name="numberChildren" className="hidden">
                  <Input value={isNumberChildren} />
                </Form.Item>
              </div>
            </div>
          </div>

          {isOpen.isOpenGuests && (
            <div className="absolute bg-white top-0 left-0 translate-y-[82px] z-[999] w-full lg:min-w-[320px] p-[30px] mt-4 border-line shadow-custom rounded-2xl">
              <ul className="text-left max-h-[333px] scroll-smooth overflow-auto">
                <li className="flex justify-between pe-[30px] ps-[20px] mb-5 pb-5 border-bottom">
                  <span className="block font-medium hover">Rooms</span>
                  <div className="center">
                    <span
                      onClick={() => {
                        if (isNumberRooms > 1) {
                          setIsNumberRooms(isNumberRooms - 1);
                        }
                      }}
                      className="w-[32px] h-[32px] cursor-pointer text-xl text-center border border-solid border-[#5E6D77] rounded-[50%]"
                    >
                      -
                    </span>
                    <p className="mx-2">{isNumberRooms}</p>
                    <span
                      onClick={() => {
                        setIsNumberRooms(isNumberRooms + 1);
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
                        isNumberAdults > 1 &&
                          setIsNumberAdults(isNumberAdults - 1);
                      }}
                      className="w-[32px] h-[32px] cursor-pointer text-xl text-center border border-solid border-[#5E6D77] rounded-[50%]"
                    >
                      -
                    </span>
                    <p className="mx-2">{isNumberAdults}</p>
                    <span
                      onClick={() => {
                        setIsNumberAdults(isNumberAdults + 1);
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
                        isNumberChildren > 0 &&
                          setIsNumberChildren(isNumberChildren - 1);
                      }}
                      className="w-[32px] h-[32px] cursor-pointer text-xl text-center border border-solid border-[#5E6D77] rounded-[50%]"
                    >
                      -
                    </span>
                    <p className="mx-2">{isNumberChildren}</p>
                    <span
                      onClick={() => {
                        setIsNumberChildren(isNumberChildren + 1);
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

        <Button
          className="bg-primary lg:rounded-[70px] rounded-b-[24px] w-full lg:w-0 lg:px-[70px] ml-auto lg:mr-3 center h-[60px] text-white p"
          type="primary"
          htmlType="submit"
          icon={<SearchOutlined />}
        >
          Search
        </Button>
      </div>
    </Form>
  );
}
