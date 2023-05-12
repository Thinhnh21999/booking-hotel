import {
  faCartFlatbed,
  faChevronDown,
  faEnvelope,
  faFaceMehBlank,
  faPhoneVolume,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import CartSvg from "../../assets/svgs/cart.svg";
import UserSvg from "../../assets/svgs/user.svg";

export default function header() {
  return (
    <div>
      <div className="bg-[#232323] text-[rgba(255,255,255,.8)] px-10 py-2 flex justify-between">
        <ul className="center">
          <li>
            <Link
              className="pr-5 border-r border-solid border-[rgba(255,255,255,.3)] text-[rgba(255,255,255,.8)]"
              to="#"
            >
              {/* <img src={CartSvg} alt="" /> */}
              (000) 999 -656 -888
            </Link>
          </li>
          <li>
            <Link className=" text-[rgba(255,255,255,.8)]" to="#">
              <FontAwesomeIcon className="text-3 mr-2" icon={faEnvelope} />
              travelerwp@gmail.com
            </Link>
          </li>
        </ul>
        <ul>
          <li>
            <FontAwesomeIcon
              style={{ color: "[rgba(255,255,255,.8)]" }}
              icon={faFaceMehBlank}
            />
          </li>
        </ul>
      </div>

      <div className="flex justify-between relative bg-white px-10 border-b border-solid border-[#EAEEF3] ">
        <div className="self-center">
          <a href="#">
            <img
              className=""
              src="https://modtel.wpengine.com/wp-content/uploads/2022/04/logohotel.png"
              alt="logo"
            />
          </a>
        </div>

        <div>
          <ul className="flex justify-between font-bold">
            <li className="relative">
              <Link className="block py-[35px] ps-2.5 pe-6" to="">
                Home
              </Link>
            </li>
            <li className="relative">
              <Link className="block py-[35px] ps-2.5 pe-6" to="">
                About
              </Link>
            </li>
            <li className="relative">
              <Link className="block py-[35px] ps-2.5 pe-6" to="">
                Listing
                <FontAwesomeIcon
                  className="text-[13px] text-[#727272] font-medium"
                  icon={faChevronDown}
                />
              </Link>
            </li>
            <li className="relative">
              <Link className="block py-[35px] ps-2.5 pe-6" to="">
                Hotel
                <FontAwesomeIcon
                  className="text-[13px] text-[#727272] font-medium"
                  icon={faChevronDown}
                />
              </Link>
            </li>
            <li className="relative">
              <Link className="block py-[35px] ps-2.5 pe-6" to="">
                Pages
                <FontAwesomeIcon
                  className="text-[13px] text-[#727272] font-medium"
                  icon={faChevronDown}
                />
              </Link>
            </li>
            <li className="relative">
              <Link className="block py-[35px] ps-2.5 pe-6" to="">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div className="center">
          <ul className="center">
            <li>
              EUR
              <FontAwesomeIcon
                className="text-[13px] text-[#727272] ml-1.5 font-medium"
                icon={faChevronDown}
              />
            </li>
            <li className="ml-5">
              <div className="icon">
                <img className="w-5" src={CartSvg} alt=".." />
              </div>
            </li>
            <li className="ml-5">
              <div className="icon">
                <img className="w-5" src={UserSvg} alt=".." />
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
