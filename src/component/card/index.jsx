import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom/cjs/react-router-dom";

export default function card() {
  return (
    <div className="mb-2">
      <div className="bg-white rounded-2xl shadow-custom">
        <div>
          <img
            className="w-full rounded-t-2xl"
            src="https://www.officesaigon.vn/saigon-centre-tower-2-van-phong-tron-goi-quan-1.html"
            alt="..."
          />
        </div>
        <div className="p-5">
          <div>
            <div>
              <FontAwesomeIcon className="decoration-slate-200" icon={faStar} />
              <FontAwesomeIcon className="decoration-slate-200" icon={faStar} />
            </div>
            <Link to="#">Redac Gateway Hotel</Link>
            <p className="text-p">Los Angeles</p>
          </div>
          <div className="mt-[15px] pt-[15px] border-t border-solid border-[#dedede]">
            <div className="flex items-center mb-2.5">
              <span className="text-[14px] px-1.5 py-1 bg-[#f9fbff] text-[#3B71FE] font-bold rounded-[5px] border border-solid border-[#b8ccff] mr-3 ">
                5 <span className="text-[#3B71FE]"> / </span> 5
              </span>
              <span className="text-[14px] font-bold mr-[5px]">Excellent</span>
              <span className="text-[14px] text-p">(3 Reviews)</span>
            </div>
            <div className="flex items-center">
              <span className="text-p mr-[5px]">From: </span>
              <span className="font-bold mr-[5px]">€136,00</span>
              <span className=" text-p"> / right</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
