export default function Filter() {
  return (
    <div>
      <div className="px-5 py-7 bg-filter my-5 rounded-xl">
        
        <div className="">
          <input type="range" min="100" max="300" className="w-full" />
          <div className="flex justify-between mb-5">
            <div className="mr-7 w-1/2 p-2 bg-white border-slate-200 border-solid border-[1px] rounded-2xl">
              <h2 className="text-gray">Min price</h2>
              <p>
                $<span>100,00</span>
              </p>
            </div>
            <div className="w-1/2 p-2 bg-white border-slate-200 border-solid border-[1px] rounded-2xl">
              <h2 className="text-gray">Max price</h2>
              <p>
                $<span>300,00</span>
              </p>
            </div>
          </div>
          <hr className="text-slate-300"></hr>
          <div className="flex justify-between py-5">
            <h3 className="text-primary border-b-[1px] border-solid font-medium pt-2">Clear</h3>
            <button className="text-white bg-primary px-4 py-2 rounded-3xl">Apply</button>
          </div>
        </div>
      </div>
    </div>
  );
}
