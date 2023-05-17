export default function Subscribe() {
  return (
    <div className="rounded-3xl flex bg-[#FCFCFC] border-[1px] border-slate-500 border-solid mb-[100px]">
      <img
        className="w-1/2 rounded-l-2xl inline-block "
        src="https://modtel.travelerwp.com/wp-content/uploads/2022/06/Rectangle-7-min.png"
        alt=""
      />
      <div className="w-1/2 px-[120px] py-[80px]">
        <h1 className="font-semibold text-4xl text-center">
          Get special offers, and more from Traveler
        </h1>
        <p className="px-[50px] mb-[30px] text-center text-gray">
          Subscribe to see secret deals prices drop the moment you sign up!
        </p>
        <div className="mail rounded-[40px] p-2 flex justify-between bg-[#FCFCFC] border-[1px] border-slate-500 border-solid">
          <input
            className="bg-[#FCFCFC] outline-none ml-4"
            type="text"
            placeholder="Email Address"
          />
          <button className="text-white text-base bg-[#3B71FE] rounded-[30px] px-[20px] py-[15px]  ">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
}
