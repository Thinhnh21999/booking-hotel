import MapSvg from "../../assets/svgs/map.svg";
import ArrowSvg from "../../assets/svgs/arrowRight.svg";
import SearchSvg from "../../assets/svgs/search.svg";

export default function Search() {
  return (
    <div className="w-full">
      <div className="xl:px-[80px]">
        <div className="lg:flex items-center bg-white lg:py-2 shadow-custom border border-solid border-[#dedede] z-40 rounded-[24px] lg:rounded-[70px]">
          <div className="search-item lg:border-b-0 lg:w-1/4">
            <img className="w-5 mr-4" src={MapSvg} alt=".." />
            <div className="flex flex-col">
              <span className="font-semibold">Location</span>
              <span className="text-p">Where are you going?</span>
            </div>
          </div>

          <div className="search-item lg:border-b-0 lg:w-[32%] items-center">
            <div className="flex lg:px-[30px] mr-auto">
              <img className="w-5 mr-4" src={MapSvg} alt=".." />
              <div className="flex flex-col">
                <span className="font-semibold">Checkin</span>
                <span className="text-p">Add date</span>
              </div>
            </div>

            <img className="w-3 mx-7 lg:mx-0" src={ArrowSvg} alt="" />

            <div className="flex lg:px-[30px] mr-auto">
              <img className="w-5 mr-4" src={MapSvg} alt=".." />
              <div className="flex flex-col">
                <span className="font-semibold">Checkout</span>
                <span className="text-p">Add date</span>
              </div>
            </div>
          </div>

          <div className="search-item lg:border-b-0 lg:max-w-[25%]">
            <img className="w-5 mr-4" src={MapSvg} alt=".." />
            <div className="flex flex-col">
              <span className="font-semibold">Guests</span>
              <span className="text-p">Add guests and room</span>
            </div>
          </div>

          <button className="bg-primary lg:rounded-[70px] rounded-b-[24px] w-full lg:w-0 lg:px-[70px] lg:mr-3 lg:ml-auto center h-[60px] text-white p">
            {" "}
            <img className="w-5 mr-1" src={SearchSvg} alt="" />
            <span className="text-white">Search</span>
          </button>
        </div>
      </div>
    </div>
  );
}
