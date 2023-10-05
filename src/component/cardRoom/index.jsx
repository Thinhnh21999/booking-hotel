import { Col, Row } from "antd";
import {
  Link,
  useLocation,
  useParams,
} from "react-router-dom/cjs/react-router-dom.min";
import size from "../../assets/svgs/size.svg";
import bed from "../../assets/svgs/bed.svg";
import adults from "../../assets/svgs/adults.svg";
import child from "../../assets/svgs/child.svg";
import { useState } from "react";

export default function CardRoom(props) {
  const paramsHotel = useParams();
  const location = useLocation();
  const { nameHotel } = paramsHotel;
  const { pathname } = location;
  const { room, showPriceRoom, numberOffNight, numberRooms } = props;
  const { id, price, detail, nameRoom, images } = room;
  const [checkRoom, setCheckRoom] = useState(false);
  return (
    <Row className="border-line rounded-xl mb-[30px]">
      <Col lg={7} xs={24}>
        <div className="overflow-hidden w-full h-full lg:rounded-bl-xl lg:rounded-tl-xl lg:rounded-tr-none rounded-tl-xl rounded-tr-xl">
          <img
            className="w-full h-full object-cover hover:scale-110 transition-all duration-300 lg:rounded-bl-xl lg:rounded-tl-xl lg:rounded-tr-none rounded-tl-xl rounded-tr-xl"
            src={images[1]}
            alt="image"
          />
        </div>
      </Col>

      <Col lg={10} xs={24}>
        <div className="mx-5 my-[30px] lg:border-r-[1px] border-solid border-slate-200">
          <h3 className="text-xl font-bold mb-5 lg:mb-10">{nameRoom}</h3>
          <div className="flex flex-wrap lg:justify-between">
            <div className="border-[1px] border-solid border-slate-300 rounded-xl shadow-xl shadow-slate-200 w-14 h-14 text-center mr-4 mb-10">
              <img className="w-8 inline-block mt-3" src={size} alt="" />
              <p className="text-gray my-5">{detail.S}</p>
            </div>
            <div className="border-[1px] border-solid border-slate-300 rounded-xl shadow-xl shadow-slate-200 w-14 h-14 text-center mr-4 mb-10">
              <img className="w-8 inline-block mt-3" src={bed} alt="" />
              <p className="text-gray my-5">x{detail.Beds}</p>
            </div>
            <div className="border-[1px] border-solid border-slate-300 rounded-xl shadow-xl shadow-slate-200 w-14 h-14 text-center mr-4 mb-10">
              <img className="w-8 inline-block mt-3" src={adults} alt="" />
              <p className="text-gray my-5">x{detail.Adults}</p>
            </div>
            <div className="border-[1px] border-solid border-slate-300 rounded-xl shadow-xl shadow-slate-200 w-14 h-14 text-center mr-4 mb-10">
              <img className="w-8 inline-block mt-3" src={child} alt="" />
              <p className="text-gray my-5">x{detail.Children}</p>
            </div>
          </div>
        </div>
      </Col>

      <Col className="center" lg={7} xs={24}>
        {showPriceRoom || pathname.startsWith("/detail-room") ? (
          <div className="flex justify-center">
            <div className="w-full box text-center">
              <p className="text-gray pt-4">
                <span className="font-bold text-xl text-black">
                  $
                  {numberOffNight
                    ? (numberRooms * price * numberOffNight).toLocaleString()
                    : parseFloat(price)}
                  ,00
                </span>{" "}
                {numberOffNight ? numberOffNight : ""}/ night
              </p>
              <div className="flex justify-center w-full ">
                <Link
                  to={`/detail-room/${nameHotel}/${nameRoom} `}
                  target="_blank"
                  className="bg-primary hover:bg-opacity-80 text-white px-5 py-3 mx-5 lg:mx-0 mb-7 lg:mb-0 mt-[10px] lg:mt-[10px] rounded-[30px] text-center font-bold "
                >
                  <span>Room Detail</span>
                </Link>
              </div>
            </div>
          </div>
        ) : (
          <div className="mx-5 lg:mx-0 mb-7 lg:mb-0 mt-[10px] lg:mt-[10px] text-center">
            <button
              onClick={() => setCheckRoom(true)}
              className="bg-primary hover:bg-opacity-80 block text-white rounded-[30px] mx-auto px-5 py-3 text-center font-bold "
            >
              <span>Room Detail</span>
            </button>
            {checkRoom && (
              <div className="text-[#f13c3c] font-normal pt-2">
                Please Check availability
              </div>
            )}
          </div>
        )}
      </Col>
    </Row>
  );
}
