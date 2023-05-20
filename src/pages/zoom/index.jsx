import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import star from "../../assets/svgs/star.svg";
import size from "../../assets/svgs/size.svg";
import bed from "../../assets/svgs/bed.svg";
import adults from "../../assets/svgs/adults.svg";
import child from "../../assets/svgs/child.svg";

import { Col, Row } from "antd";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

import Header from "../../component/header/index";
import Footer from "../../component/footer/index";
import Zoom_Detail from "../../component/zoomDetail";
import { Wrapper, Price, PriceFixed } from "./style";

export default function Zoom() {
  return (
    <div className="overflow-hidden relative">
      <div>
        <Header />
        <Wrapper>
          <Zoom_Detail />
          <div>
            <h2 className="text-3xl font-bold mb-7">Explore other options</h2>
            <div >
              <Row className="flex justify-between ">
                <Col
                  lg={7}
                  md={12}
                  xs={24}
                  className=" border-[1px] border-solid border-slate-300 rounded-xl my-6 "
                >
                  <div>
                    <div>
                      <img
                        className="w-full h-full rounded-t-xl"
                        src="https://modtel.travelerwp.com/wp-content/uploads/2022/04/Jumeirah-Emirates-Towers-800x600.png"
                        alt=""
                      />
                    </div>
                    <div className="mx-5 mt-7">
                      <h3 className="text-xl font-bold mb-5">
                        Standard Double Room
                      </h3>
                      <div className="flex justify-between mb-5">
                        <div>
                          <div className="flex justify-center">
                            <div className=" mb-2 border-[1px] border-solid rounded-xl border-gray-300 shadow-xl shadow-grey w-11 h-11 p-2 flex item-center ">
                              <img className="" src={size} alt="" />
                            </div>
                          </div>
                          <p className=" items-center flex">S: 170m²</p>
                        </div>
                        <div>
                          <div className="flex justify-center">
                            <div className=" mb-2 border-[1px] border-solid rounded-xl border-gray-300 shadow-xl shadow-grey w-11 h-11 p-2 flex item-center ">
                              <img className="" src={bed} alt="" />
                            </div>
                          </div>
                          <p className=" items-center flex">Bed: 2</p>
                        </div>
                        <div>
                          <div className="flex justify-center">
                            <div className=" mb-2 border-[1px] border-solid rounded-xl border-gray-300 shadow-xl shadow-grey w-11 h-11 p-2 flex item-center ">
                              <img className="" src={adults} alt="" />
                            </div>
                          </div>
                          <p className=" items-center flex">Adults: 3</p>
                        </div>
                        <div>
                          <div className="flex justify-center">
                            <div className=" mb-2 border-[1px] border-solid rounded-xl border-gray-300 shadow-xl shadow-grey w-11 h-11 p-2 flex item-center ">
                              <img className="" src={child} alt="" />
                            </div>
                          </div>
                          <p className=" items-center flex">Children: 1</p>
                        </div>
                      </div>
                    </div>

                    <div className="mb-7 mx-5">
                      <Price>
                        <div className="w-full box">
                          <p className="text-gray py-4">
                            <span className="font-bold text-black">
                              $136.00
                            </span>{" "}
                            / night
                          </p>
                          <div className="zoomDetail ">
                            <div className="bg-primary text-white px-5 py-3 rounded-[30px] text-center font-bold ">
                              <Link to="/zoom-detail">Zoom Detail</Link>
                            </div>
                          </div>
                        </div>
                      </Price>
                    </div>
                  </div>
                </Col>
                <Col
                  lg={7}
                  md={12}
                  xs={24}
                  className=" border-[1px] border-solid border-slate-300 rounded-xl my-6  "
                >
                  <div>
                    <div>
                      <img
                        className="w-full h-full rounded-t-xl"
                        src="https://modtel.travelerwp.com/wp-content/uploads/2022/04/Jumeirah-Emirates-Towers-800x600.png"
                        alt=""
                      />
                    </div>
                    <div className="mx-5 mt-7">
                      <h3 className="text-xl font-bold mb-5">
                        Standard Double Room
                      </h3>
                      <div className="flex justify-between mb-5">
                        <div>
                          <div className="flex justify-center">
                            <div className=" mb-2 border-[1px] border-solid rounded-xl border-gray-300 shadow-xl shadow-grey w-11 h-11 p-2 flex item-center ">
                              <img className="" src={size} alt="" />
                            </div>
                          </div>
                          <p className=" items-center flex">S: 170m²</p>
                        </div>
                        <div>
                          <div className="flex justify-center">
                            <div className=" mb-2 border-[1px] border-solid rounded-xl border-gray-300 shadow-xl shadow-grey w-11 h-11 p-2 flex item-center ">
                              <img className="" src={bed} alt="" />
                            </div>
                          </div>
                          <p className=" items-center flex">Bed: 2</p>
                        </div>
                        <div>
                          <div className="flex justify-center">
                            <div className=" mb-2 border-[1px] border-solid rounded-xl border-gray-300 shadow-xl shadow-grey w-11 h-11 p-2 flex item-center ">
                              <img className="" src={adults} alt="" />
                            </div>
                          </div>
                          <p className=" items-center flex">Adults: 3</p>
                        </div>
                        <div>
                          <div className="flex justify-center">
                            <div className=" mb-2 border-[1px] border-solid rounded-xl border-gray-300 shadow-xl shadow-grey w-11 h-11 p-2 flex item-center ">
                              <img className="" src={child} alt="" />
                            </div>
                          </div>
                          <p className=" items-center flex">Children: 1</p>
                        </div>
                      </div>
                    </div>

                    <div className="mb-7 mx-5">
                      <Price>
                        <div className="w-full box">
                          <p className="text-gray py-4">
                            <span className="font-bold text-black">
                              $136.00
                            </span>{" "}
                            / night
                          </p>
                          <div className="zoomDetail ">
                            <div className="bg-primary text-white px-5 py-3 rounded-[30px] text-center font-bold ">
                              <Link to="/zoom-detail">Zoom Detail</Link>
                            </div>
                          </div>
                        </div>
                      </Price>
                    </div>
                  </div>
                </Col>
                <Col
                  lg={7}
                  md={12}
                  xs={24}
                  className=" border-[1px] border-solid border-slate-300 rounded-xl my-6  "
                >
                  <div>
                    <div>
                      <img
                        className="w-full h-full rounded-t-xl"
                        src="https://modtel.travelerwp.com/wp-content/uploads/2022/04/Jumeirah-Emirates-Towers-800x600.png"
                        alt=""
                      />
                    </div>
                    <div className="mx-5 mt-7">
                      <h3 className="text-xl font-bold mb-5">
                        Standard Double Room
                      </h3>
                      <div className="flex justify-between mb-5">
                        <div>
                          <div className="flex justify-center">
                            <div className=" mb-2 border-[1px] border-solid rounded-xl border-gray-300 shadow-xl shadow-grey w-11 h-11 p-2 flex item-center ">
                              <img className="" src={size} alt="" />
                            </div>
                          </div>
                          <p className=" items-center flex">S: 170m²</p>
                        </div>
                        <div>
                          <div className="flex justify-center">
                            <div className=" mb-2 border-[1px] border-solid rounded-xl border-gray-300 shadow-xl shadow-grey w-11 h-11 p-2 flex item-center ">
                              <img className="" src={bed} alt="" />
                            </div>
                          </div>
                          <p className=" items-center flex">Bed: 2</p>
                        </div>
                        <div>
                          <div className="flex justify-center">
                            <div className=" mb-2 border-[1px] border-solid rounded-xl border-gray-300 shadow-xl shadow-grey w-11 h-11 p-2 flex item-center ">
                              <img className="" src={adults} alt="" />
                            </div>
                          </div>
                          <p className=" items-center flex">Adults: 3</p>
                        </div>
                        <div>
                          <div className="flex justify-center">
                            <div className=" mb-2 border-[1px] border-solid rounded-xl border-gray-300 shadow-xl shadow-grey w-11 h-11 p-2 flex item-center ">
                              <img className="" src={child} alt="" />
                            </div>
                          </div>
                          <p className=" items-center flex">Children: 1</p>
                        </div>
                      </div>
                    </div>

                    <div className="mb-7 mx-5">
                      <Price>
                        <div className="w-full box">
                          <p className="text-gray py-4">
                            <span className="font-bold text-black">
                              $136.00
                            </span>{" "}
                            / night
                          </p>
                          <div className="zoomDetail ">
                            <div className="bg-primary text-white px-5 py-3 rounded-[30px] text-center font-bold ">
                              <Link to="/zoom-detail">Zoom Detail</Link>
                            </div>
                          </div>
                        </div>
                      </Price>
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          </div>
        </Wrapper>
        <Footer />
      </div>
      <PriceFixed>
        <div className="flex justify-between w-full p-3">
          <div>
            <p className="text-gray">
              From: <span className="font-bold text-black">$136.00</span> /
              night
            </p>
            <div className="flex">
              <img className="w-4 " src={star} alt="" />
              <span className="font-bold mx-2">5</span>
              <p className="text-gray">(3 reviews)</p>
            </div>
          </div>

          <div className="bg-primary text-white w-[8%] font-bold text-center rounded-3xl py-2">
            Check
          </div>
        </div>
      </PriceFixed>
    </div>
  );
}

