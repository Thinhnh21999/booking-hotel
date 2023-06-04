export default function ReviewScore() {
  return (
    <div>
      <div className="px-5 py-7 bg-filter my-5 rounded-xl">
        <div className="">
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
