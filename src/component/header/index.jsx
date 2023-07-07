import { useState } from "react";
import SignInOut from "../../component/signInOut";
import { clearLocalLogin, getLocalLogin } from "../../untill/loginLocal";

import { Link } from "react-router-dom/cjs/react-router-dom.min";
import PhoneSvg from "../../assets/svgs/phone.svg";
import EmailSvg from "../../assets/svgs/email.svg";
import CartSvg from "../../assets/svgs/cart.svg";
import DropdownSvg from "../../assets/svgs/dropdown.svg";
import MenuSvg from "../../assets/svgs/menu.svg";
import ArrowLeftSvg from "../../assets/svgs/arrowLeft.svg";
import UserSvg from "../../assets/svgs/user.svg";
import * as styled from "./style.js";
import { useDispatch, useSelector } from "react-redux";
import { setAuth } from "../../redux/counter/userSlice";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownMenuItem, setIsDropdownMenuItem] = useState({
    isListing: false,
    isHotel: false,
    isPages: false,
    isUser: false,
  });

  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.Users.isAuth);
  const userLocalLogin = getLocalLogin() || isAuth === true;

  const handleOnclickMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleOnclickArrowLeft = () => {
    setIsOpen(!isOpen);
  };

  const handleDropdownMenuItem1 = () => {
    setIsDropdownMenuItem({
      ...isDropdownMenuItem,
      isListing: !isDropdownMenuItem.isListing,
    });
  };
  const handleDropdownMenuItem2 = () => {
    setIsDropdownMenuItem({
      ...isDropdownMenuItem,
      isHotel: !isDropdownMenuItem.isHotel,
    });
  };
  const handleDropdownMenuItem3 = () => {
    setIsDropdownMenuItem({
      ...isDropdownMenuItem,
      isPages: !isDropdownMenuItem.isPages,
    });
  };
  const handleDropdownMenuUser = () => {
    setIsDropdownMenuItem({
      ...isDropdownMenuItem,
      isUser: !isDropdownMenuItem.isUser,
    });
  };

  const clearLocalLoginFC = () => {
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
            className="cursor-pointer py-7 lg:hidden"
            onClick={() => handleOnclickMenu()}
          >
            <img className="w-5 lg:block  " src={MenuSvg} alt="..." />
          </div>

          <styled.DropdownMenu
            isOpen={isOpen}
            className="flex h-screen absolute z-[999] behavior-smooth overflow-auto top-0 min-w-[320px] bg-white flex-col"
          >
            <span
              onClick={() => handleOnclickArrowLeft()}
              className="!bg-[#f5f5f5] cursor-pointer px-5 py-4"
            >
              <img className="w-3" src={ArrowLeftSvg} alt="" />
            </span>
            <ul className=" px-5">
              <li>
                <Link className="link-dropdown hover" to="#">
                  HOME
                </Link>
              </li>
              <li>
                <Link className="link-dropdown hover" to="#">
                  ABOUT
                </Link>
              </li>
              <li>
                <span
                  onClick={() => handleDropdownMenuItem1()}
                  className="link-dropdown hover"
                  to="#"
                >
                  LISTING
                  <img className="w-4 ml-auto" src={DropdownSvg} alt="" />
                </span>
                <styled.DropdownMenuItem
                  isDropdownMenuItem={isDropdownMenuItem.isListing}
                  className="px-2.5 hidden"
                >
                  <li className="py-3 font-medium">
                    <Link className="link-dropdown-item hover" to="/listing">
                      Search Popup Map
                    </Link>
                  </li>
                  <li className="py-3 font-medium">
                    <Link className="link-dropdown-item hover" to="#">
                      Search HalfMap
                    </Link>
                  </li>
                </styled.DropdownMenuItem>
              </li>
              <li>
                <Link
                  to="#"
                  onClick={() => handleDropdownMenuItem2()}
                  className="link-dropdown hover"
                >
                  HOTEL
                  <img className="w-4 ml-auto" src={DropdownSvg} alt="" />
                </Link>
              </li>
              <li>
                <span
                  onClick={() => handleDropdownMenuItem3()}
                  className="link-dropdown hover"
                  to="#"
                >
                  PAGES
                  <img className="w-4 ml-auto" src={DropdownSvg} alt="" />
                </span>
                <styled.DropdownMenuItem
                  isDropdownMenuItem={isDropdownMenuItem.isPages}
                  className="px-2.5 hidden"
                >
                  <li className="py-3 font-medium">
                    <Link className="py-[15px] font-medium block hover" to="#">
                      Blog
                    </Link>
                  </li>
                  <li className="py-3 font-medium">
                    <Link className="py-[15px] font-medium block hover" to="#">
                      Become Local Expert
                    </Link>
                  </li>
                  <li className="py-3 font-medium">
                    <Link className="py-[15px] font-medium block hover" to="#">
                      Function: Login
                    </Link>
                  </li>
                  <li className="py-3 font-medium">
                    <Link className="py-[15px] font-medium block hover" to="#">
                      Function: Register
                    </Link>
                  </li>
                  <li className="py-3 font-medium">
                    <Link className="py-[15px] font-medium block hover" to="#">
                      FQW
                    </Link>
                  </li>
                  <li className="py-3 font-medium">
                    <Link className="py-[15px] font-medium block hover" to="#">
                      Destination
                    </Link>
                  </li>
                  <li className="py-3 font-medium">
                    <Link className="py-[15px] font-medium block hover" to="#">
                      404
                    </Link>
                  </li>
                  <li className="py-3 font-medium">
                    <Link className="py-[15px] font-medium block hover" to="#">
                      Function: Wishlist
                    </Link>
                  </li>
                </styled.DropdownMenuItem>
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

          <a className="" href="#">
            <Link to="/">
              <img
                className="lg:w-full w-[94px] "
                src="https://modtel.wpengine.com/wp-content/uploads/2022/04/logohotel.png"
                alt="logo"
              />
            </Link>
          </a>
        </div>

        <div className="center">
          <Link className="block md:hidden" to="/">
            <img
              className="lg:w-full w-[94px] "
              src="https://modtel.wpengine.com/wp-content/uploads/2022/04/logohotel.png"
              alt="logo"
            />
          </Link>
          <ul className=" lg:flex hidden justify-between font-bold">
            <li className="">
              <Link className="block hover py-[35px] ps-2.5 pe-6" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="block hover py-[35px] ps-2.5 pe-6" to="#">
                About
              </Link>
            </li>
            <styled.Dropdown className="relative">
              <span className="flex hover py-[35px] ps-2.5 pe-6" to="#">
                Listing
                <img className="w-4" src={DropdownSvg} alt="..." />
              </span>
              <ul className="dropdown z-[-1]">
                <li className="px-[30px]">
                  <Link
                    className="py-[15px] font-medium block hover"
                    to="/list"
                  >
                    Search Popup Map
                  </Link>
                </li>
                <li className="px-[30px]">
                  <Link className="py-[15px] font-medium block hover" to="#">
                    Search HalfMap
                  </Link>
                </li>
              </ul>
            </styled.Dropdown>
            <styled.Dropdown className="relative">
              <span className="flex hover py-[35px] ps-2.5 pe-6" to="#">
                Hotel
                <img className="w-4" src={DropdownSvg} alt="" />
              </span>
              <ul className="dropdown z-[-1]">
                <li className="px-[30px]">
                  <Link className="py-[15px] font-medium block hover" to="# ">
                    Hotel Detail 1
                  </Link>
                </li>
                <li className="px-[30px]">
                  <Link className="py-[15px] font-medium block hover" to="#">
                    Hotel Detail 2
                  </Link>
                </li>
              </ul>
            </styled.Dropdown>

            <styled.Dropdown className="relative">
              <span className="flex hover py-[35px] ps-2.5 pe-6" to="#">
                Pages
                <img className="w-4" src={DropdownSvg} alt="" />
              </span>
              <ul className="dropdown">
                <li className="px-[30px]">
                  <Link
                    className="py-[15px] font-medium block hover"
                    to="/room-detail"
                  >
                    Blog
                  </Link>
                </li>
                <li className="px-[30px]">
                  <Link className="py-[15px] font-medium block hover" to="#">
                    Become Local Expert
                  </Link>
                </li>
                <li className="px-[30px]">
                  <Link className="py-[15px] font-medium block hover" to="#">
                    Function: Login
                  </Link>
                </li>
                <li className="px-[30px]">
                  <Link className="py-[15px] font-medium block hover" to="#">
                    Function: Register
                  </Link>
                </li>
                <li className="px-[30px]">
                  <Link className="py-[15px] font-medium block hover" to="#">
                    FQW
                  </Link>
                </li>
                <li className="px-[30px]">
                  <Link className="py-[15px] font-medium block hover" to="#">
                    Destination
                  </Link>
                </li>
                <li className="px-[30px]">
                  <Link className="py-[15px] font-medium block hover" to="#">
                    404
                  </Link>
                </li>
                <li className="px-[30px]">
                  <Link className="py-[15px] font-medium block hover" to="#">
                    Function: Wishlist
                  </Link>
                </li>
              </ul>
            </styled.Dropdown>
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
                  <Link className="py-[15px] font-medium block hover" to="#">
                    USD
                  </Link>
                </li>
                <li className="px-[30px]">
                  <Link className="py-[15px] font-medium block hover" to="#">
                    AUD
                  </Link>
                </li>
              </ul>
            </styled.Dropdown>
            <li>
              <div className="center lg:icon w-[44px] h-[44px] py-1 px-2.5 rounded-[50%] border-line shadow-custom">
                <img className="w-5" src={CartSvg} alt=".." />
              </div>
            </li>
            <li className="ml-5">
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
                    className="absolute py-2.5 min-w-[230px] top-[100%] bg-white border rounded-[12px] shadow-custom hidden right-0"
                  >
                    <li className="px-[30px]">
                      <p className="py-[15px] font-medium block hover">
                        Thông tin người dùng
                      </p>
                    </li>
                    <li className="px-[30px]">
                      <p
                        className="py-[15px] font-medium block hover:text-red-500 cursor-pointer"
                        onClick={() => clearLocalLoginFC()}
                      >
                        Đăng Xuất
                      </p>
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
