import left from "../Svg/left-arrow.svg";
import right from "../Svg/right-arrow.svg";
export default function Destinations() {
  return (
    <div>
      <h1 className="text-4xl font-semibold text-center mb-12 ">
        Top destinations
      </h1>
      <div className="">
        <div className="flex w-full justify-around overflow-hidden">
          <div className="item text-center mr-10">
            <div className="relative w-full rounded-full p-2">
              <img
                className="img block rounded-full mb-4 hover-zoom-out"
                src="https://modtel.travelerwp.com/wp-content/uploads/2022/04/California-400x400.jpg"
                alt=""
              />
              <div className="absolute inset-y-[35%] left-[-10px] box-border w-10 h-10 justify-center flex bg-white border-[1px] rounded-full items-center z-[1] cursor-pointer text-[#232323]">
                <img className="w-5 inline-block " src={left} alt="" />
              </div>
            </div>
            <h2 className="font-bold text-lg hover-text">California</h2>
            <p className="text-[#727272] hover-text">14 Hotels</p>
          </div>
          <div className="item text-center mr-10">
            <div className="w-full rounded-full p-2">
              <img
                className="img rounded-full mb-4 hover-zoom-out"
                src="https://modtel.travelerwp.com/wp-content/uploads/2022/04/New-York-City-400x400.jpg"
                alt=""
              />
            </div>
            <h2 className="font-bold text-lg hover-text">New-York-City</h2>
            <p className="text-[#727272] hover-text">7 Hotels</p>
          </div>
          <div className="item text-center mr-10">
            <div className="w-full rounded-full p-2">
              <img
                className="img rounded-full mb-4 hover-zoom-out"
                src="https://modtel.travelerwp.com/wp-content/uploads/2022/04/New-Jersey-400x400.jpg"
                alt=""
              />
            </div>
            <h2 className="font-bold text-lg hover-text">New-Jersey</h2>
            <p className="text-[#727272] hover-text">7 Hotels</p>
          </div>
          <div className="item text-center mr-10">
            <div className="w-full rounded-full p-2">
              <img
                className="img rounded-full mb-4 hover-zoom-out"
                src="https://modtel.travelerwp.com/wp-content/uploads/2022/04/Los-Angeles-400x400.jpg"
                alt=""
              />
            </div>
            <h2 className="font-bold text-lg hover-text">Los-Angeles</h2>
            <p className="text-[#727272] hover-text">13 Hotels</p>
          </div>
          <div className="item text-center mr-10">
            <div className="w-full rounded-full p-2">
              <img
                className="img rounded-full mb-4 hover-zoom-out"
                src="https://modtel.travelerwp.com/wp-content/uploads/2022/04/San-Francisco-400x400.jpg"
                alt=""
              />
            </div>
            <h2 className="font-bold text-lg hover-text">San-Francisco</h2>
            <p className="text-[#727272] hover-text">5 Hotels</p>
          </div>
          <div className="item text-center mr-10">
            <div className="w-full rounded-full p-2">
              <img
                className="img rounded-full mb-4 hover-zoom-out"
                src="https://modtel.travelerwp.com/wp-content/uploads/2022/04/Virginia-400x400.jpg"
                alt=""
              />
            </div>
            <h2 className="font-bold text-lg hover-text">Virginia</h2>
            <p className="text-[#727272] hover-text">3 Hotels</p>
          </div>
          <div className="item text-center">
            <div className="relative w-full rounded-full p-2">
              <img
                className="img  rounded-full mb-4 hover-zoom-out"
                src="https://modtel.travelerwp.com/wp-content/uploads/2022/04/Nevada_-400x400.jpg"
                alt=""
              />
              <div className="absolute inset-y-[35%] right-[-10px] box-border w-10 h-10 justify-center flex bg-white border-[1px] rounded-full items-center z-[1] cursor-pointer text-[#232323]">
                <img className="w-5 inline-block " src={right} alt="" />
              </div>
            </div>
            <h2 className="font-bold text-lg hover-text">Nevada</h2>
            <p className="text-[#727272] hover-text">11 Hotels</p>
          </div>
        </div>
      </div>
    </div>
  );
}
