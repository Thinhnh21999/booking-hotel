import { useEffect, useRef, useState } from "react";
import SignInOut from "../../component/signInOut";
import { clearLocalLogin, getLocalLogin } from "../../until/local/local.js";

import {
  Link,
  useHistory,
  useLocation,
} from "react-router-dom/cjs/react-router-dom.min";
import PhoneSvg from "../../assets/svgs/phone.svg";
import EmailSvg from "../../assets/svgs/email.svg";
import CartSvg from "../../assets/svgs/cart.svg";
import DropdownSvg from "../../assets/svgs/dropdown.svg";
import MenuSvg from "../../assets/svgs/menu.svg";
import ArrowLeftSvg from "../../assets/svgs/arrowLeft.svg";
import UserSvg from "../../assets/svgs/user.svg";
import Logo from "../../assets/svgs/logo.svg";
import TrashSvg from "../../assets/svgs/trash.svg";
import * as styled from "./style.js";
import { useDispatch, useSelector } from "react-redux";
import { setAuth, setIsOpenModal } from "../../redux/slice/userSlice";
import {
  deleteBookRoomSg,
  getBookRoomSg,
} from "../../redux/slice/bookRoomSlice";
import { useClickOutside } from "../../until/clickOutside";
import { setLoadingSg } from "../../redux/slice/loadingSlice";

export default function Header() {
  const { hotels } = useSelector((state) => state.Hotels);
  const { isAuth } = useSelector((state) => state.Users);
  const { bookRoom } = useSelector((state) => state.BookRoom);
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownMenuItem, setIsDropdownMenuItem] = useState({
    isListing: false,
    isHotel: false,
    isCart: false,
    isUser: false,
  });
  const [open, setOpen] = useState(false);
  const refCart = useRef();
  const refMenu = useRef();
  const refUser = useRef();
  const dispatch = useDispatch();
  const userLocalLogin = getLocalLogin() || isAuth;

  useEffect(() => {
    dispatch(getBookRoomSg());
  }, []);

  const handleOnclickMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleOnclickArrowLeft = () => {
    setIsOpen(!isOpen);
  };

  const handleDropdownMenuItem1 = () => {
    setIsDropdownMenuItem((preState) => ({
      ...preState,
      isListing: !isDropdownMenuItem.isListing,
    }));
  };
  const handleDropdownMenuItem2 = () => {
    setIsDropdownMenuItem((preState) => ({
      ...preState,
      isHotel: !isDropdownMenuItem.isHotel,
    }));
  };
  const handleDropdownMenuItem3 = () => {
    setIsDropdownMenuItem((preState) => ({
      ...preState,
      isPages: !isDropdownMenuItem.isPages,
    }));
  };
  const handleDropdownMenuUser = () => {
    setIsDropdownMenuItem((preState) => ({
      ...preState,
      isUser: !isDropdownMenuItem.isUser,
    }));
  };

  const handleClickOutsideCart = () => {
    setIsDropdownMenuItem((prevState) => ({
      ...prevState,
      isCart: false,
    }));
  };

  const handleClickOutsideUser = () => {
    setIsDropdownMenuItem((prevState) => ({
      ...prevState,
      isUser: false,
    }));
    console.log(isDropdownMenuItem.isUser);
  };

  const handleClickOutsideMenu = () => {
    setIsOpen(false);
  };

  useClickOutside(refCart, handleClickOutsideCart);
  useClickOutside(refMenu, handleClickOutsideMenu);
  useClickOutside(refUser, handleClickOutsideUser);

  const clearLocalLoginFC = () => {
    dispatch(setLoadingSg(true));
    setTimeout(() => {
      dispatch(setLoadingSg(false));
    }, 2000);
    dispatch(setIsOpenModal(false));
    dispatch(setAuth(false));
    clearLocalLogin();
  };
  return (
    <div id="header" className="relative">
      <div className="bg-[#232323] text-[rgba(255,255,255,.8)] px-10 py-2 flex justify-between">
        <ul className="center">
          <li>
            <Link
              className=" flex pr-5 border-r border-solid border-[rgba(255,255,255,.3)] text-[rgba(255,255,255,.8)]"
              to="##"
            >
              <img className="w-4 mr-2" src={PhoneSvg} alt="" />
              (000) 999 -656 -888
            </Link>
          </li>
          <li>
            <Link className=" ml-4 flex text-[rgba(255,255,255,.8)]" to="#">
              <img className="w-4 mr-2" src={EmailSvg} alt="" />
              travelerwp@gmail.com
            </Link>
          </li>
        </ul>
        <ul>
          <li></li>
        </ul>
      </div>

      <div className="flex justify-between relative bg-white px-10 border-b border-solid border-[#EAEEF3] ">
        <div className="center">
          <div
            className="cursor-pointer py-7 mr-[60px] lg:hidden"
            onClick={() => handleOnclickMenu()}
          >
            <img className="w-5 lg:block" src={MenuSvg} alt="..." />
          </div>

          <styled.DropdownMenu
            isOpen={isOpen}
            ref={refMenu}
            className="flex fixed h-screen z-[999] behavior-smooth overflow-auto top-0 min-w-[320px] bg-white flex-col"
          >
            <span
              onClick={() => handleOnclickArrowLeft()}
              className="!bg-[#f5f5f5] cursor-pointer px-5 py-4"
            >
              <img className="w-3" src={ArrowLeftSvg} alt="" />
            </span>
            <ul className=" px-5">
              <li>
                <Link className="link-dropdown hover" to="/">
                  HOME
                </Link>
              </li>
              <li>
                <Link className="link-dropdown hover" to="/about">
                  ABOUT
                </Link>
              </li>
              <li>
                <Link className="link-dropdown hover" to="/listing">
                  LISTING
                </Link>
              </li>
              <li>
                <span
                  onClick={() => handleDropdownMenuItem2()}
                  className="link-dropdown hover"
                >
                  HOTEL
                  <img className="w-4 ml-auto" src={DropdownSvg} alt="" />
                </span>
                <styled.DropdownMenuItem
                  isDropdownMenuItem={isDropdownMenuItem.isHotel}
                  className="px-2.5 hidden"
                >
                  {hotels.map((hotel, index) => (
                    <li key={index} className="px-[30px]">
                      <Link
                        className="py-[15px] flex items-center font-medium hover"
                        to={`/detail-hotel/${hotel.nameHotel}`}
                      >
                        <img
                          className="w-12 h-12 mr-2"
                          src={hotel.images[0]}
                          alt=".."
                        />
                        {hotel.nameHotel}
                      </Link>
                    </li>
                  ))}
                </styled.DropdownMenuItem>
              </li>
              <li>
                <Link
                  onClick={() => handleDropdownMenuItem3()}
                  className="link-dropdown hover"
                  to="/checkout"
                >
                  CHECKOUT
                </Link>
              </li>
              <li>
                <Link className="link-dropdown hover" to="#">
                  CONTACT
                </Link>
              </li>
            </ul>
          </styled.DropdownMenu>

          <styled.Overlay
            isOpen={isOpen}
            className="fixed h-screen w-full bg-[rgba(0,0,0,.5)] z-[998] top-0 left-0 hidden"
          ></styled.Overlay>

          <div className="hidden md:block" href="#">
            <Link to="/">
              <img className="lg:w-full w-[94px] " src={Logo} alt="logo" />
            </Link>
          </div>
        </div>

        <div className="center">
          <Link className="block md:hidden" to="/">
            <img className="lg:w-full w-[94px] " src={Logo} alt="logo" />
          </Link>
          <ul className=" lg:flex hidden justify-between font-bold">
            <li className="">
              <Link className="block hover py-[35px] ps-2.5 pe-6" to="/">
                Home
              </Link>
            </li>

            <li>
              <Link className="block hover py-[35px] ps-2.5 pe-6" to="/about">
                About
              </Link>
            </li>

            <li className="relative">
              <Link className="flex hover py-[35px] ps-2.5 pe-6" to="/listing">
                Listing
              </Link>
            </li>

            <styled.Dropdown className="relative">
              <span className="flex hover py-[35px] ps-2.5 pe-6" to="#">
                Hotel
                <img className="w-4" src={DropdownSvg} alt="..." />
              </span>
              <ul className="dropdown max-h-80 overflow-scroll z-[-1]">
                {hotels.map((hotel, index) => (
                  <li key={index} className="px-[30px]">
                    <Link
                      className="py-[15px] flex items-center font-medium hover"
                      to={`/detail-hotel/${hotel.nameHotel}`}
                    >
                      <img
                        className="w-12 h-12 mr-2"
                        src={hotel.images[0]}
                        alt=".."
                      />
                      {hotel.nameHotel}
                    </Link>
                  </li>
                ))}
              </ul>
            </styled.Dropdown>

            <li className="relative">
              <Link className="flex hover py-[35px] ps-2.5 pe-6" to="/checkout">
                Checkout
              </Link>
            </li>
            <li className="">
              <Link className="flex  hover py-[35px] ps-2.5 pe-6" to="#">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div className="center">
          <ul className="center font-bold">
            <styled.Dropdown className="relative mr-5 lg:block hidden ">
              <span className="flex hover py-[35px] ps-2.5" to="#">
                EUR
                <img className="w-4" src={DropdownSvg} alt="" />
              </span>
              <ul className="dropdown !min-w-[100px]">
                <li className="px-[30px]">
                  <span className="py-[15px] cursor-pointer font-medium block hover">
                    USD
                  </span>
                </li>
                <li className="px-[30px]">
                  <span className="py-[15px] cursor-pointer font-medium block hover">
                    AUD
                  </span>
                </li>
              </ul>
            </styled.Dropdown>

            <li ref={refCart} className="relative">
              <button
                onClick={() =>
                  setIsDropdownMenuItem((preState) => ({
                    ...preState,
                    isCart: !isDropdownMenuItem.isCart,
                  }))
                }
                className="center relative lg:icon w-[44px] h-[44px] py-1 px-2.5 rounded-[50%] border-line shadow-custom"
              >
                <img className="w-5" src={CartSvg} alt=".." />
                {bookRoom?.length > 0 && userLocalLogin ? (
                  <span className="w-7 h-7 center absolute top-[-10px] right-[-10px] bg-red-500 text-white border-line rounded-full">
                    {bookRoom?.length}
                  </span>
                ) : null}
              </button>
              {isDropdownMenuItem.isCart ? (
                <div className="absolute min-w-[380px] z-[1000] bg-white top-[70px] right-0 px-[30px] py-[25px] border-line shadow-custom rounded-[12px]">
                  <div className="font-semibold text-2xl pb-5 border-b border-[#dedede] border-solid">
                    Your Cart
                  </div>
                  <div className="max-h-[220px] overflow-y-scroll">
                    {bookRoom.length > 0 && userLocalLogin ? (
                      bookRoom?.map((room, index) => {
                        const { nameRoom, totalPrice, images, nameHotel } =
                          room || {};
                        return (
                          <div key={index}>
                            <div className="flex items-center mt-5 bg-[#f1f4f8]">
                              <div className="w-[70px] h-[70px]">
                                <img
                                  className="h-full"
                                  src={images}
                                  alt="imageRoom"
                                />
                              </div>

                              <div className="pl-2.5">
                                <Link
                                  to={`/detail-room/${nameHotel}/${nameRoom}`}
                                  className="text-lg leading-3 font-semibold"
                                >
                                  {nameRoom}
                                </Link>
                                <div className="flex">
                                  <span className="text-gray font-medium pr-1">
                                    price:
                                  </span>{" "}
                                  <span className="text-primary font-medium">
                                    {totalPrice}
                                  </span>
                                </div>
                              </div>

                              <button
                                onClick={() =>
                                  dispatch(deleteBookRoomSg(room.id))
                                }
                                className="w-5 mr-3 ml-auto"
                              >
                                <img src={TrashSvg} alt="trash" />
                              </button>
                            </div>
                            <div className="border-b border-[#dedede] border-solid mt-5"></div>
                          </div>
                        );
                      })
                    ) : (
                      <div className="font-semibold pt-5 text-yellow-400 pb-5 text-lg">
                        Your cart is empty
                      </div>
                    )}
                  </div>

                  <a
                    // onClick={() =>
                    //   setTimeout(() => history.push("/checkout"), 0)
                    // }
                    href="/checkout"
                    className="text-white block uppercase bg-primary hover:opacity-80 text-center w-full px-5 py-3 rounded-[50px]"
                  >
                    Pay Now
                  </a>
                </div>
              ) : null}
            </li>

            <li ref={refUser} className="ml-5">
              {userLocalLogin ? (
                <>
                  <div
                    className="center rounded-[50%] w-[44px] h-[44px] shadow-custom border-line cursor-pointer"
                    onClick={() => handleDropdownMenuUser()}
                  >
                    <img className="w-5" src={UserSvg} alt="..." />
                  </div>
                  <styled.DropdownMenuItem
                    isDropdownMenuItem={isDropdownMenuItem.isUser}
                    className="absolute z-[999] py-2.5 min-w-[230px] top-[100%] bg-white border rounded-[12px] shadow-custom hidden right-0"
                  >
                    <li className="px-[30px]">
                      <p className="py-[15px] font-medium block hover">
                        Thông tin người dùng
                      </p>
                    </li>
                    <li className="px-[30px]">
                      <button
                        className="py-[15px] font-medium block hover:text-red-500 cursor-pointer"
                        onClick={() => clearLocalLoginFC()}
                      >
                        Đăng Xuất
                      </button>
                    </li>
                  </styled.DropdownMenuItem>
                </>
              ) : (
                <SignInOut />
              )}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
