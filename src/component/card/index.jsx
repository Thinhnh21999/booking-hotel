import { Link } from "react-router-dom/cjs/react-router-dom.min";

import React from "react";
import { Rate } from "antd";

export default function Card(props) {
  const { id, image, nameHotel, location, price, star, review } = props.item;
  return (
    <div className="">
      <div className="w-full">
        <div className="bg-white rounded-2xl shadow-custom">
          <div className="overflow-hidden rounded-t-2xl">
            <Link to={`/hotel/${id}`}>
              <img
                className="w-full rounded-t-2xl hover:scale-110 transition-all duration-300 ease-in-out transform"
                src={image}
                alt=""
              />
            </Link>
          </div>
          <div className="p-5">
            <div>
              <div>
                <Rate
                  disabled
                  defaultValue={star}
                  count={star}
                  style={{
                    color: "#FA5636",
                  }}
                />
              </div>
              <div>
                <Link to={`/hotel/${id}`}>
                  <h2 className="hover:text-primary font-bold text-lg">
                    {nameHotel}
                  </h2>
                </Link>
              </div>
              <p className="text-p">{location}</p>
            </div>
            <div className="mt-[15px] pt-[15px] border-t border-solid border-[#dedede]">
              <div className="flex items-center mb-2.5">
                <span className="text-[14px] px-1.5 py-1 bg-[#f9fbff] text-[#3B71FE] font-bold rounded-[5px] border border-solid border-[#b8ccff] mr-3 ">
                  5 <span className="text-[#3B71FE]"> / </span> 5
                </span>
                <span className="text-[14px] font-bold mr-[5px]">{review}</span>
                <span className="text-[14px] text-p">(3 Reviews)</span>
              </div>
              <div className="flex items-center">
                <span className="text-p mr-[5px]">From: </span>
                <span className="font-bold mr-[5px]">${price}.00</span>
                <span className=" text-p"> / night</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
