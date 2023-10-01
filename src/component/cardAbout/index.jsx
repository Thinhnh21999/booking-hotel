import StarSvg from "../../assets/svgs/star.svg";

export default function CardAbout() {
  return (
    <div className="p-[48px] bg-white rounded-3xl">
      <p className="mb-[30px] text-gray text-lg">
        “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa amet
        condimentum in pretium. Montes tristique amet pellentesque ut fames
        condimentum.”{" "}
      </p>
      <div className="">
        <div className="flex">
          <img className="w-5 mr-2" src={StarSvg} alt="StarSvg" />
          <img className="w-5 mr-2" src={StarSvg} alt="StarSvg" />
          <img className="w-5 mr-2" src={StarSvg} alt="StarSvg" />
          <img className="w-5 mr-2" src={StarSvg} alt="StarSvg" />
          <img className="w-5 mr-2" src={StarSvg} alt="StarSvg" />
        </div>
        <p className="mt-3.5 text-xl">Darlene Robertson</p>
        <p className="text-gray text-lg">Customers in U.S.A</p>
      </div>
    </div>
  );
}
