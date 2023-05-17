import star from "../../assets/svgs/star.svg";
import Header from "../../component/header/index";
import Redac_Gateway_Hotel from "../../component/hotelDetail/index";
import Footer from "../../component/footer/index";
import { Wrapper, Price } from "./style";

export default function Hotel() {
  return (
    <div className="overflow-hidden relative">
      <div>
        <Header />
        <Wrapper>
          <Redac_Gateway_Hotel />
        </Wrapper>
        <Footer />
      </div>
      <Price>
        <div className="flex justify-between w-full p-3">
          <div>
          <p className="text-gray">
            From: <span className="font-bold text-black">$136.00</span> / night
          </p>
          <div className="flex">
            <img className="w-4 " src={star} alt="" />
            <span className="font-bold mx-2">5</span>
            <p className="text-gray">(3 reviews)</p>
          </div>
        </div>

        <div className="bg-primary text-white w-[8%] font-bold text-center rounded-3xl py-2">
          Check
        </div>
        </div>
        
      </Price>
    </div>
  );
}
