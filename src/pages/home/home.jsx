import Header from "../../component/Header/header";
import Footer from "../../component/Footer/footer";
import Destinations from "../../component/Destinations";
import Subscribe from "../../component/Subscribe"
export default function home() {
  return (
    <div className="">
      <Header />
      <Destinations />
      <Subscribe />
      <Footer />
    </div>
  );
}
