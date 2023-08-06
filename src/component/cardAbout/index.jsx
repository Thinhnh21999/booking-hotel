import { Col, Row } from "antd";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import size from "../../assets/svgs/size.svg";
import bed from "../../assets/svgs/bed.svg";
import adults from "../../assets/svgs/adults.svg";
import child from "../../assets/svgs/child.svg";

export default function About() {
  return (
    <div className="flex flex-row lg:flex-col flex-wrap mx-[-15px]">
      <div className="w-1/2 lg:w-full px-[15px]">
        <Row className="border-[1px] border-solid border-slate-300 rounded-xl mb-[30px]">
          <Col lg={7} xs={24}>
            <img
              className="w-full h-full object-cover lg:rounded-bl-xl lg:rounded-tl-xl lg:rounded-tr-none rounded-tl-xl rounded-tr-xl"
              src="https://modtel.travelerwp.com/wp-content/uploads/2022/04/Jumeirah-Emirates-Towers-800x600.png"
              alt=""
            />
          </Col>

          <Col lg={10} xs={24}>
            <div className="mx-5 my-[30px] lg:border-r-[1px] border-solid border-slate-200">
              <h3 className="text-xl font-bold mb-5 lg:mb-10">
                Standard Double Room
              </h3>
              <div className="flex flex-wrap lg:justify-between">
                <div className="border-[1px] border-solid border-slate-300 rounded-xl shadow-xl shadow-slate-200 w-14 h-14 text-center mr-4 mb-10">
                  <img className="w-8 inline-block mt-3" src={size} alt="" />
                  <p className="text-gray my-5">170 m²</p>
                </div>
                <div className="border-[1px] border-solid border-slate-300 rounded-xl shadow-xl shadow-slate-200 w-14 h-14 text-center mr-4 mb-10">
                  <img className="w-8 inline-block mt-3" src={bed} alt="" />
                  <p className="text-gray my-5">x2</p>
                </div>
                <div className="border-[1px] border-solid border-slate-300 rounded-xl shadow-xl shadow-slate-200 w-14 h-14 text-center mr-4 mb-10">
                  <img className="w-8 inline-block mt-3" src={adults} alt="" />
                  <p className="text-gray my-5">x3</p>
                </div>
                <div className="border-[1px] border-solid border-slate-300 rounded-xl shadow-xl shadow-slate-200 w-14 h-14 text-center mr-4 mb-10">
                  <img className="w-8 inline-block mt-3" src={child} alt="" />
                  <p className="text-gray my-5">x1</p>
                </div>
              </div>
            </div>
          </Col>

          <Col className="center" lg={7} xs={24}>
            <div className="flex justify-center">
              <div className="w-full box">
                <p className="text-gray py-4 hidden lg:block">
                  <span className="font-bold text-black">$136.00</span> / night
                </p>
                <div className="flex justify-center w-full ">
                  <div className="bg-primary text-white px-5 py-3 mx-5 lg:mx-0 mb-7 lg:mb-0 mt-[10px] lg:mt-[10px] rounded-[30px] text-center font-bold ">
                    <Link to="/room-detail">Room Detail</Link>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </div>

      <div className="w-1/2 lg:w-full px-[15px]">
        <Row className="border-[1px] border-solid border-slate-300 rounded-xl mb-[30px]">
          <Col lg={7} xs={24}>
            <img
              className="w-full h-full object-cover lg:rounded-bl-xl lg:rounded-tl-xl lg:rounded-tr-none rounded-tl-xl rounded-tr-xl"
              src="https://modtel.travelerwp.com/wp-content/uploads/2022/04/Jumeirah-Emirates-Towers-800x600.png"
              alt=""
            />
          </Col>

          <Col lg={10} xs={24}>
            <div className="mx-5 my-[30px] lg:border-r-[1px] border-solid border-slate-200">
              <h3 className="text-xl font-bold mb-5 lg:mb-10">
                Standard Double Room
              </h3>
              <div className="flex flex-wrap lg:justify-between">
                <div className="border-[1px] border-solid border-slate-300 rounded-xl shadow-xl shadow-slate-200 w-14 h-14 text-center mr-4 mb-10">
                  <img className="w-8 inline-block mt-3" src={size} alt="" />
                  <p className="text-gray my-5">170 m²</p>
                </div>
                <div className="border-[1px] border-solid border-slate-300 rounded-xl shadow-xl shadow-slate-200 w-14 h-14 text-center mr-4 mb-10">
                  <img className="w-8 inline-block mt-3" src={bed} alt="" />
                  <p className="text-gray my-5">x2</p>
                </div>
                <div className="border-[1px] border-solid border-slate-300 rounded-xl shadow-xl shadow-slate-200 w-14 h-14 text-center mr-4 mb-10">
                  <img className="w-8 inline-block mt-3" src={adults} alt="" />
                  <p className="text-gray my-5">x3</p>
                </div>
                <div className="border-[1px] border-solid border-slate-300 rounded-xl shadow-xl shadow-slate-200 w-14 h-14 text-center mr-4 mb-10">
                  <img className="w-8 inline-block mt-3" src={child} alt="" />
                  <p className="text-gray my-5">x1</p>
                </div>
              </div>
            </div>
          </Col>

          <Col className="center" lg={7} xs={24}>
            <div className="flex justify-center">
              <div className="w-full box">
                <p className="text-gray py-4 hidden lg:block">
                  <span className="font-bold text-black">$136.00</span> / night
                </p>
                <div className="flex justify-center w-full ">
                  <div className="bg-primary text-white px-5 py-3 mx-5 lg:mx-0 mb-7 lg:mb-0 mt-[10px] lg:mt-[10px] rounded-[30px] text-center font-bold ">
                    <Link to="/room-detail">Room Detail</Link>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </div>

      <div className="w-1/2 lg:w-full px-[15px]">
        <Row className="border-[1px] border-solid border-slate-300 rounded-xl mb-[30px]">
          <Col lg={7} xs={24}>
            <img
              className="w-full h-full object-cover lg:rounded-bl-xl lg:rounded-tl-xl lg:rounded-tr-none rounded-tl-xl rounded-tr-xl"
              src="https://modtel.travelerwp.com/wp-content/uploads/2022/04/Jumeirah-Emirates-Towers-800x600.png"
              alt=""
            />
          </Col>

          <Col lg={10} xs={24}>
            <div className="mx-5 my-[30px] lg:border-r-[1px] border-solid border-slate-200">
              <h3 className="text-xl font-bold mb-5 lg:mb-10">
                Standard Double Room
              </h3>
              <div className="flex flex-wrap lg:justify-between">
                <div className="border-[1px] border-solid border-slate-300 rounded-xl shadow-xl shadow-slate-200 w-14 h-14 text-center mr-4 mb-10">
                  <img className="w-8 inline-block mt-3" src={size} alt="" />
                  <p className="text-gray my-5">170 m²</p>
                </div>
                <div className="border-[1px] border-solid border-slate-300 rounded-xl shadow-xl shadow-slate-200 w-14 h-14 text-center mr-4 mb-10">
                  <img className="w-8 inline-block mt-3" src={bed} alt="" />
                  <p className="text-gray my-5">x2</p>
                </div>
                <div className="border-[1px] border-solid border-slate-300 rounded-xl shadow-xl shadow-slate-200 w-14 h-14 text-center mr-4 mb-10">
                  <img className="w-8 inline-block mt-3" src={adults} alt="" />
                  <p className="text-gray my-5">x3</p>
                </div>
                <div className="border-[1px] border-solid border-slate-300 rounded-xl shadow-xl shadow-slate-200 w-14 h-14 text-center mr-4 mb-10">
                  <img className="w-8 inline-block mt-3" src={child} alt="" />
                  <p className="text-gray my-5">x1</p>
                </div>
              </div>
            </div>
          </Col>

          <Col className="center" lg={7} xs={24}>
            <div className="flex justify-center">
              <div className="w-full box">
                <p className="text-gray py-4 hidden lg:block">
                  <span className="font-bold text-black">$136.00</span> / night
                </p>
                <div className="flex justify-center w-full ">
                  <div className="bg-primary text-white px-5 py-3 mx-5 lg:mx-0 mb-7 lg:mb-0 mt-[10px] lg:mt-[10px] rounded-[30px] text-center font-bold ">
                    <Link to="/room-detail">Room Detail</Link>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}
