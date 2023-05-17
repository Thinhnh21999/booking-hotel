import React from "react";

import star from "../../assets/svgs/star.svg";
export default function Card() {
  return (
    <div>
      <div className="shadow-slate-300 shadow-md rounded-2xl mx-3 ">
        <img
          className="rounded-t-2xl cursor-pointer w-full"
          src="https://modtel.travelerwp.com/wp-content/uploads/2022/04/Bar-on-property-2-1-450x300.png"
          alt=""
        />
        <div className="mx-6 my-5">
          <div className="flex">
            <img className="w-2.5 " src={star} alt="" />
            <img className="w-2.5 mx-2" src={star} alt="" />
            <img className="w-2.5" src={star} alt="" />
          </div>
          <h1 className="font-bold text-xl py-2 cursor-pointer">Redac Gateway Hotel</h1>
          <p className="text-gray pb-5">Los Angeles</p>
          <div className="border-b-[1px] border-solid border-slate-200"></div>
          <div className="py-4">
            <div className="flex">
              <div className="text-primary font-bold border-solid border-[1px] border-primary pg-[#F9FBFF] rounded-md px-2 py-[1px]" >
                5 <span>/</span> 5
              </div>
              <span className="font-bold px-4">Excellent</span>
              <p className="text-gray">(3 Reviews)</p>
            </div>
            <div className="flex">
              <p className="text-gray py-4">
                From: <span className="font-bold text-black">$136.00</span> / night
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}