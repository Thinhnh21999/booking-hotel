import Aside from "../../../component/aside/index";
import Container from "../../../component/container/index";
import Footer from "../../../component/footer/index";
import { Wrapper } from "./style";

export default function listing() {
  return (
    <div className="overflow-hidden">
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
