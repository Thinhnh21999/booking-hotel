import React from 'react';
import { Rate } from 'antd';

export default function HotelStar() {
  return (
    <div>
      <div className="px-5 py-7 bg-filter my-5 rounded-xl">
        <div className="">
          <p className="text-lg py-2">
            <input className="rounded-md" type="checkbox" />{" "}
            <label className="ml-3 w-full" htmlFor="">
              <Rate disabled defaultValue={5} />
            </label>
          </p>
          <p className="text-lg py-2">
            <input className="rounded-md" type="checkbox" />{" "}
            <label className="ml-3 w-full" htmlFor="">
              <Rate disabled defaultValue={4} />
            </label>
          </p>
          <p className="text-lg py-2">
            <input className="rounded-md" type="checkbox" />{" "}
            <label className="ml-3 w-full" htmlFor="">
              <Rate disabled defaultValue={3} />
            </label>
          </p>
          <p className="text-lg py-2">
            <input className="rounded-md" type="checkbox" />{" "}
            <label className="ml-3 w-full" htmlFor="">
              <Rate disabled defaultValue={2} />
            </label>
          </p>
          <p className="text-lg py-2">
            <input className="rounded-md" type="checkbox" />{" "}
            <label className="ml-3 w-full" htmlFor="">
              <Rate disabled defaultValue={1} />
            </label>
          </p>
        </div>
      </div>
    </div>
  );
}
