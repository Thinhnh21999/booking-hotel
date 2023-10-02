import StarSvg from "../../assets/svgs/star.svg";

export default function NavigationBottom(props) {
  const { hotelItem, isShowNavigation, setShowIsNavigation } = props;
  return (
    <div className="fixed flex lg:hidden justify-between items-center bottom-0 left-0 right-0 z-50 w-full bg-white px-[15px] py-1 border-t border-solid border-[#dedede] ">
      <div className="flex flex-wrap justify-between">
        <p className="text-gray mr-3">
          From:
          <span className="font-bold text-black">${hotelItem?.price},00</span>/
          night
        </p>
        <div className="flex">
          <img className="w-4" src={StarSvg} alt=".." />
          <span className="font-bold mx-2">{hotelItem?.star}</span>
          <p className="text-gray">(3 reviews)</p>
        </div>
      </div>
      <button
        onClick={() => setShowIsNavigation(!isShowNavigation)}
        className="bg-primary px-4 py-3 text-white rounded-3xl"
      >
        {isShowNavigation ? "Close" : "Check"}
      </button>
    </div>
  );
}
