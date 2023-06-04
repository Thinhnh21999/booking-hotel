import { ArrowDownOutlined, StepForwardOutlined } from "@ant-design/icons";
import { Button, Menu, Dropdown, Space, Tooltip } from "antd";

import Filter from "../filter/index";
import Review from "../review";

import { Link } from "react-router-dom/cjs/react-router-dom.min";

import DropdownSvg from "../../assets/svgs/dropdown.svg";
import ArrowLeftSvg from "../../assets/svgs/arrowLeft.svg";

import * as styled from "./style.js";
import { useState } from "react";
import { AsideStyled } from "./style";
import HotelTheme from "../HotelTheme";
import Facilities from "../Facilites";
import HotelStar from "../HotelStar";

export default function Aside() {
  const [isOpen, setIsOpen] = useState(true);

  const handleOnclickMenu = () => {
    setIsOpen(!isOpen);
  };
  const [isDropdownMenuItem, setIsDropdownMenuItem] = useState({
    isFilter: true,
    isReviewScore: true,
    isHotelStar: true,
    isFacilities: true,
    isHotelTheme: true,
  });

  const handleDropdownFilter = () => {
    setIsDropdownMenuItem({
      ...isDropdownMenuItem,
      isFilter: !isDropdownMenuItem.isFilter,
    });
  };
  const handleDropdownReviewScore = () => {
    setIsDropdownMenuItem({
      ...isDropdownMenuItem,
      isReviewScore: !isDropdownMenuItem.isReviewScore,
    });
  };
  const handleDropdownHotelStar = () => {
    setIsDropdownMenuItem({
      ...isDropdownMenuItem,
      isHotelStar: !isDropdownMenuItem.isHotelStar,
    });
  };
  const handleDropdownFacilities = () => {
    setIsDropdownMenuItem({
      ...isDropdownMenuItem,
      isFacilities: !isDropdownMenuItem.isFacilities,
    });
  };
  const handleDropdownHotelTheme = () => {
    setIsDropdownMenuItem({
      ...isDropdownMenuItem,
      isHotelTheme: !isDropdownMenuItem.isHotelTheme,
    });
  };

  return (
    <AsideStyled className=" w-1/4">
      <div className="relative ">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d251637.95196238213!2d105.6189045!3d9.779349!3m2!1i1024!2i768!4f13.1!5e0!3m2!1svi!2s!4v1683879382654!5m2!1svi!2s"
          frameborder="0"
          className="w-full h-[200px] border-0 "
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
        <p className="absolute bottom-2 cursor-pointer bg-white text-primary m-3 border-2 border-solid border-stone-300 mx-[28%] py-3 px-4 font-semibold rounded-3xl">
          View in a map
        </p>
      </div>

      <div>
        <div>
          <div
            onClick={() => handleDropdownFilter()}
            className=" px-5 py-7 bg-filter my-5 rounded-xl flex justify-between  "
            to="#"
          >
            <div className="border-none font-bold text-lg ">Filter Price</div>
            <img
              className="w-4 ml-auto cursor-pointer"
              src={DropdownSvg}
              alt=""
            />
          </div>
          <styled.DropdownMenuItem
            isDropdownMenuItem={isDropdownMenuItem.isFilter}
            className=" hidden"
            onClick={() => handleOnclickMenu()}
          >
              <Filter />
          </styled.DropdownMenuItem>
        </div>
        <div>
          <div
            onClick={() => handleDropdownReviewScore()}
            className=" px-5 py-7 bg-filter my-5 rounded-xl flex justify-between  "
            to="#"
          >
            <div className="border-none font-bold text-lg ">Review Score</div>
            <img
              className="w-4 ml-auto cursor-pointer"
              src={DropdownSvg}
              alt=""
            />
          </div>
          <styled.DropdownMenuItem
            isDropdownMenuItem={isDropdownMenuItem.isReviewScore}
            className=" hidden"
            onClick={() => handleOnclickMenu()}
          >
            <Review />
          </styled.DropdownMenuItem>
        </div>
        <div>
          <div
            onClick={() => handleDropdownHotelStar()}
            className=" px-5 py-7 bg-filter my-5 rounded-xl flex justify-between  "
            to="#"
          >
            <div className="border-none font-bold text-lg ">Hotel Star</div>
            <img
              className="w-4 ml-auto cursor-pointer"
              src={DropdownSvg}
              alt=""
            />
          </div>
          <styled.DropdownMenuItem
            isDropdownMenuItem={isDropdownMenuItem.isHotelStar}
            className=" hidden"
            onClick={() => handleOnclickMenu()}
          >
            <HotelStar />
          </styled.DropdownMenuItem>
        </div>
        <div>
          <div
            onClick={() => handleDropdownFacilities()}
            className=" px-5 py-7 bg-filter my-5 rounded-xl flex justify-between  "
            to="#"
          >
            <div className="border-none font-bold text-lg ">Facilities</div>
            <img
              className="w-4 ml-auto cursor-pointer"
              src={DropdownSvg}
              alt=""
            />
          </div>
          <styled.DropdownMenuItem
            isDropdownMenuItem={isDropdownMenuItem.isFacilities}
            className=" hidden"
            onClick={() => handleOnclickMenu()}
          >
            <Facilities />
          </styled.DropdownMenuItem>
        </div>
        <div>
          <div
            onClick={() => handleDropdownHotelTheme()}
            className=" px-5 py-7 bg-filter my-5 rounded-xl flex justify-between  "
            to="#"
          >
            <div className="border-none font-bold text-lg ">Hotel Theme</div>
            <img
              className="w-4 ml-auto cursor-pointer"
              src={DropdownSvg}
              alt=""
            />
          </div>
          <styled.DropdownMenuItem
            isDropdownMenuItem={isDropdownMenuItem.isHotelTheme}
            className=" hidden"
            onClick={() => handleOnclickMenu()}
          >
            <HotelTheme />
          </styled.DropdownMenuItem>
        </div>
      </div>
    </AsideStyled>
  );
}
