import { useEffect, useRef, useState } from "react";
import "react-calendar/dist/Calendar.css";

import MapSvg from "../../assets/svgs/map.svg";
import ArrowSvg from "../../assets/svgs/arrowRight.svg";
import CalendarSvg from "../../assets/svgs/calendar.svg";
import UsersSvg from "../../assets/svgs/users.svg";
import { SearchOutlined } from "@ant-design/icons";
import * as styled from "./style.js";
import moment from "moment";
import { Form, Input, Button } from "antd";

export default function Search() {
  const [dateOne, setDateOne] = useState(new Date());
  const [dateTwo, setDateTwo] = useState(new Date());
  const [dateOneValue, setDateOneValue] = useState();
  const [dateTwoValue, setDateTwoValue] = useState();
  const [isOpen, setIsOpen] = useState({
    isOpenCalendar: false,
    isOpenSearch: false,
    isOpenGuests: false,
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
  const [currentInput, setCurrentInput] = useState("");
  const [isNumberRooms, setIsNumberRooms] = useState(1);
  const [isNumberAdults, setIsNumberAdults] = useState(1);
  const [isNumberChildren, setIsNumberChildren] = useState(0);
  const [form] = Form.useForm();
  const refSearch = useRef();
  const refCalendar = useRef();
  const refGuests = useRef();

  // useEffect phải được bỏ trong thành phần bắt đầu = chữ viết hoa hoặc use
  const useClickOutside = (ref, callback) => {
    useEffect(() => {
      const handleClick = (e) => {
        // contains để kiểm tra xem có thuộc phần tử con của nó hay không
        if (ref.current && !ref.current.contains(e.target)) {
          callback();
        }
      };

      document.addEventListener("click", handleClick);

      return () => {
        document.removeEventListener("click", handleClick);
      };
    }, [ref, callback]);
  };
  // dùng ...prevState để đảm bảo isOpen ko bị ghi đè
  const handleSearchClickOutside = () => {
    setIsOpen((prevState) => ({
      ...prevState,
      isOpenSearch: false,
    }));
  };

  const handleCalendarClickOutside = () => {
    setIsOpen((prevState) => ({
      ...prevState,
      isOpenCalendar: false,
    }));
  };

  const handleGuestsClickOutside = () => {
    setIsOpen((prevState) => ({
      ...prevState,
      isOpenGuests: false,
    }));
  };

  useClickOutside(refSearch, handleSearchClickOutside);
  useClickOutside(refCalendar, handleCalendarClickOutside);
  useClickOutside(refGuests, handleGuestsClickOutside);

  const onChangeCalendarOne = (value) => {
    setDateOneValue(value);
    setDateOne(value);
    form.setFieldsValue({ "check-in": value });
  };

  const onChangeCalendarTwo = (value) => {
    setDateTwoValue(value);
    setDateTwo(value);
    form.setFieldsValue({ "check-out": value });
  };

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
    // vì js,react là nn bất đồng bộ cho nên việc cập nhập state ko lập tức cho nên phải setFieldsValue để cập nhập value trc khi submit
    form.setFieldsValue({ location: value });
    setIsOpen({ ...isOpen, isOpenSearch: false });
  };

  const handleOnFinishSearch = (e) => {
    console.log(e);
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
            <div className="absolute bg-white top-0 translate-y-[82px] z-[999] w-full lg:max-w-[360px] py-[30px] px-[10px] mt-4 border-line shadow-custom rounded-2xl">
              <ul className="text-left max-h-[333px] scroll-smooth overflow-auto">
                <li className="pe-[30px] ps-[20px]">
                  <span className="block font-medium hover pb-5 mb-3 border-bottom">
                    Popular destinations
                  </span>
                </li>
                <li className="pe-[30px] ps-[20px] py-2">
                  <span className="block hover text-gray">United States</span>
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
                  {dateOneValue === ""
                    ? "add date"
                    : moment(dateOneValue).format("DD/MM/YYYY")}
                </span>
              </div>
            </div>
            <Form.Item name="check-in" className="hidden">
              <Input value={moment(dateOneValue).format("DD/MM/YYYY")} />
            </Form.Item>
            <img className="w-3 mx-7 lg:mx-0" src={ArrowSvg} alt="" />

            <div className="flex lg:px-[30px] mr-auto">
              <img className="w-5 mr-4" src={CalendarSvg} alt=".." />
              <div className="flex flex-col">
                <span className="font-semibold text-base">Checkout</span>
                <span className="text-p">
                  {dateTwoValue === ""
                    ? "add date"
                    : moment(dateTwoValue).format("DD/MM/YYYY")}
                </span>
              </div>
            </div>
            <Form.Item name="check-out" className="hidden">
              <Input value={moment(dateTwoValue).format("DD/MM/YYYY")} />
            </Form.Item>
          </div>

          <div className="h-5 border-r border-solid border-gray-300 hidden lg:block"></div>

          {isOpen.isOpenCalendar && (
            <div className="flex px-[30px] shadow-custom bg-white py-5 absolute translate-y-[82px] mt-4 top-0 z-[999] rounded-[20px] border-line">
              <styled.CalendarCustom
                onChange={onChangeCalendarOne}
                value={dateOne}
                locale="en-US"
              ></styled.CalendarCustom>
              <styled.CalendarCustom
                onChange={onChangeCalendarTwo}
                value={dateTwo}
                locale="en-US"
              ></styled.CalendarCustom>
            </div>
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
                <Form.Item name="rooms" className="hidden">
                  <Input value={isNumberRooms} />
                </Form.Item>
                <span className="text-p ml-1">
                  {isNumberAdults + isNumberChildren} guest
                </span>
                <Form.Item name="guests" className="hidden">
                  <Input value={isNumberAdults + isNumberChildren} />
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
                          form.setFieldsValue({
                            rooms: isNumberRooms - 1,
                          });
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
                        form.setFieldsValue({
                          rooms: isNumberRooms + 1,
                        });
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
                        form.setFieldsValue({
                          guests: isNumberAdults - 1 + isNumberChildren,
                        });
                      }}
                      className="w-[32px] h-[32px] cursor-pointer text-xl text-center border border-solid border-[#5E6D77] rounded-[50%]"
                    >
                      -
                    </span>
                    <p className="mx-2">{isNumberAdults}</p>
                    <span
                      onClick={() => {
                        setIsNumberAdults(isNumberAdults + 1);
                        form.setFieldsValue({
                          guests: isNumberAdults + 1 + isNumberChildren,
                        });
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
                        form.setFieldsValue({
                          guests: isNumberChildren - 1 + isNumberAdults,
                        });
                      }}
                      className="w-[32px] h-[32px] cursor-pointer text-xl text-center border border-solid border-[#5E6D77] rounded-[50%]"
                    >
                      -
                    </span>
                    <p className="mx-2">{isNumberChildren}</p>
                    <span
                      onClick={() => {
                        setIsNumberChildren(isNumberChildren + 1);
                        form.setFieldsValue({
                          guests: isNumberChildren + 1 + isNumberAdults,
                        });
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
