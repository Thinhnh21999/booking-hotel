import Aside from "../../../component/aside/index";
import Container from "../../../component/container/index";
import Footer from "../../../component/footer/index";
import Header from "../../../component/header";
import Search from "antd/es/transfer/search";

import { Wrapper } from "./style";

export default function Listing() {
  return (
    <div className="overflow-hidden">
      <Header />
      <div className="bg-home_tour h-[460px] lg:h-full  bg-no-repeat bg-cover">
        <div className="py-[130px] text-center">
          <h2 className="lg:text-[64px] lg:leading-74px text-[42px] leading-[52px] mb-3.5 font-bold text-white">
            Find your next stay
          </h2>
          <p className="text-lg font-normal text-white leading-[30px]">
            Get the best prices on 2,000,000+ properties, worldwide
          </p>
        </div>
      </div>
      <div className="lg:container lg:mx-auto px-5 relative top-[-150px] lg:top-[-40px]">
        <Search />
      </div>
      <Wrapper className="px-[8%] mb-20 mt-10">
        <div className="flex justify-center">
          <Aside />
          <Container />
        </div>
      </Wrapper>
      <Footer />
    </div>
  );
}
