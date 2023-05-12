import MapSvg from "../../assets/svgs/map.svg";
import ArrowSvg from "../../assets/svgs/arrowRight.svg";
import SearchSvg from "../../assets/svgs/search.svg";

export default function search() {
  return (
    <div className="w-full">
      <div className="px-[80px]">
        <div className="flex items-center bg-white py-2 shadow-custom border border-solid z-40 border-[#dedede] rounded-[70px]">
          <div className="px-5 w-1/4  flex">
            <img className="w-5 mr-4" src={MapSvg} alt=".." />
            <div className="flex flex-col">
              <span className="">Location</span>
              <span className="text-p">Where are you going?</span>
            </div>
          </div>
          <div className="px-5 w-[32%] flex items-center">
            <div className="flex px-[30px]">
              <img className="w-5 mr-4" src={MapSvg} alt=".." />
              <div className="flex flex-col">
                <span className="">Checkin</span>
                <span className="text-p">Add date</span>
              </div>
            </div>
            <img className="w-3" src={ArrowSvg} alt="" />
            <div className="flex px-[30px]">
              <img className="w-5 mr-4" src={MapSvg} alt=".." />
              <div className="flex flex-col">
                <span className="">Checkout</span>
                <span className="text-p">Add date</span>
              </div>
            </div>
          </div>

          <div className="flex px-5 w-[22%]">
            <img className="w-5 mr-4" src={MapSvg} alt=".." />
            <div className="flex flex-col">
              <span className="">Guests</span>
              <span className="text-p">Add guests and room</span>
            </div>
          </div>

          <button className="bg-primary rounded-[70px] px-9 mr-3 ml-auto center h-[60px] text-white p">
            {" "}
            <img className="w-5 mr-1" src={SearchSvg} alt="" />
            <span className="text-white">Search</span>
          </button>
        </div>
      </div>
    </div>
  );
}
