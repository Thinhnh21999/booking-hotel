import facebookimg from "../../assets/svgs/facebook.svg";
import instagramimg from "../../assets/svgs/instagram.svg";
import youtubeimg from "../../assets/svgs/youtube.svg";
import twitter from "../../assets/svgs/twitter.svg";

export default function Header() {
  return (
    <div className="pt-[100px] bg-[#F7F8FA] w-screen ">
      <div className="flex flex-wrap pb-10">
        <div className="footer">
          <h2 className="text-lg font-semibold pb-4">Support</h2>
          <p className="text-base text-[#727272] leading-8">Help Center</p>
          <p className="text-base text-[#727272] leading-8">
            Our COVID-19 Response
          </p>
          <p className="text-base text-[#727272] leading-8">
            Cancellation options
          </p>
          <p className="text-base text-[#727272] leading-8">
            Safety information
          </p>
        </div>
        <div className="footer">
          <h2 className="text-lg font-semibold pb-4">Company</h2>
          <p className="text-base text-[#727272] leading-8">About us</p>
          <p className="text-base text-[#727272] leading-8">Community Blog</p>
          <p className="text-base text-[#727272] leading-8">Careers</p>
          <p className="text-base text-[#727272] leading-8">Privacy policy</p>
          <p className="text-base text-[#727272] leading-8">Terms of service</p>
        </div>
        <div className="footer">
          <h2 className="text-lg font-semibold pb-4">Contact</h2>
          <p className="text-base text-[#727272] leading-8">Partnerships</p>
          <p className="text-base text-[#727272] leading-8">FAQ</p>
          <p className="text-base text-[#727272] leading-8">
            Cancellation options
          </p>
          <p className="text-base text-[#727272] leading-8">Get in touch</p>
        </div>
        <div className="footer">
          <h2 className="text-lg font-semibold pb-4">Support</h2>
          <div className="flex">
            <img className="w-12 mr-1" src={facebookimg} alt="" />
            <img className="w-12 mr-1" src={twitter} alt="" />
            <img className="w-12 mr-1" src={instagramimg} alt="" />
            <img className="w-12 " src={youtubeimg} alt="" />
          </div>
        </div>
      </div>
      <div className="border-b-[1px] border-slate-400 border-solid"></div>
      <div className="flex justify-between py-6">
        <p className="text-[#727272] ">© Copyright Traveler 2022</p>
<img src="https://modtel.travelerwp.com/wp-content/uploads/2022/06/Frame-3182.svg" alt="" />
      </div>
    </div>
  );
}
