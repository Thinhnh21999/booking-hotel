import React, { useEffect, useState } from "react";
import { Form, Input, Checkbox, message } from "antd";
import { Link } from "react-router-dom/cjs/react-router-dom";
import MapSvg from "../../assets/svgs/map.svg";
import DropdownSvg from "../../assets/svgs/arrow_down.svg";
import * as styled from "./style.js";
import { getLocalBookRoom } from "../../until/local/local.js";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

export default function Checkout() {
  const bookRoom = getLocalBookRoom();
  const {
    numberRooms,
    numberAdults,
    numberOffNight,
    numberChildren,
    checkIn,
    checkOut,
    nameRoom,
    location,
    image,
    nameHotel,
    totalPrice,
  } = bookRoom || {};
  const [keyboard, setKeyboard] = useState(true);
  const [keyboardTwo, setKeyboardTwo] = useState(false);
  const [form] = Form.useForm();
  const history = useHistory();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const MyFormItemContext = React.createContext([]);
  const { TextArea } = Input;

  function toArr(str) {
    return Array.isArray(str) ? str : [str];
  }
  const MyFormItemGroup = ({ prefix, children }) => {
    const prefixPath = React.useContext(MyFormItemContext);
    const concatPath = React.useMemo(
      () => [...prefixPath, ...toArr(prefix)],
      [prefixPath, prefix]
    );
    return (
      <MyFormItemContext.Provider value={concatPath}>
        {children}
      </MyFormItemContext.Provider>
    );
  };
  const MyFormItem = ({ name, ...props }) => {
    const prefixPath = React.useContext(MyFormItemContext);
    const concatName =
      name !== undefined ? [...prefixPath, ...toArr(name)] : undefined;
    return <Form.Item name={concatName} {...props} />;
  };

  const handleChange = (value) => {};

  const onFinish = (value) => {
    form.validateFields();
  };

  const onFinishFailed = (error) => {
    message.error("Vui lòng điền đầy đủ thông tin");
  };

  return (
    <>
      <div className="pb-[60px]">
        <div className="py-5 border-bottom">
          <div className="lg:container lg:mx-auto px-5">
            <ul className="flex items-center justify-start">
              <li className="relative pr-5">
                <Link to="/" className="text-primary ">
                  Home
                </Link>
                <div className="absolute top-[50%] right-0 w-1 h-1 bg-[#EAEEF3] z-10"></div>
              </li>

              <li className="relative cursor-pointer pr-5 ml-5">
                <Link to={`/detail-hotel/${nameHotel}`}>{nameHotel}</Link>
                <div className="absolute top-[50%] right-0 w-1 h-1 bg-[#EAEEF3] z-10"></div>
              </li>

              <li className="relative cursor-pointer pr-5 ml-5">
                <span onClick={history.goBack}>{nameRoom}</span>
                <div className="absolute top-[50%] right-0 w-1 h-1 bg-[#EAEEF3] z-10"></div>
              </li>

              <li className="ml-5">
                <span className="text-gray">Checkout Modal</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="lg:container lg:mx-auto px-5">
          <div className="mx-[-12px] mt-[60px] flex flex-wrap">
            <div className="w-full relative lg:order-2 lg:w-4/12 px-3">
              <h3 className="title-checkout">Your Booking</h3>
              <div className="lg:sticky lg:top-0 mb-10 py-[30px] mt-[30px] xl:mt-5 px-5 xl:px-[30px] border-line shadow-custom rounded-2xl">
                <div className="flex mb-5 items-center">
                  <Link
                    className="w-[110px] mr-5 overflow-hidden rounded-2xl"
                    to="#"
                  >
                    <img
                      className="w-full h-[80px] rounded-2xl hover:scale-110 transition-all duration-300 ease-in-out transform"
                      src={image}
                      alt="image hotel"
                    />
                  </Link>

                  <div>
                    <h4 className="text-lg font-bold mb-2 leading-[26px] cursor-pointer">
                      {nameHotel}
                    </h4>
                    <div className="flex text-gray text-[14px]">
                      <img className="w-3 mr-1.5" src={MapSvg} alt=".." />
                      {location}
                    </div>
                  </div>
                </div>

                <div className="flex justify-between pb-5 mb-5 border-bottom">
                  <span className="text-gray">Room Type:</span>
                  <span onClick={history.goBack} className="cursor-pointer">
                    {nameRoom}
                  </span>
                </div>

                <div className="mb-5 border-bottom">
                  <h4 className="text-lg font-bold mb-3.5 leading-[26px]">
                    Your Trip
                  </h4>
                  <ul>
                    <li>
                      <span className="text-gray">Date</span>
                      <span className="flex justify-end items-center">
                        {checkIn}-{checkOut}
                        <Link className="text-primary ml-1" to="#">
                          Edit
                        </Link>
                      </span>
                      <span className="flex text-primary">
                        Detail
                        <img className="w-3 ml-1" src={DropdownSvg} alt="" />
                      </span>
                    </li>
                    <li className="py-4">
                      <ul>
                        <li className="flex justify-between mb-3.5">
                          <span className="text-gray">Number of Night</span>
                          <span>{numberOffNight}</span>
                        </li>
                        <li className="flex justify-between mb-3.5">
                          <span className="text-gray">Adults</span>
                          <span>{numberAdults}</span>
                        </li>
                        <li className="flex justify-between mb-3.5">
                          <span className="text-gray">Children</span>
                          <span>{numberChildren}</span>
                        </li>
                        <li className="flex justify-between mb-3.5">
                          <span className="text-gray">Room</span>
                          <span>{numberRooms}</span>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>

                <div className="pb-5 mb-5 border-bottom">
                  <h4 className="title-checkout pb-5 mb-5 border-bottom">
                    Coupon Code
                  </h4>
                  <form className="flex" action="">
                    <input
                      className="w-[70%] px-5 py-3 mr-2 bg-[#f7f8fa] rounded-[40px]"
                      type="text"
                    />
                    <button className="w-[30%] text-center bg-primary text-white p-2.5 rounded-[40px]">
                      Apply
                    </button>
                  </form>
                </div>

                <div className="pb-5 mb-5 border-bottom">
                  <h4 className="text-lg font-bold leading-[26px] mb-2">
                    Price details
                  </h4>
                  <div className="flex justify-between">
                    <span className="text-gray">{numberOffNight} night</span>
                    <span>{totalPrice}</span>
                  </div>
                </div>

                <div className="pb-5 mb-5 border-bottom">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span>{totalPrice} </span>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between">
                    <h4 className="text-xl font-bold leading-[26px]">
                      Pay Amount
                    </h4>
                    <span className="text-xl font-bold leading-[26px]">
                      {totalPrice}{" "}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full lg:w-8/12 px-3">
              <h3 className="title-checkout">Booking Submission</h3>
              <styled.FormCustom
                name="form_item_path"
                layout="vertical"
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                form={form}
              >
                <MyFormItemGroup prefix={["user"]}>
                  <MyFormItemGroup prefix={["name"]}>
                    <MyFormItem
                      name="FirstName"
                      label="First Name"
                      rules={[
                        {
                          required: true,
                          message: "Please enter First Name",
                        },
                      ]}
                    >
                      <Input placeholder="FirstName" />
                    </MyFormItem>
                    <MyFormItem
                      name="LastName"
                      label="Last Name"
                      rules={[
                        {
                          required: true,
                          message: "Please enter Last Name",
                        },
                      ]}
                    >
                      <Input placeholder="LastName" />
                    </MyFormItem>

                    <Form.Item
                      name="email"
                      label="E-mail"
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
                      <Input placeholder="email@domain.com" />
                    </Form.Item>

                    <Form.Item
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
                        }}
                        placeholder="Your Phone"
                      />
                    </Form.Item>

                    <Form.Item label="Address Line 1">
                      <Form.Item
                        name={["address", "street"]}
                        noStyle
                        rules={[
                          {
                            required: true,
                            message: "Street is required",
                          },
                        ]}
                      >
                        <Input
                          style={{
                            width: "100%",
                          }}
                          placeholder="Input street"
                        />
                      </Form.Item>
                    </Form.Item>

                    <Form.Item label="Address Line 2">
                      <Form.Item
                        name={["address", "street"]}
                        noStyle
                        rules={[
                          {
                            required: true,
                            message: "Street is required",
                          },
                        ]}
                      >
                        <Input
                          style={{
                            width: "100%",
                          }}
                          placeholder="Input street"
                        />
                      </Form.Item>
                    </Form.Item>

                    <Form.Item label="City">
                      <Form.Item
                        name={["City"]}
                        noStyle
                        rules={[
                          {
                            required: true,
                            message: "City is required",
                          },
                        ]}
                      >
                        <Input
                          style={{
                            width: "100%",
                          }}
                          placeholder="Your City"
                        />
                      </Form.Item>
                    </Form.Item>

                    <Form.Item label="State/Province/Region">
                      <Form.Item
                        name={["State", "Province", "Region"]}
                        noStyle
                        rules={[
                          {
                            required: true,
                            message: "State/Province/Region is required",
                          },
                        ]}
                      >
                        <Input
                          style={{
                            width: "100%",
                          }}
                          placeholder="State/Province/Region"
                        />
                      </Form.Item>
                    </Form.Item>

                    <Form.Item label="ZIP code/Postal code">
                      <Form.Item
                        name={["ZIP code", "Postal code"]}
                        noStyle
                        rules={[
                          {
                            required: true,
                            message: "ZIP code is required",
                          },
                        ]}
                      >
                        <Input
                          style={{
                            width: "100%",
                          }}
                          placeholder="ZIP code/Postal code"
                        />
                      </Form.Item>
                    </Form.Item>

                    <Form.Item
                      name="Country"
                      label="Country"
                      rules={[
                        {
                          required: true,
                          message: "Please select your country!",
                        },
                      ]}
                    >
                      <Input
                        style={{
                          width: "100%",
                        }}
                        placeholder="Please select a country"
                      />
                    </Form.Item>
                  </MyFormItemGroup>
                </MyFormItemGroup>

                <styled.FormItemTextAreaCustom label="Special Requirements">
                  <TextArea rows={8} placeholder="Special Requirements" />
                </styled.FormItemTextAreaCustom>

                <div className="mt-5 px-3 !w-full">
                  <h3 className="title-checkout mb-[30px]">
                    Select Payment Method
                  </h3>

                  <styled.SelectCustom
                    labelInValue
                    defaultValue={{
                      value: "lucy",
                      label: "Lucy (101)",
                    }}
                    style={{
                      width: "100%",
                    }}
                    onChange={handleChange}
                    options={[
                      {
                        value: "jack",
                        label: "Jack (100)",
                      },
                      {
                        value: "lucy",
                        label: "Lucy (101)",
                      },
                    ]}
                  />

                  <div className="w-full py-[30px] px-4 mb-10 border-line shadow-custom rounded-xl">
                    <div className="w-1/2">
                      <p className="mb-6 text-gray text-base">
                        Bank account Information:
                      </p>
                      <p className="flex text-gray mb-4 text-base">
                        Account Number:
                        <strong className="text-base"> 0123458741254</strong>
                      </p>
                      <p className="inline-block text-gray mb-4 text-base">
                        Bank Name:
                        <strong className="text-base">
                          HSBC Private International Bank
                        </strong>
                      </p>
                      <p className="flex text-gray mb-4 text-base">
                        SWIFT Code:{" "}
                        <strong className="text-base"> 12312</strong>
                      </p>
                      <p className="flex text-gray mb-4 text-base">
                        <em className="text-base text-gray">
                          Please contact the admin for payment confirmation!
                        </em>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="px-3">
                  <Checkbox
                    onChange={() => {
                      setKeyboard(!keyboard);
                    }}
                    checked={keyboard}
                    style={{
                      width: "100%",
                      margin: "0 0 15px 0",
                      color: "#727272",
                    }}
                  >
                    Create Modtel account
                    <small className="ml-1">
                      (password will be sent to your e-mail)
                    </small>
                  </Checkbox>

                  <Checkbox
                    onChange={() => {
                      setKeyboardTwo(!keyboardTwo);
                    }}
                    checked={keyboardTwo}
                    style={{
                      width: "100%",
                      margin: "0 0 15px 0",
                      color: "#727272",
                    }}
                  >
                    I have read and accept the
                    <a href="#" className="text-primary ml-1">
                      terms and conditions
                    </a>
                    and
                    <a href="#" className="text-primary ml-1">
                      Privacy Policy
                    </a>
                  </Checkbox>
                </div>
                <div className="px-3">
                  <styled.ButtonCustom type="primary" htmlType="submit">
                    Submit
                  </styled.ButtonCustom>
                </div>
              </styled.FormCustom>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
