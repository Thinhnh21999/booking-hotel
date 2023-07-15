import facebookimg from "../../assets/svgs/facebook.svg";
import instagramimg from "../../assets/svgs/instagram.svg";
import youtubeimg from "../../assets/svgs/youtube.svg";
import twitter from "../../assets/svgs/twitter.svg";
import { FooterAbout } from "./style";

export default function Footer() {
  return (
    <div className=" bg-[#F7F8FA]">
      <div className="pt-[100px] lg:container px-5 lg:mx-auto">
        <FooterAbout className="flex flex-wrap pb-10">
          <div className="w-full md:w-1/4">
            <h2 className="text-lg font-semibold pb-4">Support</h2>
            <p className="text-footer">Help Center</p>
            <p className="text-footer">Our COVID-19 Response</p>
            <p className="text-footer">Cancellation options</p>
            <p className="text-footer">Safety information</p>
          </div>
          <div className="w-full md:w-1/4">
            <h2 className="text-lg font-semibold pb-4">Company</h2>
            <p className="text-footer">About us</p>
            <p className="text-footer">Community Blog</p>
            <p className="text-footer">Careers</p>
            <p className="text-footer">Privacy policy</p>
            <p className="text-footer">Terms of service</p>
          </div>
          <div className="w-full md:w-1/4">
            <h2 className="text-lg font-semibold pb-4">Contact</h2>
            <p className="text-footer">Partnerships</p>
            <p className="text-footer">FAQ</p>
            <p className="text-footer">Cancellation options</p>
            <p className="text-footer">Get in touch</p>
          </div>
          <div className="w-full md:w-1/4">
            <h2 className="text-lg font-semibold pb-4">Support</h2>
            <div className="flex">
              <img className="w-12 mr-1" src={facebookimg} alt="" />
              <img className="w-12 mr-1" src={twitter} alt="" />
              <img className="w-12 mr-1" src={instagramimg} alt="" />
              <img className="w-12 " src={youtubeimg} alt="" />
            </div>
          </div>
        </FooterAbout>
        <div className="border-b-[1px] border-slate-400 border-solid"></div>
        <div className="flex justify-between py-6">
          <p className="text-[#727272] ">© Copyright Traveler 2022</p>
          <img
            src="https://modtel.travelerwp.com/wp-content/uploads/2022/06/Frame-3182.svg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
