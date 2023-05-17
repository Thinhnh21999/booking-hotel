import { Col, Row } from "antd";

import size from "../../assets/svgs/size.svg";
import bed from "../../assets/svgs/bed.svg";
import adults from "../../assets/svgs/adults.svg";
import child from "../../assets/svgs/child.svg";
import { AboutStyle } from "./style";

export default function About() {
  return (
    <div className="">
      <Row>
        <Col lg={24} md={11} xs={24} className="border-[1px] border-solid border-slate-300 rounded-xl my-6 mx-auto">
          <Row>
            <Col lg={7} xs={24}>
              <img
                className="w-full h-full rounded-xl"
                src="https://modtel.travelerwp.com/wp-content/uploads/2022/04/Jumeirah-Emirates-Towers-800x600.png"
                alt=""
              />
            </Col>
            <Col lg={10} xs={24}>
              <div className="mx-5 my-7 border-r-[1px] border-solid border-slate-200">
                <h3 className="text-xl font-bold mb-10">
                  Standard Double Room
                </h3>
                <div className="flex flex-wrap justify-between">
                  <div className="border-[1px] border-solid border-slate-300 rounded-xl shadow-xl shadow-slate-200 w-14 h-14 text-center mr-4 mb-10">
                    <img className="w-8 inline-block mt-3" src={size} alt="" />
                    <p className="text-gray my-5">170 m²</p>
                  </div>
                  <div className="border-[1px] border-solid border-slate-300 rounded-xl shadow-xl shadow-slate-200 w-14 h-14 text-center mr-4 mb-10">
                    <img className="w-8 inline-block mt-3" src={bed} alt="" />
                    <p className="text-gray my-5">x2</p>
                  </div>
                  <div className="border-[1px] border-solid border-slate-300 rounded-xl shadow-xl shadow-slate-200 w-14 h-14 text-center mr-4 mb-10">
                    <img
                      className="w-8 inline-block mt-3"
                      src={adults}
                      alt=""
                    />
                    <p className="text-gray my-5">x3</p>
                  </div>
                  <div className="border-[1px] border-solid border-slate-300 rounded-xl shadow-xl shadow-slate-200 w-14 h-14 text-center mr-4 mb-10">
                    <img className="w-8 inline-block mt-3" src={child} alt="" />
                    <p className="text-gray my-5">x1</p>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={7} xs={24}>
              <div className="w-full h-full flex items-center  mb-20">
                <div className="bg-primary text-white px-5 py-3 rounded-[30px] text-center font-bold w-full ">
                  Show price
                </div>
              </div>
            </Col>
          </Row>
        </Col>
        <Col lg={24} md={11} xs={24} className="border-[1px] border-solid border-slate-300 rounded-xl my-6 mx-auto">
          <Row>
            <Col lg={7} xs={24}>
              <img
                className="w-full h-full rounded-xl"
                src="https://modtel.travelerwp.com/wp-content/uploads/2022/04/Jumeirah-Emirates-Towers-800x600.png"
                alt=""
              />
            </Col>
            <Col lg={10} xs={24}>
              <div className="mx-5 my-7 border-r-[1px] border-solid border-slate-200">
                <h3 className="text-xl font-bold mb-10">
                  Standard Double Room
                </h3>
                <div className="flex flex-wrap justify-between">
                  <div className="border-[1px] border-solid border-slate-300 rounded-xl shadow-xl shadow-slate-200 w-14 h-14 text-center mr-4 mb-10">
                    <img className="w-8 inline-block mt-3" src={size} alt="" />
                    <p className="text-gray my-5">170 m²</p>
                  </div>
                  <div className="border-[1px] border-solid border-slate-300 rounded-xl shadow-xl shadow-slate-200 w-14 h-14 text-center mr-4 mb-10">
                    <img className="w-8 inline-block mt-3" src={bed} alt="" />
                    <p className="text-gray my-5">x2</p>
                  </div>
                  <div className="border-[1px] border-solid border-slate-300 rounded-xl shadow-xl shadow-slate-200 w-14 h-14 text-center mr-4 mb-10">
                    <img
                      className="w-8 inline-block mt-3"
                      src={adults}
                      alt=""
                    />
                    <p className="text-gray my-5">x3</p>
                  </div>
                  <div className="border-[1px] border-solid border-slate-300 rounded-xl shadow-xl shadow-slate-200 w-14 h-14 text-center mr-4 mb-10">
                    <img className="w-8 inline-block mt-3" src={child} alt="" />
                    <p className="text-gray my-5">x1</p>
                  </div>
                </div>
              </div>
            </Col>
            <Col className="" lg={7} xs={24}>
              <div className="w-full h-full flex items-center  mb-20">
                <div className="bg-primary text-white px-5 py-3 rounded-[30px] text-center font-bold w-full ">
                  Show price
                </div>
              </div>
            </Col>
          </Row>
        </Col>
        <Col lg={24} md={12} xs={24} className="border-[1px] border-solid border-slate-300 rounded-xl my-6 mx-auto">
          <Row>
            <Col lg={7} xs={24}>
              <img
                className="w-full h-full rounded-xl"
                src="https://modtel.travelerwp.com/wp-content/uploads/2022/04/Jumeirah-Emirates-Towers-800x600.png"
                alt=""
              />
            </Col>
            <Col lg={10} xs={24}>
              <div className="mx-5 my-7 border-r-[1px] border-solid border-slate-200">
                <h3 className="text-xl font-bold mb-10">
                  Standard Double Room
                </h3>
                <div className="flex flex-wrap justify-between">
                  <div className="border-[1px] border-solid border-slate-300 rounded-xl shadow-xl shadow-slate-200 w-14 h-14 text-center mr-4 mb-10">
                    <img className="w-8 inline-block mt-3" src={size} alt="" />
                    <p className="text-gray my-5">170 m²</p>
                  </div>
                  <div className="border-[1px] border-solid border-slate-300 rounded-xl shadow-xl shadow-slate-200 w-14 h-14 text-center mr-4 mb-10">
                    <img className="w-8 inline-block mt-3" src={bed} alt="" />
                    <p className="text-gray my-5">x2</p>
                  </div>
                  <div className="border-[1px] border-solid border-slate-300 rounded-xl shadow-xl shadow-slate-200 w-14 h-14 text-center mr-4 mb-10">
                    <img
                      className="w-8 inline-block mt-3"
                      src={adults}
                      alt=""
                    />
                    <p className="text-gray my-5">x3</p>
                  </div>
                  <div className="border-[1px] border-solid border-slate-300 rounded-xl shadow-xl shadow-slate-200 w-14 h-14 text-center mr-4 mb-10">
                    <img className="w-8 inline-block mt-3" src={child} alt="" />
                    <p className="text-gray my-5">x1</p>
                  </div>
                </div>
              </div>
            </Col>
            <Col className="" lg={7} xs={24}>
              <div className="w-full h-full flex items-center mb-20">
                <div className="bg-primary text-white px-5 py-3 rounded-[30px] text-center font-bold w-full ">
                  Show price
                </div>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
}
