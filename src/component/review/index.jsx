import arrow_down from "../../assets/svgs/arrow_down.svg";

export default function Review() {
  return (
    <div>
      <div className="px-5 py-7 bg-filter my-5 rounded-xl">
        <div className="flex justify-between">
          <h1 className="font-bold text-lg">Review</h1>
          <img className="w-4 " src={arrow_down} alt="" />
        </div>
        <div className="pt-7">
          <p className="text-lg py-2">
            <input className="rounded-md" type="checkbox" />{" "}
            <label className="text-gray ml-3 w-full" htmlFor="">
              Excellent
            </label>
          </p>
          <p className="text-lg py-2">
            <input className="rounded-md" type="checkbox" />{" "}
            <label className="text-gray ml-3 w-full" htmlFor="">
              Very Good
            </label>
          </p>
          <p className="text-lg py-2">
            <input className="rounded-md" type="checkbox" />{" "}
            <label className="text-gray ml-3 w-full" htmlFor="">
              Average
            </label>
          </p>
          <p className="text-lg py-2">
            <input className="rounded-md" type="checkbox" />{" "}
            <label className="text-gray ml-3 w-full" htmlFor="">
              Poor
            </label>
          </p>
          <p className="text-lg py-2">
            <input className="rounded-md" type="checkbox" />{" "}
            <label className="text-gray ml-3 w-full" htmlFor="">
              Terrible
            </label>
          </p>
        </div>
      </div>
    </div>
  );
}
